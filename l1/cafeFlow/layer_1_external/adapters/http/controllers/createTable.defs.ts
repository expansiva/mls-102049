/// <mls fileReference="_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/createTable.defs.ts" enhancement="_blank"/>

export const createTableController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "createTable",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "createTable",
    "controllerName": "CreateTableController",
    "ownerKind": "operation",
    "outputSource": "usecase",
    "handlers": [
      {
        "handlerName": "cafeFlowCreateTableHandler",
        "command": "createTable",
        "usecaseRef": "createTable",
        "inputTypeName": "CreateTableInput",
        "kind": "create",
        "inputContract": [
          {
            "inputId": "number",
            "fieldRef": "Table.number",
            "required": true,
            "source": "userInput",
            "description": "Número ou código de identificação visual da mesa (ex: 01, 12, A3)"
          },
          {
            "inputId": "name",
            "fieldRef": "Table.name",
            "required": false,
            "source": "userInput",
            "description": "Nome ou descrição opcional da mesa (ex: 'Mesa da Janela')"
          },
          {
            "inputId": "status",
            "fieldRef": "Table.status",
            "required": true,
            "source": "userInput",
            "description": "Situação da mesa no sistema (active ou inactive)"
          }
        ],
        "contextResolution": [
          {
            "targetRef": "Table.tableId",
            "source": "systemDefault",
            "originRef": "systemDefault.uuid",
            "description": "Identificador único da mesa gerado pelo sistema"
          },
          {
            "targetRef": "Table.createdAt",
            "source": "systemDefault",
            "originRef": "systemDefault.now",
            "description": "Data e hora de criação do registro definida pelo sistema"
          },
          {
            "targetRef": "Table.updatedAt",
            "source": "systemDefault",
            "originRef": "systemDefault.now",
            "description": "Data e hora da última atualização do registro definida pelo sistema"
          }
        ],
        "accessPattern": {
          "kind": "commandInput",
          "description": "Comando para cadastrar uma nova mesa no sistema"
        }
      }
    ],
    "routes": [
      {
        "key": "cafeFlow.createTable.createTable",
        "handlerName": "cafeFlowCreateTableHandler"
      }
    ]
  }
} as const;

export default createTableController;

export const pipeline = [
  {
    "id": "createTable__httpController",
    "type": "httpController",
    "outputPath": "_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/createTable.ts",
    "defPath": "_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/createTable.defs.ts",
    "dependsFiles": [
      "_102049_/l1/cafeFlow/layer_2_application/usecases/createTable.d.ts"
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
