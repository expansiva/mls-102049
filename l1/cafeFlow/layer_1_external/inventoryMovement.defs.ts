/// <mls fileReference="_102049_/l1/cafeFlow/layer_1_external/inventoryMovement.defs.ts" enhancement="_blank"/>

export const inventoryMovementTableDefinition = {
  "schemaVersion": "2026-06-06",
  "artifactType": "table",
  "artifactId": "inventoryMovement",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentPlanTableDefinition",
    "stepId": 50,
    "planId": ""
  },
  "data": {
    "tableDefinition": {
      "tableId": "inventoryMovement",
      "tableName": "inventory_movements",
      "moduleId": "cafeFlow",
      "title": "Movimentos de Estoque",
      "purpose": "Registrar eventos de entrada e saída de estoque.",
      "ownership": "moduleOwned",
      "rootEntity": "InventoryMovement",
      "layer": "layer_1_external",
      "tableKind": "transactional",
      "columns": [
        {
          "name": "id",
          "type": "uuid",
          "nullable": false,
          "primaryKey": true,
          "description": "Identificador único do movimento de estoque."
        },
        {
          "name": "inventoryItemId",
          "type": "uuid",
          "nullable": false,
          "description": "Referência ao item de estoque movimentado."
        },
        {
          "name": "orderId",
          "type": "uuid",
          "nullable": true,
          "description": "Pedido associado à baixa automática, quando aplicável."
        },
        {
          "name": "movementType",
          "type": "string",
          "nullable": false,
          "description": "Tipo de movimento (entrada, saida, ajuste)."
        },
        {
          "name": "movementStatus",
          "type": "string",
          "nullable": false,
          "default": "registrado",
          "description": "Status do movimento para controle de estorno e auditoria."
        },
        {
          "name": "quantity",
          "type": "number",
          "nullable": false,
          "description": "Quantidade movimentada no estoque."
        },
        {
          "name": "unitCost",
          "type": "number",
          "nullable": true,
          "description": "Custo unitário no momento do movimento, quando aplicável."
        },
        {
          "name": "reason",
          "type": "text",
          "nullable": true,
          "description": "Motivo do ajuste manual, quando aplicável."
        },
        {
          "name": "createdAt",
          "type": "datetime",
          "nullable": false,
          "description": "Data e hora de criação do registro."
        },
        {
          "name": "updatedAt",
          "type": "datetime",
          "nullable": false,
          "description": "Data e hora da última atualização do registro."
        }
      ],
      "primaryKey": [
        "id"
      ],
      "foreignRefs": [
        {
          "fieldName": "inventoryItemId",
          "targetEntity": "InventoryItem",
          "targetOwnership": "moduleOwned",
          "reason": "Movimento pertence a um item de estoque."
        },
        {
          "fieldName": "orderId",
          "targetEntity": "Order",
          "targetOwnership": "moduleOwned",
          "reason": "Baixa automática por pedido, quando aplicável."
        }
      ],
      "indexes": [
        {
          "indexName": "idx_inventory_movements_inventory_item",
          "columns": [
            "inventoryItemId",
            "createdAt"
          ],
          "unique": false,
          "reason": "Consulta por item e período em relatórios de estoque."
        },
        {
          "indexName": "idx_inventory_movements_order",
          "columns": [
            "orderId"
          ],
          "unique": false,
          "reason": "Rastreio de baixas por pedido."
        },
        {
          "indexName": "idx_inventory_movements_type_status",
          "columns": [
            "movementType",
            "movementStatus"
          ],
          "unique": false,
          "reason": "Filtros por tipo e status do movimento."
        },
        {
          "indexName": "idx_inventory_movements_created_at",
          "columns": [
            "createdAt"
          ],
          "unique": false,
          "reason": "Filtro temporal padrão."
        }
      ],
      "detailsColumn": {
        "enabled": false,
        "reason": "Campos necessários para filtros e auditoria estão normalizados."
      },
      "metricUpdatePolicy": {
        "feedsMetrics": true,
        "metricRefs": [],
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
      "fileName": "tables/inventoryMovement.defs.ts",
      "exportName": "inventoryMovementTableDefinition",
      "saveAsDefs": true
    }
  }
} as const;

export default inventoryMovementTableDefinition;
