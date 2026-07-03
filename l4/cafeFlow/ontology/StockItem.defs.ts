/// <mls fileReference="_102049_/l4/cafeFlow/ontology/StockItem.defs.ts" enhancement="_blank"/>

export const cafeFlowEntityStockItem = {
  "entityId": "StockItem",
  "title": "Item de Estoque",
  "description": "Registro mestre de um insumo: nome, unidade de medida e quantidade mínima para alerta de estoque baixo.",
  "ownership": "mdmOwned",
  "kind": "mdm",
  "fields": [
    {
      "fieldId": "stockItemId",
      "type": "uuid",
      "required": true,
      "description": "Identificador único do item de estoque"
    },
    {
      "fieldId": "name",
      "type": "string",
      "required": true,
      "description": "Nome do insumo"
    },
    {
      "fieldId": "unitOfMeasure",
      "type": "string",
      "required": true,
      "description": "Unidade de medida do insumo (ex: kg, unidade, litro)"
    },
    {
      "fieldId": "minimumQuantity",
      "type": "number",
      "required": true,
      "description": "Quantidade mínima para alerta de estoque baixo"
    },
    {
      "fieldId": "status",
      "type": "string",
      "required": true,
      "description": "Status do item de estoque",
      "enum": [
        "active",
        "inactive"
      ]
    },
    {
      "fieldId": "createdAt",
      "type": "datetime",
      "required": true,
      "description": "Data e hora de criação do registro"
    },
    {
      "fieldId": "updatedAt",
      "type": "datetime",
      "required": true,
      "description": "Data e hora da última atualização do registro"
    }
  ],
  "statusEnum": [
    "active",
    "inactive"
  ],
  "rulesApplied": [
    "lowStockAlert"
  ]
} as const;

export default cafeFlowEntityStockItem;
