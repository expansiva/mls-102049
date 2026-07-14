/// <mls fileReference="_102049_/l4/operations/viewOperatorSchedule.defs.ts" enhancement="_blank"/>

export const operationViewOperatorSchedule = {
  "operationId": "viewOperatorSchedule",
  "title": "Consultar agenda de serviços do turno",
  "actor": "operador",
  "entity": "ServiceBooking",
  "kind": "query",
  "reads": [
    "ServiceBooking",
    "Service"
  ],
  "writes": [],
  "rulesApplied": [
    "operatorSeesOnlyAssignedShiftBookings",
    "operatorScheduleShowsConfirmedOnly"
  ],
  "story": {
    "actor": "operador",
    "goal": "Visualizar os serviços agendados para o seu turno, com horário, tipo de serviço e dados do cliente.",
    "steps": [
      "O operador acessa sua agenda de serviços.",
      "O sistema filtra os agendamentos atribuídos ao operador autenticado e com status confirmado.",
      "O sistema retorna a lista ordenada por data e horário, exibindo tipo de serviço, dados do cliente e observações."
    ],
    "outcome": "O operador visualiza sua agenda do turno com apenas agendamentos confirmados atribuídos a ele, podendo selecionar um para revisar detalhes."
  },
  "accessPattern": {
    "kind": "list",
    "entity": "ServiceBooking",
    "keyField": "ServiceBooking.serviceBookingId",
    "pagination": "optional",
    "selection": "single",
    "output": [
      "ServiceBooking.serviceBookingId",
      "ServiceBooking.serviceId",
      "ServiceBooking.customerName",
      "ServiceBooking.customerPhone",
      "ServiceBooking.bookingDate",
      "ServiceBooking.bookingTime",
      "ServiceBooking.status",
      "ServiceBooking.notes"
    ]
  },
  "inputs": [
    {
      "inputId": "operatorId",
      "fieldRef": "ServiceBooking.operatorId",
      "required": true,
      "source": "actorSession",
      "description": "Identificador do operador autenticado, usado para filtrar apenas os agendamentos a ele atribuídos."
    }
  ],
  "contextResolution": [
    {
      "targetRef": "ServiceBooking.operatorId",
      "source": "actorSession",
      "originRef": "actorSession.actorId",
      "description": "Resolvido a partir da sessão autenticada do operador, identificando o operador que está consultando sua agenda."
    }
  ],
  "acceptanceAssertions": [
    "A lista retornada contém apenas agendamentos cujo operatorId corresponde ao operador autenticado na sessão",
    "A lista retornada contém apenas agendamentos com status igual a 'confirmed'",
    "Cada item da lista exibe serviceId, customerName, customerPhone, bookingDate, bookingTime, status e notes",
    "A lista está ordenada por bookingDate e bookingTime em ordem ascendente",
    "Agendamentos de outros operadores ou de outros turnos não aparecem na lista"
  ],
  "pageId": "viewOperatorSchedule",
  "commandName": "viewOperatorSchedule",
  "bffName": "petShop.viewOperatorSchedule.viewOperatorSchedule",
  "capability": {
    "capabilityId": "viewOperatorSchedule",
    "title": "Consultar agenda de serviços do turno",
    "actor": "operador",
    "priority": "now"
  },
  "statusFrontend": "toCreate",
  "statusBackend": "toCreate"
} as const;

export default operationViewOperatorSchedule;
