/// <mls fileReference="_102049_/l4/petShop/ontology/AdoptionInterest.defs.ts" enhancement="_blank"/>

export const petShopEntityAdoptionInterest = {
  "entityId": "AdoptionInterest",
  "title": "Manifestação de Interesse em Adoção",
  "description": "Registro do interesse de um cliente em adotar um pet, iniciado no site e finalizado presencialmente na loja com verificação e documentação.",
  "kind": "core",
  "ownership": "moduleOwned",
  "fields": [
    {
      "fieldId": "adoptionInterestId",
      "type": "uuid",
      "required": true,
      "description": "Identificador único da manifestação de interesse em adoção."
    },
    {
      "fieldId": "adoptablePetId",
      "type": "uuid",
      "required": true,
      "description": "Referência ao pet disponível para adoção que é objeto do interesse."
    },
    {
      "fieldId": "customerName",
      "type": "string",
      "required": true,
      "description": "Nome completo do cliente que manifesta interesse em adotar."
    },
    {
      "fieldId": "customerEmail",
      "type": "string",
      "required": true,
      "description": "E-mail de contato do cliente para comunicação sobre a adoção."
    },
    {
      "fieldId": "customerPhone",
      "type": "string",
      "required": false,
      "description": "Telefone de contato do cliente para agendamento da visita presencial."
    },
    {
      "fieldId": "status",
      "type": "string",
      "required": true,
      "description": "Situação atual da manifestação de interesse: registrada, concluída ou cancelada.",
      "enum": [
        "registered",
        "completed",
        "cancelled"
      ]
    },
    {
      "fieldId": "operatorId",
      "type": "uuid",
      "required": false,
      "description": "Identificador do operador que realizou a verificação e finalização presencial na loja."
    },
    {
      "fieldId": "verificationNotes",
      "type": "text",
      "required": false,
      "description": "Anotações da verificação presencial e documentação apresentada pelo cliente na loja."
    },
    {
      "fieldId": "completedAt",
      "type": "datetime",
      "required": false,
      "description": "Data e hora em que a adoção foi finalizada presencialmente na loja."
    },
    {
      "fieldId": "cancelledAt",
      "type": "datetime",
      "required": false,
      "description": "Data e hora em que a manifestação de interesse foi cancelada."
    },
    {
      "fieldId": "cancellationReason",
      "type": "text",
      "required": false,
      "description": "Motivo do cancelamento da manifestação de interesse."
    },
    {
      "fieldId": "createdAt",
      "type": "datetime",
      "required": true,
      "description": "Data e hora em que o interesse foi registrado pelo cliente no site."
    },
    {
      "fieldId": "updatedAt",
      "type": "datetime",
      "required": true,
      "description": "Data e hora da última atualização do registro de interesse."
    }
  ],
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
} as const;

export default petShopEntityAdoptionInterest;
