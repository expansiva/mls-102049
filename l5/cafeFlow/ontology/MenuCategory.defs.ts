/// <mls fileReference="_102049_/l5/cafeFlow/ontology/MenuCategory.defs.ts" enhancement="_blank"/>

export const MenuCategoryEntityDefinition = {
  "schemaVersion": "2026-06-06",
  "artifactType": "ontologyEntity",
  "artifactId": "MenuCategory",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentPlanEntityDefinition",
    "stepId": 39,
    "planId": ""
  },
  "data": {
    "entityDefinition": {
      "entityId": "MenuCategory",
      "title": "Categoria do Cardápio",
      "description": "Categoria padronizada para organizar itens do cardápio.",
      "ownership": "mdmOwned",
      "kind": "entity",
      "fields": [
        {
          "fieldId": "menuCategoryId",
          "type": "uuid",
          "required": true,
          "description": "Identificador único da categoria do cardápio."
        },
        {
          "fieldId": "name",
          "type": "string",
          "required": true,
          "description": "Nome da categoria do cardápio."
        },
        {
          "fieldId": "description",
          "type": "text",
          "required": false,
          "description": "Descrição da categoria do cardápio."
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
      "rulesApplied": []
    }
  }
} as const;

export default MenuCategoryEntityDefinition;
