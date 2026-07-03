/// <mls fileReference="_102049_/l4/cafeFlow/ontology/StockLevel.defs.ts" enhancement="_blank"/>

export const cafeFlowEntityStockLevel = {
  "entityId": "StockLevel",
  "title": "Nível de Estoque",
  "description": "Estado operacional do estoque de um insumo: quantidade atual e timestamp da última movimentação. Referencia o cadastro MDM do item de estoque. Não possui lifecycle states discretos — é um contador contínuo.",
  "ownership": "moduleOwned",
  "kind": "core",
  "fields": [
    {
      "fieldId": "stockLevelId",
      "type": "uuid",
      "required": true,
      "description": "Identificador único do nível de estoque"
    },
    {
      "fieldId": "stockItemId",
      "type": "StockItem",
      "required": true,
      "description": "Referência ao item de estoque cadastrado (MDM)"
    },
    {
      "fieldId": "currentQuantity",
      "type": "number",
      "required": true,
      "description": "Quantidade atual do insumo em estoque"
    },
    {
      "fieldId": "lastMovementAt",
      "type": "datetime",
      "required": true,
      "description": "Timestamp da última movimentação de estoque"
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
  "rulesApplied": [
    "stockDecrementOnPreparing",
    "lowStockAlert"
  ]
} as const;

export default cafeFlowEntityStockLevel;
