/// <mls fileReference="_102049_/l4/petShop/ontology/AdoptablePet.defs.ts" enhancement="_blank"/>

export const petShopEntityAdoptablePet = {
  "entityId": "AdoptablePet",
  "title": "Pet para Adoção",
  "description": "Pet cadastrado pelo administrador para adoção, com nome, idade, descrição e foto, cuja disponibilidade controla a exibição na galeria pública.",
  "kind": "core",
  "ownership": "moduleOwned",
  "fields": [
    {
      "fieldId": "adoptablePetId",
      "type": "uuid",
      "required": true,
      "description": "Identificador único do pet para adoção"
    },
    {
      "fieldId": "name",
      "type": "string",
      "required": true,
      "description": "Nome do pet"
    },
    {
      "fieldId": "age",
      "type": "number",
      "required": true,
      "description": "Idade do pet em anos"
    },
    {
      "fieldId": "description",
      "type": "text",
      "required": true,
      "description": "Descrição do pet exibida na galeria pública"
    },
    {
      "fieldId": "photoUrl",
      "type": "string",
      "required": true,
      "description": "URL da foto do pet no armazenamento de mídia da plataforma"
    },
    {
      "fieldId": "status",
      "type": "string",
      "required": true,
      "description": "Disponibilidade do pet para adoção, controla exibição na galeria",
      "enum": [
        "available",
        "unavailable"
      ]
    },
    {
      "fieldId": "createdAt",
      "type": "datetime",
      "required": true,
      "description": "Data e hora de cadastro do pet"
    },
    {
      "fieldId": "updatedAt",
      "type": "datetime",
      "required": true,
      "description": "Data e hora da última atualização do pet"
    }
  ],
  "statusEnum": [
    "available",
    "unavailable"
  ],
  "lifecycleStates": [
    "available",
    "unavailable"
  ]
} as const;

export default petShopEntityAdoptablePet;
