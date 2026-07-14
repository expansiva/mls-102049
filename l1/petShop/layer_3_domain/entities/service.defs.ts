/// <mls fileReference="_102049_/l1/petShop/layer_3_domain/entities/service.defs.ts" enhancement="_blank"/>

export const serviceDomainEntity = {
  "schemaVersion": "2026-06-26",
  "artifactType": "domainEntity",
  "artifactId": "Service",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbDomainEntity",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "Service",
    "fields": [
      {
        "fieldId": "serviceId",
        "type": "uuid",
        "required": true,
        "description": "Identificador único do serviço oferecido."
      },
      {
        "fieldId": "name",
        "type": "string",
        "required": true,
        "description": "Nome do serviço oferecido, como banho e tosa."
      },
      {
        "fieldId": "description",
        "type": "text",
        "required": true,
        "description": "Descrição detalhada do serviço oferecido ao cliente."
      },
      {
        "fieldId": "estimatedDurationMinutes",
        "type": "number",
        "required": true,
        "description": "Duração estimada do serviço em minutos, usada para cálculo de horários disponíveis."
      },
      {
        "fieldId": "price",
        "type": "money",
        "required": true,
        "description": "Preço do serviço, cobrado presencialmente na loja após a execução."
      },
      {
        "fieldId": "status",
        "type": "string",
        "required": true,
        "description": "Estado de ativação do serviço; apenas serviços ativos aparecem na listagem para clientes.",
        "enum": [
          "active",
          "inactive"
        ]
      },
      {
        "fieldId": "deactivatedAt",
        "type": "datetime",
        "required": false,
        "description": "Data e hora em que o serviço foi desativado; desativar não cancela agendamentos já confirmados."
      },
      {
        "fieldId": "createdAt",
        "type": "datetime",
        "required": true,
        "description": "Data e hora de criação do registro do serviço."
      },
      {
        "fieldId": "updatedAt",
        "type": "datetime",
        "required": true,
        "description": "Data e hora da última atualização do registro do serviço."
      }
    ],
    "statusEnum": [
      "active",
      "inactive"
    ],
    "invariants": [
      "status must be 'active' or 'inactive'",
      "estimatedDurationMinutes must be a positive number",
      "price must be a non-negative monetary value",
      "only services with status 'active' are listed for customers",
      "deactivating a service does not cancel already confirmed bookings",
      "when status is 'inactive', deactivatedAt must be set",
      "when status is 'active', deactivatedAt must be null",
      "updatedAt must be greater than or equal to createdAt"
    ],
    "valueObjects": []
  }
} as const;

export default serviceDomainEntity;

export const pipeline = [
  {
    "id": "service__domainEntity",
    "type": "domainEntity",
    "outputPath": "_102049_/l1/petShop/layer_3_domain/entities/service.ts",
    "defPath": "_102049_/l1/petShop/layer_3_domain/entities/service.defs.ts",
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
