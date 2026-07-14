/// <mls fileReference="_102049_/l1/petShop/layer_2_application/usecases/createServiceBooking.defs.ts" enhancement="_blank"/>

export const createServiceBookingUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "createServiceBooking",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "createServiceBooking",
    "ports": [
      "ServiceBooking",
      "Service",
      "ShiftAssignment",
      "Operator"
    ],
    "functions": [
      {
        "functionName": "createServiceBooking",
        "inputTypeName": "CreateServiceBookingInput",
        "outputTypeName": "CreateServiceBookingOutput",
        "input": [
          {
            "name": "serviceId",
            "type": "string",
            "required": true,
            "ofEntity": "Service",
            "description": "Serviço selecionado pelo cliente para agendamento."
          },
          {
            "name": "customerName",
            "type": "string",
            "required": true,
            "ofEntity": "ServiceBooking",
            "description": "Nome do cliente que realiza o agendamento."
          },
          {
            "name": "customerPhone",
            "type": "string",
            "required": true,
            "ofEntity": "ServiceBooking",
            "description": "Telefone de contato do cliente."
          },
          {
            "name": "bookingDate",
            "type": "string",
            "required": true,
            "ofEntity": "ServiceBooking",
            "description": "Data do agendamento escolhida pelo cliente, dentro do horário de funcionamento."
          },
          {
            "name": "bookingTime",
            "type": "string",
            "required": true,
            "ofEntity": "ServiceBooking",
            "description": "Horário do agendamento escolhido pelo cliente, dentro do intervalo de funcionamento."
          },
          {
            "name": "notes",
            "type": "string",
            "required": false,
            "ofEntity": "ServiceBooking",
            "description": "Observações adicionais opcionais informadas pelo cliente."
          }
        ],
        "output": [
          {
            "name": "serviceBookingId",
            "type": "string",
            "required": true,
            "ofEntity": "ServiceBooking",
            "description": "Identificador único do agendamento criado."
          },
          {
            "name": "serviceId",
            "type": "string",
            "required": true,
            "ofEntity": "ServiceBooking",
            "description": "Serviço agendado."
          },
          {
            "name": "operatorId",
            "type": "string",
            "required": true,
            "ofEntity": "ServiceBooking",
            "description": "Operador alocado ao agendamento."
          },
          {
            "name": "shiftId",
            "type": "string",
            "required": true,
            "ofEntity": "ServiceBooking",
            "description": "Turno correspondente à data e horário escolhidos."
          },
          {
            "name": "bookingDate",
            "type": "string",
            "required": true,
            "ofEntity": "ServiceBooking",
            "description": "Data do agendamento."
          },
          {
            "name": "bookingTime",
            "type": "string",
            "required": true,
            "ofEntity": "ServiceBooking",
            "description": "Horário do agendamento."
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "ServiceBooking",
            "description": "Status inicial do agendamento (confirmed)."
          },
          {
            "name": "customerName",
            "type": "string",
            "required": true,
            "ofEntity": "ServiceBooking",
            "description": "Nome do cliente."
          }
        ],
        "ports": [
          "ServiceBooking",
          "Service",
          "ShiftAssignment",
          "Operator"
        ],
        "rulesApplied": [
          "paymentInStoreOnly",
          "schedulingCapacityByOperators",
          "noBookingWithoutAvailableOperator",
          "businessHoursForScheduling"
        ],
        "transactional": true,
        "steps": [
          "1. RULE businessHoursForScheduling: Parse bookingDate to determine day-of-week (Mon=1..Sat=6, Sun=0). Reject if Sunday. Parse bookingTime as HH:mm; reject if before 09:00 or after 18:00. Throw validation error with rule id if violated.",
          "2. Load Service by serviceId via Service port (getById). If not found or status != 'active', throw validation error.",
          "3. List active Shifts from MDM via ctx.mdm.collection.listByType({ type: 'Shift' }). Filter in memory for shifts where active=true AND the day-of-week flag matches bookingDate (e.g. monday=true for Monday) AND bookingTime >= startTime AND bookingTime <= endTime. Select the first matching shift; if none, throw validation error with rule businessHoursForScheduling.",
          "4. Load ShiftAssignments for the resolved shiftId via ShiftAssignment port (list filtered by shiftId). Collect operatorIds from the assignments.",
          "5. Load Operators by the collected operatorIds via Operator port (getMany). Filter to active=true operators. If no active operators, throw validation error with rule noBookingWithoutAvailableOperator.",
          "6. Count existing ServiceBookings with shiftId = resolved shiftId AND status = 'confirmed' via ServiceBooking port (list filtered by shiftId and status).",
          "7. RULE schedulingCapacityByOperators: If confirmedBookingsCount >= activeOperatorsCount, throw validation error with rule id — no capacity available.",
          "8. RULE noBookingWithoutAvailableOperator: Select the first active operator from the assignments as the assigned operatorId. If none available, throw validation error.",
          "9. RULE paymentInStoreOnly: Do NOT create any payment or transaction record. The booking is registered without charge — payment is in-store only.",
          "10. Generate serviceBookingId via ctx.idGenerator (UUID). Set status='confirmed' (workflowState initial). Set createdAt and updatedAt to ctx.clock.now().",
          "11. Save the new ServiceBooking aggregate via ServiceBooking port (create) inside the transaction wrapper (ctx.data transaction).",
          "12. Return the created ServiceBooking projection: serviceBookingId, serviceId, operatorId, shiftId, bookingDate, bookingTime, status, customerName."
        ]
      }
    ],
    "mdmRefs": [
      "Shift"
    ]
  }
} as const;

export default createServiceBookingUsecase;

export const pipeline = [
  {
    "id": "createServiceBooking__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102049_/l1/petShop/layer_2_application/usecases/createServiceBooking.ts",
    "defPath": "_102049_/l1/petShop/layer_2_application/usecases/createServiceBooking.defs.ts",
    "dependsFiles": [
      "_102049_/l1/petShop/layer_2_application/ports/serviceBookingRepository.d.ts",
      "_102049_/l1/petShop/layer_2_application/ports/serviceRepository.d.ts",
      "_102049_/l1/petShop/layer_2_application/ports/shiftAssignmentRepository.d.ts",
      "_102049_/l1/petShop/layer_2_application/ports/operatorRepository.d.ts",
      "_102049_/l1/petShop/layer_3_domain/entities/serviceBooking.d.ts",
      "_102049_/l1/petShop/layer_3_domain/entities/service.d.ts",
      "_102049_/l1/petShop/layer_3_domain/entities/shiftAssignment.d.ts",
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
