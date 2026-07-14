/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/http/controllers/createAdoptablePet.defs.ts" enhancement="_blank"/>

export const createAdoptablePetController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "createAdoptablePet",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "createAdoptablePet",
    "controllerName": "CreateAdoptablePetController",
    "ownerKind": "operation",
    "outputSource": "usecase",
    "handlers": [
      {
        "handlerName": "petShopCreateAdoptablePetHandler",
        "command": "createAdoptablePet",
        "usecaseRef": "createAdoptablePet",
        "inputTypeName": "CreateAdoptablePetInput",
        "kind": "create",
        "inputContract": [
          {
            "inputId": "name",
            "fieldRef": "AdoptablePet.name",
            "required": true,
            "source": "userInput",
            "description": "Nome do pet informado pelo administrador"
          },
          {
            "inputId": "age",
            "fieldRef": "AdoptablePet.age",
            "required": true,
            "source": "userInput",
            "description": "Idade do pet em anos informada pelo administrador"
          },
          {
            "inputId": "description",
            "fieldRef": "AdoptablePet.description",
            "required": true,
            "source": "userInput",
            "description": "Descrição do pet exibida na galeria pública"
          },
          {
            "inputId": "photoUrl",
            "fieldRef": "AdoptablePet.photoUrl",
            "required": true,
            "source": "userInput",
            "description": "URL da foto do pet no armazenamento de mídia da plataforma"
          },
          {
            "inputId": "adoptablePetId",
            "fieldRef": "AdoptablePet.adoptablePetId",
            "required": true,
            "source": "systemDefault",
            "description": "Identificador único gerado automaticamente pelo sistema"
          },
          {
            "inputId": "status",
            "fieldRef": "AdoptablePet.status",
            "required": true,
            "source": "systemDefault",
            "description": "Status de disponibilidade definido como disponível no cadastro"
          },
          {
            "inputId": "createdAt",
            "fieldRef": "AdoptablePet.createdAt",
            "required": true,
            "source": "systemDefault",
            "description": "Data e hora de cadastro gerada automaticamente"
          },
          {
            "inputId": "updatedAt",
            "fieldRef": "AdoptablePet.updatedAt",
            "required": true,
            "source": "systemDefault",
            "description": "Data e hora da última atualização gerada automaticamente"
          }
        ],
        "contextResolution": [
          {
            "targetRef": "AdoptablePet.adoptablePetId",
            "source": "systemDefault",
            "originRef": "systemDefault.uuid",
            "description": "O backend gera um UUID v4 automaticamente ao persistir o novo pet"
          },
          {
            "targetRef": "AdoptablePet.status",
            "source": "systemDefault",
            "originRef": "systemDefault.now",
            "description": "O backend define o status inicial como 'available' para que o pet apareça na galeria pública conforme a regra de domínio"
          },
          {
            "targetRef": "AdoptablePet.createdAt",
            "source": "systemDefault",
            "originRef": "systemDefault.now",
            "description": "O backend registra a data e hora atual do servidor no momento da criação"
          },
          {
            "targetRef": "AdoptablePet.updatedAt",
            "source": "systemDefault",
            "originRef": "systemDefault.now",
            "description": "O backend registra a data e hora atual do servidor no momento da criação, igual a createdAt"
          }
        ],
        "accessPattern": {
          "kind": "commandInput",
          "description": "",
          "entity": "AdoptablePet",
          "keyField": "AdoptablePet.adoptablePetId",
          "pagination": "none",
          "selection": "none",
          "output": [
            "AdoptablePet.adoptablePetId",
            "AdoptablePet.name",
            "AdoptablePet.age",
            "AdoptablePet.description",
            "AdoptablePet.photoUrl",
            "AdoptablePet.status",
            "AdoptablePet.createdAt"
          ]
        }
      }
    ],
    "routes": [
      {
        "key": "petShop.createAdoptablePet.createAdoptablePet",
        "handlerName": "petShopCreateAdoptablePetHandler"
      }
    ]
  }
} as const;

export default createAdoptablePetController;

export const pipeline = [
  {
    "id": "createAdoptablePet__httpController",
    "type": "httpController",
    "outputPath": "_102049_/l1/petShop/layer_1_external/adapters/http/controllers/createAdoptablePet.ts",
    "defPath": "_102049_/l1/petShop/layer_1_external/adapters/http/controllers/createAdoptablePet.defs.ts",
    "dependsFiles": [
      "_102049_/l1/petShop/layer_2_application/usecases/createAdoptablePet.d.ts"
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
