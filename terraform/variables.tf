variable "project_id" {
  description = "The Google Cloud Project ID"
  type        = string
}

variable "region" {
  description = "The Google Cloud region to deploy resources"
  type        = string
  default     = "europe-west1"
}

variable "vertex_endpoint" {
  description = "The Vertex AI Endpoint ID"
  type        = string
}
