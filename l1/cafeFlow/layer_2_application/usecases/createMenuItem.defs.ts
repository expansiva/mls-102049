/// <mls fileReference="_102049_/l1/cafeFlow/layer_2_application/usecases/createMenuItem.defs.ts" enhancement="_blank"/>

export const createMenuItemUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "createMenuItem",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "createMenuItem",
    "ports": [],
    "functions": [
      {
        "functionName": "createMenuItem",
        "inputTypeName": "CreateMenuItemInput",
        "outputTypeName": "CreateMenuItemOutput",
        "input": [
          {
            "name": "name",
            "type": "string",
            "required": true,
            "description": "Nome do item do cardápio",
            "ofEntity": "MenuItem"
          },
          {
            "name": "category",
            "type": "string",
            "required": true,
            "description": "Categoria do item (ex: entradas, pratos principais, bebidas, sobremesas)",
            "ofEntity": "MenuItem"
          },
          {
            "name": "price",
            "type": "number",
            "required": true,
            "description": "Preço de venda do item",
            "ofEntity": "MenuItem"
          },
          {
            "name": "description",
            "type": "string",
            "required": false,
            "description": "Descrição detalhada do item",
            "ofEntity": "MenuItem"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "description": "Status do ciclo de vida do item (active/inactive)",
            "ofEntity": "MenuItem"
          }
        ],
        "output": [
          {
            "name": "menuItemId",
            "type": "string",
            "required": true,
            "description": "Identificador único do item gerado automaticamente",
            "ofEntity": "MenuItem"
          },
          {
            "name": "name",
            "type": "string",
            "required": true,
            "ofEntity": "MenuItem"
          },
          {
            "name": "category",
            "type": "string",
            "required": true,
            "ofEntity": "MenuItem"
          },
          {
            "name": "price",
            "type": "number",
            "required": true,
            "ofEntity": "MenuItem"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "MenuItem"
          },
          {
            "name": "createdAt",
            "type": "string",
            "required": true,
            "ofEntity": "MenuItem"
          },
          {
            "name": "updatedAt",
            "type": "string",
            "required": true,
            "ofEntity": "MenuItem"
          }
        ],
        "ports": [],
        "rulesApplied": [
          "comboPriceDifference"
        ],
        "transactional": true,
        "steps": [
          "Generate menuItemId via ctx.idGenerator.uuid()",
          "Resolve createdAt and updatedAt from ctx.clock.now()",
          "Validate required fields: name, category, price, status",
          "Validate status enum is 'active' or 'inactive'",
          "Apply comboPriceDifference rule to validate price against category and combo constraints",
          "Construct MenuItem aggregate root with generated menuItemId, provided fields, and system timestamps",
          "Persist MenuItem through menuItemPort.save() inside a transaction",
          "Return created MenuItem projection with menuItemId, name, category, price, status, createdAt, updatedAt"
        ]
      }
    ],
    "mdmRefs": [
      "MenuItem"
    ]
  }
} as const;

export default createMenuItemUsecase;

export const pipeline = [
  {
    "id": "createMenuItem__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102049_/l1/cafeFlow/layer_2_application/usecases/createMenuItem.ts",
    "defPath": "_102049_/l1/cafeFlow/layer_2_application/usecases/createMenuItem.defs.ts",
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/applicationUsecase.md",
      "_102034_.d.ts"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
