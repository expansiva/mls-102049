/// <mls fileReference="_102049_/l1/petShop/layer_2_application/usecases/createProduct.defs.ts" enhancement="_blank"/>

export const createProductUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "createProduct",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "createProduct",
    "ports": [
      "Product"
    ],
    "functions": [
      {
        "functionName": "createProduct",
        "inputTypeName": "CreateProductInput",
        "outputTypeName": "CreateProductOutput",
        "input": [
          {
            "name": "name",
            "type": "string",
            "required": true,
            "ofEntity": "Product",
            "description": "Nome do produto informado pela loja."
          },
          {
            "name": "description",
            "type": "string",
            "required": false,
            "ofEntity": "Product",
            "description": "Descrição detalhada do produto (opcional)."
          },
          {
            "name": "price",
            "type": "number",
            "required": true,
            "ofEntity": "Product",
            "description": "Preço do produto informado pela loja."
          },
          {
            "name": "petTypeId",
            "type": "string",
            "required": true,
            "ofEntity": "Product",
            "description": "Referência ao tipo de pet indicado para o produto."
          },
          {
            "name": "categoryId",
            "type": "string",
            "required": true,
            "ofEntity": "Product",
            "description": "Referência à categoria do catálogo à qual o produto pertence."
          },
          {
            "name": "highlighted",
            "type": "boolean",
            "required": true,
            "ofEntity": "Product",
            "description": "Indica se o produto deve ser marcado como destaque pela loja."
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "Product",
            "description": "Disponibilidade do produto: available ou unavailable."
          }
        ],
        "output": [
          {
            "name": "productId",
            "type": "string",
            "required": true,
            "ofEntity": "Product"
          },
          {
            "name": "name",
            "type": "string",
            "required": true,
            "ofEntity": "Product"
          },
          {
            "name": "description",
            "type": "string",
            "required": false,
            "ofEntity": "Product"
          },
          {
            "name": "price",
            "type": "number",
            "required": true,
            "ofEntity": "Product"
          },
          {
            "name": "petTypeId",
            "type": "string",
            "required": true,
            "ofEntity": "Product"
          },
          {
            "name": "categoryId",
            "type": "string",
            "required": true,
            "ofEntity": "Product"
          },
          {
            "name": "highlighted",
            "type": "boolean",
            "required": true,
            "ofEntity": "Product"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "Product"
          },
          {
            "name": "createdAt",
            "type": "string",
            "required": true,
            "ofEntity": "Product"
          },
          {
            "name": "updatedAt",
            "type": "string",
            "required": true,
            "ofEntity": "Product"
          }
        ],
        "ports": [
          "Product"
        ],
        "rulesApplied": [
          "productRequiresMinimumFields",
          "highlightRequiresAvailableProduct",
          "highlightsAreManualOnly"
        ],
        "transactional": true,
        "steps": [
          "1. Validate required fields (name, price, petTypeId, categoryId) are present and non-empty — rule productRequiresMinimumFields. If any is missing, throw validation error with rule id.",
          "2. Validate status is one of 'available' or 'unavailable'.",
          "3. If highlighted === true and status !== 'available', throw validation error — rule highlightRequiresAvailableProduct. A product must be available to be highlighted.",
          "4. Rule highlightsAreManualOnly: highlighted is set solely from user input; no automatic highlight logic is applied. Accept the value as-is.",
          "5. Resolve MDM references: call ctx.mdm.collection.getMany({ mdmIds: [petTypeId, categoryId] }) to verify both PetType and Category exist. If either is not found, throw validation error referencing the missing id.",
          "6. Generate productId via ctx.idGenerator.uuid().",
          "7. Resolve createdAt and updatedAt via ctx.clock.now() (both equal at creation).",
          "8. Build the Product aggregate with all fields: productId, name, description, price, petTypeId, categoryId, highlighted, status, createdAt, updatedAt.",
          "9. Persist via ProductPort.save(product) inside ctx.data transaction.",
          "10. Return the created Product projection with all output fields."
        ],
        "outputShape": {
          "kind": "object",
          "fields": [
            {
              "name": "productId",
              "type": "string",
              "required": true,
              "fieldRef": "Product.productId"
            },
            {
              "name": "name",
              "type": "string",
              "required": true,
              "fieldRef": "Product.name"
            },
            {
              "name": "description",
              "type": "string",
              "required": false,
              "fieldRef": "Product.description"
            },
            {
              "name": "price",
              "type": "number",
              "required": true,
              "fieldRef": "Product.price"
            },
            {
              "name": "petTypeId",
              "type": "string",
              "required": true,
              "fieldRef": "Product.petTypeId"
            },
            {
              "name": "categoryId",
              "type": "string",
              "required": true,
              "fieldRef": "Product.categoryId"
            },
            {
              "name": "highlighted",
              "type": "boolean",
              "required": true,
              "fieldRef": "Product.highlighted"
            },
            {
              "name": "status",
              "type": "string",
              "required": true,
              "fieldRef": "Product.status"
            },
            {
              "name": "createdAt",
              "type": "string",
              "required": true,
              "fieldRef": "Product.createdAt"
            },
            {
              "name": "updatedAt",
              "type": "string",
              "required": true,
              "fieldRef": "Product.updatedAt"
            }
          ]
        }
      }
    ],
    "mdmRefs": [
      "PetType",
      "Category"
    ]
  }
} as const;

export default createProductUsecase;

export const pipeline = [
  {
    "id": "createProduct__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102049_/l1/petShop/layer_2_application/usecases/createProduct.ts",
    "defPath": "_102049_/l1/petShop/layer_2_application/usecases/createProduct.defs.ts",
    "dependsFiles": [
      "_102049_/l1/petShop/layer_2_application/ports/productRepository.d.ts",
      "_102049_/l1/petShop/layer_3_domain/entities/product.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/applicationUsecase.md",
      "_102034_.d.ts"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
