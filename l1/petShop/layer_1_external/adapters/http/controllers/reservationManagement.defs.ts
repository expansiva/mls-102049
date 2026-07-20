/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/http/controllers/reservationManagement.defs.ts" enhancement="_blank"/>

export const reservationManagementController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "reservationManagement",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "reservationManagement",
    "controllerName": "ReservationManagementController",
    "ownerKind": "workspace",
    "workspaceId": "reservationManagement",
    "actors": [
      "atendente"
    ],
    "allowedScopes": [
      "petShop:atendente"
    ],
    "handlers": [
      {
        "handlerName": "reservationManagementBrowseReservationsQueryHandler",
        "command": "browseReservationsQuery",
        "bffId": "browseReservationsQuery",
        "route": "petShop.reservationManagement.browseReservationsQuery",
        "kind": "query",
        "usecaseRef": "browseReservations",
        "usecaseRefs": [
          "browseReservations"
        ],
        "inputTypeName": "BrowseReservationsInput",
        "inputContract": [
          {
            "inputId": "searchTerm",
            "fieldRef": "",
            "type": "string",
            "required": false,
            "source": "userInput",
            "description": "Termo de busca para localizar reserva por nome do cliente, telefone ou número da reserva"
          },
          {
            "inputId": "statusFilter",
            "fieldRef": "Reservation.status",
            "required": false,
            "source": "userInput",
            "description": "Filtro de status da reserva (pendente, confirmada, atendida ou cancelada)"
          },
          {
            "inputId": "page",
            "fieldRef": "",
            "type": "number",
            "required": false,
            "source": "userInput",
            "description": "Número da página para paginação dos resultados"
          },
          {
            "inputId": "pageSize",
            "fieldRef": "",
            "type": "number",
            "required": false,
            "source": "userInput",
            "description": "Quantidade de reservas por página"
          }
        ],
        "projection": {
          "kind": "list",
          "arrayFieldName": null,
          "itemFields": [
            {
              "name": "reservationId",
              "operationId": "browseReservations",
              "path": [
                "reservationId"
              ],
              "fromItems": true
            },
            {
              "name": "customerName",
              "operationId": "browseReservations",
              "path": [
                "customerName"
              ],
              "fromItems": true
            },
            {
              "name": "customerPhone",
              "operationId": "browseReservations",
              "path": [
                "customerPhone"
              ],
              "fromItems": true
            },
            {
              "name": "status",
              "operationId": "browseReservations",
              "path": [
                "status"
              ],
              "fromItems": true
            },
            {
              "name": "expiresAt",
              "operationId": "browseReservations",
              "path": [
                "expiresAt"
              ],
              "fromItems": true
            },
            {
              "name": "createdAt",
              "operationId": "browseReservations",
              "path": [
                "createdAt"
              ],
              "fromItems": true
            },
            {
              "name": "updatedAt",
              "operationId": "browseReservations",
              "path": [
                "updatedAt"
              ],
              "fromItems": true
            }
          ],
          "topFields": []
        },
        "optionalUses": []
      },
      {
        "handlerName": "reservationManagementUpdateReservationStatusCommandHandler",
        "command": "updateReservationStatusCommand",
        "bffId": "updateReservationStatusCommand",
        "route": "petShop.reservationManagement.updateReservationStatusCommand",
        "kind": "command",
        "usecaseRef": "updateReservationStatus",
        "usecaseRefs": [
          "updateReservationStatus"
        ],
        "inputTypeName": "UpdateReservationStatusInput",
        "inputContract": [
          {
            "inputId": "reservationId",
            "fieldRef": "Reservation.reservationId",
            "required": true,
            "source": "routeParam",
            "description": "Identificador da reserva a ser atualizada"
          },
          {
            "inputId": "newStatus",
            "fieldRef": "Reservation.status",
            "required": true,
            "source": "userInput",
            "description": "Novo status da reserva: confirmed, fulfilled ou cancelled"
          },
          {
            "inputId": "cancellationReason",
            "fieldRef": "Reservation.cancellationReason",
            "required": false,
            "source": "userInput",
            "description": "Motivo do cancelamento, obrigatório apenas quando o novo status for cancelled"
          },
          {
            "inputId": "paymentId",
            "fieldRef": "Reservation.paymentId",
            "required": false,
            "source": "userInput",
            "description": "Referência ao pagamento presencial associado, obrigatório apenas quando o novo status for fulfilled"
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "reservationId",
              "operationId": "updateReservationStatus",
              "path": [
                "reservationId"
              ],
              "fromItems": false
            },
            {
              "name": "customerName",
              "operationId": "updateReservationStatus",
              "path": [
                "customerName"
              ],
              "fromItems": false
            },
            {
              "name": "customerPhone",
              "operationId": "updateReservationStatus",
              "path": [
                "customerPhone"
              ],
              "fromItems": false
            },
            {
              "name": "status",
              "operationId": "updateReservationStatus",
              "path": [
                "status"
              ],
              "fromItems": false
            },
            {
              "name": "expiresAt",
              "operationId": "updateReservationStatus",
              "path": [
                "expiresAt"
              ],
              "fromItems": false
            },
            {
              "name": "confirmedAt",
              "operationId": "updateReservationStatus",
              "path": [
                "confirmedAt"
              ],
              "fromItems": false
            },
            {
              "name": "fulfilledAt",
              "operationId": "updateReservationStatus",
              "path": [
                "fulfilledAt"
              ],
              "fromItems": false
            },
            {
              "name": "cancelledAt",
              "operationId": "updateReservationStatus",
              "path": [
                "cancelledAt"
              ],
              "fromItems": false
            },
            {
              "name": "cancellationReason",
              "operationId": "updateReservationStatus",
              "path": [
                "cancellationReason"
              ],
              "fromItems": false
            },
            {
              "name": "paymentId",
              "operationId": "updateReservationStatus",
              "path": [
                "paymentId"
              ],
              "fromItems": false
            },
            {
              "name": "updatedAt",
              "operationId": "updateReservationStatus",
              "path": [
                "updatedAt"
              ],
              "fromItems": false
            }
          ]
        },
        "optionalUses": []
      },
      {
        "handlerName": "reservationManagementProcessPaymentCommandHandler",
        "command": "processPaymentCommand",
        "bffId": "processPaymentCommand",
        "route": "petShop.reservationManagement.processPaymentCommand",
        "kind": "command",
        "usecaseRef": "processPayment",
        "usecaseRefs": [
          "processPayment"
        ],
        "inputTypeName": "ProcessPaymentInput",
        "inputContract": [
          {
            "inputId": "reservationId",
            "fieldRef": "Payment.reservationId",
            "required": true,
            "source": "selectedEntity",
            "description": "Reserva atualmente selecionada pelo atendente na tela de retirada, associada a este pagamento presencial"
          },
          {
            "inputId": "method",
            "fieldRef": "Payment.method",
            "required": true,
            "source": "userInput",
            "description": "Método de pagamento escolhido pelo cliente na loja: dinheiro, cartão de crédito, cartão de débito ou pix"
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "paymentId",
              "operationId": "processPayment",
              "path": [
                "paymentId"
              ],
              "fromItems": false
            },
            {
              "name": "reservationId",
              "operationId": "processPayment",
              "path": [
                "reservationId"
              ],
              "fromItems": false
            },
            {
              "name": "amount",
              "operationId": "processPayment",
              "path": [
                "amount"
              ],
              "fromItems": false
            },
            {
              "name": "method",
              "operationId": "processPayment",
              "path": [
                "method"
              ],
              "fromItems": false
            },
            {
              "name": "status",
              "operationId": "processPayment",
              "path": [
                "status"
              ],
              "fromItems": false
            },
            {
              "name": "receivedBy",
              "operationId": "processPayment",
              "path": [
                "receivedBy"
              ],
              "fromItems": false
            },
            {
              "name": "createdAt",
              "operationId": "processPayment",
              "path": [
                "createdAt"
              ],
              "fromItems": false
            },
            {
              "name": "reservationStatus",
              "operationId": "processPayment",
              "path": [
                "reservationStatus"
              ],
              "fromItems": false
            }
          ]
        },
        "optionalUses": []
      }
    ],
    "routes": [
      {
        "key": "petShop.reservationManagement.browseReservationsQuery",
        "handlerName": "reservationManagementBrowseReservationsQueryHandler"
      },
      {
        "key": "petShop.reservationManagement.updateReservationStatusCommand",
        "handlerName": "reservationManagementUpdateReservationStatusCommandHandler"
      },
      {
        "key": "petShop.reservationManagement.processPaymentCommand",
        "handlerName": "reservationManagementProcessPaymentCommandHandler"
      }
    ]
  }
} as const;

export default reservationManagementController;

export const pipeline = [
  {
    "id": "reservationManagement__httpController",
    "type": "httpController",
    "outputPath": "_102049_/l1/petShop/layer_1_external/adapters/http/controllers/reservationManagement.ts",
    "defPath": "_102049_/l1/petShop/layer_1_external/adapters/http/controllers/reservationManagement.defs.ts",
    "dependsFiles": [
      "_102049_/l1/petShop/layer_2_application/usecases/browseReservations.d.ts",
      "_102049_/l4/petShop/contracts/reservationManagement.browseReservationsQuery.defs.ts",
      "_102049_/l1/petShop/layer_2_application/usecases/updateReservationStatus.d.ts",
      "_102049_/l4/petShop/contracts/reservationManagement.updateReservationStatusCommand.defs.ts",
      "_102049_/l1/petShop/layer_2_application/usecases/processPayment.d.ts",
      "_102049_/l4/petShop/contracts/reservationManagement.processPaymentCommand.defs.ts"
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
