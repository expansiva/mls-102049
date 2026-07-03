/// <mls fileReference="_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/closeShift.defs.ts" enhancement="_blank"/>

export const closeShiftController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "closeShift",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "dailyShiftLifecycle",
    "controllerName": "CloseShiftController",
    "ownerKind": "operation",
    "outputSource": "usecase",
    "handlers": [
      {
        "handlerName": "cafeFlowCloseShiftHandler",
        "command": "closeShift",
        "usecaseRef": "closeShift",
        "inputTypeName": "CloseShiftInput",
        "kind": "update",
        "inputContract": [
          {
            "inputId": "shiftId",
            "fieldRef": "Shift.shiftId",
            "required": true,
            "source": "activeLifecycleInstance",
            "description": "Identificador único do turno ativo a ser fechado"
          }
        ],
        "contextResolution": [
          {
            "targetRef": "input.shiftId",
            "source": "activeLifecycleInstance",
            "originRef": "Shift.shiftId",
            "description": "O identificador do turno é resolvido a partir da instância ativa do ciclo de vida de turno"
          },
          {
            "targetRef": "Shift.closedAt",
            "source": "systemDefault",
            "originRef": "systemDefault.now",
            "description": "A data/hora de fechamento é definida automaticamente pelo sistema no momento da execução"
          },
          {
            "targetRef": "Shift.updatedAt",
            "source": "systemDefault",
            "originRef": "systemDefault.now",
            "description": "A data/hora da última atualização é definida automaticamente pelo sistema no momento da execução"
          }
        ],
        "accessPattern": {
          "kind": "commandInput",
          "description": "Comando para fechar o turno diário ativo, atualizando seu status para fechado, registrando a data/hora de fechamento e gerando o evento de status correspondente",
          "entity": "Shift",
          "selection": "single"
        }
      }
    ],
    "routes": [
      {
        "key": "cafeFlow.dailyShiftLifecycle.closeShift",
        "handlerName": "cafeFlowCloseShiftHandler"
      }
    ]
  }
} as const;

export default closeShiftController;

export const pipeline = [
  {
    "id": "closeShift__httpController",
    "type": "httpController",
    "outputPath": "_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/closeShift.ts",
    "defPath": "_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/closeShift.defs.ts",
    "dependsFiles": [
      "_102049_/l1/cafeFlow/layer_2_application/usecases/closeShift.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/httpController.md",
      "_102034_.d.ts"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
