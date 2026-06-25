/// <mls fileReference="_102049_/l1/cafeFlow/layer_4_entities/inventoryItem.defs.ts" enhancement="_blank"/>

export const entity = {
  "entityId": "inventoryItem",
  "title": "Entidade de Estoque",
  "purpose": "Agrupa itens de estoque, movimentações e unidades de medida",
  "layer": "layer_4_entities",
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
  "ontologyEntities": [
    "InventoryItem",
    "InventoryMovement",
    "StockUnit"
  ],
  "sourceTables": [
    {
      "tableName": "inventory_items",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "inventory_movements",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "StockUnit",
      "ownership": "mdmOwned"
    }
  ],
  "storage": [
    {
      "kind": "moduleTable",
      "tableId": "inventoryItem",
      "tableName": "inventory_items",
      "fileRef": "_102049_/l1/cafeFlow/layer_1_external/inventoryItem.defs.ts"
    },
    {
      "kind": "moduleTable",
      "tableId": "inventoryMovement",
      "tableName": "inventory_movements",
      "fileRef": "_102049_/l1/cafeFlow/layer_1_external/inventoryMovement.defs.ts"
    },
    {
      "kind": "mdm",
      "moduleRef": "102034",
      "entity": "StockUnit",
      "domainId": "stockUnit",
      "sourceOfTruth": "project 102034",
      "governanceRules": [
        "Apenas o perfil gerente pode cadastrar ou alterar unidades de medida.",
        "Unidades devem ser padronizadas para garantir consistência na baixa de estoque e movimentações.",
        "Itens de estoque só podem usar unidades previamente cadastradas no MDM."
      ]
    }
  ],
  "allowedOperations": [
    "create",
    "read",
    "update",
    "list",
    "search"
  ],
  "rulesApplied": [
    "inventoryDecrementRule",
    "lowStockAlertRule"
  ],
  "usecaseRefs": [
    "cancelarPedido",
    "criarItemEstoque",
    "atualizarItemEstoque",
    "listarItensEstoque",
    "registrarMovimentoEstoque",
    "listarMovimentosEstoque",
    "fecharTurno",
    "gerarResumoVendas",
    "sugerirPromocoes"
  ],
  "materialization": {
    "fileName": "layer_4_entities/InventoryItemEntity.ts",
    "className": "InventoryItemEntity",
    "contractName": "IInventoryItemEntity"
  }
} as const;

export default entity;
