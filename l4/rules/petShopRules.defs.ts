/// <mls fileReference="_102049_/l4/rules/petShopRules.defs.ts" enhancement="_blank"/>

export const petShopRules = {
  "ruleSetId": "petShopRules",
  "rules": [
    {
      "ruleId": "featuredProductRequiresActive",
      "title": "Destaque exige produto ativo",
      "description": "Apenas produtos cadastrados e ativos podem ser marcados como destaque; a página inicial deve sempre exibir pelo menos um produto em destaque quando houver produtos cadastrados.",
      "appliesTo": [
        "Product"
      ],
      "layer": "domain"
    },
    {
      "ruleId": "activeServicesOnlyListed",
      "title": "Apenas serviços ativos são listados",
      "description": "A listagem de serviços para clientes, inclusive na página inicial, reflete apenas serviços ativos cadastrados pelo administrador; serviços inativos não aparecem.",
      "appliesTo": [
        "Service"
      ],
      "layer": "domain"
    },
    {
      "ruleId": "paymentInStoreOnly",
      "title": "Pagamento exclusivamente presencial",
      "description": "Todo pagamento — de pedidos de retirada e de serviços — é realizado apenas presencialmente na loja física; não existe pagamento online em nenhuma etapa do fluxo.",
      "appliesTo": [
        "Order",
        "ServiceBooking"
      ],
      "layer": "application"
    },
    {
      "ruleId": "pickupInStoreOnly",
      "title": "Retirada exclusivamente na loja",
      "description": "A retirada de produtos é feita exclusivamente na loja física; não há opção de entrega para pedidos de retirada.",
      "appliesTo": [
        "Order"
      ],
      "layer": "application"
    },
    {
      "ruleId": "orderRequiresAtLeastOneItem",
      "title": "Pedido exige ao menos um item",
      "description": "Um pedido de retirada deve conter pelo menos um item para ser finalizado; pedidos sem itens não podem ser concluídos.",
      "appliesTo": [
        "Order",
        "OrderItem"
      ],
      "layer": "domain"
    },
    {
      "ruleId": "schedulingCapacityByOperators",
      "title": "Capacidade de agendamento por operadores alocados",
      "description": "A disponibilidade de horários e a capacidade de agendamento em cada horário são determinadas pelo número de operadores alocados no turno correspondente.",
      "appliesTo": [
        "ServiceBooking",
        "ShiftAssignment"
      ],
      "layer": "domain"
    },
    {
      "ruleId": "noBookingWithoutAvailableOperator",
      "title": "Agendamento exige operador disponível",
      "description": "Um cliente não pode agendar um serviço em horário em que não há operador disponível alocado no turno correspondente.",
      "appliesTo": [
        "ServiceBooking",
        "Operator"
      ],
      "layer": "domain"
    },
    {
      "ruleId": "businessHoursForScheduling",
      "title": "Horário de funcionamento para agendamentos",
      "description": "O horário de funcionamento considerado para agendamentos é segunda a sábado, das 09:00 às 18:00, salvo configuração diferente definida pelo administrador.",
      "appliesTo": [
        "ServiceBooking",
        "Shift"
      ],
      "layer": "application"
    },
    {
      "ruleId": "adoptionStartedOnlineFinishedInStore",
      "title": "Adoção iniciada online e finalizada na loja",
      "description": "A adoção é apenas iniciada no site mediante manifestação de interesse; a finalização acontece presencialmente na loja com verificação e documentação.",
      "appliesTo": [
        "AdoptionInterest"
      ],
      "layer": "application"
    },
    {
      "ruleId": "onlyAvailablePetsShownInGallery",
      "title": "Galeria exibe apenas pets disponíveis",
      "description": "Apenas pets marcados como disponíveis para adoção pelo administrador aparecem na galeria de adoção exibida aos clientes.",
      "appliesTo": [
        "AdoptablePet"
      ],
      "layer": "domain"
    },
    {
      "ruleId": "operatorSeesOnlyAssignedShiftBookings",
      "title": "Operador vê apenas agendamentos do seu turno",
      "description": "O operador visualiza apenas os agendamentos atribuídos ao turno ao qual está alocado; agendamentos de outros turnos não são visíveis.",
      "appliesTo": [
        "ServiceBooking",
        "Operator"
      ],
      "layer": "application"
    },
    {
      "ruleId": "operatorScheduleShowsConfirmedOnly",
      "title": "Agenda do operador mostra apenas confirmados",
      "description": "A agenda do operador reflete apenas serviços com status confirmado; agendamentos não confirmados não aparecem na agenda.",
      "appliesTo": [
        "ServiceBooking"
      ],
      "layer": "domain"
    },
    {
      "ruleId": "onlyAssignedOperatorCanComplete",
      "title": "Apenas operador atribuído conclui serviço",
      "description": "Apenas o operador atribuído ao agendamento pode marcá-lo como concluído; outros operadores não podem finalizar agendamentos que não lhes foram atribuídos.",
      "appliesTo": [
        "ServiceBooking",
        "Operator"
      ],
      "layer": "application"
    },
    {
      "ruleId": "operatorMultipleShiftsAllowed",
      "title": "Operador pode ter múltiplos turnos sobrepostos",
      "description": "Um operador pode ser alocado em mais de um turno, e turnos sobrepostos no mesmo dia são permitidos para aumentar a capacidade de atendimento.",
      "appliesTo": [
        "ShiftAssignment",
        "Shift"
      ],
      "layer": "domain"
    },
    {
      "ruleId": "productImageUsesPlatformStorage",
      "title": "Imagem de produto usa armazenamento da plataforma",
      "description": "A imagem do produto utiliza o armazenamento de mídia da plataforma; o módulo não implementa armazenamento próprio de arquivos.",
      "appliesTo": [
        "Product"
      ],
      "layer": "application"
    },
    {
      "ruleId": "deactivatingServiceDoesNotCancelBookings",
      "title": "Desativar serviço não cancela agendamentos confirmados",
      "description": "Desativar um serviço não cancela agendamentos já confirmados; agendamentos existentes permanecem válidos mesmo após o serviço ser desativado.",
      "appliesTo": [
        "Service",
        "ServiceBooking"
      ],
      "layer": "domain"
    },
    {
      "ruleId": "petImageUsesPlatformStorage",
      "title": "Imagem de pet usa armazenamento da plataforma",
      "description": "A imagem do pet utiliza o armazenamento de mídia da plataforma; o módulo não implementa armazenamento próprio de arquivos.",
      "appliesTo": [
        "AdoptablePet"
      ],
      "layer": "application"
    }
  ]
} as const;

export default petShopRules;
