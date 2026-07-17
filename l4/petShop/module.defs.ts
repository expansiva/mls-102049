/// <mls fileReference="_102049_/l4/petShop/module.defs.ts" enhancement="_blank"/>

export const petShopModule = {
  "module": {
    "moduleName": "petShop",
    "title": "Site PetShop",
    "purpose": "O módulo Site PetShop permite que a loja cadastre e gerencie um catálogo de produtos para pets, com destaques manuais na página inicial. Os clientes podem navegar, buscar e filtrar produtos por tipo de pet, categoria e faixa de valor, reservá-los para retirada na loja física e efetuar o pagamento presencialmente. A reserva compromete temporariamente a disponibilidade dos produtos até a retirada, expiração ou cancelamento.",
    "businessDomain": "Pet retail",
    "languages": [
      "pt-BR"
    ],
    "visualStyle": "Catálogo-first, cards de produto com foto e preço, seção de destaques na home, checkout simplificado focado em reserva e retirada na loja"
  },
  "designContext": {
    "initialPrompt": "criar um site petShop , em portugues , com vendas de produtos , o cliente reserva e busca e paga na loja , mostrar produtos em destaques, e lista completa de produtos com pesquisa por tipo pet , categoria , nome e filtro por valor",
    "userLanguage": "pt-BR",
    "openDetails": [
      {
        "title": "Qual o prazo de expiração de uma reserva antes que o produto seja liberado?",
        "description": "Define a regra de negócio para liberação automática de itens reservados."
      },
      {
        "title": "O cliente precisa estar autenticado para reservar produtos?",
        "description": "Determina se a reserva exige identificação do cliente ou pode ser anônima."
      },
      {
        "title": "Existe limite de quantidade de itens ou de produtos distintos por reserva?",
        "description": "Pode afetar a modelagem da reserva e regras de separação na loja."
      }
    ],
    "decisions": [
      {
        "recommendationId": "reservationExpirationPriority",
        "artifactType": "decision",
        "title": "featurePriority",
        "decidedPriority": "now",
        "accepted": true
      }
    ]
  },
  "ontology": {
    "entities": {
      "Product": {
        "title": "Produto",
        "description": "Item do catálogo da loja com nome, descrição, preço, tipo de pet indicado, categoria, flag de destaque e disponibilidade. É o núcleo da vitrine pública e das reservas.",
        "kind": "core",
        "ownership": "moduleOwned",
        "statusEnum": [
          "available",
          "unavailable"
        ],
        "lifecycleStates": [
          "available",
          "unavailable"
        ]
      },
      "PetType": {
        "title": "Tipo de Pet",
        "description": "Classificação do produto por tipo de pet indicado (cão, gato, etc.), usada como filtro no catálogo e atributo obrigatório do produto.",
        "kind": "mdm",
        "ownership": "moduleOwned"
      },
      "Category": {
        "title": "Categoria",
        "description": "Categoria do produto (racao, brinquedo, etc.), usada como filtro no catálogo e atributo obrigatório do produto.",
        "kind": "mdm",
        "ownership": "moduleOwned"
      },
      "Reservation": {
        "title": "Reserva",
        "description": "Reserva de produtos criada pelo cliente para retirada na loja física. Possui ciclo de vida desde o rascunho até a entrega, expiração ou cancelamento, com prazo de validade de 24 horas.",
        "kind": "core",
        "ownership": "moduleOwned",
        "statusEnum": [
          "draft",
          "active",
          "ready",
          "delivered",
          "expired",
          "cancelled"
        ],
        "lifecycleStates": [
          "draft",
          "active",
          "ready",
          "delivered",
          "expired",
          "cancelled"
        ]
      },
      "ReservationItem": {
        "title": "Item da Reserva",
        "description": "Linha de detalhe da reserva que vincula um produto a uma quantidade reservada pelo cliente.",
        "kind": "supporting",
        "ownership": "moduleOwned"
      },
      "Payment": {
        "title": "Pagamento Presencial",
        "description": "Registro do pagamento realizado presencialmente na loja física no momento da retirada da reserva. É um fato imutável que pode ser anulado por um evento compensatório.",
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
    "defPath": "l4/petShop/journeys/petShopJourneys.defs.ts"
  },
  "relationships": [
    {
      "relationshipId": "productHasPetType",
      "fromEntity": "Product",
      "toEntity": "PetType",
      "type": "manyToOne",
      "description": "Cada produto é classificado por um tipo de pet indicado."
    },
    {
      "relationshipId": "productHasCategory",
      "fromEntity": "Product",
      "toEntity": "Category",
      "type": "manyToOne",
      "description": "Cada produto pertence a uma categoria do catálogo."
    },
    {
      "relationshipId": "reservationHasReservationItems",
      "fromEntity": "Reservation",
      "toEntity": "ReservationItem",
      "type": "oneToMany",
      "description": "Uma reserva contém múltiplos itens, um para cada produto reservado com sua quantidade."
    },
    {
      "relationshipId": "reservationItemHasProduct",
      "fromEntity": "ReservationItem",
      "toEntity": "Product",
      "type": "manyToOne",
      "description": "Cada item da reserva referencia um produto do catálogo."
    },
    {
      "relationshipId": "reservationHasPayment",
      "fromEntity": "Reservation",
      "toEntity": "Payment",
      "type": "oneToOne",
      "description": "Uma reserva entregue possui um registro de pagamento presencial associado."
    }
  ],
  "approvedArtifacts": {
    "mdm": [
      {
        "title": "Tipos de Pet e Categorias",
        "reason": "Tipos de pet e categorias são dados de referência estáveis que poderiam ser gerenciados pelo MDM da plataforma, embora nesta fase sejam entidades do módulo."
      }
    ],
    "horizontals": [
      {
        "title": "Pagamento presencial",
        "reason": "O pagamento é realizado exclusivamente na loja física, exigindo capacidade de processamento de pagamento presencial (dinheiro, cartão, etc.)."
      }
    ],
    "plugins": [],
    "agents": [
      {
        "title": "Autenticação de usuário (plataforma)",
        "reason": "A confirmação de reservas exige cliente autenticado — capacidade fornecida pela plataforma de auth/RBAC, não pelo módulo."
      }
    ]
  }
} as const;

export default petShopModule;
