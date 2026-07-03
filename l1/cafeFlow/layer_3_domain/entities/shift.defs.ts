/// <mls fileReference="_102049_/l1/cafeFlow/layer_3_domain/entities/shift.defs.ts" enhancement="_blank"/>

export const shiftDomainEntity = {
  "schemaVersion": "2026-06-26",
  "artifactType": "domainEntity",
  "artifactId": "Shift",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbDomainEntity",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "Shift",
    "fields": [
      {
        "fieldId": "shiftId",
        "type": "uuid",
        "required": true,
        "description": "Identificador único do turno"
      },
      {
        "fieldId": "status",
        "type": "string",
        "required": true,
        "description": "Status atual do turno: aberto ou fechado",
        "enum": [
          "open",
          "closed"
        ]
      },
      {
        "fieldId": "openedAt",
        "type": "datetime",
        "required": true,
        "description": "Data e hora de abertura do turno"
      },
      {
        "fieldId": "closedAt",
        "type": "datetime",
        "required": false,
        "description": "Data e hora de fechamento do turno"
      },
      {
        "fieldId": "createdAt",
        "type": "datetime",
        "required": true,
        "description": "Data e hora de criação do registro"
      },
      {
        "fieldId": "updatedAt",
        "type": "datetime",
        "required": true,
        "description": "Data e hora da última atualização do registro"
      }
    ],
    "statusEnum": [
      "open",
      "closed"
    ],
    "invariants": [
      "If status is closed then closedAt must be non-null",
      "If status is open then closedAt must be null",
      "closedAt must be after openedAt when present",
      "Only one Shift may be open at any given time"
    ],
    "valueObjects": []
  }
} as const;

export default shiftDomainEntity;

export const pipeline = [
  {
    "id": "shift__domainEntity",
    "type": "domainEntity",
    "outputPath": "_102049_/l1/cafeFlow/layer_3_domain/entities/shift.ts",
    "defPath": "_102049_/l1/cafeFlow/layer_3_domain/entities/shift.defs.ts",
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
