/// <mls fileReference="_102049_/l4/operations/setProductHighlights.defs.ts" enhancement="_blank"/>

export const operationSetProductHighlights = {
  "operationId": "setProductHighlights",
  "title": "Definir produtos em destaque",
  "actor": "loja",
  "entity": "Product",
  "kind": "update",
  "reads": [
    "Product"
  ],
  "writes": [
    "Product"
  ],
  "rulesApplied": [
    "highlightRequiresAvailableProduct",
    "highlightsAreManualOnly"
  ],
  "story": {
    "actor": "loja",
    "goal": "Marcar ou desmarcar manualmente produtos do catálogo como destaque para exibi-los na seção de destaques da página inicial.",
    "steps": [
      "A loja seleciona um ou mais produtos do catálogo que deseja marcar ou desmarcar como destaque.",
      "A loja define o valor do destaque (true para marcar, false para remover destaque).",
      "O sistema verifica que apenas produtos disponíveis podem ser marcados como destaque.",
      "O sistema atualiza o campo highlighted dos produtos informados e retorna a confirmação com os produtos alterados."
    ],
    "outcome": "Os produtos selecionados têm o flag highlighted atualizado conforme solicitado, respeitando a regra de que apenas produtos disponíveis podem receber destaque."
  },
  "accessPattern": {
    "kind": "commandInput",
    "entity": "Product",
    "keyField": "Product.productId",
    "pagination": "none",
    "selection": "multiple",
    "output": [
      "Product.productId",
      "Product.name",
      "Product.highlighted",
      "Product.status"
    ]
  },
  "outputShape": {
    "kind": "object",
    "fields": [
      {
        "name": "updatedCount",
        "type": "number",
        "required": true
      },
      {
        "name": "products",
        "type": "array",
        "required": true,
        "item": {
          "fields": [
            {
              "name": "productId",
              "type": "string",
              "required": true,
              "fieldRef": "Product.productId"
            },
            {
              "name": "name",
              "type": "string",
              "required": true,
              "fieldRef": "Product.name"
            },
            {
              "name": "highlighted",
              "type": "boolean",
              "required": true,
              "fieldRef": "Product.highlighted"
            },
            {
              "name": "status",
              "type": "string",
              "required": true,
              "fieldRef": "Product.status"
            }
          ]
        }
      }
    ]
  },
  "inputs": [
    {
      "inputId": "productIds",
      "fieldRef": "Product.productId",
      "required": true,
      "source": "userInput",
      "description": "Lista de IDs dos produtos que terão o destaque alterado."
    },
    {
      "inputId": "highlighted",
      "fieldRef": "Product.highlighted",
      "required": true,
      "source": "userInput",
      "description": "Valor do destaque a ser aplicado: true para marcar como destaque, false para remover o destaque."
    }
  ],
  "contextResolution": [
    {
      "targetRef": "actorSession.actorId",
      "source": "actorSession",
      "originRef": "actorSession.actorId",
      "description": "Identidade da loja autenticada obtida da sessão para autorizar a alteração manual de destaques de produtos."
    }
  ],
  "acceptanceAssertions": [
    "Após a confirmação, todos os produtos informados têm o campo highlighted atualizado conforme o valor solicitado.",
    "Produtos com status unavailable não podem ser marcados como destaque (highlighted=true); a operação rejeita a marcação de destaque para produtos indisponíveis.",
    "Produtos indisponíveis podem ter o destaque removido (highlighted=false) normalmente.",
    "A operação é executada manualmente pela loja, sem qualquer automatização na seleção de produtos para destaque.",
    "O resultado retorna a lista de produtos atualizados com seus respectivos valores de highlighted e status confirmados."
  ],
  "pageId": "setProductHighlights",
  "commandName": "setProductHighlights",
  "bffName": "petShop.setProductHighlights.setProductHighlights",
  "capability": {
    "capabilityId": "setProductHighlights",
    "title": "Definir produtos em destaque",
    "actor": "loja",
    "priority": "now"
  },
  "statusFrontend": "toCreate",
  "statusBackend": "toCreate"
} as const;

export default operationSetProductHighlights;
