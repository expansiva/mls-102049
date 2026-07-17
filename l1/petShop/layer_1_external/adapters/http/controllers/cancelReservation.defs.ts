/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/http/controllers/cancelReservation.defs.ts" enhancement="_blank"/>

export const cancelReservationController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "cancelReservation",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "reservationLifecycle",
    "controllerName": "CancelReservationController",
    "ownerKind": "operation",
    "outputSource": "dto",
    "dtoTypeName": "CancelReservationResponseDto",
    "dtoModulePath": "_102049_/l1/petShop/layer_1_external/adapters/http/dto/cancelReservation.js",
    "usecaseOutputTypeName": "CancelReservationOutput",
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
          "name": "cancelledAt",
          "type": "string",
          "required": true
        },
        {
          "name": "cancelReason",
          "type": "string",
          "required": false
        },
        {
          "name": "updatedAt",
          "type": "string",
          "required": true
        },
        {
          "name": "restoredProducts",
          "type": "array",
          "required": true
        }
      ]
    },
    "handlers": [
      {
        "handlerName": "petShopCancelReservationHandler",
        "command": "cancelReservation",
        "usecaseRef": "cancelReservation",
        "inputTypeName": "CancelReservationInput",
        "kind": "update",
        "inputContract": [
          {
            "inputId": "reservationId",
            "fieldRef": "Reservation.reservationId",
            "required": true,
            "source": "selectedEntity",
            "description": "Identificador da reserva selecionada para cancelamento"
          },
          {
            "inputId": "cancelReason",
            "fieldRef": "Reservation.cancelReason",
            "required": false,
            "source": "userInput",
            "description": "Motivo opcional informado pelo cliente ao cancelar a reserva"
          }
        ],
        "contextResolution": [
          {
            "inputId": "reservationId",
            "targetRef": "Reservation.reservationId",
            "source": "selectedEntity",
            "originRef": "Reservation.reservationId",
            "description": "A reserva atualmente selecionada pelo cliente na tela de detalhes da reserva"
          },
          {
            "targetRef": "Reservation.customerId",
            "source": "actorSession",
            "originRef": "actorSession.actorId",
            "description": "O ID do cliente autenticado obtido da sessão, usado para verificar que o cliente é o dono da reserva"
          },
          {
            "targetRef": "Reservation.cancelledAt",
            "source": "systemDefault",
            "originRef": "systemDefault.now",
            "description": "O timestamp atual do sistema registrado como momento do cancelamento"
          },
          {
            "targetRef": "Reservation.status",
            "source": "workflowState",
            "originRef": "Reservation.status",
            "description": "O status atual da reserva é lido para validar que apenas reservas ativas ou prontas podem ser canceladas"
          }
        ],
        "accessPattern": {
          "kind": "commandInput",
          "description": "",
          "entity": "Reservation",
          "keyField": "Reservation.reservationId",
          "filters": [
            "Reservation.status"
          ],
          "pagination": "none",
          "selection": "single",
          "output": [
            "Reservation.reservationId",
            "Reservation.status",
            "Reservation.cancelledAt",
            "Reservation.cancelReason",
            "Reservation.updatedAt"
          ]
        }
      }
    ],
    "routes": [
      {
        "key": "petShop.reservationLifecycle.cancelReservation",
        "handlerName": "petShopCancelReservationHandler"
      }
    ]
  }
} as const;

export default cancelReservationController;

export const pipeline = [
  {
    "id": "cancelReservation__httpController",
    "type": "httpController",
    "outputPath": "_102049_/l1/petShop/layer_1_external/adapters/http/controllers/cancelReservation.ts",
    "defPath": "_102049_/l1/petShop/layer_1_external/adapters/http/controllers/cancelReservation.defs.ts",
    "dependsFiles": [
      "_102049_/l1/petShop/layer_2_application/usecases/cancelReservation.d.ts",
      "_102049_/l1/petShop/layer_1_external/adapters/http/dto/cancelReservation.d.ts"
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
