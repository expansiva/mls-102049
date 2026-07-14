/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/http/controllers/updateAdoptablePet.defs.ts" enhancement="_blank"/>

export const updateAdoptablePetController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "updateAdoptablePet",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "updateAdoptablePet",
    "controllerName": "UpdateAdoptablePetController",
    "ownerKind": "operation",
    "outputSource": "usecase",
    "handlers": [
      {
        "handlerName": "petShopUpdateAdoptablePetHandler",
        "command": "updateAdoptablePet",
        "usecaseRef": "updateAdoptablePet",
        "inputTypeName": "UpdateAdoptablePetInput",
        "kind": "update",
        "inputContract": [
          {
            "inputId": "adoptablePetId",
            "fieldRef": "AdoptablePet.adoptablePetId",
            "required": true,
            "source": "selectedEntity",
            "description": "Identificador do pet selecionado para edição na lista de gestão"
          },
          {
            "inputId": "name",
            "fieldRef": "AdoptablePet.name",
            "required": true,
            "source": "userInput",
            "description": "Nome do pet editado pelo administrador"
          },
          {
            "inputId": "age",
            "fieldRef": "AdoptablePet.age",
            "required": true,
            "source": "userInput",
            "description": "Idade do pet em anos editada pelo administrador"
          },
          {
            "inputId": "description",
            "fieldRef": "AdoptablePet.description",
            "required": true,
            "source": "userInput",
            "description": "Descrição do pet editada pelo administrador"
          },
          {
            "inputId": "photoUrl",
            "fieldRef": "AdoptablePet.photoUrl",
            "required": true,
            "source": "userInput",
            "description": "URL da foto do pet no armazenamento de mídia da plataforma"
          },
          {
            "inputId": "status",
            "fieldRef": "AdoptablePet.status",
            "required": true,
            "source": "userInput",
            "description": "Disponibilidade do pet: available ou unavailable"
          },
          {
            "inputId": "updatedAt",
            "fieldRef": "AdoptablePet.updatedAt",
            "required": true,
            "source": "systemDefault",
            "description": "Data e hora da atualização, gerada automaticamente pelo sistema"
          }
        ],
        "contextResolution": [
          {
            "targetRef": "AdoptablePet.adoptablePetId",
            "source": "selectedEntity",
            "originRef": "AdoptablePet.adoptablePetId",
            "description": "O backend resolve o identificador do pet a partir da entidade selecionada pelo administrador na lista de gestão de pets"
          },
          {
            "targetRef": "AdoptablePet.updatedAt",
            "source": "systemDefault",
            "originRef": "systemDefault.now",
            "description": "O backend define updatedAt com o timestamp atual no momento da persistência da atualização"
          }
        ],
        "accessPattern": {
          "kind": "commandInput",
          "description": "",
          "entity": "AdoptablePet",
          "keyField": "AdoptablePet.adoptablePetId",
          "pagination": "none",
          "selection": "single",
          "output": [
            "AdoptablePet.adoptablePetId",
            "AdoptablePet.name",
            "AdoptablePet.age",
            "AdoptablePet.description",
            "AdoptablePet.photoUrl",
            "AdoptablePet.status",
            "AdoptablePet.updatedAt"
          ]
        }
      }
    ],
    "routes": [
      {
        "key": "petShop.updateAdoptablePet.updateAdoptablePet",
        "handlerName": "petShopUpdateAdoptablePetHandler"
      }
    ]
  }
} as const;

export default updateAdoptablePetController;

export const pipeline = [
  {
    "id": "updateAdoptablePet__httpController",
    "type": "httpController",
    "outputPath": "_102049_/l1/petShop/layer_1_external/adapters/http/controllers/updateAdoptablePet.ts",
    "defPath": "_102049_/l1/petShop/layer_1_external/adapters/http/controllers/updateAdoptablePet.defs.ts",
    "dependsFiles": [
      "_102049_/l1/petShop/layer_2_application/usecases/updateAdoptablePet.d.ts"
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
