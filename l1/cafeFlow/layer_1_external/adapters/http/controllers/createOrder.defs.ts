/// <mls fileReference="_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/createOrder.defs.ts" enhancement="_blank"/>

export const createOrderController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "createOrder",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "orderLifecycle",
    "controllerName": "CreateOrderController",
    "ownerKind": "operation",
    "outputSource": "usecase",
    "handlers": [
      {
        "handlerName": "cafeFlowCreateOrderHandler",
        "command": "createOrder",
        "usecaseRef": "createOrder",
        "inputTypeName": "CreateOrderInput",
        "kind": "create",
        "inputContract": [
          {
            "inputId": "orderType",
            "fieldRef": "Order.orderType",
            "required": true,
            "source": "userInput",
            "description": "Modalidade do pedido: dine-in (mesa) ou takeout"
          },
          {
            "inputId": "tableId",
            "fieldRef": "Order.tableId",
            "required": false,
            "source": "userInput",
            "description": "Mesa selecionada para pedidos dine-in; omitido para takeout"
          },
          {
            "inputId": "items",
            "fieldRef": "OrderItem",
            "required": true,
            "source": "userInput",
            "description": "Lista de itens do cardápio que compõem o pedido, com quantidade e substituições aplicadas"
          }
        ],
        "contextResolution": [
          {
            "targetRef": "Order.shiftId",
            "source": "currentWorkspace",
            "originRef": "currentWorkspace.workspaceId",
            "description": "Sistema vincula o pedido ao turno aberto do workspace atual"
          },
          {
            "targetRef": "Order.id",
            "source": "systemDefault",
            "originRef": "systemDefault.uuid",
            "description": "Identificador único do pedido gerado pelo sistema"
          },
          {
            "targetRef": "Order.createdAt",
            "source": "systemDefault",
            "originRef": "systemDefault.now",
            "description": "Data e hora de criação atribuída automaticamente"
          },
          {
            "targetRef": "Order.updatedAt",
            "source": "systemDefault",
            "originRef": "systemDefault.now",
            "description": "Data e hora da última atualização atribuída automaticamente"
          }
        ],
        "accessPattern": {
          "kind": "commandInput",
          "description": "Criação de pedido no POS com itens compostos e vinculação automática ao turno aberto",
          "entity": "Order",
          "pagination": "none",
          "selection": "none"
        }
      }
    ],
    "routes": [
      {
        "key": "cafeFlow.orderLifecycle.createOrder",
        "handlerName": "cafeFlowCreateOrderHandler"
      }
    ]
  }
} as const;

export default createOrderController;

export const pipeline = [
  {
    "id": "createOrder__httpController",
    "type": "httpController",
    "outputPath": "_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/createOrder.ts",
    "defPath": "_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/createOrder.defs.ts",
    "dependsFiles": [
      "_102049_/l1/cafeFlow/layer_2_application/usecases/createOrder.d.ts"
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
