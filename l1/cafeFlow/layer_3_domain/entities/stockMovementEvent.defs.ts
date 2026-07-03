/// <mls fileReference="_102049_/l1/cafeFlow/layer_3_domain/entities/stockMovementEvent.defs.ts" enhancement="_blank"/>

export const stockMovementEventDomainEntity = {
  "schemaVersion": "2026-06-26",
  "artifactType": "domainEntity",
  "artifactId": "StockMovementEvent",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbDomainEntity",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "StockMovementEvent",
    "fields": [
      {
        "fieldId": "stockMovementEventId",
        "type": "uuid",
        "required": true,
        "description": "Identificador único do evento de movimentação de estoque"
      },
      {
        "fieldId": "stockItemId",
        "type": "uuid",
        "required": true,
        "description": "Referência ao item de estoque movimentado"
      },
      {
        "fieldId": "movementType",
        "type": "string",
        "required": true,
        "description": "Tipo da movimentação: baixa ou reposição de estoque",
        "enum": [
          "baixa",
          "reposicao"
        ]
      },
      {
        "fieldId": "quantity",
        "type": "number",
        "required": true,
        "description": "Quantidade movimentada"
      },
      {
        "fieldId": "reason",
        "type": "text",
        "required": true,
        "description": "Motivo da movimentação de estoque"
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
    "invariants": [],
    "valueObjects": []
  }
} as const;

export default stockMovementEventDomainEntity;

export const pipeline = [
  {
    "id": "stockMovementEvent__domainEntity",
    "type": "domainEntity",
    "outputPath": "_102049_/l1/cafeFlow/layer_3_domain/entities/stockMovementEvent.ts",
    "defPath": "_102049_/l1/cafeFlow/layer_3_domain/entities/stockMovementEvent.defs.ts",
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
