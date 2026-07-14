/// <mls fileReference="_102049_/l1/petShop/layer_3_domain/entities/adoptionInterest.defs.ts" enhancement="_blank"/>

export const adoptionInterestDomainEntity = {
  "schemaVersion": "2026-06-26",
  "artifactType": "domainEntity",
  "artifactId": "AdoptionInterest",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbDomainEntity",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "AdoptionInterest",
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
    "invariants": [
      "status must be 'registered', 'completed', or 'cancelled'",
      "when status is 'completed', operatorId and completedAt must be set",
      "when status is 'cancelled', cancelledAt and cancellationReason must be set",
      "completedAt and cancelledAt are mutually exclusive — an interest cannot be both completed and cancelled",
      "operatorId is only set when the interest is being verified or completed by an operator",
      "updatedAt must be greater than or equal to createdAt"
    ],
    "valueObjects": []
  }
} as const;

export default adoptionInterestDomainEntity;

export const pipeline = [
  {
    "id": "adoptionInterest__domainEntity",
    "type": "domainEntity",
    "outputPath": "_102049_/l1/petShop/layer_3_domain/entities/adoptionInterest.ts",
    "defPath": "_102049_/l1/petShop/layer_3_domain/entities/adoptionInterest.defs.ts",
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
