/// <mls fileReference="_102049_/l4/petShop/ontology/PetType.defs.ts" enhancement="_blank"/>

export const petShopEntityPetType = {
  "entityId": "PetType",
  "title": "Tipo de Pet",
  "description": "Classificação do produto por tipo de pet indicado (cão, gato, etc.), usada como filtro no catálogo e atributo obrigatório do produto.",
  "kind": "mdm",
  "ownership": "moduleOwned",
  "fields": [
    {
      "fieldId": "petTypeId",
      "type": "uuid",
      "required": true,
      "description": "Identificador único do tipo de pet."
    },
    {
      "fieldId": "name",
      "type": "string",
      "required": true,
      "description": "Nome do tipo de pet (ex.: cão, gato, ave)."
    },
    {
      "fieldId": "active",
      "type": "boolean",
      "required": true,
      "description": "Indica se o tipo de pet está ativo e disponível para seleção no catálogo."
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
  ]
} as const;

export default petShopEntityPetType;
