/// <mls fileReference="_102049_/l5/cafeFlow/ontology/InventoryItem.defs.ts" enhancement="_blank"/>

export const InventoryItemEntityDefinition = {
  "schemaVersion": "2026-06-06",
  "artifactType": "ontologyEntity",
  "artifactId": "InventoryItem",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentPlanEntityDefinition",
    "stepId": 41,
    "planId": ""
  },
  "data": {
    "entityDefinition": {
      "entityId": "InventoryItem",
      "title": "Item de Estoque",
      "description": "Ingrediente ou insumo com unidade de medida e níveis de estoque.",
      "ownership": "moduleOwned",
      "fields": [
        {
          "fieldId": "inventoryItemId",
          "type": "uuid",
          "required": true,
          "description": "Identificador único do item de estoque."
        },
        {
          "fieldId": "name",
          "type": "string",
          "required": true,
          "description": "Nome do ingrediente ou insumo."
        },
        {
          "fieldId": "description",
          "type": "text",
          "required": false,
          "description": "Descrição complementar do item de estoque."
        },
        {
          "fieldId": "stockUnitId",
          "type": "StockUnit",
          "required": true,
          "description": "Unidade de medida usada para o item de estoque."
        },
        {
          "fieldId": "currentStock",
          "type": "number",
          "required": true,
          "description": "Quantidade atual em estoque."
        },
        {
          "fieldId": "minimumStock",
          "type": "number",
          "required": true,
          "description": "Quantidade mínima para alerta de estoque baixo."
        },
        {
          "fieldId": "createdAt",
          "type": "datetime",
          "required": true,
          "description": "Data e hora de criação do registro."
        },
        {
          "fieldId": "updatedAt",
          "type": "datetime",
          "required": true,
          "description": "Data e hora da última atualização do registro."
        }
      ],
      "rulesApplied": [
        "lowStockAlertRule"
      ]
    }
  }
} as const;

export default InventoryItemEntityDefinition;
