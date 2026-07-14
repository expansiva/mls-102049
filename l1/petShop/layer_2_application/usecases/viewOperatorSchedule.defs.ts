/// <mls fileReference="_102049_/l1/petShop/layer_2_application/usecases/viewOperatorSchedule.defs.ts" enhancement="_blank"/>

export const viewOperatorScheduleUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "viewOperatorSchedule",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "viewOperatorSchedule",
    "ports": [
      "ServiceBooking",
      "Service"
    ],
    "functions": [
      {
        "functionName": "viewOperatorSchedule",
        "inputTypeName": "ViewOperatorScheduleInput",
        "outputTypeName": "ViewOperatorScheduleOutput",
        "input": [],
        "output": [
          {
            "name": "serviceBookingId",
            "type": "string",
            "required": true,
            "ofEntity": "ServiceBooking",
            "description": "Identificador único do agendamento"
          },
          {
            "name": "serviceId",
            "type": "string",
            "required": true,
            "ofEntity": "ServiceBooking",
            "description": "Identificador do serviço agendado"
          },
          {
            "name": "customerName",
            "type": "string",
            "required": true,
            "ofEntity": "ServiceBooking",
            "description": "Nome do cliente"
          },
          {
            "name": "customerPhone",
            "type": "string",
            "required": true,
            "ofEntity": "ServiceBooking",
            "description": "Telefone do cliente"
          },
          {
            "name": "bookingDate",
            "type": "string",
            "required": true,
            "ofEntity": "ServiceBooking",
            "description": "Data do agendamento"
          },
          {
            "name": "bookingTime",
            "type": "string",
            "required": true,
            "ofEntity": "ServiceBooking",
            "description": "Horário do agendamento"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "ServiceBooking",
            "description": "Status do agendamento"
          },
          {
            "name": "notes",
            "type": "string",
            "required": false,
            "ofEntity": "ServiceBooking",
            "description": "Observações do agendamento"
          }
        ],
        "ports": [
          "ServiceBooking",
          "Service"
        ],
        "rulesApplied": [
          "operatorSeesOnlyAssignedShiftBookings",
          "operatorScheduleShowsConfirmedOnly"
        ],
        "transactional": false,
        "steps": [
          "1. Resolver operatorId a partir de ctx.sessionContext.actorId (actorSession) — não é input público",
          "2. Carregar todos os ServiceBooking via ServiceBooking port filtrando por operatorId = operatorId resolvido da sessão (regra operatorSeesOnlyAssignedShiftBookings)",
          "3. Filtrar apenas agendamentos com status === 'confirmed' (regra operatorScheduleShowsConfirmedOnly)",
          "4. Ordenar resultado por bookingDate asc e bookingTime asc",
          "5. Projetar campos: serviceBookingId, serviceId, customerName, customerPhone, bookingDate, bookingTime, status, notes",
          "6. Retornar a lista projetada"
        ]
      }
    ],
    "mdmRefs": []
  }
} as const;

export default viewOperatorScheduleUsecase;

export const pipeline = [
  {
    "id": "viewOperatorSchedule__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102049_/l1/petShop/layer_2_application/usecases/viewOperatorSchedule.ts",
    "defPath": "_102049_/l1/petShop/layer_2_application/usecases/viewOperatorSchedule.defs.ts",
    "dependsFiles": [
      "_102049_/l1/petShop/layer_2_application/ports/serviceBookingRepository.d.ts",
      "_102049_/l1/petShop/layer_2_application/ports/serviceRepository.d.ts",
      "_102049_/l1/petShop/layer_3_domain/entities/serviceBooking.d.ts",
      "_102049_/l1/petShop/layer_3_domain/entities/service.d.ts"
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
