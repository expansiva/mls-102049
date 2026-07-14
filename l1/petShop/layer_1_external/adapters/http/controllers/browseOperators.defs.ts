/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/http/controllers/browseOperators.defs.ts" enhancement="_blank"/>

export const browseOperatorsController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "browseOperators",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "browseOperators",
    "controllerName": "BrowseOperatorsController",
    "ownerKind": "operation",
    "outputSource": "usecase",
    "handlers": [
      {
        "handlerName": "petShopBrowseOperatorsHandler",
        "command": "browseOperators",
        "usecaseRef": "browseOperators",
        "inputTypeName": "BrowseOperatorsInput",
        "kind": "query",
        "inputContract": [
          {
            "inputId": "activeFilter",
            "fieldRef": "Operator.active",
            "required": false,
            "source": "userInput",
            "description": "Filtro opcional para listar apenas operadores ativos ou inativos."
          },
          {
            "inputId": "actorId",
            "fieldRef": "Operator.operatorId",
            "required": true,
            "source": "actorSession",
            "description": "Identificador do administrador autenticado que solicita a lista de operadores."
          }
        ],
        "contextResolution": [
          {
            "targetRef": "Operator.operatorId",
            "source": "actorSession",
            "originRef": "actorSession.actorId",
            "description": "O backend resolve o identificador do administrador a partir da sessão autenticada para autorizar o acesso à lista de operadores."
          }
        ],
        "accessPattern": {
          "kind": "list",
          "description": "",
          "entity": "Operator",
          "keyField": "Operator.operatorId",
          "pagination": "optional",
          "selection": "none",
          "output": [
            "Operator.operatorId",
            "Operator.name",
            "Operator.email",
            "Operator.phone",
            "Operator.active",
            "Operator.createdAt",
            "Operator.updatedAt"
          ]
        }
      }
    ],
    "routes": [
      {
        "key": "petShop.browseOperators.browseOperators",
        "handlerName": "petShopBrowseOperatorsHandler"
      }
    ]
  }
} as const;

export default browseOperatorsController;

export const pipeline = [
  {
    "id": "browseOperators__httpController",
    "type": "httpController",
    "outputPath": "_102049_/l1/petShop/layer_1_external/adapters/http/controllers/browseOperators.ts",
    "defPath": "_102049_/l1/petShop/layer_1_external/adapters/http/controllers/browseOperators.defs.ts",
    "dependsFiles": [
      "_102049_/l1/petShop/layer_2_application/usecases/browseOperators.d.ts"
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
