/// <mls fileReference="_102049_/l2/petShop/web/contracts/myReservations.defs.ts" enhancement="_blank"/>

export const definition = [
  {
    "commandName": "createReservation",
    "bffName": "petShop.reservationLifecycle.createReservation",
    "routeKey": "petShop.reservationLifecycle.createReservation",
    "purpose": "Criar reserva",
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
          "required": true,
          "fieldRef": "Reservation.confirmedAt"
        },
        {
          "name": "expiresAt",
          "type": "string",
          "required": true,
          "fieldRef": "Reservation.expiresAt"
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
        "name": "items",
        "type": "string",
        "required": true,
        "description": "Lista de produtos e quantidades que o cliente deseja reservar para retirada na loja",
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
      "ownerId": "operation:createReservation",
      "operationId": "createReservation",
      "defPath": "_102049_/l4/operations/createReservation.defs.ts",
      "bffName": "petShop.reservationLifecycle.createReservation"
    }
  },
  {
    "commandName": "cancelReservation",
    "bffName": "petShop.reservationLifecycle.cancelReservation",
    "routeKey": "petShop.reservationLifecycle.cancelReservation",
    "purpose": "Cancelar reserva",
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
          "name": "cancelledAt",
          "type": "string",
          "required": true,
          "fieldRef": "Reservation.cancelledAt"
        },
        {
          "name": "cancelReason",
          "type": "string",
          "required": false,
          "fieldRef": "Reservation.cancelReason"
        },
        {
          "name": "updatedAt",
          "type": "string",
          "required": true,
          "fieldRef": "Reservation.updatedAt"
        },
        {
          "name": "restoredProducts",
          "type": "array",
          "required": true,
          "item": {
            "fields": [
              {
                "name": "productId",
                "type": "string",
                "required": true,
                "fieldRef": "Product.productId"
              },
              {
                "name": "available",
                "type": "boolean",
                "required": true,
                "fieldRef": "Product.available"
              }
            ]
          }
        }
      ]
    },
    "input": [
      {
        "name": "reservationId",
        "type": "string",
        "required": true,
        "description": "Identificador da reserva selecionada para cancelamento",
        "source": "selectedEntity",
        "presentation": "selection"
      },
      {
        "name": "cancelReason",
        "type": "string",
        "required": false,
        "description": "Motivo opcional informado pelo cliente ao cancelar a reserva",
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
    ],
    "origin": {
      "source": "l4/operations",
      "ownerId": "operation:cancelReservation",
      "operationId": "cancelReservation",
      "defPath": "_102049_/l4/operations/cancelReservation.defs.ts",
      "bffName": "petShop.reservationLifecycle.cancelReservation"
    }
  },
  {
    "commandName": "viewMyReservations",
    "bffName": "petShop.viewMyReservations.viewMyReservations",
    "routeKey": "petShop.viewMyReservations.viewMyReservations",
    "purpose": "Visualizar minhas reservas",
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
          "name": "status",
          "type": "string",
          "required": true,
          "fieldRef": "Reservation.status"
        },
        {
          "name": "expiresAt",
          "type": "string",
          "required": true,
          "fieldRef": "Reservation.expiresAt"
        },
        {
          "name": "createdAt",
          "type": "string",
          "required": true,
          "fieldRef": "Reservation.createdAt"
        },
        {
          "name": "confirmedAt",
          "type": "string",
          "required": false,
          "fieldRef": "Reservation.confirmedAt"
        },
        {
          "name": "readyAt",
          "type": "string",
          "required": false,
          "fieldRef": "Reservation.readyAt"
        },
        {
          "name": "items",
          "type": "array",
          "required": true,
          "item": {
            "fields": [
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
    "input": [],
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
    ],
    "origin": {
      "source": "l4/operations",
      "ownerId": "operation:viewMyReservations",
      "operationId": "viewMyReservations",
      "defPath": "_102049_/l4/operations/viewMyReservations.defs.ts",
      "bffName": "petShop.viewMyReservations.viewMyReservations"
    }
  }
];

export const pipeline = [
  {
    "id": "myReservations__l2_contract",
    "type": "l2_contract",
    "outputPath": "_102049_/l2/petShop/web/contracts/myReservations.ts",
    "defPath": "_102049_/l2/petShop/web/contracts/myReservations.defs.ts",
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeContractTs.ts"
    ],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
