/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/http/controllers/placeStorePickupOrder.defs.ts" enhancement="_blank"/>

export const placeStorePickupOrderController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "placeStorePickupOrder",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "placeStorePickupOrder",
    "controllerName": "PlaceStorePickupOrderController",
    "ownerKind": "operation",
    "outputSource": "usecase",
    "handlers": [
      {
        "handlerName": "petShopPlaceStorePickupOrderHandler",
        "command": "placeStorePickupOrder",
        "usecaseRef": "placeStorePickupOrder",
        "inputTypeName": "PlaceStorePickupOrderInput",
        "kind": "create",
        "inputContract": [
          {
            "inputId": "customerName",
            "fieldRef": "Order.customerName",
            "required": true,
            "source": "userInput",
            "description": "Nome do cliente que está finalizando o pedido de retirada"
          },
          {
            "inputId": "customerPhone",
            "fieldRef": "Order.customerPhone",
            "required": false,
            "source": "userInput",
            "description": "Telefone de contato opcional do cliente para confirmação da retirada"
          },
          {
            "inputId": "orderId",
            "fieldRef": "Order.orderId",
            "required": true,
            "source": "systemDefault",
            "description": "Identificador único gerado pelo sistema para o novo pedido"
          },
          {
            "inputId": "createdAt",
            "fieldRef": "Order.createdAt",
            "required": true,
            "source": "systemDefault",
            "description": "Data e hora de registro do pedido no momento da criação"
          },
          {
            "inputId": "updatedAt",
            "fieldRef": "Order.updatedAt",
            "required": true,
            "source": "systemDefault",
            "description": "Data e hora da última atualização do pedido no momento da criação"
          },
          {
            "inputId": "cartItems",
            "fieldRef": "OrderItem.productId",
            "required": true,
            "source": "workflowState",
            "description": "Itens do carrinho de compras construídos nas etapas anteriores do fluxo de navegação e revisão"
          }
        ],
        "contextResolution": [
          {
            "targetRef": "Order.orderId",
            "source": "systemDefault",
            "originRef": "systemDefault.uuid",
            "description": "O sistema gera um novo UUID para identificar o pedido no momento da criação"
          },
          {
            "targetRef": "Order.createdAt",
            "source": "systemDefault",
            "originRef": "systemDefault.now",
            "description": "O sistema registra a data e hora atual no momento da criação do pedido"
          },
          {
            "targetRef": "Order.updatedAt",
            "source": "systemDefault",
            "originRef": "systemDefault.now",
            "description": "O sistema registra a data e hora atual como última atualização no momento da criação do pedido"
          },
          {
            "targetRef": "OrderItem.productId",
            "source": "workflowState",
            "originRef": "OrderItem.productId",
            "description": "O estado do fluxo mantém os itens do carrinho adicionados pelo cliente nas etapas anteriores de navegação e revisão, que são associados ao novo pedido como OrderItems"
          }
        ],
        "accessPattern": {
          "kind": "commandInput",
          "description": "",
          "entity": "Order",
          "keyField": "Order.orderId",
          "pagination": "none",
          "selection": "single",
          "output": [
            "Order.orderId",
            "Order.status",
            "Order.customerName",
            "Order.customerPhone",
            "Order.createdAt"
          ]
        }
      }
    ],
    "routes": [
      {
        "key": "petShop.placeStorePickupOrder.placeStorePickupOrder",
        "handlerName": "petShopPlaceStorePickupOrderHandler"
      }
    ]
  }
} as const;

export default placeStorePickupOrderController;

export const pipeline = [
  {
    "id": "placeStorePickupOrder__httpController",
    "type": "httpController",
    "outputPath": "_102049_/l1/petShop/layer_1_external/adapters/http/controllers/placeStorePickupOrder.ts",
    "defPath": "_102049_/l1/petShop/layer_1_external/adapters/http/controllers/placeStorePickupOrder.defs.ts",
    "dependsFiles": [
      "_102049_/l1/petShop/layer_2_application/usecases/placeStorePickupOrder.d.ts"
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
