/// <mls fileReference="_102049_/l1/petShop/layer_3_domain/entities/adoptablePet.defs.ts" enhancement="_blank"/>

export const adoptablePetDomainEntity = {
  "schemaVersion": "2026-06-26",
  "artifactType": "domainEntity",
  "artifactId": "AdoptablePet",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbDomainEntity",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "AdoptablePet",
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
    "invariants": [
      "age must be a non-negative number",
      "status must be 'available' or 'unavailable'",
      "only pets with status 'available' are shown in the public gallery",
      "updatedAt must be greater than or equal to createdAt"
    ],
    "valueObjects": []
  }
} as const;

export default adoptablePetDomainEntity;

export const pipeline = [
  {
    "id": "adoptablePet__domainEntity",
    "type": "domainEntity",
    "outputPath": "_102049_/l1/petShop/layer_3_domain/entities/adoptablePet.ts",
    "defPath": "_102049_/l1/petShop/layer_3_domain/entities/adoptablePet.defs.ts",
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
