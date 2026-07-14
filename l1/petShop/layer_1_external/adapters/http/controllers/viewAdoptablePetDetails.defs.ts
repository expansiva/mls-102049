/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/http/controllers/viewAdoptablePetDetails.defs.ts" enhancement="_blank"/>

export const viewAdoptablePetDetailsController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "viewAdoptablePetDetails",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "viewAdoptablePetDetails",
    "controllerName": "ViewAdoptablePetDetailsController",
    "ownerKind": "operation",
    "outputSource": "usecase",
    "handlers": [
      {
        "handlerName": "petShopViewAdoptablePetDetailsHandler",
        "command": "viewAdoptablePetDetails",
        "usecaseRef": "viewAdoptablePetDetails",
        "inputTypeName": "ViewAdoptablePetDetailsInput",
        "kind": "view",
        "inputContract": [
          {
            "inputId": "adoptablePetId",
            "fieldRef": "AdoptablePet.adoptablePetId",
            "required": true,
            "source": "routeParam",
            "description": "Identificador do pet selecionado na galeria, passado como parâmetro de rota"
          }
        ],
        "contextResolution": [
          {
            "targetRef": "AdoptablePet.adoptablePetId",
            "source": "routeParam",
            "originRef": "routeParam.adoptablePetId",
            "description": "O backend extrai o identificador do pet do parâmetro de rota da URL para buscar o registro correspondente"
          }
        ],
        "accessPattern": {
          "kind": "getById",
          "description": "",
          "entity": "AdoptablePet",
          "keyField": "AdoptablePet.adoptablePetId",
          "pagination": "none",
          "selection": "single",
          "output": [
            "AdoptablePet.name",
            "AdoptablePet.age",
            "AdoptablePet.description",
            "AdoptablePet.photoUrl",
            "AdoptablePet.status"
          ]
        }
      }
    ],
    "routes": [
      {
        "key": "petShop.viewAdoptablePetDetails.viewAdoptablePetDetails",
        "handlerName": "petShopViewAdoptablePetDetailsHandler"
      }
    ]
  }
} as const;

export default viewAdoptablePetDetailsController;

export const pipeline = [
  {
    "id": "viewAdoptablePetDetails__httpController",
    "type": "httpController",
    "outputPath": "_102049_/l1/petShop/layer_1_external/adapters/http/controllers/viewAdoptablePetDetails.ts",
    "defPath": "_102049_/l1/petShop/layer_1_external/adapters/http/controllers/viewAdoptablePetDetails.defs.ts",
    "dependsFiles": [
      "_102049_/l1/petShop/layer_2_application/usecases/viewAdoptablePetDetails.d.ts"
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
