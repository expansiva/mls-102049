/// <mls fileReference="_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/updateMenuItem.defs.ts" enhancement="_blank"/>

export const updateMenuItemController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "updateMenuItem",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "updateMenuItem",
    "controllerName": "UpdateMenuItemController",
    "ownerKind": "operation",
    "outputSource": "usecase",
    "handlers": [
      {
        "handlerName": "cafeFlowUpdateMenuItemHandler",
        "command": "updateMenuItem",
        "usecaseRef": "updateMenuItem",
        "inputTypeName": "UpdateMenuItemInput",
        "kind": "update",
        "inputContract": [
          {
            "inputId": "menuItemId",
            "fieldRef": "MenuItem.menuItemId",
            "required": true,
            "source": "selectedEntity",
            "description": "Identificador único do item a ser editado"
          },
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
            "targetRef": "input.menuItemId",
            "source": "selectedEntity",
            "originRef": "MenuItem.menuItemId",
            "description": "Id do item selecionado na lista do cardápio no passo anterior"
          },
          {
            "targetRef": "MenuItem.updatedAt",
            "source": "systemDefault",
            "originRef": "systemDefault.now",
            "description": "Data e hora da última atualização definida automaticamente pelo sistema"
          }
        ],
        "accessPattern": {
          "kind": "commandInput",
          "description": "Atualiza um item existente do cardápio com novos dados de nome, categoria, preço, descrição e status",
          "entity": "MenuItem",
          "keyField": "MenuItem.menuItemId",
          "pagination": "none",
          "selection": "single",
          "output": [
            "MenuItem"
          ]
        }
      }
    ],
    "routes": [
      {
        "key": "cafeFlow.updateMenuItem.updateMenuItem",
        "handlerName": "cafeFlowUpdateMenuItemHandler"
      }
    ]
  }
} as const;

export default updateMenuItemController;

export const pipeline = [
  {
    "id": "updateMenuItem__httpController",
    "type": "httpController",
    "outputPath": "_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/updateMenuItem.ts",
    "defPath": "_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/updateMenuItem.defs.ts",
    "dependsFiles": [
      "_102049_/l1/cafeFlow/layer_2_application/usecases/updateMenuItem.d.ts"
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
