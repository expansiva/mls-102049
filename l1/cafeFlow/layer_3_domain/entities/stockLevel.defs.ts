/// <mls fileReference="_102049_/l1/cafeFlow/layer_3_domain/entities/stockLevel.defs.ts" enhancement="_blank"/>

export const stockLevelDomainEntity = {
  "schemaVersion": "2026-06-26",
  "artifactType": "domainEntity",
  "artifactId": "StockLevel",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbDomainEntity",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "StockLevel",
    "fields": [
      {
        "fieldId": "stockLevelId",
        "type": "uuid",
        "required": true,
        "description": "Identificador único do nível de estoque"
      },
      {
        "fieldId": "stockItemId",
        "type": "uuid",
        "required": true,
        "description": "Referência ao item de estoque cadastrado (MDM)"
      },
      {
        "fieldId": "currentQuantity",
        "type": "number",
        "required": true,
        "description": "Quantidade atual do insumo em estoque"
      },
      {
        "fieldId": "lastMovementAt",
        "type": "datetime",
        "required": true,
        "description": "Timestamp da última movimentação de estoque"
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
    "invariants": [
      "currentQuantity must be greater than or equal to zero",
      "lastMovementAt must be greater than or equal to createdAt"
    ],
    "valueObjects": []
  }
} as const;

export default stockLevelDomainEntity;

export const pipeline = [
  {
    "id": "stockLevel__domainEntity",
    "type": "domainEntity",
    "outputPath": "_102049_/l1/cafeFlow/layer_3_domain/entities/stockLevel.ts",
    "defPath": "_102049_/l1/cafeFlow/layer_3_domain/entities/stockLevel.defs.ts",
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
