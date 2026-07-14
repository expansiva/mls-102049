/// <mls fileReference="_102049_/l1/petShop/layer_2_application/usecases/startServiceExecution.defs.ts" enhancement="_blank"/>

export const startServiceExecutionUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "startServiceExecution",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "startServiceExecution",
    "ports": [
      "ServiceBooking",
      "Operator"
    ],
    "functions": [
      {
        "functionName": "startServiceExecution",
        "inputTypeName": "StartServiceExecutionInput",
        "outputTypeName": "StartServiceExecutionOutput",
        "input": [
          {
            "name": "serviceBookingId",
            "type": "string",
            "required": true,
            "ofEntity": "ServiceBooking",
            "description": "Identificador do agendamento de serviço selecionado pelo operador para iniciar o atendimento."
          }
        ],
        "output": [
          {
            "name": "serviceBookingId",
            "type": "string",
            "required": true,
            "ofEntity": "ServiceBooking"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "ServiceBooking"
          },
          {
            "name": "updatedAt",
            "type": "string",
            "required": true,
            "ofEntity": "ServiceBooking"
          }
        ],
        "ports": [
          "ServiceBooking",
          "Operator"
        ],
        "rulesApplied": [
          "operatorSeesOnlyAssignedShiftBookings",
          "onlyAssignedOperatorCanComplete"
        ],
        "transactional": true,
        "steps": [
          "1. Resolve operatorId from ctx.sessionContext.actorId (actorSession context — not a public input).",
          "2. Resolve updatedAt from ctx.clock.now() (systemDefault — not a public input).",
          "3. Load ServiceBooking by serviceBookingId via ServiceBooking port (getById).",
          "4. Validate booking exists; if not found, throw validation error 'ServiceBooking not found'.",
          "5. Validate booking.status === 'confirmed'; if not, throw validation error with rule detail: 'ServiceBooking must be in confirmed status to start execution; current status: {status}'.",
          "6. Apply rule onlyAssignedOperatorCanComplete: compare booking.operatorId with resolved operatorId (ctx.sessionContext.actorId). If they differ, throw authorization error 'Only the assigned operator can start this service booking'.",
          "7. Apply rule operatorSeesOnlyAssignedShiftBookings: load Operator by operatorId via Operator port (getById). Validate the operator is active. Then verify the operator is allocated to the same shift as the booking (booking.shiftId). If the operator's shift does not match booking.shiftId, throw authorization error 'Operator cannot access bookings from a different shift'.",
          "8. Transition booking.status to 'inProgress'.",
          "9. Set booking.updatedAt to the resolved system timestamp (ctx.clock.now()).",
          "10. Save the updated ServiceBooking via ServiceBooking port inside the same transaction.",
          "11. Return { serviceBookingId, status: 'inProgress', updatedAt }."
        ]
      }
    ],
    "mdmRefs": []
  }
} as const;

export default startServiceExecutionUsecase;

export const pipeline = [
  {
    "id": "startServiceExecution__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102049_/l1/petShop/layer_2_application/usecases/startServiceExecution.ts",
    "defPath": "_102049_/l1/petShop/layer_2_application/usecases/startServiceExecution.defs.ts",
    "dependsFiles": [
      "_102049_/l1/petShop/layer_2_application/ports/serviceBookingRepository.d.ts",
      "_102049_/l1/petShop/layer_2_application/ports/operatorRepository.d.ts",
      "_102049_/l1/petShop/layer_3_domain/entities/serviceBooking.d.ts",
      "_102049_/l1/petShop/layer_3_domain/entities/operator.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/applicationUsecase.md",
      "_102034_.d.ts"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
