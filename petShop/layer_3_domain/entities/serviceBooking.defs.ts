/// <mls fileReference="_102049_/l1/petShop/layer_3_domain/entities/serviceBooking.defs.ts" enhancement="_blank"/>

export const serviceBookingDomainEntity = {
  "schemaVersion": "2026-06-26",
  "artifactType": "domainEntity",
  "artifactId": "ServiceBooking",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbDomainEntity",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "ServiceBooking",
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
    "invariants": [
      "status must be 'confirmed', 'inProgress', 'completed', or 'cancelled'",
      "bookingDate must be between Monday and Saturday",
      "bookingTime must be within store operating hours (09:00 to 18:00)",
      "operatorId must reference an operator allocated to the shift identified by shiftId",
      "when status is 'completed', completedAt must be set",
      "when status is 'cancelled', cancelledAt and cancelReason must be set",
      "completedAt and cancelledAt are mutually exclusive",
      "status transitions must follow: confirmed -> inProgress -> completed, or confirmed/inProgress -> cancelled",
      "updatedAt must be greater than or equal to createdAt"
    ],
    "valueObjects": []
  }
} as const;

export default serviceBookingDomainEntity;

export const pipeline = [
  {
    "id": "serviceBooking__domainEntity",
    "type": "domainEntity",
    "outputPath": "_102049_/l1/petShop/layer_3_domain/entities/serviceBooking.ts",
    "defPath": "_102049_/l1/petShop/layer_3_domain/entities/serviceBooking.defs.ts",
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/domainEntity.md",
      "_102034_.d.ts"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
