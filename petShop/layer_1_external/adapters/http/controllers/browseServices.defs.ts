/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/http/controllers/browseServices.defs.ts" enhancement="_blank"/>

export const browseServicesController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "browseServices",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "browseServices",
    "controllerName": "BrowseServicesController",
    "ownerKind": "operation",
    "outputSource": "usecase",
    "handlers": [
      {
        "handlerName": "petShopBrowseServicesHandler",
        "command": "browseServices",
        "usecaseRef": "browseServices",
        "kind": "query",
        "inputContract": [
          {
            "inputId": "statusFilter",
            "fieldRef": "Service.status",
            "required": false,
            "source": "userInput",
            "description": "Filtro opcional por status de ativação (active ou inactive) para restringir a listagem."
          },
          {
            "inputId": "actorId",
            "fieldRef": "Operator.operatorId",
            "required": true,
            "source": "actorSession",
            "description": "Identificador do administrador autenticado que solicita a listagem."
          }
        ],
        "contextResolution": [
          {
            "targetRef": "Operator.operatorId",
            "source": "actorSession",
            "originRef": "actorSession.actorId",
            "description": "O backend resolve o identificador do administrador a partir da sessão ativa do ator autenticado."
          }
        ],
        "accessPattern": {
          "kind": "list",
          "description": "",
          "entity": "Service",
          "keyField": "Service.serviceId",
          "pagination": "optional",
          "selection": "none",
          "output": [
            "Service.serviceId",
            "Service.name",
            "Service.description",
            "Service.estimatedDurationMinutes",
            "Service.price",
            "Service.status",
            "Service.deactivatedAt",
            "Service.createdAt",
            "Service.updatedAt"
          ]
        }
      }
    ],
    "routes": [
      {
        "key": "petShop.browseServices.browseServices",
        "handlerName": "petShopBrowseServicesHandler"
      }
    ]
  }
} as const;

export default browseServicesController;

export const pipeline = [
  {
    "id": "browseServices__httpController",
    "type": "httpController",
    "outputPath": "_102049_/l1/petShop/layer_1_external/adapters/http/controllers/browseServices.ts",
    "defPath": "_102049_/l1/petShop/layer_1_external/adapters/http/controllers/browseServices.defs.ts",
    "dependsFiles": [
      "_102049_/l1/petShop/layer_2_application/usecases/browseServices.d.ts"
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
