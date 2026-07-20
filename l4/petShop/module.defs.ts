/// <mls fileReference="_102049_/l4/petShop/module.defs.ts" enhancement="_blank"/>

export const petShopModule = {
  "module": {
    "moduleName": "petShop",
    "title": "Pet Shop — Catálogo e Reserva de Produtos",
    "purpose": "Este módulo oferece uma vitrine digital e catálogo completo de produtos do pet shop, permitindo que clientes pesquisem, filtrem e reservem produtos para retirada presencial na loja. O atendente gerencia as reservas recebidas, confirma a disponibilidade e registra o pagamento presencial no momento da retirada, encerrando o ciclo da reserva.",
    "businessDomain": "Pet Retail",
    "languages": [
      "pt-BR"
    ],
    "visualStyle": "Storefront-first, catálogo limpo com busca e filtros, fluxo de reserva simples, UI de gestão do atendente orientada por status"
  },
  "designContext": {
    "initialPrompt": "criar um site petShop , em portugues , com vendas de produtos , o cliente reserva e busca e paga na loja , mostrar produtos em destaques, e lista completa de produtos com pesquisa por tipo pet , categoria , nome e filtro por valor",
    "userLanguage": "pt-BR",
    "openDetails": [
      {
        "title": "Como o cliente se identifica para fazer uma reserva?",
        "description": "Define se é necessário login ou apenas dados básicos como nome e telefone."
      },
      {
        "title": "Qual o prazo de validade para retirada de uma reserva?",
        "description": "Impacta a regra de negócio para expiração ou cancelamento automático."
      },
      {
        "title": "A reserva deve bloquear ou reduzir a quantidade disponível no estoque?",
        "description": "Define se o sistema precisa controlar saldo reservado."
      }
    ],
    "decisions": []
  },
  "ontology": {
    "entities": {
      "Product": {
        "title": "Produto",
        "description": "Produto do catálogo do pet shop, mantido por processo administrativo externo, com nome, preço, tipo de pet, categoria e flag de destaque para vitrine.",
        "kind": "mdm",
        "ownership": "external"
      },
      "ProductCategory": {
        "title": "Categoria de Produto",
        "description": "Categoria de produtos do pet shop, como ração, acessórios, higiene e brinquedos, usada como filtro no catálogo.",
        "kind": "mdm",
        "ownership": "external"
      },
      "PetType": {
        "title": "Tipo de Pet",
        "description": "Tipo de pet (cão, gato, pássaro, etc.) associado aos produtos do catálogo, usado como filtro na busca.",
        "kind": "mdm",
        "ownership": "external"
      },
      "Reservation": {
        "title": "Reserva",
        "description": "Reserva de produtos feita pelo cliente para retirada presencial na loja, contendo dados de contato (nome e telefone), prazo de validade de 24 horas e status de atendimento controlado pelo atendente.",
        "kind": "core",
        "ownership": "moduleOwned",
        "statusEnum": [
          "pending",
          "confirmed",
          "fulfilled",
          "cancelled"
        ],
        "lifecycleStates": [
          "pending",
          "confirmed",
          "fulfilled",
          "cancelled"
        ]
      },
      "ReservationItem": {
        "title": "Item de Reserva",
        "description": "Item de linha de uma reserva, contendo a referência ao produto e a quantidade reservada pelo cliente.",
        "kind": "supporting",
        "ownership": "moduleOwned"
      },
      "Payment": {
        "title": "Pagamento Presencial",
        "description": "Registro do pagamento recebido presencialmente na loja no momento da retirada da reserva, informando método e valor total.",
        "kind": "event",
        "ownership": "moduleOwned",
        "statusEnum": [
          "posted",
          "voided"
        ]
      }
    }
  },
  "journey": {
    "defPath": "l4/petShop/siteMap.defs.ts"
  },
  "relationships": [
    {
      "relationshipId": "productBelongsToCategory",
      "fromEntity": "Product",
      "toEntity": "ProductCategory",
      "type": "manyToOne",
      "description": "Cada produto pertence a uma categoria de produto."
    },
    {
      "relationshipId": "productTargetsPetType",
      "fromEntity": "Product",
      "toEntity": "PetType",
      "type": "manyToOne",
      "description": "Cada produto é associado a um tipo de pet para filtragem no catálogo."
    },
    {
      "relationshipId": "reservationHasItems",
      "fromEntity": "Reservation",
      "toEntity": "ReservationItem",
      "type": "oneToMany",
      "description": "Uma reserva contém um ou mais itens de reserva com produtos e quantidades."
    },
    {
      "relationshipId": "reservationItemRefersToProduct",
      "fromEntity": "ReservationItem",
      "toEntity": "Product",
      "type": "manyToOne",
      "description": "Cada item de reserva referencia um produto do catálogo."
    },
    {
      "relationshipId": "reservationHasPayment",
      "fromEntity": "Reservation",
      "toEntity": "Payment",
      "type": "oneToOne",
      "description": "Uma reserva atendida possui um registro de pagamento presencial associado."
    }
  ],
  "approvedArtifacts": {
    "mdm": [
      {
        "title": "Catálogo de Produtos",
        "reason": "Os produtos exibidos no catálogo e na vitrine são gerenciados por processo administrativo externo; o módulo apenas consome os dados de produto, incluindo flag de destaque e preço."
      },
      {
        "title": "Categorias de Produto",
        "reason": "As categorias utilizadas nos filtros de catálogo são dados mestros externos, gerenciados fora do módulo."
      },
      {
        "title": "Tipos de Pet",
        "reason": "Os tipos de pet usados para filtragem no catálogo são dados mestros externos, gerenciados fora do módulo."
      }
    ],
    "horizontals": [],
    "plugins": [],
    "agents": []
  }
} as const;

export default petShopModule;
