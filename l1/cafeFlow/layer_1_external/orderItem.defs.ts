/// <mls fileReference="_102049_/l1/cafeFlow/layer_1_external/orderItem.defs.ts" enhancement="_blank"/>

export const orderItemTableDefinition = {
  "schemaVersion": "2026-06-06",
  "artifactType": "table",
  "artifactId": "orderItem",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentPlanTableDefinition",
    "stepId": 47,
    "planId": ""
  },
  "data": {
    "tableDefinition": {
      "tableId": "orderItem",
      "tableName": "order_items",
      "moduleId": "cafeFlow",
      "title": "Itens do Pedido",
      "purpose": "Registrar itens de cada pedido para preparo e baixa de estoque.",
      "ownership": "moduleOwned",
      "rootEntity": "OrderItem",
      "layer": "layer_1_external",
      "tableKind": "transactional",
      "columns": [
        {
          "name": "orderItemId",
          "type": "uuid",
          "nullable": false,
          "primaryKey": true,
          "description": "Identificador único do item do pedido."
        },
        {
          "name": "orderId",
          "type": "uuid",
          "nullable": false,
          "description": "Referência ao pedido ao qual este item pertence."
        },
        {
          "name": "menuItemId",
          "type": "uuid",
          "nullable": false,
          "description": "Referência ao item do cardápio associado."
        },
        {
          "name": "quantity",
          "type": "number",
          "nullable": false,
          "description": "Quantidade solicitada do item do cardápio."
        },
        {
          "name": "itemStatus",
          "type": "string",
          "nullable": false,
          "default": "ativo",
          "description": "Status operacional do item do pedido para preparo e cancelamento."
        },
        {
          "name": "createdAt",
          "type": "datetime",
          "nullable": false,
          "description": "Data e hora de criação do item do pedido."
        },
        {
          "name": "updatedAt",
          "type": "datetime",
          "nullable": false,
          "description": "Data e hora da última atualização do item do pedido."
        }
      ],
      "primaryKey": [
        "orderItemId"
      ],
      "foreignRefs": [
        {
          "fieldName": "orderId",
          "targetEntity": "Order",
          "targetOwnership": "moduleOwned",
          "reason": "Itens pertencem a um pedido e precisam de consulta por pedido."
        },
        {
          "fieldName": "menuItemId",
          "targetEntity": "MenuItem",
          "targetOwnership": "mdmOwned",
          "reason": "Vincula o item vendido ao item do cardápio."
        }
      ],
      "indexes": [
        {
          "indexName": "idx_order_items_order_id",
          "columns": [
            "orderId"
          ],
          "unique": false,
          "reason": "Leituras rápidas por pedido no fluxo de pedido e cozinha."
        },
        {
          "indexName": "idx_order_items_menu_item_id",
          "columns": [
            "menuItemId"
          ],
          "unique": false,
          "reason": "Consulta por item do cardápio para baixa de estoque e análises."
        },
        {
          "indexName": "idx_order_items_order_status",
          "columns": [
            "orderId",
            "itemStatus"
          ],
          "unique": false,
          "reason": "Filtrar itens por status no painel da cozinha."
        },
        {
          "indexName": "idx_order_items_created_at",
          "columns": [
            "createdAt"
          ],
          "unique": false,
          "reason": "Filtros por período em relatórios operacionais."
        }
      ],
      "detailsColumn": {
        "enabled": false
      },
      "metricUpdatePolicy": {
        "feedsMetrics": true,
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
        "inventoryDecrementRule"
      ]
    },
    "defsPlan": {
      "fileName": "tables/orderItem.defs.ts",
      "exportName": "orderItemTableDefinition",
      "saveAsDefs": true
    }
  }
} as const;

export default orderItemTableDefinition;
