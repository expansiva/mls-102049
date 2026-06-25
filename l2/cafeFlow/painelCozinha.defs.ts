/// <mls fileReference="_102049_/l2/cafeFlow/painelCozinha.defs.ts" enhancement="_blank"/>

export const painelCozinhaPagePlan = {
  "schemaVersion": "2026-06-06",
  "artifactType": "page",
  "artifactId": "painelCozinha",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentPlanPageDefinition",
    "stepId": 63,
    "planId": ""
  },
  "data": {
    "pageDefinition": {
      "pageId": "painelCozinha",
      "pageName": "Painel da cozinha",
      "actor": "kitchen",
      "purpose": "Acompanhar fila de pedidos e atualizar status de preparo.",
      "capabilities": [
        "updateKitchenStatus"
      ],
      "flowRefs": {
        "experienceFlows": [],
        "entityLifecycles": [
          "orderLifecycle"
        ],
        "taskWorkflows": [
          "kitchenPreparation"
        ],
        "automations": []
      },
      "pluginRefs": [],
      "mdmRefs": [
        "orderStatus"
      ],
      "pageInputs": [],
      "navigationRefs": [
        {
          "direction": "inbound",
          "pageId": "posRapido",
          "trigger": "pedido confirmado para cozinha",
          "description": "Abrir painel quando um pedido é confirmado para preparo."
        }
      ],
      "sections": [
        {
          "sectionName": "Fila de pedidos",
          "mode": "list",
          "organisms": [
            {
              "organismName": "Lista de pedidos por status",
              "purpose": "Exibir pedidos da cozinha com status atual, tempo e itens.",
              "userActions": [
                "filtrar por status",
                "selecionar pedido para atualizar status"
              ],
              "requiredEntities": [
                "Order"
              ],
              "readsFields": [
                "Order.orderId",
                "Order.originType",
                "Order.tableSeatId",
                "Order.orderStatusId",
                "Order.createdAt",
                "Order.updatedAt"
              ],
              "writesFields": [],
              "rulesApplied": [
                "orderStatusLifecycle"
              ]
            }
          ]
        },
        {
          "sectionName": "Atualização de status",
          "mode": "detail",
          "organisms": [
            {
              "organismName": "Ações de status do pedido",
              "purpose": "Avançar ou cancelar o status conforme o preparo.",
              "userActions": [
                "iniciarPreparo",
                "marcarPronto",
                "marcarEntregue",
                "cancelarPedido"
              ],
              "requiredEntities": [
                "Order"
              ],
              "readsFields": [
                "Order.orderId",
                "Order.orderStatusId"
              ],
              "writesFields": [
                "Order.orderStatusId",
                "Order.updatedAt"
              ],
              "rulesApplied": [
                "orderStatusLifecycle"
              ]
            }
          ]
        }
      ]
    },
    "bffCommands": [
      {
        "commandName": "listarPedidos",
        "purpose": "Exibir fila de pedidos por status para preparo.",
        "kind": "query",
        "input": [
          {
            "name": "statusFiltro",
            "type": "OrderStatus",
            "required": false
          },
          {
            "name": "originType",
            "type": "string",
            "required": false
          },
          {
            "name": "limit",
            "type": "number",
            "required": false
          },
          {
            "name": "offset",
            "type": "number",
            "required": false
          }
        ],
        "output": [
          {
            "name": "orderId",
            "type": "uuid"
          },
          {
            "name": "originType",
            "type": "string"
          },
          {
            "name": "tableSeatId",
            "type": "TableSeat"
          },
          {
            "name": "orderStatusId",
            "type": "OrderStatus"
          },
          {
            "name": "createdAt",
            "type": "datetime"
          },
          {
            "name": "updatedAt",
            "type": "datetime"
          }
        ],
        "readsEntities": [
          "Order"
        ],
        "writesEntities": [],
        "readsTables": [
          "orders",
          "order_items",
          "table_seats"
        ],
        "writesTables": [],
        "usecaseRefs": [
          "listarPedidos"
        ],
        "layerContract": {
          "controllerLayer": "layer_2_controllers",
          "mustCallLayer": "layer_3_usecases",
          "directTableAccessForbidden": true
        },
        "rulesApplied": []
      },
      {
        "commandName": "atualizarStatusPedido",
        "purpose": "Atualizar status do pedido conforme preparo.",
        "kind": "command",
        "input": [
          {
            "name": "orderId",
            "type": "uuid",
            "required": true
          },
          {
            "name": "novoStatusId",
            "type": "OrderStatus",
            "required": true
          }
        ],
        "output": [
          {
            "name": "orderId",
            "type": "uuid"
          },
          {
            "name": "orderStatusId",
            "type": "OrderStatus"
          },
          {
            "name": "updatedAt",
            "type": "datetime"
          }
        ],
        "readsEntities": [
          "Order"
        ],
        "writesEntities": [
          "Order"
        ],
        "readsTables": [
          "orders",
          "order_items"
        ],
        "writesTables": [
          "orders"
        ],
        "usecaseRefs": [
          "atualizarStatusPedido"
        ],
        "layerContract": {
          "controllerLayer": "layer_2_controllers",
          "mustCallLayer": "layer_3_usecases",
          "directTableAccessForbidden": true
        },
        "rulesApplied": [
          "orderStatusLifecycle"
        ]
      }
    ]
  }
} as const;

export default painelCozinhaPagePlan;
