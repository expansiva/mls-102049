/// <mls fileReference="_102049_/l4/rules/petShopRules.defs.ts" enhancement="_blank"/>

export const petShopRules = {
  "ruleSetId": "petShopRules",
  "rules": [
    {
      "ruleId": "highlightRequiresAvailableProduct",
      "title": "Destaque exige produto disponível",
      "description": "Apenas produtos marcados como destaque e que estejam disponíveis aparecem na seção de destaques; se um produto em destaque ficar indisponível, ele deixa de aparecer automaticamente e não pode ser marcado como destaque quando indisponível.",
      "appliesTo": [
        "Product"
      ],
      "layer": "domain"
    },
    {
      "ruleId": "searchIsCaseInsensitiveAndPartial",
      "title": "Busca por nome é insensível a caixa e parcial",
      "description": "A busca de produtos por nome deve ser insensível a maiúsculas e minúsculas e considerar correspondências parciais do termo informado.",
      "appliesTo": [
        "Product"
      ],
      "layer": "application"
    },
    {
      "ruleId": "filtersCanBeCombined",
      "title": "Filtros combináveis simultaneamente",
      "description": "Os filtros de tipo de pet, categoria e faixa de valor podem ser aplicados simultaneamente na filtragem do catálogo, sem exclusão mútua entre eles.",
      "appliesTo": [
        "Product",
        "PetType",
        "Category"
      ],
      "layer": "application"
    },
    {
      "ruleId": "onlyAvailableProductsVisibleAndReservable",
      "title": "Apenas produtos disponíveis são visíveis e reserváveis",
      "description": "Produtos indisponíveis não aparecem na vitrine pública, nos resultados de busca e filtragem, nem podem ser reservados em nenhuma circunstância.",
      "appliesTo": [
        "Product"
      ],
      "layer": "domain"
    },
    {
      "ruleId": "reservationRequiresAuthentication",
      "title": "Reserva exige cliente autenticado",
      "description": "O cliente deve estar autenticado para confirmar uma reserva; a autenticação é fornecida pela plataforma e não é responsabilidade do módulo.",
      "appliesTo": [
        "Reservation"
      ],
      "layer": "application"
    },
    {
      "ruleId": "reservationExpiresIn24Hours",
      "title": "Reserva expira em 24 horas",
      "description": "Uma reserva não retirada em 24 horas expira automaticamente, liberando os produtos comprometidos de volta ao catálogo.",
      "appliesTo": [
        "Reservation"
      ],
      "layer": "domain"
    },
    {
      "ruleId": "noItemLimitPerReservation",
      "title": "Sem limite de itens por reserva",
      "description": "Não há limite explícito de quantidade de itens ou produtos distintos por reserva nesta fase do produto.",
      "appliesTo": [
        "ReservationItem"
      ],
      "layer": "domain"
    },
    {
      "ruleId": "reservationTemporarilyCompromisesAvailability",
      "title": "Reserva compromete disponibilidade temporariamente",
      "description": "Ao confirmar uma reserva, a disponibilidade dos produtos reservados é comprometida temporariamente até a retirada, expiração ou cancelamento da reserva.",
      "appliesTo": [
        "Product",
        "ReservationItem"
      ],
      "layer": "domain"
    },
    {
      "ruleId": "paymentOnlyInStore",
      "title": "Pagamento exclusivamente presencial",
      "description": "O pagamento é realizado exclusivamente na loja física; não existe pagamento online em nenhuma etapa do fluxo de reserva.",
      "appliesTo": [
        "Payment"
      ],
      "layer": "application"
    },
    {
      "ruleId": "pickupRequiresValidReservation",
      "title": "Retirada exige reserva dentro do prazo",
      "description": "A retirada de produtos só é permitida quando a reserva está dentro do prazo de validade de 24 horas; reservas expiradas não permitem retirada.",
      "appliesTo": [
        "Reservation"
      ],
      "layer": "application"
    },
    {
      "ruleId": "expiredReservationRestoresAvailability",
      "title": "Expiração restaura disponibilidade dos produtos",
      "description": "Quando uma reserva expira, os produtos associados voltam a ficar disponíveis no catálogo e o cliente precisa fazer uma nova reserva para retirá-los.",
      "appliesTo": [
        "Reservation",
        "Product"
      ],
      "layer": "domain"
    },
    {
      "ruleId": "onlyActiveReservationsCanBeCancelled",
      "title": "Apenas reservas ativas podem ser canceladas",
      "description": "Somente reservas ativas — não expiradas, não entregues e não canceladas — podem ser canceladas pelo cliente ou pela loja.",
      "appliesTo": [
        "Reservation"
      ],
      "layer": "application"
    },
    {
      "ruleId": "cancellationRestoresAvailability",
      "title": "Cancelamento restaura disponibilidade imediatamente",
      "description": "Ao cancelar uma reserva, os produtos associados voltam imediatamente a ficar disponíveis no catálogo para outros clientes.",
      "appliesTo": [
        "Reservation",
        "Product"
      ],
      "layer": "domain"
    },
    {
      "ruleId": "productRequiresMinimumFields",
      "title": "Produto exige campos mínimos obrigatórios",
      "description": "Todo produto cadastrado deve ter pelo menos nome, preço, tipo de pet e categoria definidos; não é permitido cadastrar produto incompleto.",
      "appliesTo": [
        "Product",
        "PetType",
        "Category"
      ],
      "layer": "domain"
    },
    {
      "ruleId": "highlightsAreManualOnly",
      "title": "Destaques definidos manualmente",
      "description": "Os destaques de produtos são definidos manualmente pela loja, sem qualquer automatização ou regra automática de seleção.",
      "appliesTo": [
        "Product"
      ],
      "layer": "application"
    },
    {
      "ruleId": "storeCanMarkReservationReady",
      "title": "Loja marca reserva como pronta para retirada",
      "description": "A loja pode marcar uma reserva como pronta para retirada após separar fisicamente os produtos reservados pelo cliente.",
      "appliesTo": [
        "Reservation"
      ],
      "layer": "application"
    },
    {
      "ruleId": "reservationStatusReflectsStage",
      "title": "Status da reserva reflete estágio atual",
      "description": "O status da reserva deve refletir sempre o estágio atual do processo: ativa, pronta, entregue, expirada ou cancelada, sem estados intermediários não previstos.",
      "appliesTo": [
        "Reservation"
      ],
      "layer": "domain"
    }
  ]
} as const;

export default petShopRules;
