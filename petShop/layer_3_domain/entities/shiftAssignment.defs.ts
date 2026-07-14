/// <mls fileReference="_102049_/l1/petShop/layer_3_domain/entities/shiftAssignment.defs.ts" enhancement="_blank"/>

export const shiftAssignmentDomainEntity = {
  "schemaVersion": "2026-06-26",
  "artifactType": "domainEntity",
  "artifactId": "ShiftAssignment",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbDomainEntity",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "ShiftAssignment",
    "fields": [
      {
        "fieldId": "shiftAssignmentId",
        "type": "uuid",
        "required": true,
        "description": "Identificador único da alocação de operador em turno."
      },
      {
        "fieldId": "operatorId",
        "type": "uuid",
        "required": true,
        "description": "Referência ao operador alocado neste turno."
      },
      {
        "fieldId": "shiftId",
        "type": "uuid",
        "required": true,
        "description": "Referência ao turno de trabalho ao qual o operador está alocado."
      },
      {
        "fieldId": "createdAt",
        "type": "datetime",
        "required": true,
        "description": "Data e hora em que a alocação foi criada."
      },
      {
        "fieldId": "updatedAt",
        "type": "datetime",
        "required": true,
        "description": "Data e hora da última atualização da alocação."
      }
    ],
    "statusEnum": [],
    "invariants": [
      "operatorId must reference an active operator",
      "an operator cannot be assigned to the same shift more than once",
      "updatedAt must be greater than or equal to createdAt"
    ],
    "valueObjects": []
  }
} as const;

export default shiftAssignmentDomainEntity;

export const pipeline = [
  {
    "id": "shiftAssignment__domainEntity",
    "type": "domainEntity",
    "outputPath": "_102049_/l1/petShop/layer_3_domain/entities/shiftAssignment.ts",
    "defPath": "_102049_/l1/petShop/layer_3_domain/entities/shiftAssignment.defs.ts",
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
