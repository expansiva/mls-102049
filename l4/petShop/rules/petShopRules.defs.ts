/// <mls fileReference="_102049_/l4/petShop/rules/petShopRules.defs.ts" enhancement="_blank"/>

export const petShopRules = {
  "ruleSetId": "petShopRules",
  "rules": [
    {
      "ruleId": "featuredProductsOnly",
      "title": "Vitrine apenas com produtos em destaque",
      "description": "A vitrine deve exibir exclusivamente produtos marcados como destaque por processo administrativo externo; produtos não destacados nunca aparecem na vitrine.",
      "appliesTo": [
        "Product"
      ],
      "layer": "domain"
    },
    {
      "ruleId": "featuredOrderFlexible",
      "title": "Ordem dos destaques é flexível",
      "description": "A ordem de exibição dos produtos em destaque na vitrine pode variar conforme critérios definidos pela loja, sem ordem fixa obrigatória.",
      "appliesTo": [
        "Product"
      ],
      "layer": "application"
    },
    {
      "ruleId": "combinedFilters",
      "title": "Filtros de catálogo combináveis",
      "description": "Os filtros de tipo de pet, categoria, nome e faixa de valor devem funcionar simultaneamente, permitindo combinação de múltiplos critérios na pesquisa do catálogo.",
      "appliesTo": [
        "Product"
      ],
      "layer": "application"
    },
    {
      "ruleId": "catalogShowsAll",
      "title": "Catálogo lista todos os produtos",
      "description": "A listagem do catálogo deve mostrar todos os produtos cadastrados, independentemente de estarem marcados como destaque ou não.",
      "appliesTo": [
        "Product"
      ],
      "layer": "domain"
    },
    {
      "ruleId": "caseInsensitiveSearch",
      "title": "Pesquisa por nome insensível a caixa",
      "description": "A pesquisa de produtos por nome deve ser insensível a maiúsculas e minúsculas, retornando resultados correspondentes independente da capitalização informada.",
      "appliesTo": [
        "Product"
      ],
      "layer": "application"
    },
    {
      "ruleId": "reservationRequiresContact",
      "title": "Reserva exige nome e telefone",
      "description": "Uma reserva só pode ser registrada se contiver no mínimo o nome e o telefone do cliente; reservas sem esses dados são rejeitadas.",
      "appliesTo": [
        "Reservation"
      ],
      "layer": "domain"
    },
    {
      "ruleId": "reservationValidity24h",
      "title": "Validade da reserva de 24 horas",
      "description": "Cada reserva tem validade de 24 horas a partir do registro; após esse prazo o atendente pode cancelá-la, não havendo renovação automática.",
      "appliesTo": [
        "Reservation"
      ],
      "layer": "domain"
    },
    {
      "ruleId": "noAutomaticStockBlock",
      "title": "Sem bloqueio automático de estoque",
      "description": "Não há bloqueio automático de estoque no momento da reserva; a disponibilidade real do produto é verificada pelo atendente na preparação ou retirada.",
      "appliesTo": [
        "ReservationItem"
      ],
      "layer": "domain"
    },
    {
      "ruleId": "multipleProductsPerReservation",
      "title": "Múltiplos produtos por reserva",
      "description": "O cliente pode reservar mais de um produto na mesma reserva, cada um com sua própria quantidade, formando múltiplos itens de reserva.",
      "appliesTo": [
        "ReservationItem"
      ],
      "layer": "domain"
    },
    {
      "ruleId": "reservationStatuses",
      "title": "Status permitidos da reserva",
      "description": "Uma reserva pode assumir apenas os status: pendente, confirmada, atendida (retirada e paga) ou cancelada; nenhum outro status é válido no domínio.",
      "appliesTo": [
        "Reservation"
      ],
      "layer": "domain"
    },
    {
      "ruleId": "inStorePaymentOnly",
      "title": "Pagamento exclusivamente presencial",
      "description": "O pagamento é sempre presencial na loja; não existe pagamento online nem qualquer forma de cobrança remota neste módulo.",
      "appliesTo": [
        "Payment"
      ],
      "layer": "domain"
    },
    {
      "ruleId": "totalFromPricesAndQuantities",
      "title": "Total calculado por preços e quantidades",
      "description": "O valor total do pagamento deve ser calculado a partir dos preços dos produtos e das quantidades reservadas em cada item da reserva.",
      "appliesTo": [
        "Payment"
      ],
      "layer": "domain"
    },
    {
      "ruleId": "paymentRequiresReceipt",
      "title": "Pagamento exige recebimento efetivo",
      "description": "A reserva só pode ser marcada como paga após o recebimento efetivo do pagamento pelo atendente; não é possível marcar como paga sem confirmação do pagamento presencial.",
      "appliesTo": [
        "Payment"
      ],
      "layer": "application"
    }
  ]
} as const;

export default petShopRules;
