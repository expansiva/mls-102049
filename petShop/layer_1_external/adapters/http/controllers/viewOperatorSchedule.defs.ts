/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/http/controllers/viewOperatorSchedule.defs.ts" enhancement="_blank"/>

export const viewOperatorScheduleController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "viewOperatorSchedule",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "viewOperatorSchedule",
    "controllerName": "ViewOperatorScheduleController",
    "ownerKind": "operation",
    "outputSource": "usecase",
    "handlers": [
      {
        "handlerName": "petShopViewOperatorScheduleHandler",
        "command": "viewOperatorSchedule",
        "usecaseRef": "viewOperatorSchedule",
        "inputTypeName": "ViewOperatorScheduleInput",
        "kind": "query",
        "inputContract": [
          {
            "inputId": "operatorId",
            "fieldRef": "ServiceBooking.operatorId",
            "required": true,
            "source": "actorSession",
            "description": "Identificador do operador autenticado, usado para filtrar apenas os agendamentos a ele atribuídos."
          }
        ],
        "contextResolution": [
          {
            "targetRef": "ServiceBooking.operatorId",
            "source": "actorSession",
            "originRef": "actorSession.actorId",
            "description": "Resolvido a partir da sessão autenticada do operador, identificando o operador que está consultando sua agenda."
          }
        ],
        "accessPattern": {
          "kind": "list",
          "description": "",
          "entity": "ServiceBooking",
          "keyField": "ServiceBooking.serviceBookingId",
          "pagination": "optional",
          "selection": "single",
          "output": [
            "ServiceBooking.serviceBookingId",
            "ServiceBooking.serviceId",
            "ServiceBooking.customerName",
            "ServiceBooking.customerPhone",
            "ServiceBooking.bookingDate",
            "ServiceBooking.bookingTime",
            "ServiceBooking.status",
            "ServiceBooking.notes"
          ]
        }
      }
    ],
    "routes": [
      {
        "key": "petShop.viewOperatorSchedule.viewOperatorSchedule",
        "handlerName": "petShopViewOperatorScheduleHandler"
      }
    ]
  }
} as const;

export default viewOperatorScheduleController;

export const pipeline = [
  {
    "id": "viewOperatorSchedule__httpController",
    "type": "httpController",
    "outputPath": "_102049_/l1/petShop/layer_1_external/adapters/http/controllers/viewOperatorSchedule.ts",
    "defPath": "_102049_/l1/petShop/layer_1_external/adapters/http/controllers/viewOperatorSchedule.defs.ts",
    "dependsFiles": [
      "_102049_/l1/petShop/layer_2_application/usecases/viewOperatorSchedule.d.ts"
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
