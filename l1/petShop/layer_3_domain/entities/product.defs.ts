/// <mls fileReference="_102049_/l1/petShop/layer_3_domain/entities/product.defs.ts" enhancement="_blank"/>

export const productDomainEntity = {
  "schemaVersion": "2026-06-26",
  "artifactType": "domainEntity",
  "artifactId": "Product",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbDomainEntity",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "Product",
    "fields": [
      {
        "fieldId": "productId",
        "type": "uuid",
        "required": true,
        "description": "Identificador único do produto no catálogo."
      },
      {
        "fieldId": "name",
        "type": "string",
        "required": true,
        "description": "Nome do produto exibido no catálogo e na página inicial."
      },
      {
        "fieldId": "description",
        "type": "text",
        "required": false,
        "description": "Descrição detalhada do produto para o cliente."
      },
      {
        "fieldId": "price",
        "type": "money",
        "required": true,
        "description": "Preço do produto cobrado na retirada presencial na loja."
      },
      {
        "fieldId": "imageUrl",
        "type": "string",
        "required": false,
        "description": "URL da imagem do produto armazenada no armazenamento de mídia da plataforma."
      },
      {
        "fieldId": "productCategoryId",
        "type": "uuid",
        "required": true,
        "description": "Referência à categoria de produto à qual o produto pertence."
      },
      {
        "fieldId": "featured",
        "type": "boolean",
        "required": true,
        "description": "Indica se o produto deve ser exibido em destaque na página inicial."
      },
      {
        "fieldId": "status",
        "type": "string",
        "required": true,
        "description": "Situação do produto no catálogo: ativo ou inativo.",
        "enum": [
          "active",
          "inactive"
        ]
      },
      {
        "fieldId": "createdAt",
        "type": "datetime",
        "required": true,
        "description": "Data e hora de cadastro do produto."
      },
      {
        "fieldId": "updatedAt",
        "type": "datetime",
        "required": true,
        "description": "Data e hora da última atualização do produto."
      }
    ],
    "statusEnum": [
      "active",
      "inactive"
    ],
    "invariants": [
      "status must be 'active' or 'inactive'",
      "price must be a non-negative monetary value",
      "only products with status 'active' are visible in the catalog",
      "only active products can be featured on the home page",
      "updatedAt must be greater than or equal to createdAt"
    ],
    "valueObjects": []
  }
} as const;

export default productDomainEntity;

export const pipeline = [
  {
    "id": "product__domainEntity",
    "type": "domainEntity",
    "outputPath": "_102049_/l1/petShop/layer_3_domain/entities/product.ts",
    "defPath": "_102049_/l1/petShop/layer_3_domain/entities/product.defs.ts",
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
