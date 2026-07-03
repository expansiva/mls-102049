/// <mls fileReference="_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/queryTables.defs.ts" enhancement="_blank"/>

export const queryTablesController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "queryTables",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "queryTables",
    "controllerName": "QueryTablesController",
    "ownerKind": "operation",
    "outputSource": "usecase",
    "handlers": [
      {
        "handlerName": "cafeFlowQueryTablesHandler",
        "command": "queryTables",
        "usecaseRef": "queryTables",
        "inputTypeName": "QueryTablesInput",
        "kind": "query",
        "inputContract": [
          {
            "inputId": "statusFilter",
            "fieldRef": "Table.status",
            "required": false,
            "source": "userInput",
            "description": "Filtro opcional por situação da mesa (active ou inactive)"
          },
          {
            "inputId": "numberFilter",
            "fieldRef": "Table.number",
            "required": false,
            "source": "userInput",
            "description": "Filtro opcional pelo número ou código visual da mesa"
          }
        ],
        "contextResolution": [
          {
            "targetRef": "filter.workspaceId",
            "source": "currentWorkspace",
            "originRef": "currentWorkspace.workspaceId",
            "description": "Workspace atual aplicado como filtro de escopo e segurança na listagem de mesas"
          }
        ],
        "accessPattern": {
          "kind": "list",
          "description": "Lista paginada de mesas cadastradas, com filtros opcionais por situação e número, ordenação e seleção individual para ações subsequentes.",
          "entity": "Table",
          "keyField": "Table.tableId",
          "filters": [
            "Table.status",
            "Table.number"
          ],
          "sort": [
            "Table.number",
            "Table.createdAt"
          ],
          "pagination": "optional",
          "selection": "single",
          "output": [
            "Table.tableId",
            "Table.number",
            "Table.name",
            "Table.status",
            "Table.createdAt",
            "Table.updatedAt"
          ]
        }
      }
    ],
    "routes": [
      {
        "key": "cafeFlow.queryTables.queryTables",
        "handlerName": "cafeFlowQueryTablesHandler"
      }
    ]
  }
} as const;

export default queryTablesController;

export const pipeline = [
  {
    "id": "queryTables__httpController",
    "type": "httpController",
    "outputPath": "_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/queryTables.ts",
    "defPath": "_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/queryTables.defs.ts",
    "dependsFiles": [
      "_102049_/l1/cafeFlow/layer_2_application/usecases/queryTables.d.ts"
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
