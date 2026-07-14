/// <mls fileReference="_102049_/l4/petShop/module.defs.ts" enhancement="_blank"/>

export const petShopModule = {
  "module": {
    "moduleName": "petShop",
    "title": "Pet Shop — Site de Serviços, Produtos e Adoção",
    "purpose": "Site do pet shop que permite aos clientes navegar pelo catálogo de produtos, comprar para retirada na loja, agendar serviços como banho e tosa, e visualizar pets disponíveis para adoção. Permite ao administrador gerenciar operadores, turnos, produtos, serviços e pets, e aos operadores consultar e executar serviços agendados.",
    "businessDomain": "Pet Shop Retail & Services",
    "languages": [
      "pt-BR"
    ],
    "visualStyle": "Site-first, visualmente atraente, com galerias de imagens, catálogos navegáveis, carrinho de compras e agenda orientada por status"
  },
  "designContext": {
    "initialPrompt": "criar um site 'petShop' , em portugues , com visual bonito, permite usuário agenda serviços , ver pets para adoção (com imagem) , comprar produtos , e pegar na loja , com pagamento na loja , fazer controle de operadores por turno , para serviços como lavagen de pets a pagina inicial deve listar produtos , produtos em destaques, e serviços oferecidos",
    "userLanguage": "pt-BR",
    "openDetails": [
      {
        "title": "Qual o horário de funcionamento da loja para disponibilização de agendamentos?",
        "description": "Define os horários e dias disponíveis no calendário de agendamento de serviços."
      },
      {
        "title": "O pagamento dos serviços agendados também é realizado na loja?",
        "description": "Define se o fluxo de pagamento dos serviços segue o mesmo modelo dos produtos (presencial)."
      }
    ],
    "decisions": []
  },
  "ontology": {
    "entities": {
      "Product": {
        "title": "Produto",
        "description": "Produto do catálogo do pet shop, com nome, descrição, preço, imagem, categoria e flag de destaque para exibição na página inicial.",
        "kind": "core",
        "ownership": "moduleOwned",
        "statusEnum": [
          "active",
          "inactive"
        ],
        "lifecycleStates": [
          "active",
          "inactive"
        ]
      },
      "ProductCategory": {
        "title": "Categoria de Produto",
        "description": "Categoria de classificação de produtos do catálogo, utilizada para filtragem e organização na navegação do cliente.",
        "kind": "mdm",
        "ownership": "moduleOwned"
      },
      "Order": {
        "title": "Pedido de Retirada",
        "description": "Pedido de compra de produtos finalizado pelo cliente para retirada presencial na loja, com pagamento na loja física.",
        "kind": "core",
        "ownership": "moduleOwned",
        "statusEnum": [
          "registered",
          "completed",
          "cancelled"
        ],
        "lifecycleStates": [
          "registered",
          "completed",
          "cancelled"
        ]
      },
      "OrderItem": {
        "title": "Item do Pedido",
        "description": "Linha de item de um pedido de retirada, contendo a referência ao produto e a quantidade solicitada pelo cliente.",
        "kind": "supporting",
        "ownership": "moduleOwned"
      },
      "Service": {
        "title": "Serviço Oferecido",
        "description": "Serviço oferecido pelo pet shop, como banho e tosa, com descrição, duração estimada, preço e estado de ativação para agendamento.",
        "kind": "core",
        "ownership": "moduleOwned",
        "statusEnum": [
          "active",
          "inactive"
        ],
        "lifecycleStates": [
          "active",
          "inactive"
        ]
      },
      "ServiceBooking": {
        "title": "Agendamento de Serviço",
        "description": "Agendamento de um serviço feito pelo cliente para uma data e horário, atribuído a um operador disponível no turno correspondente, com ciclo de execução pelo operador.",
        "kind": "core",
        "ownership": "moduleOwned",
        "statusEnum": [
          "confirmed",
          "inProgress",
          "completed",
          "cancelled"
        ],
        "lifecycleStates": [
          "confirmed",
          "inProgress",
          "completed",
          "cancelled"
        ]
      },
      "Operator": {
        "title": "Operador",
        "description": "Funcionário do pet shop responsável por executar serviços agendados, cadastrado pelo administrador e alocável em um ou mais turnos de trabalho.",
        "kind": "core",
        "ownership": "moduleOwned"
      },
      "Shift": {
        "title": "Turno de Trabalho",
        "description": "Turno de trabalho recorrente definido pelo administrador com horário de início, fim e dias da semana, base para o cálculo de capacidade de agendamento.",
        "kind": "mdm",
        "ownership": "moduleOwned"
      },
      "ShiftAssignment": {
        "title": "Alocação de Operador em Turno",
        "description": "Vínculo operacional entre um operador e um turno, definindo a capacidade de atendimentos simultâneos disponíveis naquele horário.",
        "kind": "core",
        "ownership": "moduleOwned"
      },
      "AdoptablePet": {
        "title": "Pet para Adoção",
        "description": "Pet cadastrado pelo administrador para adoção, com nome, idade, descrição e foto, cuja disponibilidade controla a exibição na galeria pública.",
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
      "AdoptionInterest": {
        "title": "Manifestação de Interesse em Adoção",
        "description": "Registro do interesse de um cliente em adotar um pet, iniciado no site e finalizado presencialmente na loja com verificação e documentação.",
        "kind": "core",
        "ownership": "moduleOwned",
        "statusEnum": [
          "registered",
          "completed",
          "cancelled"
        ],
        "lifecycleStates": [
          "registered",
          "completed",
          "cancelled"
        ]
      }
    }
  },
  "journey": {
    "defPath": "l4/petShop/journeys/petShopJourneys.defs.ts"
  },
  "relationships": [
    {
      "relationshipId": "productHasCategory",
      "fromEntity": "Product",
      "toEntity": "ProductCategory",
      "type": "manyToOne",
      "description": "Cada produto pertence a uma categoria de produto do catálogo."
    },
    {
      "relationshipId": "orderHasOrderItems",
      "fromEntity": "Order",
      "toEntity": "OrderItem",
      "type": "oneToMany",
      "description": "Um pedido de retirada contém um ou mais itens de pedido."
    },
    {
      "relationshipId": "orderItemReferencesProduct",
      "fromEntity": "OrderItem",
      "toEntity": "Product",
      "type": "manyToOne",
      "description": "Cada item do pedido referencia um produto do catálogo."
    },
    {
      "relationshipId": "bookingForService",
      "fromEntity": "ServiceBooking",
      "toEntity": "Service",
      "type": "manyToOne",
      "description": "Cada agendamento é para um serviço oferecido pelo pet shop."
    },
    {
      "relationshipId": "bookingAssignedToOperator",
      "fromEntity": "ServiceBooking",
      "toEntity": "Operator",
      "type": "manyToOne",
      "description": "Cada agendamento é atribuído a um operador disponível no turno correspondente."
    },
    {
      "relationshipId": "shiftAssignmentToOperator",
      "fromEntity": "ShiftAssignment",
      "toEntity": "Operator",
      "type": "manyToOne",
      "description": "Cada alocação vincula um operador a um turno de trabalho."
    },
    {
      "relationshipId": "shiftAssignmentToShift",
      "fromEntity": "ShiftAssignment",
      "toEntity": "Shift",
      "type": "manyToOne",
      "description": "Cada alocação refere-se a um turno de trabalho definido pelo administrador."
    },
    {
      "relationshipId": "adoptionInterestForPet",
      "fromEntity": "AdoptionInterest",
      "toEntity": "AdoptablePet",
      "type": "manyToOne",
      "description": "Cada manifestação de interesse refere-se a um pet disponível para adoção."
    }
  ],
  "approvedArtifacts": {
    "mdm": [
      {
        "title": "Categoria de Produto",
        "reason": "Catálogo de categorias de produto com identidade estável e mudanças raras, gerenciado pelo administrador para classificação de produtos no catálogo."
      },
      {
        "title": "Turno de Trabalho",
        "reason": "Definição de turnos com identidade estável usada para cálculo de capacidade de agendamento, raramente alterada após configuração inicial pelo administrador."
      }
    ],
    "horizontals": [
      {
        "title": "Pagamento Presencial",
        "reason": "Todas as transações — pedidos de retirada e serviços agendados — exigem pagamento presencial na loja física, demandando uma capacidade de pagamento não online."
      }
    ],
    "plugins": [
      {
        "title": "Documento Fiscal",
        "reason": "Vendas presenciais na loja física podem exigir emissão de documentos fiscais (NF-e/SAT) conforme legislação tributária local."
      },
      {
        "title": "TEF / Terminal de Cartão",
        "reason": "O pagamento presencial na loja pode utilizar terminais de captura de cartão (TEF) para processar pagamentos de pedidos e serviços."
      }
    ],
    "agents": []
  }
} as const;

export default petShopModule;
