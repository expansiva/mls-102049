/// <mls fileReference="_102049_/l4/petShop/ontology/PetType.defs.ts" enhancement="_blank"/>

export const petShopEntityPetType = {
  "entityId": "PetType",
  "title": "Tipo de Pet",
  "description": "Tipo de pet (cão, gato, pássaro, etc.) associado aos produtos do catálogo, usado como filtro na busca.",
  "kind": "mdm",
  "ownership": "external",
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
      "description": "Nome do tipo de pet exibido nos filtros do catálogo (ex.: cão, gato, pássaro)."
    },
    {
      "fieldId": "createdAt",
      "type": "datetime",
      "required": true,
      "description": "Data e hora de criação do registro do tipo de pet."
    },
    {
      "fieldId": "updatedAt",
      "type": "datetime",
      "required": true,
      "description": "Data e hora da última atualização do registro do tipo de pet."
    }
  ]
} as const;

export default petShopEntityPetType;
