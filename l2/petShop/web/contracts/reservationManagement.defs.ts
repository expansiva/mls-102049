/// <mls fileReference="_102049_/l2/petShop/web/contracts/reservationManagement.defs.ts" enhancement="_blank"/>

export const definition = [
  {
    "commandName": "listReservations",
    "bffName": "petShop.listReservations.listReservations",
    "routeKey": "petShop.listReservations.listReservations",
    "purpose": "Listar reservas recebidas",
    "kind": "query",
    "outputShape": "array",
    "canonicalOutputShape": {
      "kind": "list",
      "fields": [
        {
          "name": "reservationId",
          "type": "string",
          "required": true,
          "fieldRef": "Reservation.reservationId"
        },
        {
          "name": "customerId",
          "type": "string",
          "required": true,
          "fieldRef": "Reservation.customerId"
        },
        {
          "name": "status",
          "type": "string",
          "required": true,
          "fieldRef": "Reservation.status"
        },
        {
          "name": "confirmedAt",
          "type": "string",
          "required": false,
          "fieldRef": "Reservation.confirmedAt"
        },
        {
          "name": "expiresAt",
          "type": "string",
          "required": true,
          "fieldRef": "Reservation.expiresAt"
        },
        {
          "name": "readyAt",
          "type": "string",
          "required": false,
          "fieldRef": "Reservation.readyAt"
        },
        {
          "name": "deliveredAt",
          "type": "string",
          "required": false,
          "fieldRef": "Reservation.deliveredAt"
        },
        {
          "name": "createdAt",
          "type": "string",
          "required": true,
          "fieldRef": "Reservation.createdAt"
        },
        {
          "name": "updatedAt",
          "type": "string",
          "required": true,
          "fieldRef": "Reservation.updatedAt"
        },
        {
          "name": "items",
          "type": "array",
          "required": true,
          "item": {
            "fields": [
              {
                "name": "reservationItemId",
                "type": "string",
                "required": true,
                "fieldRef": "ReservationItem.reservationItemId"
              },
              {
                "name": "productId",
                "type": "string",
                "required": true,
                "fieldRef": "ReservationItem.productId"
              },
              {
                "name": "quantity",
                "type": "number",
                "required": true,
                "fieldRef": "ReservationItem.quantity"
              }
            ]
          }
        }
      ]
    },
    "input": [
      {
        "name": "status",
        "type": "string",
        "required": false,
        "enum": [
          "draft",
          "active",
          "ready",
          "delivered",
          "expired",
          "cancelled"
        ],
        "description": "Filtro opcional por status da reserva (draft, active, ready, delivered, expired, cancelled)",
        "source": "userInput",
        "presentation": "form"
      }
    ],
    "output": [
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
    ],
    "origin": {
      "source": "l4/operations",
      "ownerId": "operation:listReservations",
      "operationId": "listReservations",
      "defPath": "_102049_/l4/operations/listReservations.defs.ts",
      "bffName": "petShop.listReservations.listReservations"
    }
  },
  {
    "commandName": "updateReservationStatus",
    "bffName": "petShop.reservationLifecycle.updateReservationStatus",
    "routeKey": "petShop.reservationLifecycle.updateReservationStatus",
    "purpose": "Atualizar status da reserva",
    "kind": "command",
    "outputShape": "object",
    "canonicalOutputShape": {
      "kind": "object",
      "fields": [
        {
          "name": "reservationId",
          "type": "string",
          "required": true,
          "fieldRef": "Reservation.reservationId"
        },
        {
          "name": "status",
          "type": "string",
          "required": true,
          "fieldRef": "Reservation.status"
        },
        {
          "name": "readyAt",
          "type": "string",
          "required": false,
          "fieldRef": "Reservation.readyAt"
        },
        {
          "name": "deliveredAt",
          "type": "string",
          "required": false,
          "fieldRef": "Reservation.deliveredAt"
        },
        {
          "name": "cancelledAt",
          "type": "string",
          "required": false,
          "fieldRef": "Reservation.cancelledAt"
        },
        {
          "name": "cancelReason",
          "type": "string",
          "required": false,
          "fieldRef": "Reservation.cancelReason"
        },
        {
          "name": "paymentId",
          "type": "string",
          "required": false,
          "fieldRef": "Reservation.paymentId"
        },
        {
          "name": "updatedAt",
          "type": "string",
          "required": true,
          "fieldRef": "Reservation.updatedAt"
        }
      ]
    },
    "input": [
      {
        "name": "reservationId",
        "type": "string",
        "required": true,
        "description": "Identificador da reserva cujo status será atualizado",
        "source": "selectedEntity",
        "presentation": "selection"
      },
      {
        "name": "status",
        "type": "string",
        "required": true,
        "enum": [
          "draft",
          "active",
          "ready",
          "delivered",
          "expired",
          "cancelled"
        ],
        "description": "Novo status da reserva: ready, delivered ou cancelled",
        "source": "userInput",
        "presentation": "form"
      },
      {
        "name": "cancelReason",
        "type": "string",
        "required": false,
        "description": "Motivo do cancelamento, obrigatório apenas quando o status for cancelled",
        "source": "userInput",
        "presentation": "form"
      },
      {
        "name": "paymentId",
        "type": "string",
        "required": false,
        "description": "Referência ao pagamento presencial, informado apenas quando o status for delivered",
        "source": "userInput",
        "presentation": "form"
      }
    ],
    "output": [
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
        "name": "cancelledAt",
        "type": "string",
        "required": false
      },
      {
        "name": "cancelReason",
        "type": "string",
        "required": false
      },
      {
        "name": "paymentId",
        "type": "string",
        "required": false
      },
      {
        "name": "updatedAt",
        "type": "string",
        "required": true
      }
    ],
    "origin": {
      "source": "l4/operations",
      "ownerId": "operation:updateReservationStatus",
      "operationId": "updateReservationStatus",
      "defPath": "_102049_/l4/operations/updateReservationStatus.defs.ts",
      "bffName": "petShop.reservationLifecycle.updateReservationStatus"
    }
  },
  {
    "commandName": "payInStore",
    "bffName": "petShop.reservationLifecycle.payInStore",
    "routeKey": "petShop.reservationLifecycle.payInStore",
    "purpose": "Registrar pagamento presencial",
    "kind": "command",
    "outputShape": "object",
    "canonicalOutputShape": {
      "kind": "object",
      "fields": [
        {
          "name": "reservationId",
          "type": "string",
          "required": true,
          "fieldRef": "Reservation.reservationId"
        },
        {
          "name": "status",
          "type": "string",
          "required": true,
          "fieldRef": "Reservation.status"
        },
        {
          "name": "deliveredAt",
          "type": "string",
          "required": true,
          "fieldRef": "Reservation.deliveredAt"
        },
        {
          "name": "paymentId",
          "type": "string",
          "required": true,
          "fieldRef": "Reservation.paymentId"
        },
        {
          "name": "updatedAt",
          "type": "string",
          "required": true,
          "fieldRef": "Reservation.updatedAt"
        }
      ]
    },
    "input": [
      {
        "name": "reservationId",
        "type": "string",
        "required": true,
        "description": "Identificador da reserva selecionada para pagamento e retirada",
        "source": "selectedEntity",
        "presentation": "selection"
      },
      {
        "name": "paymentMethod",
        "type": "json",
        "required": true,
        "source": "userInput",
        "presentation": "form",
        "description": "Método de pagamento utilizado no balcão (dinheiro, cartão, pix, etc.)"
      },
      {
        "name": "paymentAmount",
        "type": "number",
        "required": true,
        "description": "Valor do pagamento realizado presencialmente",
        "source": "userInput",
        "presentation": "form"
      }
    ],
    "output": [
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
        "name": "deliveredAt",
        "type": "string",
        "required": true
      },
      {
        "name": "paymentId",
        "type": "string",
        "required": true
      },
      {
        "name": "updatedAt",
        "type": "string",
        "required": true
      }
    ],
    "origin": {
      "source": "l4/operations",
      "ownerId": "operation:payInStore",
      "operationId": "payInStore",
      "defPath": "_102049_/l4/operations/payInStore.defs.ts",
      "bffName": "petShop.reservationLifecycle.payInStore"
    }
  },
  {
    "commandName": "expireReservations",
    "bffName": "petShop.reservationLifecycle.expireReservations",
    "routeKey": "petShop.reservationLifecycle.expireReservations",
    "purpose": "Expirar reservas vencidas",
    "kind": "command",
    "outputShape": "object",
    "canonicalOutputShape": {
      "kind": "object",
      "fields": [
        {
          "name": "expiredCount",
          "type": "number",
          "required": true
        },
        {
          "name": "expiredReservations",
          "type": "array",
          "required": true,
          "item": {
            "fields": [
              {
                "name": "reservationId",
                "type": "string",
                "required": true,
                "fieldRef": "Reservation.reservationId"
              },
              {
                "name": "status",
                "type": "string",
                "required": true,
                "fieldRef": "Reservation.status"
              },
              {
                "name": "expiredAt",
                "type": "string",
                "required": true,
                "fieldRef": "Reservation.expiredAt"
              }
            ]
          }
        },
        {
          "name": "productsReleased",
          "type": "number",
          "required": true
        }
      ]
    },
    "input": [],
    "output": [
      {
        "name": "expiredCount",
        "type": "number",
        "required": true
      },
      {
        "name": "expiredReservations",
        "type": "array",
        "required": true
      },
      {
        "name": "productsReleased",
        "type": "number",
        "required": true
      }
    ],
    "origin": {
      "source": "l4/operations",
      "ownerId": "operation:expireReservations",
      "operationId": "expireReservations",
      "defPath": "_102049_/l4/operations/expireReservations.defs.ts",
      "bffName": "petShop.reservationLifecycle.expireReservations"
    }
  }
];

export const pipeline = [
  {
    "id": "reservationManagement__l2_contract",
    "type": "l2_contract",
    "outputPath": "_102049_/l2/petShop/web/contracts/reservationManagement.ts",
    "defPath": "_102049_/l2/petShop/web/contracts/reservationManagement.defs.ts",
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeContractTs.ts"
    ],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
