/// <mls fileReference="_102049_/l4/petShop/ontology/ServiceBooking.defs.ts" enhancement="_blank"/>

export const petShopEntityServiceBooking = {
  "entityId": "ServiceBooking",
  "title": "Agendamento de Serviço",
  "description": "Agendamento de um serviço feito pelo cliente para uma data e horário, atribuído a um operador disponível no turno correspondente, com ciclo de execução pelo operador.",
  "kind": "core",
  "ownership": "moduleOwned",
  "fields": [
    {
      "fieldId": "serviceBookingId",
      "type": "uuid",
      "required": true,
      "description": "Identificador único do agendamento de serviço."
    },
    {
      "fieldId": "serviceId",
      "type": "uuid",
      "required": true,
      "description": "Referência ao serviço agendado pelo cliente."
    },
    {
      "fieldId": "operatorId",
      "type": "uuid",
      "required": true,
      "description": "Referência ao operador atribuído ao agendamento, disponível no turno correspondente."
    },
    {
      "fieldId": "shiftId",
      "type": "uuid",
      "required": true,
      "description": "Referência ao turno em que o agendamento foi alocado, determinado pela disponibilidade de operadores."
    },
    {
      "fieldId": "customerName",
      "type": "string",
      "required": true,
      "description": "Nome do cliente que realizou o agendamento."
    },
    {
      "fieldId": "customerPhone",
      "type": "string",
      "required": true,
      "description": "Telefone de contato do cliente para o agendamento."
    },
    {
      "fieldId": "bookingDate",
      "type": "date",
      "required": true,
      "description": "Data do agendamento do serviço, dentro do horário de funcionamento (segunda a sábado, 09:00 às 18:00)."
    },
    {
      "fieldId": "bookingTime",
      "type": "string",
      "required": true,
      "description": "Horário do agendamento, dentro do intervalo de funcionamento da loja."
    },
    {
      "fieldId": "status",
      "type": "string",
      "required": true,
      "description": "Situação atual do agendamento no ciclo de execução.",
      "enum": [
        "confirmed",
        "inProgress",
        "completed",
        "cancelled"
      ]
    },
    {
      "fieldId": "notes",
      "type": "text",
      "required": false,
      "description": "Observações adicionais sobre o agendamento informadas pelo cliente ou operador."
    },
    {
      "fieldId": "completedAt",
      "type": "datetime",
      "required": false,
      "description": "Data e hora em que o operador atribuído marcou o serviço como concluído."
    },
    {
      "fieldId": "cancelledAt",
      "type": "datetime",
      "required": false,
      "description": "Data e hora em que o agendamento foi cancelado."
    },
    {
      "fieldId": "cancelReason",
      "type": "text",
      "required": false,
      "description": "Motivo do cancelamento do agendamento."
    },
    {
      "fieldId": "createdAt",
      "type": "datetime",
      "required": true,
      "description": "Data e hora de criação do agendamento."
    },
    {
      "fieldId": "updatedAt",
      "type": "datetime",
      "required": true,
      "description": "Data e hora da última atualização do agendamento."
    }
  ],
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
} as const;

export default petShopEntityServiceBooking;
