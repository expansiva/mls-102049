/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/http/controllers/viewMyReservations.defs.ts" enhancement="_blank"/>

export const viewMyReservationsController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "viewMyReservations",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "viewMyReservations",
    "controllerName": "ViewMyReservationsController",
    "ownerKind": "operation",
    "outputSource": "dto",
    "dtoTypeName": "ViewMyReservationsResponseDto",
    "dtoModulePath": "_102049_/l1/petShop/layer_1_external/adapters/http/dto/viewMyReservations.js",
    "usecaseOutputTypeName": "ViewMyReservationsOutput",
    "responseShape": {
      "kind": "object",
      "fields": [
        {
          "name": "reservationId",
          "type": "string",
          "required": true
        },
        {
          "name": "status",
          "type": "string",
          "required": true
        },
        {
          "name": "expiresAt",
          "type": "string",
          "required": true
        },
        {
          "name": "createdAt",
          "type": "string",
          "required": true
        },
        {
          "name": "confirmedAt",
          "type": "string",
          "required": false
        },
        {
          "name": "readyAt",
          "type": "string",
          "required": false
        },
        {
          "name": "items",
          "type": "array",
          "required": true
        }
      ]
    },
    "handlers": [
      {
        "handlerName": "petShopViewMyReservationsHandler",
        "command": "viewMyReservations",
        "usecaseRef": "viewMyReservations",
        "inputTypeName": "ViewMyReservationsInput",
        "kind": "query",
        "inputContract": [
          {
            "inputId": "customerId",
            "fieldRef": "Reservation.customerId",
            "required": true,
            "source": "actorSession",
            "description": "Identificador do cliente autenticado obtido da sessão para filtrar apenas suas reservas"
          }
        ],
        "contextResolution": [
          {
            "targetRef": "Reservation.customerId",
            "source": "actorSession",
            "originRef": "actorSession.actorId",
            "description": "O customerId é resolvido a partir do identificador do ator autenticado na sessão, garantindo que o cliente só veja suas próprias reservas"
          }
        ],
        "accessPattern": {
          "kind": "list",
          "description": "",
          "entity": "Reservation",
          "keyField": "Reservation.reservationId",
          "filters": [
            "Reservation.customerId"
          ],
          "sort": [
            "Reservation.createdAt"
          ],
          "pagination": "optional",
          "selection": "none",
          "output": [
            "Reservation.reservationId",
            "Reservation.status",
            "Reservation.expiresAt",
            "Reservation.createdAt",
            "Reservation.confirmedAt",
            "Reservation.readyAt",
            "ReservationItem.productId",
            "ReservationItem.quantity"
          ]
        }
      }
    ],
    "routes": [
      {
        "key": "petShop.viewMyReservations.viewMyReservations",
        "handlerName": "petShopViewMyReservationsHandler"
      }
    ]
  }
} as const;

export default viewMyReservationsController;

export const pipeline = [
  {
    "id": "viewMyReservations__httpController",
    "type": "httpController",
    "outputPath": "_102049_/l1/petShop/layer_1_external/adapters/http/controllers/viewMyReservations.ts",
    "defPath": "_102049_/l1/petShop/layer_1_external/adapters/http/controllers/viewMyReservations.defs.ts",
    "dependsFiles": [
      "_102049_/l1/petShop/layer_2_application/usecases/viewMyReservations.d.ts",
      "_102049_/l1/petShop/layer_1_external/adapters/http/dto/viewMyReservations.d.ts"
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
