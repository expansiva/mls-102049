/// <mls fileReference="_102049_/l5/petShop/process.defs.ts" enhancement="_blank"/>

export const petShopProcess = {
  "schemaVersion": "2026-06-25",
  "moduleName": "petShop",
  "runs": [
    {
      "runId": "ns-1784416938669",
      "kind": "newSolution-behavior",
      "startedAt": "2026-07-18T23:22:18.668Z",
      "finishedAt": "2026-07-18T23:22:18.669Z",
      "sourceRefs": {
        "module": "l4/petShop/module.defs.ts",
        "health": "l4/petShop/trace/behavior-health-report.json",
        "journeys": "l4/petShop/navigation.defs.ts",
        "todoFrontend": "l5/petShop/todoFrontend.defs.ts",
        "todoBackend": "l5/petShop/todoBackend.defs.ts"
      },
      "handoffNotes": [
        "capability.multiowned: capability 'reservationLifecycle' is owned by 2 workspaces (myReservations, reservationPanel)",
        "capability.multiowned: capability 'browseCatalog' is owned by 2 workspaces (catalog, home)"
      ],
      "nextSteps": [
        {
          "id": "stage2-experience",
          "kind": "workflowExperience",
          "title": "Generate frontend experience (@@changeFrontend)",
          "description": "Materialize l2 pages from the l4 behavior model.",
          "status": "pending"
        },
        {
          "id": "stage3-backend",
          "kind": "backendImplementation",
          "title": "Generate backend (@@changeBackend)",
          "description": "Materialize l1 hexagonal backend from the l4 behavior model.",
          "status": "pending"
        }
      ]
    }
  ]
} as const;

export default petShopProcess;
