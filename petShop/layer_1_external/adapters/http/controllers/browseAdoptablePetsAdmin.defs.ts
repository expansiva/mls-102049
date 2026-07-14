/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/http/controllers/browseAdoptablePetsAdmin.defs.ts" enhancement="_blank"/>

export const browseAdoptablePetsAdminController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "browseAdoptablePetsAdmin",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "browseAdoptablePetsAdmin",
    "controllerName": "BrowseAdoptablePetsAdminController",
    "ownerKind": "operation",
    "outputSource": "usecase",
    "handlers": [
      {
        "handlerName": "petShopBrowseAdoptablePetsAdminHandler",
        "command": "browseAdoptablePetsAdmin",
        "usecaseRef": "browseAdoptablePetsAdmin",
        "kind": "query",
        "inputContract": [
          {
            "inputId": "statusFilter",
            "fieldRef": "AdoptablePet.status",
            "required": false,
            "source": "userInput",
            "description": "Filtro opcional de status (available ou unavailable) para restringir a lista de pets exibida."
          }
        ],
        "contextResolution": [
          {
            "targetRef": "AdoptablePet.adoptablePetId",
            "source": "actorSession",
            "originRef": "actorSession.actorId",
            "description": "O backend identifica o administrador autenticado via sessão para autorizar o acesso à lista de pets cadastrados."
          }
        ],
        "accessPattern": {
          "kind": "list",
          "description": "",
          "entity": "AdoptablePet",
          "keyField": "AdoptablePet.adoptablePetId",
          "pagination": "optional",
          "selection": "none",
          "output": [
            "AdoptablePet.adoptablePetId",
            "AdoptablePet.name",
            "AdoptablePet.age",
            "AdoptablePet.description",
            "AdoptablePet.photoUrl",
            "AdoptablePet.status",
            "AdoptablePet.createdAt",
            "AdoptablePet.updatedAt"
          ]
        }
      }
    ],
    "routes": [
      {
        "key": "petShop.browseAdoptablePetsAdmin.browseAdoptablePetsAdmin",
        "handlerName": "petShopBrowseAdoptablePetsAdminHandler"
      }
    ]
  }
} as const;

export default browseAdoptablePetsAdminController;

export const pipeline = [
  {
    "id": "browseAdoptablePetsAdmin__httpController",
    "type": "httpController",
    "outputPath": "_102049_/l1/petShop/layer_1_external/adapters/http/controllers/browseAdoptablePetsAdmin.ts",
    "defPath": "_102049_/l1/petShop/layer_1_external/adapters/http/controllers/browseAdoptablePetsAdmin.defs.ts",
    "dependsFiles": [
      "_102049_/l1/petShop/layer_2_application/usecases/browseAdoptablePetsAdmin.d.ts"
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
