/// <mls fileReference="_102049_/l1/cafeFlow/layer_3_usecases/atualizarItemEstoque.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "atualizarItemEstoque",
  "title": "Atualizar item de estoque",
  "purpose": "Edita quantidade, alertas ou unidade de um item de estoque",
  "actor": "manager",
  "layer": "layer_3_usecases",
  "inputEntities": [
    "inventoryEntity"
  ],
  "outputEntities": [
    "inventoryEntity"
  ],
  "readsTables": [
    {
      "tableName": "inventory_items",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "StockUnit",
      "ownership": "mdmOwned"
    }
  ],
  "writesTables": [
    {
      "tableName": "inventory_items",
      "ownership": "moduleOwned"
    }
  ],
  "rulesApplied": [
    "lowStockAlertRule"
  ],
  "entityRefs": [
    "inventoryItem"
  ],
  "commands": [
    {
      "commandId": "atualizarItemEstoque",
      "input": [
        {
          "name": "inventoryItemId",
          "type": "string",
          "required": true
        },
        {
          "name": "quantity",
          "type": "number",
          "required": false
        },
        {
          "name": "lowStockAlert",
          "type": "number",
          "required": false
        },
        {
          "name": "unitId",
          "type": "string",
          "required": false
        }
      ],
      "output": [
        {
          "name": "inventoryItem",
          "type": "inventoryEntity"
        }
      ]
    }
  ],
  "pendingQuestions": [
    "Quais são os campos exatos de inventoryEntity que podem ser atualizados (nomes e tipos)?",
    "O alerta de estoque baixo é numérico ou booleano? Qual o nome correto do campo?",
    "A unidade deve ser referenciada por unitId (StockUnit) ou outro identificador?"
  ]
} as const;

export default useCase;
