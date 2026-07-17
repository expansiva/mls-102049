/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/http/controllers/payInStore.defs.ts" enhancement="_blank"/>

export const payInStoreController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "payInStore",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "reservationLifecycle",
    "controllerName": "PayInStoreController",
    "ownerKind": "operation",
    "outputSource": "dto",
    "dtoTypeName": "PayInStoreResponseDto",
    "dtoModulePath": "_102049_/l1/petShop/layer_1_external/adapters/http/dto/payInStore.js",
    "usecaseOutputTypeName": "PayInStoreOutput",
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
      ]
    },
    "handlers": [
      {
        "handlerName": "petShopPayInStoreHandler",
        "command": "payInStore",
        "usecaseRef": "payInStore",
        "inputTypeName": "PayInStoreInput",
        "kind": "update",
        "inputContract": [
          {
            "inputId": "reservationId",
            "fieldRef": "Reservation.reservationId",
            "required": true,
            "source": "selectedEntity",
            "description": "Identificador da reserva selecionada para pagamento e retirada"
          },
          {
            "inputId": "paymentMethod",
            "fieldRef": "Payment.method",
            "required": true,
            "source": "userInput",
            "description": "Método de pagamento utilizado no balcão (dinheiro, cartão, pix, etc.)"
          },
          {
            "inputId": "paymentAmount",
            "fieldRef": "Payment.amount",
            "required": true,
            "source": "userInput",
            "description": "Valor do pagamento realizado presencialmente"
          }
        ],
        "contextResolution": [
          {
            "targetRef": "Reservation.reservationId",
            "source": "selectedEntity",
            "originRef": "Reservation.reservationId",
            "description": "A reserva atualmente selecionada pela loja no painel de retirada"
          },
          {
            "targetRef": "Reservation.deliveredAt",
            "source": "systemDefault",
            "originRef": "systemDefault.now",
            "description": "Timestamp atual do sistema registrado como momento da entrega"
          },
          {
            "targetRef": "Reservation.paymentId",
            "source": "systemDefault",
            "originRef": "systemDefault.uuid",
            "description": "UUID gerado pelo sistema para o novo registro de pagamento"
          },
          {
            "targetRef": "Reservation.updatedAt",
            "source": "systemDefault",
            "originRef": "systemDefault.now",
            "description": "Timestamp atual do sistema registrado como momento da última atualização da reserva"
          }
        ],
        "accessPattern": {
          "kind": "commandInput",
          "description": "",
          "entity": "Reservation",
          "keyField": "Reservation.reservationId",
          "pagination": "none",
          "selection": "single",
          "output": [
            "Reservation.reservationId",
            "Reservation.status",
            "Reservation.deliveredAt",
            "Reservation.paymentId",
            "Reservation.updatedAt"
          ]
        }
      }
    ],
    "routes": [
      {
        "key": "petShop.reservationLifecycle.payInStore",
        "handlerName": "petShopPayInStoreHandler"
      }
    ]
  }
} as const;

export default payInStoreController;

export const pipeline = [
  {
    "id": "payInStore__httpController",
    "type": "httpController",
    "outputPath": "_102049_/l1/petShop/layer_1_external/adapters/http/controllers/payInStore.ts",
    "defPath": "_102049_/l1/petShop/layer_1_external/adapters/http/controllers/payInStore.defs.ts",
    "dependsFiles": [
      "_102049_/l1/petShop/layer_2_application/usecases/payInStore.d.ts",
      "_102049_/l1/petShop/layer_1_external/adapters/http/dto/payInStore.d.ts"
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
