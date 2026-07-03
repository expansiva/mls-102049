/// <mls fileReference="_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/queryMenuItems.defs.ts" enhancement="_blank"/>

export const queryMenuItemsController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "queryMenuItems",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "queryMenuItems",
    "controllerName": "QueryMenuItemsController",
    "ownerKind": "operation",
    "outputSource": "usecase",
    "handlers": [
      {
        "handlerName": "cafeFlowQueryMenuItemsHandler",
        "command": "queryMenuItems",
        "usecaseRef": "queryMenuItems",
        "inputTypeName": "QueryMenuItemsInput",
        "kind": "query",
        "inputContract": [
          {
            "inputId": "categoryFilter",
            "fieldRef": "MenuItem.category",
            "required": false,
            "source": "userInput",
            "description": "Categoria do item para filtrar a lista"
          },
          {
            "inputId": "nameFilter",
            "fieldRef": "MenuItem.name",
            "required": false,
            "source": "userInput",
            "description": "Termo de busca pelo nome do item"
          }
        ],
        "contextResolution": [
          {
            "targetRef": "filter.workspaceId",
            "source": "currentWorkspace",
            "originRef": "currentWorkspace.workspaceId",
            "description": "Escopo do workspace atual para filtrar os itens do cardápio"
          }
        ],
        "accessPattern": {
          "kind": "list",
          "description": "Lista paginada de itens do cardápio com filtros por categoria e nome, ordenada por nome",
          "entity": "MenuItem",
          "filters": [
            "MenuItem.category",
            "MenuItem.name"
          ],
          "sort": [
            "MenuItem.name"
          ],
          "pagination": "optional",
          "selection": "single",
          "output": [
            "MenuItem.menuItemId",
            "MenuItem.name",
            "MenuItem.category",
            "MenuItem.price",
            "MenuItem.description",
            "MenuItem.status",
            "MenuItem.createdAt",
            "MenuItem.updatedAt"
          ]
        }
      }
    ],
    "routes": [
      {
        "key": "cafeFlow.queryMenuItems.queryMenuItems",
        "handlerName": "cafeFlowQueryMenuItemsHandler"
      }
    ]
  }
} as const;

export default queryMenuItemsController;

export const pipeline = [
  {
    "id": "queryMenuItems__httpController",
    "type": "httpController",
    "outputPath": "_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/queryMenuItems.ts",
    "defPath": "_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/queryMenuItems.defs.ts",
    "dependsFiles": [
      "_102049_/l1/cafeFlow/layer_2_application/usecases/queryMenuItems.d.ts"
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
