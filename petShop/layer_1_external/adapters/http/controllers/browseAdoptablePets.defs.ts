/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/http/controllers/browseAdoptablePets.defs.ts" enhancement="_blank"/>

export const browseAdoptablePetsController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "browseAdoptablePets",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "browseAdoptablePets",
    "controllerName": "BrowseAdoptablePetsController",
    "ownerKind": "operation",
    "outputSource": "usecase",
    "handlers": [
      {
        "handlerName": "petShopBrowseAdoptablePetsHandler",
        "command": "browseAdoptablePets",
        "usecaseRef": "browseAdoptablePets",
        "kind": "query",
        "inputContract": [],
        "contextResolution": [
          {
            "targetRef": "AdoptablePet.status",
            "source": "systemDefault",
            "originRef": "systemDefault.now",
            "description": "O backend aplica automaticamente o filtro status='available' a todas as consultas da galeria, garantindo que apenas pets disponíveis sejam retornados conforme a regra de domínio."
          }
        ],
        "accessPattern": {
          "kind": "list",
          "description": "",
          "entity": "AdoptablePet",
          "keyField": "AdoptablePet.adoptablePetId",
          "pagination": "required",
          "selection": "none",
          "output": [
            "AdoptablePet.adoptablePetId",
            "AdoptablePet.name",
            "AdoptablePet.age",
            "AdoptablePet.description",
            "AdoptablePet.photoUrl"
          ]
        }
      }
    ],
    "routes": [
      {
        "key": "petShop.browseAdoptablePets.browseAdoptablePets",
        "handlerName": "petShopBrowseAdoptablePetsHandler"
      }
    ]
  }
} as const;

export default browseAdoptablePetsController;

export const pipeline = [
  {
    "id": "browseAdoptablePets__httpController",
    "type": "httpController",
    "outputPath": "_102049_/l1/petShop/layer_1_external/adapters/http/controllers/browseAdoptablePets.ts",
    "defPath": "_102049_/l1/petShop/layer_1_external/adapters/http/controllers/browseAdoptablePets.defs.ts",
    "dependsFiles": [
      "_102049_/l1/petShop/layer_2_application/usecases/browseAdoptablePets.d.ts"
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
