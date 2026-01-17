export const schedulesContent = {
  header: {
    title: "Schedule Manager",
    description: "Manage automated risk screening and system pipelines. (Timezone: SAT/UTC+2)",
  },
  tabs: {
    clients: "Client Monitoring",
    system: "System Pipelines",
  },
  clients: {
    createCard: {
      title: "Monitor Client",
      description: "Add a new client to the screening rotation.",
      labels: {
        clientName: "Client Name",
        clientNamePlaceholder: "e.g. Acme Corp",
        schedule: "Schedule",
        scheduleHelp: "Default: 6am SAT (4am UTC)",
        submitButton: "Create Schedule",
      },
    },
    tableCard: {
      title: "Active Client Schedules",
      headers: ["Client Name", "Schedule (SAT)", "Next Run", "Actions"],
      emptyState: "No client schedules found.",
      deleteButton: "Delete",
    },
  },
  system: {
    quickActions: {
      etl: {
        label: "Quick Action",
        title: "Add Data Pipeline",
        button: "Enable Daily ETL",
      },
      inference: {
        label: "Quick Action",
        title: "Add Inference Batch",
        button: "Enable Daily Inference",
      },
    },
    tableCard: {
      title: "System Job Schedules",
      description: "Automated maintenance and intelligence pipelines.",
      headers: ["Job Name", "Type", "Schedule (SAT)", "Actions"],
      emptyState: "No system jobs active.",
      deleteButton: "Delete",
    },
  },
};
