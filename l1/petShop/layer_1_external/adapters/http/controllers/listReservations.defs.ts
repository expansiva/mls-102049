/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/http/controllers/listReservations.defs.ts" enhancement="_blank"/>

export const listReservationsController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "listReservations",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "listReservations",
    "controllerName": "ListReservationsController",
    "ownerKind": "operation",
    "outputSource": "dto",
    "dtoTypeName": "ListReservationsResponseDto",
    "dtoModulePath": "_102049_/l1/petShop/layer_1_external/adapters/http/dto/listReservations.js",
    "usecaseOutputTypeName": "ListReservationsOutput",
    "responseShape": {
      "kind": "object",
      "fields": [
        {
          "name": "reservationId",
          "type": "string",
          "required": true
        },
        {
          "name": "customerId",
          "type": "string",
          "required": true
        },
        {
          "name": "status",
          "type": "string",
          "required": true
        },
        {
          "name": "confirmedAt",
          "type": "string",
          "required": false
        },
        {
          "name": "expiresAt",
          "type": "string",
          "required": true
        },
        {
          "name": "readyAt",
          "type": "string",
          "required": false
        },
        {
          "name": "deliveredAt",
          "type": "string",
          "required": false
        },
        {
          "name": "createdAt",
          "type": "string",
          "required": true
        },
        {
          "name": "updatedAt",
          "type": "string",
          "required": true
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
        "handlerName": "petShopListReservationsHandler",
        "command": "listReservations",
        "usecaseRef": "listReservations",
        "inputTypeName": "ListReservationsInput",
        "kind": "query",
        "inputContract": [
          {
            "inputId": "status",
            "fieldRef": "Reservation.status",
            "required": false,
            "source": "userInput",
            "description": "Filtro opcional por status da reserva (draft, active, ready, delivered, expired, cancelled)"
          }
        ],
        "contextResolution": [
          {
            "targetRef": "actorSession.actorId",
            "source": "actorSession",
            "originRef": "actorSession.actorId",
            "description": "Identidade da loja autenticada obtida da sessão para autorizar o acesso à lista de reservas recebidas"
          }
        ],
        "accessPattern": {
          "kind": "list",
          "description": "",
          "entity": "Reservation",
          "keyField": "Reservation.reservationId",
          "pagination": "optional",
          "selection": "none",
          "output": [
            "Reservation.reservationId",
            "Reservation.customerId",
            "Reservation.status",
            "Reservation.confirmedAt",
            "Reservation.expiresAt",
            "Reservation.readyAt",
            "Reservation.deliveredAt",
            "Reservation.createdAt",
            "Reservation.updatedAt"
          ]
        }
      }
    ],
    "routes": [
      {
        "key": "petShop.listReservations.listReservations",
        "handlerName": "petShopListReservationsHandler"
      }
    ]
  }
} as const;

export default listReservationsController;

export const pipeline = [
  {
    "id": "listReservations__httpController",
    "type": "httpController",
    "outputPath": "_102049_/l1/petShop/layer_1_external/adapters/http/controllers/listReservations.ts",
    "defPath": "_102049_/l1/petShop/layer_1_external/adapters/http/controllers/listReservations.defs.ts",
    "dependsFiles": [
      "_102049_/l1/petShop/layer_2_application/usecases/listReservations.d.ts",
      "_102049_/l1/petShop/layer_1_external/adapters/http/dto/listReservations.d.ts"
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
