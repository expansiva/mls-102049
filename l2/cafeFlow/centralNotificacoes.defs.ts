/// <mls fileReference="_102049_/l2/cafeFlow/centralNotificacoes.defs.ts" enhancement="_blank"/>

export const centralNotificacoesPagePlan = {
  "schemaVersion": "2026-06-06",
  "artifactType": "page",
  "artifactId": "centralNotificacoes",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentPlanPageDefinition",
    "stepId": 65,
    "planId": ""
  },
  "data": {
    "pageDefinition": {
      "pageId": "centralNotificacoes",
      "pageName": "Central de notificações",
      "actor": "manager",
      "purpose": "Visualizar alertas operacionais, especialmente estoque baixo.",
      "capabilities": [
        "manageInventory"
      ],
      "flowRefs": {
        "experienceFlows": [],
        "entityLifecycles": [],
        "taskWorkflows": [],
        "automations": []
      },
      "pluginRefs": [],
      "mdmRefs": [],
      "pageInputs": [],
      "navigationRefs": [
        {
          "direction": "inbound",
          "pageId": "cardapioEstoque",
          "trigger": "alertas de estoque baixo"
        },
        {
          "direction": "outbound",
          "pageId": "cardapioEstoque",
          "trigger": "ajustar item de estoque"
        }
      ],
      "sections": [
        {
          "sectionName": "Alertas de estoque baixo",
          "mode": "list",
          "organisms": [
            {
              "organismName": "Lista de itens com estoque baixo",
              "purpose": "Exibir itens com alerta de estoque baixo para ação rápida.",
              "userActions": [
                "visualizar detalhe do item",
                "ir para ajuste de estoque"
              ],
              "requiredEntities": [
                "InventoryItem"
              ],
              "readsFields": [
                "inventoryItemId",
                "name",
                "currentStock",
                "minimumStock",
                "stockUnitId"
              ],
              "writesFields": [],
              "rulesApplied": [
                "lowStockAlertRule"
              ]
            }
          ]
        }
      ]
    },
    "bffCommands": [
      {
        "commandName": "listarItensEstoque",
        "purpose": "Listar itens com baixo estoque para ação.",
        "kind": "query",
        "input": [
          {
            "name": "filtroBaixoEstoque",
            "type": "boolean",
            "required": false
          }
        ],
        "output": [
          {
            "name": "inventoryItemId",
            "type": "uuid"
          },
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "currentStock",
            "type": "number"
          },
          {
            "name": "minimumStock",
            "type": "number"
          },
          {
            "name": "stockUnitId",
            "type": "StockUnit"
          }
        ],
        "readsEntities": [
          "InventoryItem"
        ],
        "writesEntities": [],
        "readsTables": [
          "inventory_items"
        ],
        "writesTables": [],
        "usecaseRefs": [
          "listarItensEstoque"
        ],
        "layerContract": {
          "controllerLayer": "layer_2_controllers",
          "mustCallLayer": "layer_3_usecases",
          "directTableAccessForbidden": true
        },
        "rulesApplied": [
          "lowStockAlertRule"
        ]
      }
    ]
  }
} as const;

export default centralNotificacoesPagePlan;
