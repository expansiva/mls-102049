/// <mls fileReference="_102049_/l1/cafeFlow/layer_2_application/usecases/closeShift.defs.ts" enhancement="_blank"/>

export const closeShiftUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "closeShift",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "closeShift",
    "ports": [
      "Shift",
      "Order",
      "OrderStatusEvent",
      "ShiftStatusEvent"
    ],
    "functions": [
      {
        "functionName": "closeShift",
        "inputTypeName": "CloseShiftInput",
        "outputTypeName": "CloseShiftOutput",
        "input": [
          {
            "name": "shiftId",
            "type": "string",
            "required": true,
            "ofEntity": "Shift",
            "description": "Identificador único do turno ativo a ser fechado, resolvido a partir da instância ativa do ciclo de vida"
          }
        ],
        "output": [
          {
            "name": "shiftId",
            "type": "string",
            "required": true,
            "ofEntity": "Shift",
            "description": "Identificador do turno fechado"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "Shift",
            "description": "Status final do turno (closed)"
          },
          {
            "name": "closedAt",
            "type": "string",
            "required": true,
            "ofEntity": "Shift",
            "description": "Data e hora de fechamento atribuída pelo sistema"
          }
        ],
        "ports": [
          "Shift",
          "Order",
          "ShiftStatusEvent"
        ],
        "rulesApplied": [
          "orderRequiresOpenShift",
          "shiftClosingRequiresSettledOrders"
        ],
        "transactional": true,
        "steps": [
          "1. Carregar o Shift pelo shiftId informado através da porta Shift (getById)",
          "2. Validar que o turno existe e seu status atual é 'open' (regra orderRequiresOpenShift — apenas turnos abertos podem ser fechados)",
          "3. Consultar todos os Orders associados ao shiftId através da porta Order (list por shiftId)",
          "4. Validar que todos os pedidos do turno estão finalizados (status 'delivered' ou 'cancelled') — regra shiftClosingRequiresSettledOrders; se houver pedidos pendentes/inKitchen/preparing/ready, rejeitar o fechamento",
          "5. Calcular o consolidatedTotal somando o total de todos os pedidos do turno",
          "6. Atualizar o Shift: status = 'closed', closedAt = ctx.clock.now(), updatedAt = ctx.clock.now()",
          "7. Salvar o Shift atualizado através da porta Shift (update) dentro da transação",
          "8. Criar o ShiftStatusEvent: shiftStatusEventId = ctx.idGenerator.generate(), shiftId, eventType = 'fechamento', consolidatedTotal, recordedAt = ctx.clock.now(), createdAt = ctx.clock.now(), updatedAt = ctx.clock.now()",
          "9. Anexar o ShiftStatusEvent através da porta ShiftStatusEvent (create) dentro da mesma transação",
          "10. Retornar shiftId, status e closedAt do turno fechado"
        ]
      }
    ],
    "mdmRefs": []
  }
} as const;

export default closeShiftUsecase;

export const pipeline = [
  {
    "id": "closeShift__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102049_/l1/cafeFlow/layer_2_application/usecases/closeShift.ts",
    "defPath": "_102049_/l1/cafeFlow/layer_2_application/usecases/closeShift.defs.ts",
    "dependsFiles": [
      "_102049_/l1/cafeFlow/layer_2_application/ports/shiftRepository.d.ts",
      "_102049_/l1/cafeFlow/layer_2_application/ports/orderRepository.d.ts",
      "_102049_/l1/cafeFlow/layer_2_application/ports/orderStatusEventRepository.d.ts",
      "_102049_/l1/cafeFlow/layer_2_application/ports/shiftStatusEventRepository.d.ts",
      "_102049_/l1/cafeFlow/layer_3_domain/entities/shift.d.ts",
      "_102049_/l1/cafeFlow/layer_3_domain/entities/order.d.ts",
      "_102049_/l1/cafeFlow/layer_3_domain/entities/orderStatusEvent.d.ts",
      "_102049_/l1/cafeFlow/layer_3_domain/entities/shiftStatusEvent.d.ts"
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
