/// <mls fileReference="_102049_/l4/operations/completeServiceExecution.defs.ts" enhancement="_blank"/>

export const operationCompleteServiceExecution = {
  "operationId": "completeServiceExecution",
  "title": "Concluir serviço agendado",
  "actor": "operador",
  "entity": "ServiceBooking",
  "kind": "update",
  "reads": [
    "ServiceBooking"
  ],
  "writes": [
    "ServiceBooking"
  ],
  "rulesApplied": [
    "onlyAssignedOperatorCanComplete",
    "paymentInStoreOnly"
  ],
  "story": {
    "actor": "operador",
    "goal": "Marcar como concluído o serviço agendado que estava em execução, liberando capacidade para futuros agendamentos.",
    "steps": [
      "O operador seleciona o agendamento em andamento na sua agenda.",
      "O sistema valida que o operador é o operador atribuído ao agendamento e que o status atual é 'inProgress'.",
      "O operador confirma a conclusão do serviço.",
      "O sistema atualiza o status para 'completed' e registra a data e hora da conclusão."
    ],
    "outcome": "O agendamento fica com status 'completed', a data de conclusão é registrada e a capacidade do operador é liberada para futuros agendamentos no turno correspondente."
  },
  "accessPattern": {
    "kind": "commandInput",
    "entity": "ServiceBooking",
    "keyField": "ServiceBooking.serviceBookingId",
    "pagination": "none",
    "selection": "single",
    "output": [
      "ServiceBooking.serviceBookingId",
      "ServiceBooking.status",
      "ServiceBooking.completedAt"
    ]
  },
  "inputs": [
    {
      "inputId": "serviceBookingId",
      "fieldRef": "ServiceBooking.serviceBookingId",
      "required": true,
      "source": "selectedEntity",
      "description": "Identificador do agendamento de serviço a ser concluído, selecionado pelo operador na agenda."
    },
    {
      "inputId": "operatorId",
      "fieldRef": "ServiceBooking.operatorId",
      "required": true,
      "source": "actorSession",
      "description": "Identificador do operador autenticado que está concluindo o serviço, usado para validar que ele é o operador atribuído."
    },
    {
      "inputId": "completedAt",
      "fieldRef": "ServiceBooking.completedAt",
      "required": true,
      "source": "systemDefault",
      "description": "Data e hora em que o serviço foi marcado como concluído, gerada automaticamente pelo sistema."
    }
  ],
  "contextResolution": [
    {
      "targetRef": "ServiceBooking.serviceBookingId",
      "source": "selectedEntity",
      "originRef": "ServiceBooking.serviceBookingId",
      "description": "O agendamento atualmente selecionado pelo operador na tela de agenda, identificado pelo seu serviceBookingId."
    },
    {
      "targetRef": "ServiceBooking.operatorId",
      "source": "actorSession",
      "originRef": "actorSession.actorId",
      "description": "O identificador do operador autenticado obtido da sessão ativa, usado para verificar se ele é o operador atribuído ao agendamento."
    },
    {
      "targetRef": "ServiceBooking.completedAt",
      "source": "systemDefault",
      "originRef": "systemDefault.now",
      "description": "A data e hora atual do sistema no momento da conclusão, registrada automaticamente como completedAt."
    }
  ],
  "acceptanceAssertions": [
    "O agendamento existe e seu status atual é 'inProgress' antes da conclusão.",
    "Apenas o operador atribuído ao agendamento (ServiceBooking.operatorId igual ao actorSession.actorId) pode concluir o serviço; outros operadores recebem erro.",
    "Após a confirmação, o status do agendamento é atualizado para 'completed'.",
    "Após a confirmação, o campo completedAt é preenchido com a data e hora atual do sistema.",
    "O pagamento do serviço é realizado presencialmente na loja; nenhuma cobrança online é disparada na conclusão."
  ],
  "pageId": "serviceBookingLifecycle",
  "commandName": "completeServiceExecution",
  "bffName": "petShop.serviceBookingLifecycle.completeServiceExecution",
  "capability": {
    "capabilityId": "serviceBookingLifecycle",
    "title": "Ciclo de vida do agendamento de serviço",
    "actor": "operador",
    "priority": "now"
  },
  "statusFrontend": "toCreate",
  "statusBackend": "toCreate"
} as const;

export default operationCompleteServiceExecution;
