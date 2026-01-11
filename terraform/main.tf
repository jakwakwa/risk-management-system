terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = ">= 4.34.0"
    }
  }
}

provider "google" {
  project = var.project_id
  region  = var.region
}

# 1. Network & VPC Connector
# The VPC Access Connector for outbound traffic from Cloud Run (e.g. to DBs)
resource "google_vpc_access_connector" "connector" {
  name          = "risk-engine-vpc-conn"
  region        = var.region
  ip_cidr_range = "10.8.0.0/28" # A small /28 range for the connector instances
  network       = "default"     # Or your custom VPC name
}

# 2. Cloud Run Service with Private Ingress
resource "google_cloud_run_v2_service" "risk_service" {
  name     = "risk-analysis-service"
  location = var.region
  ingress  = "INGRESS_TRAFFIC_INTERNAL_ONLY" # Only internal/VPC traffic allowed

  template {
    service_account = "risk-engine-sa@${var.project_id}.iam.gserviceaccount.com"
    
    containers {
      image = "gcr.io/${var.project_id}/risk-engine:latest"
      
      env {
        name  = "VERTEX_AI_ENDPOINT_ID"
        value = var.vertex_endpoint
      }
      
      env {
        name  = "NODE_ENV"
        value = "production"
      }

      ports {
        container_port = 8080
      }
    }

    vpc_access {
      connector = google_vpc_access_connector.connector.id
      egress    = "ALL_TRAFFIC" # Force all outbound traffic through the VPC
    }
  }
}

# 3. Invoker Permission for Temporal Worker
# This assumes the temporal worker SA is known. 
# If not managed here, this block might fail if the SA doesn't exist yet.
# resource "google_cloud_run_v2_service_iam_member" "worker_invoker" {
#   location = google_cloud_run_v2_service.risk_service.location
#   name     = google_cloud_run_v2_service.risk_service.name
#   role     = "roles/run.invoker"
#   member   = "serviceAccount:temporal-worker-sa@${var.project_id}.iam.gserviceaccount.com"
# }
