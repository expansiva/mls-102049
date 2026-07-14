/// <mls fileReference="_102049_/l1/petShop/layer_3_domain/entities/operator.defs.ts" enhancement="_blank"/>

export const operatorDomainEntity = {
  "schemaVersion": "2026-06-26",
  "artifactType": "domainEntity",
  "artifactId": "Operator",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbDomainEntity",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "Operator",
    "fields": [
      {
        "fieldId": "operatorId",
        "type": "uuid",
        "required": true,
        "description": "Identificador único do operador."
      },
      {
        "fieldId": "name",
        "type": "string",
        "required": true,
        "description": "Nome completo do operador exibido na agenda e nos agendamentos atribuídos."
      },
      {
        "fieldId": "email",
        "type": "string",
        "required": false,
        "description": "E-mail de contato do operador para notificações de agenda."
      },
      {
        "fieldId": "phone",
        "type": "string",
        "required": false,
        "description": "Telefone de contato do operador."
      },
      {
        "fieldId": "active",
        "type": "boolean",
        "required": true,
        "description": "Indica se o operador está ativo e pode ser alocado em turnos e receber agendamentos."
      },
      {
        "fieldId": "createdAt",
        "type": "datetime",
        "required": true,
        "description": "Data e hora de cadastro do operador pelo administrador."
      },
      {
        "fieldId": "updatedAt",
        "type": "datetime",
        "required": true,
        "description": "Data e hora da última atualização dos dados do operador."
      }
    ],
    "statusEnum": [],
    "invariants": [
      "only active operators can be allocated to shifts and receive service bookings",
      "updatedAt must be greater than or equal to createdAt"
    ],
    "valueObjects": []
  }
} as const;

export default operatorDomainEntity;

export const pipeline = [
  {
    "id": "operator__domainEntity",
    "type": "domainEntity",
    "outputPath": "_102049_/l1/petShop/layer_3_domain/entities/operator.ts",
    "defPath": "_102049_/l1/petShop/layer_3_domain/entities/operator.defs.ts",
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
