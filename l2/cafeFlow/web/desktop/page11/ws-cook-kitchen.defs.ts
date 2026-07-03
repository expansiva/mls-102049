/// <mls fileReference="_102049_/l2/cafeFlow/web/desktop/page11/ws-cook-kitchen.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "ws-cook-kitchen",
  "pageName": "Cozinha – Fila de Tickets e Baixa de Estoque",
  "actor": "cook",
  "purpose": "Executar Cozinha – Fila de Tickets e Baixa de Estoque.",
  "capabilities": [
    "kitchenTicketFlow",
    "updateKitchenStatus",
    "stockDecrement"
  ],
  "flowRefs": {
    "experienceFlows": [
      "kitchenTicketFlow"
    ],
    "entityLifecycles": [],
    "taskWorkflows": [
      "kitchenTicketFlow"
    ],
    "automations": []
  },
  "pluginRefs": [],
  "mdmRefs": [],
  "origin": {
    "source": "l4-journey",
    "workspaceId": "ws-cook-kitchen",
    "workspaceKind": "workflow",
    "workflowId": "kitchenTicketFlow",
    "actor": "cook",
    "entity": "",
    "owners": [
      {
        "kind": "workflow",
        "id": "kitchenTicketFlow",
        "defPath": "_102049_/l4/workflows/kitchenTicketFlow.defs.ts"
      },
      {
        "kind": "operation",
        "id": "updateKitchenStatus",
        "defPath": "_102049_/l4/operations/updateKitchenStatus.defs.ts"
      },
      {
        "kind": "operation",
        "id": "createStockMovement",
        "defPath": "_102049_/l4/operations/createStockMovement.defs.ts"
      }
    ],
    "microUserFlow": {
      "source": "l4/story.steps",
      "workflowSteps": [
        "Cozinheiro visualiza a fila de tickets recebidos do POS",
        "Inicia o preparo atualizando o status do ticket",
        "Dá baixa nos insumos utilizados no estoque",
        "Marca o ticket como pronto para retirada"
      ],
      "operations": [
        {
          "operationId": "updateKitchenStatus",
          "commandName": "updateKitchenStatus",
          "steps": [
            "Visualizar ticket na fila de cozinha",
            "Atualizar status seguindo a sequência: recebido → em preparo → pronto",
            "Confirmar a mudança de status"
          ]
        },
        {
          "operationId": "createStockMovement",
          "commandName": "createStockMovement",
          "steps": [
            "Identificar insumos consumidos pelo item preparado",
            "Registrar movimentação de saída no estoque",
            "Sistema verifica se há alerta de estoque baixo"
          ]
        }
      ]
    }
  },
  "pageInputs": [],
  "navigationRefs": [],
  "sections": [
    {
      "id": "section-kitchen-queue",
      "type": "section",
      "sectionName": "Cozinha – Fila de Tickets e Baixa de Estoque",
      "titleKey": "ws-cook-kitchen.section.kitchenQueue.title",
      "mode": "edit",
      "order": 10,
      "organisms": [
        {
          "id": "org-update-kitchen-status",
          "type": "organism",
          "organismName": "UpdateKitchenStatus",
          "titleKey": "ws-cook-kitchen.organism.updateKitchenStatus.title",
          "purpose": "Atualizar status de cozinha",
          "userActions": [
            "updateKitchenStatus"
          ],
          "requiredEntities": [
            "OrderStatusEvent",
            "Order"
          ],
          "readsFields": [],
          "writesFields": [
            "Order.status"
          ],
          "rulesApplied": [],
          "order": 10,
          "intentionRefs": [
            {
              "id": "intent-ticket-queue",
              "intent": "queryList",
              "order": 10
            },
            {
              "id": "intent-start-preparation",
              "intent": "commandForm",
              "submitAction": "updateKitchenStatus",
              "order": 20
            },
            {
              "id": "intent-mark-ready",
              "intent": "commandForm",
              "submitAction": "updateKitchenStatus",
              "order": 30
            }
          ]
        },
        {
          "id": "org-create-stock-movement",
          "type": "organism",
          "organismName": "CreateStockMovement",
          "titleKey": "ws-cook-kitchen.organism.createStockMovement.title",
          "purpose": "Dar baixa no estoque",
          "userActions": [
            "createStockMovement"
          ],
          "requiredEntities": [
            "StockMovementEvent",
            "StockItem",
            "StockLevel"
          ],
          "readsFields": [],
          "writesFields": [],
          "rulesApplied": [
            "stockDecrementOnPreparing"
          ],
          "order": 20,
          "intentionRefs": [
            {
              "id": "intent-stock-movement",
              "intent": "commandForm",
              "submitAction": "createStockMovement",
              "order": 10
            }
          ]
        }
      ]
    }
  ],
  "layout": {
    "id": "ws-cook-kitchen.layout",
    "type": "page",
    "sections": [
      {
        "id": "section-kitchen-queue",
        "type": "section",
        "sectionName": "Cozinha – Fila de Tickets e Baixa de Estoque",
        "titleKey": "ws-cook-kitchen.section.kitchenQueue.title",
        "mode": "edit",
        "order": 10,
        "organisms": [
          {
            "id": "org-update-kitchen-status",
            "type": "organism",
            "organismName": "UpdateKitchenStatus",
            "titleKey": "ws-cook-kitchen.organism.updateKitchenStatus.title",
            "purpose": "Atualizar status de cozinha",
            "userActions": [
              "updateKitchenStatus"
            ],
            "requiredEntities": [
              "OrderStatusEvent",
              "Order"
            ],
            "readsFields": [],
            "writesFields": [
              "Order.status"
            ],
            "rulesApplied": [],
            "order": 10,
            "intentions": [
              {
                "id": "intent-ticket-queue",
                "intent": "queryList",
                "order": 10,
                "titleKey": "ws-cook-kitchen.intent.ticketQueue.title",
                "fields": [],
                "columns": [
                  {
                    "id": "col-order-id",
                    "field": "id",
                    "labelKey": "ws-cook-kitchen.field.orderId",
                    "order": 10,
                    "required": false,
                    "stateKey": "ui.ws-cook-kitchen.layout.col-order-id"
                  },
                  {
                    "id": "col-order-type",
                    "field": "orderType",
                    "labelKey": "ws-cook-kitchen.field.orderType",
                    "order": 20,
                    "required": false,
                    "stateKey": "ui.ws-cook-kitchen.layout.col-order-type"
                  },
                  {
                    "id": "col-table-id",
                    "field": "tableId",
                    "labelKey": "ws-cook-kitchen.field.tableId",
                    "order": 30,
                    "required": false,
                    "stateKey": "ui.ws-cook-kitchen.layout.col-table-id"
                  },
                  {
                    "id": "col-status",
                    "field": "status",
                    "labelKey": "ws-cook-kitchen.field.orderStatus",
                    "order": 40,
                    "required": false,
                    "stateKey": "ui.ws-cook-kitchen.input.updateKitchenStatus.status"
                  },
                  {
                    "id": "col-total",
                    "field": "total",
                    "labelKey": "ws-cook-kitchen.field.total",
                    "order": 50,
                    "required": false,
                    "stateKey": "ui.ws-cook-kitchen.layout.col-total"
                  },
                  {
                    "id": "col-created-at",
                    "field": "createdAt",
                    "labelKey": "ws-cook-kitchen.field.createdAt",
                    "order": 60,
                    "required": false,
                    "stateKey": "ui.ws-cook-kitchen.layout.col-created-at"
                  }
                ],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": []
              },
              {
                "id": "intent-start-preparation",
                "intent": "commandForm",
                "order": 20,
                "titleKey": "ws-cook-kitchen.intent.startPreparation.title",
                "submitAction": "updateKitchenStatus",
                "fields": [
                  {
                    "id": "field-previous-status",
                    "field": "previousStatus",
                    "labelKey": "ws-cook-kitchen.field.previousStatus",
                    "order": 10,
                    "required": false,
                    "inputType": "select",
                    "stateKey": "ui.ws-cook-kitchen.input.updateKitchenStatus.previousStatus"
                  },
                  {
                    "id": "field-status",
                    "field": "status",
                    "labelKey": "ws-cook-kitchen.field.status",
                    "order": 20,
                    "required": true,
                    "inputType": "select",
                    "stateKey": "ui.ws-cook-kitchen.input.updateKitchenStatus.status"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "action-update-status",
                    "action": "updateKitchenStatus",
                    "labelKey": "ws-cook-kitchen.action.updateKitchenStatus",
                    "order": 10,
                    "actionKey": "updateKitchenStatus"
                  }
                ]
              },
              {
                "id": "intent-mark-ready",
                "intent": "commandForm",
                "order": 30,
                "titleKey": "ws-cook-kitchen.intent.markReady.title",
                "submitAction": "updateKitchenStatus",
                "fields": [
                  {
                    "id": "field-previous-status-ready",
                    "field": "previousStatus",
                    "labelKey": "ws-cook-kitchen.field.previousStatus",
                    "order": 10,
                    "required": false,
                    "inputType": "select",
                    "stateKey": "ui.ws-cook-kitchen.input.updateKitchenStatus.previousStatus"
                  },
                  {
                    "id": "field-status-ready",
                    "field": "status",
                    "labelKey": "ws-cook-kitchen.field.status",
                    "order": 20,
                    "required": true,
                    "inputType": "select",
                    "stateKey": "ui.ws-cook-kitchen.input.updateKitchenStatus.status"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "action-update-status-ready",
                    "action": "updateKitchenStatus",
                    "labelKey": "ws-cook-kitchen.action.markReady",
                    "order": 10,
                    "actionKey": "updateKitchenStatus"
                  }
                ]
              }
            ]
          },
          {
            "id": "org-create-stock-movement",
            "type": "organism",
            "organismName": "CreateStockMovement",
            "titleKey": "ws-cook-kitchen.organism.createStockMovement.title",
            "purpose": "Dar baixa no estoque",
            "userActions": [
              "createStockMovement"
            ],
            "requiredEntities": [
              "StockMovementEvent",
              "StockItem",
              "StockLevel"
            ],
            "readsFields": [],
            "writesFields": [],
            "rulesApplied": [
              "stockDecrementOnPreparing"
            ],
            "order": 20,
            "intentions": [
              {
                "id": "intent-stock-movement",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "ws-cook-kitchen.intent.stockMovement.title",
                "submitAction": "createStockMovement",
                "fields": [
                  {
                    "id": "field-movement-type",
                    "field": "movementType",
                    "labelKey": "ws-cook-kitchen.field.movementType",
                    "order": 10,
                    "required": true,
                    "inputType": "select",
                    "stateKey": "ui.ws-cook-kitchen.input.createStockMovement.movementType"
                  },
                  {
                    "id": "field-quantity",
                    "field": "quantity",
                    "labelKey": "ws-cook-kitchen.field.quantity",
                    "order": 20,
                    "required": true,
                    "inputType": "number",
                    "stateKey": "ui.ws-cook-kitchen.input.createStockMovement.quantity"
                  },
                  {
                    "id": "field-reason",
                    "field": "reason",
                    "labelKey": "ws-cook-kitchen.field.reason",
                    "order": 30,
                    "required": true,
                    "inputType": "text",
                    "stateKey": "ui.ws-cook-kitchen.input.createStockMovement.reason"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "action-create-stock-movement",
                    "action": "createStockMovement",
                    "labelKey": "ws-cook-kitchen.action.createStockMovement",
                    "order": 10,
                    "actionKey": "createStockMovement"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "dataBindings": []
};

export const pipeline = [
  {
    "id": "ws-cook-kitchen__l2_page",
    "type": "l2_page",
    "outputPath": "_102049_/l2/cafeFlow/web/desktop/page11/ws-cook-kitchen.ts",
    "defPath": "_102049_/l2/cafeFlow/web/desktop/page11/ws-cook-kitchen.defs.ts",
    "dependsFiles": [
      "_102049_/l2/cafeFlow/web/shared/ws-cook-kitchen.defs.ts",
      "_102049_/l2/cafeFlow/web/shared/ws-cook-kitchen.ts",
      "_102049_/l2/cafeFlow/web/contracts/ws-cook-kitchen.defs.ts",
      "_102049_/l2/cafeFlow/web/contracts/ws-cook-kitchen.ts"
    ],
    "dependsOn": [
      "ws-cook-kitchen__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage11RenderTs.ts"
    ],
    "visualStyle": {
      "description": "Clean, fast-touch POS interface with kitchen display board; dashboard with cards and charts for management."
    },
    "agent": "agentCfeMaterializeGen"
  }
] as const;
