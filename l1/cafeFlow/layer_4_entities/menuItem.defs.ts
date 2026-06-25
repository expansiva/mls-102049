/// <mls fileReference="_102049_/l1/cafeFlow/layer_4_entities/menuItem.defs.ts" enhancement="_blank"/>

export const entity = {
  "entityId": "menuItem",
  "title": "Entidade de Cardápio",
  "purpose": "Agrupa itens e categorias do cardápio gerenciados via MDM",
  "layer": "layer_4_entities",
  "fields": [
    {
      "fieldId": "menuItemId",
      "type": "uuid",
      "required": true,
      "description": "Identificador único do item do cardápio."
    },
    {
      "fieldId": "name",
      "type": "string",
      "required": true,
      "description": "Nome exibido do item do cardápio."
    },
    {
      "fieldId": "description",
      "type": "text",
      "required": false,
      "description": "Descrição detalhada do item do cardápio."
    },
    {
      "fieldId": "price",
      "type": "money",
      "required": true,
      "description": "Preço de venda do item do cardápio."
    },
    {
      "fieldId": "menuCategoryId",
      "type": "MenuCategory",
      "required": true,
      "description": "Categoria à qual o item do cardápio pertence."
    },
    {
      "fieldId": "isActive",
      "type": "boolean",
      "required": true,
      "description": "Indica se o item do cardápio está disponível para venda."
    },
    {
      "fieldId": "createdAt",
      "type": "datetime",
      "required": true,
      "description": "Data e hora de criação do registro do item do cardápio."
    },
    {
      "fieldId": "updatedAt",
      "type": "datetime",
      "required": true,
      "description": "Data e hora da última atualização do registro do item do cardápio."
    }
  ],
  "ontologyEntities": [
    "MenuItem",
    "MenuCategory"
  ],
  "sourceTables": [
    {
      "tableName": "MenuItem",
      "ownership": "mdmOwned"
    },
    {
      "tableName": "MenuCategory",
      "ownership": "mdmOwned"
    }
  ],
  "storage": [
    {
      "kind": "mdm",
      "moduleRef": "102034",
      "entity": "MenuItem",
      "domainId": "menuItem",
      "sourceOfTruth": "project 102034",
      "governanceRules": [
        "Apenas o perfil gerente pode cadastrar, editar ou desativar itens do cardápio.",
        "Cada item deve estar vinculado a uma categoria do MDM de categorias.",
        "Itens podem ter vínculo com ingredientes de estoque para controle de insumos.",
        "Alterações de preço e disponibilidade devem ser auditadas no MDM."
      ]
    },
    {
      "kind": "mdm",
      "moduleRef": "102034",
      "entity": "MenuCategory",
      "domainId": "menuCategory",
      "sourceOfTruth": "project 102034",
      "governanceRules": [
        "Apenas o perfil gerente pode criar, editar ou desativar categorias.",
        "Categorias devem ser únicas e padronizadas para garantir consistência em relatórios e filtros.",
        "Itens do cardápio só podem ser associados a categorias ativas no MDM."
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
  "rulesApplied": [],
  "usecaseRefs": [
    "criarPedido",
    "listarPedidos",
    "buscarPedidoPorId",
    "criarItemCardapio",
    "atualizarItemCardapio",
    "listarItensCardapio",
    "gerarResumoVendas",
    "sugerirPromocoes"
  ],
  "materialization": {
    "fileName": "layer_4_entities/MenuItemEntity.ts",
    "className": "MenuItemEntity",
    "contractName": "IMenuItemEntity"
  }
} as const;

export default entity;
