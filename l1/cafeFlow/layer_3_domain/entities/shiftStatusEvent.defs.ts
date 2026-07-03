/// <mls fileReference="_102049_/l1/cafeFlow/layer_3_domain/entities/shiftStatusEvent.defs.ts" enhancement="_blank"/>

export const shiftStatusEventDomainEntity = {
  "schemaVersion": "2026-06-26",
  "artifactType": "domainEntity",
  "artifactId": "ShiftStatusEvent",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbDomainEntity",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "ShiftStatusEvent",
    "fields": [
      {
        "fieldId": "shiftStatusEventId",
        "type": "uuid",
        "required": true,
        "description": "Identificador único do evento de status do turno."
      },
      {
        "fieldId": "shiftId",
        "type": "uuid",
        "required": true,
        "description": "Referência ao turno ao qual o evento pertence."
      },
      {
        "fieldId": "eventType",
        "type": "string",
        "required": true,
        "description": "Tipo do evento de status: abertura ou fechamento do turno.",
        "enum": [
          "abertura",
          "fechamento"
        ]
      },
      {
        "fieldId": "consolidatedTotal",
        "type": "money",
        "required": true,
        "description": "Total consolidado (vendas/movimentações) registrado no momento do evento."
      },
      {
        "fieldId": "recordedAt",
        "type": "datetime",
        "required": true,
        "description": "Data e hora em que o evento ocorreu."
      },
      {
        "fieldId": "createdAt",
        "type": "datetime",
        "required": true,
        "description": "Data e hora de criação do registro no sistema."
      },
      {
        "fieldId": "updatedAt",
        "type": "datetime",
        "required": true,
        "description": "Data e hora da última atualização do registro no sistema."
      }
    ],
    "invariants": [],
    "valueObjects": []
  }
} as const;

export default shiftStatusEventDomainEntity;

export const pipeline = [
  {
    "id": "shiftStatusEvent__domainEntity",
    "type": "domainEntity",
    "outputPath": "_102049_/l1/cafeFlow/layer_3_domain/entities/shiftStatusEvent.ts",
    "defPath": "_102049_/l1/cafeFlow/layer_3_domain/entities/shiftStatusEvent.defs.ts",
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
