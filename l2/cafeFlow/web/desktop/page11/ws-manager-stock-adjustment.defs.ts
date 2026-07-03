/// <mls fileReference="_102049_/l2/cafeFlow/web/desktop/page11/ws-manager-stock-adjustment.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "ws-manager-stock-adjustment",
  "pageName": "Controle e Ajuste de Estoque",
  "actor": "manager",
  "purpose": "Executar Controle e Ajuste de Estoque.",
  "capabilities": [
    "manageStockAdjustment"
  ],
  "flowRefs": {
    "experienceFlows": [],
    "entityLifecycles": [],
    "taskWorkflows": [],
    "automations": []
  },
  "pluginRefs": [],
  "mdmRefs": [],
  "origin": {
    "source": "l4-journey",
    "workspaceId": "ws-manager-stock-adjustment",
    "workspaceKind": "entityManagement",
    "actor": "manager",
    "entity": "StockLevel",
    "owners": [
      {
        "kind": "operation",
        "id": "queryStockLevels",
        "defPath": "_102049_/l4/operations/queryStockLevels.defs.ts"
      },
      {
        "kind": "operation",
        "id": "adjustStockLevel",
        "defPath": "_102049_/l4/operations/adjustStockLevel.defs.ts"
      }
    ],
    "microUserFlow": {
      "source": "l4/story.steps",
      "workflowSteps": [],
      "operations": [
        {
          "operationId": "queryStockLevels",
          "commandName": "queryStockLevels",
          "steps": [
            "Acessar a tela de controle de estoque",
            "Visualizar níveis e itens abaixo do mínimo",
            "Identificar itens que precisam reposição"
          ]
        },
        {
          "operationId": "adjustStockLevel",
          "commandName": "adjustStockLevel",
          "steps": [
            "Localizar o insumo com nível de estoque",
            "Informar quantidade de reposição ou ajuste",
            "Registrar motivo do ajuste",
            "Salvar alteração"
          ]
        }
      ]
    }
  },
  "pageInputs": [],
  "navigationRefs": [],
  "sections": [
    {
      "id": "sec-stock-adjustment",
      "type": "section",
      "sectionName": "Controle e Ajuste de Estoque",
      "titleKey": "ws-manager-stock-adjustment.section.stockAdjustment.title",
      "mode": "edit",
      "order": 10,
      "organisms": [
        {
          "id": "org-query-stock-levels",
          "type": "organism",
          "organismName": "QueryStockLevels",
          "titleKey": "ws-manager-stock-adjustment.organism.queryStockLevels.title",
          "purpose": "Consultar níveis de estoque",
          "userActions": [
            "queryStockLevels"
          ],
          "requiredEntities": [
            "StockLevel",
            "StockItem"
          ],
          "readsFields": [
            "StockLevel.currentQuantity",
            "StockLevel.lastMovementAt",
            "StockLevel.stockItemId"
          ],
          "writesFields": [],
          "rulesApplied": [
            "stockDecrementOnPreparing",
            "lowStockAlert"
          ],
          "order": 10,
          "intentionRefs": [
            {
              "id": "int-query-stock-levels-list",
              "intent": "queryList",
              "stateKey": "ui.ws-manager-stock-adjustment.data.queryStockLevels",
              "order": 10
            }
          ]
        },
        {
          "id": "org-adjust-stock-level",
          "type": "organism",
          "organismName": "AdjustStockLevel",
          "titleKey": "ws-manager-stock-adjustment.organism.adjustStockLevel.title",
          "purpose": "Ajustar e repor estoque",
          "userActions": [
            "adjustStockLevel"
          ],
          "requiredEntities": [
            "StockLevel",
            "StockItem",
            "StockMovementEvent"
          ],
          "readsFields": [
            "StockLevel.currentQuantity"
          ],
          "writesFields": [
            "StockLevel.currentQuantity",
            "StockLevel.lastMovementAt",
            "StockLevel.updatedAt"
          ],
          "rulesApplied": [
            "stockDecrementOnPreparing",
            "lowStockAlert"
          ],
          "order": 20,
          "intentionRefs": [
            {
              "id": "int-adjust-stock-level-form",
              "intent": "commandForm",
              "submitAction": "adjustStockLevel",
              "order": 10
            },
            {
              "id": "int-adjust-stock-level-summary",
              "intent": "summary",
              "order": 20
            }
          ]
        }
      ]
    }
  ],
  "layout": {
    "id": "ws-manager-stock-adjustment.layout",
    "type": "page",
    "sections": [
      {
        "id": "sec-stock-adjustment",
        "type": "section",
        "sectionName": "Controle e Ajuste de Estoque",
        "titleKey": "ws-manager-stock-adjustment.section.stockAdjustment.title",
        "mode": "edit",
        "order": 10,
        "organisms": [
          {
            "id": "org-query-stock-levels",
            "type": "organism",
            "organismName": "QueryStockLevels",
            "titleKey": "ws-manager-stock-adjustment.organism.queryStockLevels.title",
            "purpose": "Consultar níveis de estoque",
            "userActions": [
              "queryStockLevels"
            ],
            "requiredEntities": [
              "StockLevel",
              "StockItem"
            ],
            "readsFields": [
              "StockLevel.currentQuantity",
              "StockLevel.lastMovementAt",
              "StockLevel.stockItemId"
            ],
            "writesFields": [],
            "rulesApplied": [
              "stockDecrementOnPreparing",
              "lowStockAlert"
            ],
            "order": 10,
            "intentions": [
              {
                "id": "int-query-stock-levels-list",
                "intent": "queryList",
                "order": 10,
                "titleKey": "ws-manager-stock-adjustment.intention.queryStockLevels.title",
                "fields": [],
                "columns": [
                  {
                    "id": "col-stockItemId",
                    "field": "stockItemId",
                    "labelKey": "ws-manager-stock-adjustment.field.stockItemId.label",
                    "order": 10,
                    "required": false,
                    "stateKey": "ui.ws-manager-stock-adjustment.data.queryStockLevels"
                  },
                  {
                    "id": "col-currentQuantity",
                    "field": "currentQuantity",
                    "labelKey": "ws-manager-stock-adjustment.field.currentQuantity.label",
                    "order": 20,
                    "required": false,
                    "stateKey": "ui.ws-manager-stock-adjustment.data.queryStockLevels"
                  },
                  {
                    "id": "col-lastMovementAt",
                    "field": "lastMovementAt",
                    "labelKey": "ws-manager-stock-adjustment.field.lastMovementAt.label",
                    "order": 30,
                    "required": false,
                    "format": "date",
                    "stateKey": "ui.ws-manager-stock-adjustment.data.queryStockLevels"
                  }
                ],
                "filters": [
                  {
                    "id": "filter-stockItemId",
                    "field": "stockItemId",
                    "labelKey": "ws-manager-stock-adjustment.field.stockItemId.filterLabel",
                    "order": 10,
                    "required": false,
                    "stateKey": "ui.ws-manager-stock-adjustment.input.queryStockLevels.stockItemId"
                  },
                  {
                    "id": "filter-lastMovementAt",
                    "field": "lastMovementAt",
                    "labelKey": "ws-manager-stock-adjustment.field.lastMovementAt.filterLabel",
                    "order": 20,
                    "required": false,
                    "format": "date",
                    "stateKey": "ui.ws-manager-stock-adjustment.input.queryStockLevels.lastMovementAt"
                  }
                ],
                "toolbar": [
                  {
                    "id": "tb-query-stock-levels",
                    "action": "queryStockLevels",
                    "labelKey": "ws-manager-stock-adjustment.action.queryStockLevels.label",
                    "order": 10,
                    "actionKey": "queryStockLevels"
                  }
                ],
                "rowActions": [],
                "actions": [
                  {
                    "id": "act-query-stock-levels",
                    "action": "queryStockLevels",
                    "labelKey": "ws-manager-stock-adjustment.action.queryStockLevels.label",
                    "order": 10,
                    "actionKey": "queryStockLevels"
                  }
                ],
                "stateKey": "ui.ws-manager-stock-adjustment.data.queryStockLevels"
              }
            ]
          },
          {
            "id": "org-adjust-stock-level",
            "type": "organism",
            "organismName": "AdjustStockLevel",
            "titleKey": "ws-manager-stock-adjustment.organism.adjustStockLevel.title",
            "purpose": "Ajustar e repor estoque",
            "userActions": [
              "adjustStockLevel"
            ],
            "requiredEntities": [
              "StockLevel",
              "StockItem",
              "StockMovementEvent"
            ],
            "readsFields": [
              "StockLevel.currentQuantity"
            ],
            "writesFields": [
              "StockLevel.currentQuantity",
              "StockLevel.lastMovementAt",
              "StockLevel.updatedAt"
            ],
            "rulesApplied": [
              "stockDecrementOnPreparing",
              "lowStockAlert"
            ],
            "order": 20,
            "intentions": [
              {
                "id": "int-adjust-stock-level-form",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "ws-manager-stock-adjustment.intention.adjustStockLevel.title",
                "submitAction": "adjustStockLevel",
                "fields": [
                  {
                    "id": "field-currentQuantity",
                    "field": "currentQuantity",
                    "labelKey": "ws-manager-stock-adjustment.field.currentQuantity.label",
                    "order": 10,
                    "required": true,
                    "inputType": "number",
                    "stateKey": "ui.ws-manager-stock-adjustment.input.adjustStockLevel.currentQuantity"
                  },
                  {
                    "id": "field-lastMovementAt",
                    "field": "lastMovementAt",
                    "labelKey": "ws-manager-stock-adjustment.field.lastMovementAt.label",
                    "order": 20,
                    "required": true,
                    "inputType": "date",
                    "format": "date",
                    "stateKey": "ui.ws-manager-stock-adjustment.input.adjustStockLevel.lastMovementAt"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "act-adjust-stock-level",
                    "action": "adjustStockLevel",
                    "labelKey": "ws-manager-stock-adjustment.action.adjustStockLevel.label",
                    "order": 10,
                    "actionKey": "adjustStockLevel"
                  }
                ]
              },
              {
                "id": "int-adjust-stock-level-summary",
                "intent": "summary",
                "order": 20,
                "titleKey": "ws-manager-stock-adjustment.intention.review.title",
                "fields": [],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": []
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
    "id": "ws-manager-stock-adjustment__l2_page",
    "type": "l2_page",
    "outputPath": "_102049_/l2/cafeFlow/web/desktop/page11/ws-manager-stock-adjustment.ts",
    "defPath": "_102049_/l2/cafeFlow/web/desktop/page11/ws-manager-stock-adjustment.defs.ts",
    "dependsFiles": [
      "_102049_/l2/cafeFlow/web/shared/ws-manager-stock-adjustment.defs.ts",
      "_102049_/l2/cafeFlow/web/shared/ws-manager-stock-adjustment.ts",
      "_102049_/l2/cafeFlow/web/contracts/ws-manager-stock-adjustment.defs.ts",
      "_102049_/l2/cafeFlow/web/contracts/ws-manager-stock-adjustment.ts"
    ],
    "dependsOn": [
      "ws-manager-stock-adjustment__l2_shared"
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
