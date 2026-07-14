/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/http/controllers/completeServiceExecution.defs.ts" enhancement="_blank"/>

export const completeServiceExecutionController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "completeServiceExecution",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "serviceBookingLifecycle",
    "controllerName": "CompleteServiceExecutionController",
    "ownerKind": "operation",
    "outputSource": "usecase",
    "handlers": [
      {
        "handlerName": "petShopCompleteServiceExecutionHandler",
        "command": "completeServiceExecution",
        "usecaseRef": "completeServiceExecution",
        "inputTypeName": "CompleteServiceExecutionInput",
        "kind": "update",
        "inputContract": [
          {
            "inputId": "serviceBookingId",
            "fieldRef": "ServiceBooking.serviceBookingId",
            "required": true,
            "source": "selectedEntity",
            "description": "Identificador do agendamento de serviço a ser concluído, selecionado pelo operador na agenda."
          },
          {
            "inputId": "operatorId",
            "fieldRef": "ServiceBooking.operatorId",
            "required": true,
            "source": "actorSession",
            "description": "Identificador do operador autenticado que está concluindo o serviço, usado para validar que ele é o operador atribuído."
          },
          {
            "inputId": "completedAt",
            "fieldRef": "ServiceBooking.completedAt",
            "required": true,
            "source": "systemDefault",
            "description": "Data e hora em que o serviço foi marcado como concluído, gerada automaticamente pelo sistema."
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
            "description": "O identificador do operador autenticado obtido da sessão ativa, usado para verificar se ele é o operador atribuído ao agendamento."
          },
          {
            "targetRef": "ServiceBooking.completedAt",
            "source": "systemDefault",
            "originRef": "systemDefault.now",
            "description": "A data e hora atual do sistema no momento da conclusão, registrada automaticamente como completedAt."
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
            "ServiceBooking.completedAt"
          ]
        }
      }
    ],
    "routes": [
      {
        "key": "petShop.serviceBookingLifecycle.completeServiceExecution",
        "handlerName": "petShopCompleteServiceExecutionHandler"
      }
    ]
  }
} as const;

export default completeServiceExecutionController;

export const pipeline = [
  {
    "id": "completeServiceExecution__httpController",
    "type": "httpController",
    "outputPath": "_102049_/l1/petShop/layer_1_external/adapters/http/controllers/completeServiceExecution.ts",
    "defPath": "_102049_/l1/petShop/layer_1_external/adapters/http/controllers/completeServiceExecution.defs.ts",
    "dependsFiles": [
      "_102049_/l1/petShop/layer_2_application/usecases/completeServiceExecution.d.ts"
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
