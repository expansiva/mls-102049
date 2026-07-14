/// <mls fileReference="_102049_/l1/petShop/layer_2_application/usecases/completeServiceExecution.defs.ts" enhancement="_blank"/>

export const completeServiceExecutionUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "completeServiceExecution",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "completeServiceExecution",
    "ports": [
      "ServiceBooking"
    ],
    "functions": [
      {
        "functionName": "completeServiceExecution",
        "inputTypeName": "CompleteServiceExecutionInput",
        "outputTypeName": "CompleteServiceExecutionOutput",
        "input": [
          {
            "name": "serviceBookingId",
            "type": "string",
            "required": true,
            "ofEntity": "ServiceBooking",
            "description": "Identificador do agendamento de serviço a ser concluído, selecionado pelo operador na agenda."
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
            "name": "completedAt",
            "type": "string",
            "required": true,
            "ofEntity": "ServiceBooking"
          }
        ],
        "ports": [
          "ServiceBooking"
        ],
        "rulesApplied": [
          "onlyAssignedOperatorCanComplete",
          "paymentInStoreOnly"
        ],
        "transactional": true,
        "steps": [
          "1. Resolve operatorId from ctx.sessionContext.actorId and completedAt from ctx.clock.now().",
          "2. Load ServiceBooking by serviceBookingId via ServiceBooking port (getById).",
          "3. Validate the booking exists; if not found throw a not-found error.",
          "4. Apply rule 'onlyAssignedOperatorCanComplete': compare booking.operatorId with the resolved operatorId from session. If they differ, throw a validation error with rule id 'onlyAssignedOperatorCanComplete'.",
          "5. Validate booking.status === 'inProgress'; if not, throw a validation error indicating the booking is not in a completable state.",
          "6. Apply rule 'paymentInStoreOnly': assert that no online payment/charge is triggered. This is an inline guard — the usecase must NOT call any payment or billing port. Record the rule id 'paymentInStoreOnly' in the execution trace.",
          "7. Mutate the booking: set status to 'completed' and completedAt to the resolved system datetime; set updatedAt to ctx.clock.now().",
          "8. Save the updated ServiceBooking through the ServiceBooking port inside the same transaction.",
          "9. Return { serviceBookingId, status: 'completed', completedAt }."
        ]
      }
    ],
    "mdmRefs": []
  }
} as const;

export default completeServiceExecutionUsecase;

export const pipeline = [
  {
    "id": "completeServiceExecution__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102049_/l1/petShop/layer_2_application/usecases/completeServiceExecution.ts",
    "defPath": "_102049_/l1/petShop/layer_2_application/usecases/completeServiceExecution.defs.ts",
    "dependsFiles": [
      "_102049_/l1/petShop/layer_2_application/ports/serviceBookingRepository.d.ts",
      "_102049_/l1/petShop/layer_3_domain/entities/serviceBooking.d.ts"
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
