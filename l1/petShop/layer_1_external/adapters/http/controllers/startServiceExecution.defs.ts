/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/http/controllers/startServiceExecution.defs.ts" enhancement="_blank"/>

export const startServiceExecutionController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "startServiceExecution",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "serviceBookingLifecycle",
    "controllerName": "StartServiceExecutionController",
    "ownerKind": "operation",
    "outputSource": "usecase",
    "handlers": [
      {
        "handlerName": "petShopStartServiceExecutionHandler",
        "command": "startServiceExecution",
        "usecaseRef": "startServiceExecution",
        "inputTypeName": "StartServiceExecutionInput",
        "kind": "update",
        "inputContract": [
          {
            "inputId": "serviceBookingId",
            "fieldRef": "ServiceBooking.serviceBookingId",
            "required": true,
            "source": "selectedEntity",
            "description": "Identificador do agendamento de serviço selecionado pelo operador para iniciar o atendimento."
          },
          {
            "inputId": "operatorId",
            "fieldRef": "ServiceBooking.operatorId",
            "required": true,
            "source": "actorSession",
            "description": "Identificador do operador autenticado que está iniciando o atendimento, usado para validar que ele é o operador atribuído ao agendamento."
          },
          {
            "inputId": "updatedAt",
            "fieldRef": "ServiceBooking.updatedAt",
            "required": true,
            "source": "systemDefault",
            "description": "Data e hora da atualização do agendamento, registrada automaticamente pelo sistema no momento da transição de status."
          }
        ],
        "contextResolution": [
          {
            "targetRef": "ServiceBooking.serviceBookingId",
            "source": "selectedEntity",
            "originRef": "ServiceBooking.serviceBookingId",
            "description": "O agendamento atualmente selecionado pelo operador na tela de agenda, identificado pelo seu serviceBookingId."
          },
          {
            "targetRef": "ServiceBooking.operatorId",
            "source": "actorSession",
            "originRef": "actorSession.actorId",
            "description": "O identificador do operador autenticado na sessão atual, usado para verificar se ele é o operador atribuído ao agendamento antes de permitir a transição."
          },
          {
            "targetRef": "ServiceBooking.updatedAt",
            "source": "systemDefault",
            "originRef": "systemDefault.now",
            "description": "O timestamp atual do sistema, gravado automaticamente como updatedAt no momento em que o status é alterado para inProgress."
          }
        ],
        "accessPattern": {
          "kind": "commandInput",
          "description": "",
          "entity": "ServiceBooking",
          "keyField": "ServiceBooking.serviceBookingId",
          "pagination": "none",
          "selection": "single",
          "output": [
            "ServiceBooking.serviceBookingId",
            "ServiceBooking.status",
            "ServiceBooking.updatedAt"
          ]
        }
      }
    ],
    "routes": [
      {
        "key": "petShop.serviceBookingLifecycle.startServiceExecution",
        "handlerName": "petShopStartServiceExecutionHandler"
      }
    ]
  }
} as const;

export default startServiceExecutionController;

export const pipeline = [
  {
    "id": "startServiceExecution__httpController",
    "type": "httpController",
    "outputPath": "_102049_/l1/petShop/layer_1_external/adapters/http/controllers/startServiceExecution.ts",
    "defPath": "_102049_/l1/petShop/layer_1_external/adapters/http/controllers/startServiceExecution.defs.ts",
    "dependsFiles": [
      "_102049_/l1/petShop/layer_2_application/usecases/startServiceExecution.d.ts"
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
