/// <mls fileReference="_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/createMenuItem.defs.ts" enhancement="_blank"/>

export const createMenuItemController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "createMenuItem",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "createMenuItem",
    "controllerName": "CreateMenuItemController",
    "ownerKind": "operation",
    "outputSource": "usecase",
    "handlers": [
      {
        "handlerName": "cafeFlowCreateMenuItemHandler",
        "command": "createMenuItem",
        "usecaseRef": "createMenuItem",
        "inputTypeName": "CreateMenuItemInput",
        "kind": "create",
        "inputContract": [
          {
            "inputId": "name",
            "fieldRef": "MenuItem.name",
            "required": true,
            "source": "userInput",
            "description": "Nome do item do cardápio"
          },
          {
            "inputId": "category",
            "fieldRef": "MenuItem.category",
            "required": true,
            "source": "userInput",
            "description": "Categoria do item (ex: entradas, pratos principais, bebidas, sobremesas)"
          },
          {
            "inputId": "price",
            "fieldRef": "MenuItem.price",
            "required": true,
            "source": "userInput",
            "description": "Preço de venda do item"
          },
          {
            "inputId": "description",
            "fieldRef": "MenuItem.description",
            "required": false,
            "source": "userInput",
            "description": "Descrição detalhada do item"
          },
          {
            "inputId": "status",
            "fieldRef": "MenuItem.status",
            "required": true,
            "source": "userInput",
            "description": "Status do ciclo de vida do item (active/inactive)"
          }
        ],
        "contextResolution": [
          {
            "targetRef": "MenuItem.menuItemId",
            "source": "systemDefault",
            "originRef": "systemDefault.uuid",
            "description": "Identificador único do item gerado automaticamente pelo sistema"
          },
          {
            "targetRef": "MenuItem.createdAt",
            "source": "systemDefault",
            "originRef": "systemDefault.now",
            "description": "Data e hora de criação atribuída automaticamente pelo sistema"
          },
          {
            "targetRef": "MenuItem.updatedAt",
            "source": "systemDefault",
            "originRef": "systemDefault.now",
            "description": "Data e hora da última atualização atribuída automaticamente pelo sistema"
          }
        ],
        "accessPattern": {
          "kind": "commandInput",
          "description": "Command to create a new menu item reference with name, category, price, description and lifecycle status",
          "entity": "MenuItem",
          "pagination": "none",
          "selection": "none"
        }
      }
    ],
    "routes": [
      {
        "key": "cafeFlow.createMenuItem.createMenuItem",
        "handlerName": "cafeFlowCreateMenuItemHandler"
      }
    ]
  }
} as const;

export default createMenuItemController;

export const pipeline = [
  {
    "id": "createMenuItem__httpController",
    "type": "httpController",
    "outputPath": "_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/createMenuItem.ts",
    "defPath": "_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/createMenuItem.defs.ts",
    "dependsFiles": [
      "_102049_/l1/cafeFlow/layer_2_application/usecases/createMenuItem.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/httpController.md",
      "_102034_.d.ts"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
