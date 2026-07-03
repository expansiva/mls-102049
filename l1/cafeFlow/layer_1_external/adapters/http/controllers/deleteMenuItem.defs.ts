/// <mls fileReference="_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/deleteMenuItem.defs.ts" enhancement="_blank"/>

export const deleteMenuItemController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "deleteMenuItem",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "deleteMenuItem",
    "controllerName": "DeleteMenuItemController",
    "ownerKind": "operation",
    "outputSource": "usecase",
    "handlers": [
      {
        "handlerName": "cafeFlowDeleteMenuItemHandler",
        "command": "deleteMenuItem",
        "usecaseRef": "deleteMenuItem",
        "inputTypeName": "DeleteMenuItemInput",
        "kind": "delete",
        "inputContract": [
          {
            "inputId": "menuItemId",
            "fieldRef": "MenuItem.menuItemId",
            "required": true,
            "source": "selectedEntity",
            "description": "Identificador único do item do cardápio a ser removido"
          }
        ],
        "contextResolution": [
          {
            "targetRef": "input.menuItemId",
            "source": "selectedEntity",
            "originRef": "MenuItem.menuItemId",
            "description": "Id do item selecionado na lista para remoção"
          }
        ],
        "accessPattern": {
          "kind": "commandInput",
          "description": "Remove um item do cardápio previamente selecionado",
          "entity": "MenuItem",
          "pagination": "none",
          "selection": "single",
          "output": [
            "MenuItem.menuItemId"
          ]
        }
      }
    ],
    "routes": [
      {
        "key": "cafeFlow.deleteMenuItem.deleteMenuItem",
        "handlerName": "cafeFlowDeleteMenuItemHandler"
      }
    ]
  }
} as const;

export default deleteMenuItemController;

export const pipeline = [
  {
    "id": "deleteMenuItem__httpController",
    "type": "httpController",
    "outputPath": "_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/deleteMenuItem.ts",
    "defPath": "_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/deleteMenuItem.defs.ts",
    "dependsFiles": [
      "_102049_/l1/cafeFlow/layer_2_application/usecases/deleteMenuItem.d.ts"
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
