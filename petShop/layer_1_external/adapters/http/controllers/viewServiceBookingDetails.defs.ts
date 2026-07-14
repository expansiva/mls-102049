/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/http/controllers/viewServiceBookingDetails.defs.ts" enhancement="_blank"/>

export const viewServiceBookingDetailsController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "viewServiceBookingDetails",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "viewServiceBookingDetails",
    "controllerName": "ViewServiceBookingDetailsController",
    "ownerKind": "operation",
    "outputSource": "usecase",
    "handlers": [
      {
        "handlerName": "petShopViewServiceBookingDetailsHandler",
        "command": "viewServiceBookingDetails",
        "usecaseRef": "viewServiceBookingDetails",
        "kind": "view",
        "inputContract": [
          {
            "inputId": "serviceBookingId",
            "fieldRef": "ServiceBooking.serviceBookingId",
            "required": true,
            "source": "routeParam",
            "description": "Identificador do agendamento selecionado pelo operador na agenda de turno."
          },
          {
            "inputId": "operatorId",
            "fieldRef": "ServiceBooking.operatorId",
            "required": true,
            "source": "actorSession",
            "description": "Identificador do operador autenticado, usado para verificar que o agendamento pertence ao seu turno."
          }
        ],
        "contextResolution": [
          {
            "targetRef": "ServiceBooking.serviceBookingId",
            "source": "routeParam",
            "originRef": "routeParam.serviceBookingId",
            "description": "O ID do agendamento é extraído do parâmetro de rota da tela de detalhes selecionada pelo operador."
          },
          {
            "targetRef": "ServiceBooking.operatorId",
            "source": "actorSession",
            "originRef": "actorSession.actorId",
            "description": "O ID do operador autenticado é obtido da sessão ativa para restringir a visualização apenas a agendamentos do seu turno."
          }
        ],
        "accessPattern": {
          "kind": "getById",
          "description": "",
          "entity": "ServiceBooking",
          "keyField": "ServiceBooking.serviceBookingId",
          "pagination": "none",
          "selection": "single",
          "output": [
            "ServiceBooking.serviceBookingId",
            "ServiceBooking.serviceId",
            "ServiceBooking.operatorId",
            "ServiceBooking.shiftId",
            "ServiceBooking.customerName",
            "ServiceBooking.customerPhone",
            "ServiceBooking.bookingDate",
            "ServiceBooking.bookingTime",
            "ServiceBooking.status",
            "ServiceBooking.notes",
            "ServiceBooking.completedAt",
            "ServiceBooking.cancelledAt",
            "ServiceBooking.cancelReason",
            "ServiceBooking.createdAt",
            "ServiceBooking.updatedAt"
          ]
        }
      }
    ],
    "routes": [
      {
        "key": "petShop.viewServiceBookingDetails.viewServiceBookingDetails",
        "handlerName": "petShopViewServiceBookingDetailsHandler"
      }
    ]
  }
} as const;

export default viewServiceBookingDetailsController;

export const pipeline = [
  {
    "id": "viewServiceBookingDetails__httpController",
    "type": "httpController",
    "outputPath": "_102049_/l1/petShop/layer_1_external/adapters/http/controllers/viewServiceBookingDetails.ts",
    "defPath": "_102049_/l1/petShop/layer_1_external/adapters/http/controllers/viewServiceBookingDetails.defs.ts",
    "dependsFiles": [
      "_102049_/l1/petShop/layer_2_application/usecases/viewServiceBookingDetails.d.ts"
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
