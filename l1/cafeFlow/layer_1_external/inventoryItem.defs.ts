/// <mls fileReference="_102049_/l1/cafeFlow/layer_1_external/inventoryItem.defs.ts" enhancement="_blank"/>

export const inventoryItemTableDefinition = {
  "schemaVersion": "2026-06-06",
  "artifactType": "table",
  "artifactId": "inventoryItem",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentPlanTableDefinition",
    "stepId": 49,
    "planId": ""
  },
  "data": {
    "tableDefinition": {
      "tableId": "inventoryItem",
      "tableName": "inventory_items",
      "moduleId": "cafeFlow",
      "title": "Itens de Estoque",
      "purpose": "Manter saldo e parâmetros de estoque por item.",
      "ownership": "moduleOwned",
      "rootEntity": "InventoryItem",
      "layer": "layer_1_external",
      "tableKind": "transactional",
      "columns": [
        {
          "name": "inventory_item_id",
          "type": "uuid",
          "nullable": false,
          "primaryKey": true,
          "description": "Identificador único do item de estoque."
        },
        {
          "name": "name",
          "type": "string",
          "nullable": false,
          "description": "Nome do ingrediente ou insumo."
        },
        {
          "name": "description",
          "type": "text",
          "nullable": true,
          "description": "Descrição complementar do item de estoque."
        },
        {
          "name": "stock_unit_id",
          "type": "uuid",
          "nullable": false,
          "description": "Unidade de medida usada para o item de estoque."
        },
        {
          "name": "current_stock",
          "type": "number",
          "nullable": false,
          "description": "Quantidade atual em estoque."
        },
        {
          "name": "minimum_stock",
          "type": "number",
          "nullable": false,
          "description": "Quantidade mínima para alerta de estoque baixo."
        },
        {
          "name": "status",
          "type": "string",
          "nullable": false,
          "default": "active",
          "description": "Status do item de estoque (active, inactive)."
        },
        {
          "name": "created_at",
          "type": "datetime",
          "nullable": false,
          "description": "Data e hora de criação do registro."
        },
        {
          "name": "updated_at",
          "type": "datetime",
          "nullable": false,
          "description": "Data e hora da última atualização do registro."
        }
      ],
      "primaryKey": [
        "inventory_item_id"
      ],
      "foreignRefs": [
        {
          "fieldName": "stock_unit_id",
          "targetEntity": "StockUnit",
          "targetOwnership": "mdmOwned",
          "reason": "Unidade de medida é domínio MDM."
        }
      ],
      "indexes": [
        {
          "indexName": "idx_inventory_items_name",
          "columns": [
            "name"
          ],
          "unique": false,
          "reason": "Busca por nome na gestão de estoque."
        },
        {
          "indexName": "idx_inventory_items_stock_unit",
          "columns": [
            "stock_unit_id"
          ],
          "unique": false,
          "reason": "Filtragem por unidade de medida."
        },
        {
          "indexName": "idx_inventory_items_status",
          "columns": [
            "status"
          ],
          "unique": false,
          "reason": "Filtragem por itens ativos/inativos."
        },
        {
          "indexName": "idx_inventory_items_updated_at",
          "columns": [
            "updated_at"
          ],
          "unique": false,
          "reason": "Ordenação e filtros por última atualização."
        }
      ],
      "detailsColumn": {
        "enabled": false
      },
      "metricUpdatePolicy": {
        "feedsMetrics": false,
        "updatedByLayer": "layer_3_usecases"
      },
      "accessPolicy": {
        "directAccessAllowedFor": [
          "layer_3_usecases"
        ],
        "forbiddenFor": [
          "pages",
          "layer_2_controllers",
          "agents"
        ]
      },
      "rulesApplied": [
        "inventoryDecrementRule",
        "lowStockAlertRule"
      ]
    },
    "defsPlan": {
      "fileName": "tables/inventoryItem.defs.ts",
      "exportName": "inventoryItemTableDefinition",
      "saveAsDefs": true
    }
  }
} as const;

export default inventoryItemTableDefinition;
