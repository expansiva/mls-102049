/// <mls fileReference="_102049_/l4/operations/createServiceBooking.defs.ts" enhancement="_blank"/>

export const operationCreateServiceBooking = {
  "operationId": "createServiceBooking",
  "title": "Agendar serviço",
  "actor": "cliente",
  "entity": "ServiceBooking",
  "kind": "create",
  "reads": [
    "Service",
    "Shift",
    "ShiftAssignment",
    "Operator",
    "ServiceBooking"
  ],
  "writes": [
    "ServiceBooking"
  ],
  "rulesApplied": [
    "paymentInStoreOnly",
    "schedulingCapacityByOperators",
    "noBookingWithoutAvailableOperator",
    "businessHoursForScheduling"
  ],
  "story": {
    "actor": "cliente",
    "goal": "Agendar um serviço para o seu pet escolhendo serviço, data e horário disponíveis conforme a capacidade de operadores.",
    "steps": [
      "O cliente seleciona o serviço desejado entre os serviços disponíveis.",
      "O cliente escolhe data e horário entre os disponíveis, calculados a partir da capacidade de operadores alocados por turno.",
      "O cliente informa seu nome, telefone e observações opcionais.",
      "O sistema identifica o turno correspondente à data e horário escolhidos e seleciona um operador disponível com capacidade no turno.",
      "O cliente confirma o agendamento e recebe a informação de que o pagamento será realizado presencialmente na loja."
    ],
    "outcome": "O agendamento é criado com status confirmed, atribuído a um operador disponível no turno correspondente, e o cliente é informado de que o pagamento é presencial na loja."
  },
  "accessPattern": {
    "kind": "commandInput",
    "entity": "ServiceBooking",
    "keyField": "ServiceBooking.serviceBookingId",
    "pagination": "none",
    "selection": "single",
    "output": [
      "ServiceBooking.serviceBookingId",
      "ServiceBooking.serviceId",
      "ServiceBooking.operatorId",
      "ServiceBooking.shiftId",
      "ServiceBooking.bookingDate",
      "ServiceBooking.bookingTime",
      "ServiceBooking.status",
      "ServiceBooking.customerName"
    ]
  },
  "inputs": [
    {
      "inputId": "serviceId",
      "fieldRef": "Service.serviceId",
      "required": true,
      "source": "userInput",
      "description": "Serviço selecionado pelo cliente para agendamento."
    },
    {
      "inputId": "customerName",
      "fieldRef": "ServiceBooking.customerName",
      "required": true,
      "source": "userInput",
      "description": "Nome do cliente que realiza o agendamento."
    },
    {
      "inputId": "customerPhone",
      "fieldRef": "ServiceBooking.customerPhone",
      "required": true,
      "source": "userInput",
      "description": "Telefone de contato do cliente."
    },
    {
      "inputId": "bookingDate",
      "fieldRef": "ServiceBooking.bookingDate",
      "required": true,
      "source": "userInput",
      "description": "Data do agendamento escolhida pelo cliente, dentro do horário de funcionamento."
    },
    {
      "inputId": "bookingTime",
      "fieldRef": "ServiceBooking.bookingTime",
      "required": true,
      "source": "userInput",
      "description": "Horário do agendamento escolhido pelo cliente, dentro do intervalo de funcionamento."
    },
    {
      "inputId": "notes",
      "fieldRef": "ServiceBooking.notes",
      "required": false,
      "source": "userInput",
      "description": "Observações adicionais opcionais informadas pelo cliente."
    },
    {
      "inputId": "serviceBookingId",
      "fieldRef": "ServiceBooking.serviceBookingId",
      "required": true,
      "source": "systemDefault",
      "description": "Identificador único gerado pelo sistema para o novo agendamento."
    },
    {
      "inputId": "shiftId",
      "fieldRef": "ServiceBooking.shiftId",
      "required": true,
      "source": "previousStepOutput",
      "description": "Turno correspondente à data e horário escolhidos, determinado pela disponibilidade de operadores."
    },
    {
      "inputId": "operatorId",
      "fieldRef": "ServiceBooking.operatorId",
      "required": true,
      "source": "previousStepOutput",
      "description": "Operador disponível selecionado pelo sistema entre os alocados no turno correspondente."
    },
    {
      "inputId": "status",
      "fieldRef": "ServiceBooking.status",
      "required": true,
      "source": "workflowState",
      "description": "Status inicial do agendamento definido pelo ciclo de vida como confirmed."
    },
    {
      "inputId": "createdAt",
      "fieldRef": "ServiceBooking.createdAt",
      "required": true,
      "source": "systemDefault",
      "description": "Data e hora de criação do agendamento gerada pelo sistema."
    },
    {
      "inputId": "updatedAt",
      "fieldRef": "ServiceBooking.updatedAt",
      "required": true,
      "source": "systemDefault",
      "description": "Data e hora da última atualização do agendamento gerada pelo sistema."
    }
  ],
  "contextResolution": [
    {
      "targetRef": "ServiceBooking.serviceBookingId",
      "source": "systemDefault",
      "originRef": "systemDefault.uuid",
      "description": "O backend gera um novo UUID para o identificador do agendamento no momento da criação."
    },
    {
      "targetRef": "ServiceBooking.shiftId",
      "source": "previousStepOutput",
      "originRef": "Shift.shiftId",
      "description": "O backend consulta as entidades Shift que cobrem a bookingDate e bookingTime informadas pelo cliente e seleciona o turno correspondente."
    },
    {
      "targetRef": "ServiceBooking.operatorId",
      "source": "previousStepOutput",
      "originRef": "Operator.operatorId",
      "description": "O backend consulta ShiftAssignment para o turno resolvido, verifica operadores com capacidade disponível (número de agendamentos existentes menor que o número de operadores alocados) e seleciona um operador disponível."
    },
    {
      "targetRef": "ServiceBooking.status",
      "source": "workflowState",
      "originRef": "ServiceBooking.status",
      "description": "O workflow serviceBookingLifecycle define o estado inicial do agendamento como confirmed ao criar a instância."
    },
    {
      "targetRef": "ServiceBooking.createdAt",
      "source": "systemDefault",
      "originRef": "systemDefault.now",
      "description": "O backend registra o timestamp atual do sistema no momento da criação do agendamento."
    },
    {
      "targetRef": "ServiceBooking.updatedAt",
      "source": "systemDefault",
      "originRef": "systemDefault.now",
      "description": "O backend registra o timestamp atual do sistema como data da última atualização ao criar o agendamento."
    }
  ],
  "acceptanceAssertions": [
    "Após a confirmação, o ServiceBooking existe com status igual a confirmed.",
    "O shiftId do agendamento referencia um Shift que cobre a bookingDate e bookingTime informadas pelo cliente.",
    "O operatorId do agendamento referencia um Operator alocado ao shiftId através de ShiftAssignment.",
    "Existe capacidade disponível no turno: o número de ServiceBookings já confirmados para o mesmo shiftId é menor que o número de operadores alocados via ShiftAssignment.",
    "A bookingDate e bookingTime estão dentro do horário de funcionamento (segunda a sábado, 09:00 às 18:00).",
    "Nenhuma transação de pagamento online é criada; o agendamento é registrado sem cobrança, pois o pagamento é presencial na loja.",
    "O serviceBookingId é um UUID recém-gerado e único.",
    "O serviceId referencia um Service existente no sistema."
  ],
  "pageId": "serviceBookingLifecycle",
  "commandName": "createServiceBooking",
  "bffName": "petShop.serviceBookingLifecycle.createServiceBooking",
  "capability": {
    "capabilityId": "serviceBookingLifecycle",
    "title": "Ciclo de vida do agendamento de serviço",
    "actor": "cliente",
    "priority": "now"
  },
  "statusFrontend": "toCreate",
  "statusBackend": "toCreate"
} as const;

export default operationCreateServiceBooking;
