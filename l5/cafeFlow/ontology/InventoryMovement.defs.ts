/// <mls fileReference="_102049_/l5/cafeFlow/ontology/InventoryMovement.defs.ts" enhancement="_blank"/>

export const InventoryMovementEntityDefinition = {
  "schemaVersion": "2026-06-06",
  "artifactType": "ontologyEntity",
  "artifactId": "InventoryMovement",
  "moduleName": "cafeFlow",
  "status": "incomplete",
  "source": {
    "agentName": "agentPlanEntityDefinition",
    "stepId": 39,
    "planId": ""
  },
  "data": {
    "entityDefinition": {
      "entityId": "InventoryMovement",
      "title": "Movimento de Estoque",
      "description": "Registro de baixa automática ou ajuste manual por item de estoque.",
      "ownership": "moduleOwned",
      "fields": [
        {
          "fieldId": "id",
          "type": "uuid",
          "required": true,
          "description": "Identificador único do movimento de estoque."
        },
        {
          "fieldId": "inventoryItemId",
          "type": "InventoryItem",
          "required": true,
          "description": "Referência ao item de estoque movimentado."
        },
        {
          "fieldId": "createdAt",
          "type": "datetime",
          "required": true,
          "description": "Data e hora de criação do registro."
        },
        {
          "fieldId": "updatedAt",
          "type": "datetime",
          "required": true,
          "description": "Data e hora da última atualização do registro."
        }
      ],
      "rulesApplied": [
        "inventoryDecrementRule"
      ]
    },
    "pendingQuestions": [
      "Quais são os atributos obrigatórios do Movimento de Estoque? Ex.: quantidade movimentada, tipo de movimento (baixa automática/ajuste manual), motivo/observação, data do movimento, vínculo com pedido ou turno."
    ]
  }
} as const;

export default InventoryMovementEntityDefinition;
