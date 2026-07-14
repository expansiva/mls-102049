/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/http/controllers/expressAdoptionInterest.defs.ts" enhancement="_blank"/>

export const expressAdoptionInterestController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "expressAdoptionInterest",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "expressAdoptionInterest",
    "controllerName": "ExpressAdoptionInterestController",
    "ownerKind": "operation",
    "outputSource": "usecase",
    "handlers": [
      {
        "handlerName": "petShopExpressAdoptionInterestHandler",
        "command": "expressAdoptionInterest",
        "usecaseRef": "expressAdoptionInterest",
        "inputTypeName": "ExpressAdoptionInterestInput",
        "kind": "create",
        "inputContract": [
          {
            "inputId": "adoptablePetId",
            "fieldRef": "AdoptionInterest.adoptablePetId",
            "required": true,
            "source": "selectedEntity",
            "description": "Pet disponível para adoção selecionado pelo cliente no site."
          },
          {
            "inputId": "customerName",
            "fieldRef": "AdoptionInterest.customerName",
            "required": true,
            "source": "userInput",
            "description": "Nome completo do cliente que manifesta interesse em adotar."
          },
          {
            "inputId": "customerEmail",
            "fieldRef": "AdoptionInterest.customerEmail",
            "required": true,
            "source": "userInput",
            "description": "E-mail de contato do cliente para comunicação sobre a adoção."
          },
          {
            "inputId": "customerPhone",
            "fieldRef": "AdoptionInterest.customerPhone",
            "required": false,
            "source": "userInput",
            "description": "Telefone de contato do cliente para agendamento da visita presencial."
          },
          {
            "inputId": "adoptionInterestId",
            "fieldRef": "AdoptionInterest.adoptionInterestId",
            "required": true,
            "source": "systemDefault",
            "description": "Identificador único gerado automaticamente para o registro de interesse."
          },
          {
            "inputId": "status",
            "fieldRef": "AdoptionInterest.status",
            "required": true,
            "source": "systemDefault",
            "description": "Status inicial do registro, definido como 'registered'."
          },
          {
            "inputId": "createdAt",
            "fieldRef": "AdoptionInterest.createdAt",
            "required": true,
            "source": "systemDefault",
            "description": "Data e hora do registro do interesse, gerada automaticamente."
          },
          {
            "inputId": "updatedAt",
            "fieldRef": "AdoptionInterest.updatedAt",
            "required": true,
            "source": "systemDefault",
            "description": "Data e hora da última atualização, definida igual ao createdAt na criação."
          }
        ],
        "contextResolution": [
          {
            "targetRef": "AdoptionInterest.adoptablePetId",
            "source": "selectedEntity",
            "originRef": "AdoptablePet.adoptablePetId",
            "description": "O backend obtém o ID do pet atualmente selecionado pelo cliente na tela de visualização de pets disponíveis para adoção."
          },
          {
            "targetRef": "AdoptionInterest.adoptionInterestId",
            "source": "systemDefault",
            "originRef": "systemDefault.uuid",
            "description": "O backend gera um UUID automaticamente para o novo registro de interesse."
          },
          {
            "targetRef": "AdoptionInterest.status",
            "source": "systemDefault",
            "originRef": "systemDefault.now",
            "description": "O backend define o status inicial como 'registered', pois a adoção é apenas iniciada online conforme regra de negócio."
          },
          {
            "targetRef": "AdoptionInterest.createdAt",
            "source": "systemDefault",
            "originRef": "systemDefault.now",
            "description": "O backend registra a data e hora atuais no momento da criação do interesse."
          },
          {
            "targetRef": "AdoptionInterest.updatedAt",
            "source": "systemDefault",
            "originRef": "systemDefault.now",
            "description": "O backend define a data e hora da última atualização igual ao momento da criação."
          }
        ],
        "accessPattern": {
          "kind": "commandInput",
          "description": "",
          "entity": "AdoptionInterest",
          "keyField": "AdoptionInterest.adoptionInterestId",
          "pagination": "none",
          "selection": "single",
          "output": [
            "AdoptionInterest.adoptionInterestId",
            "AdoptionInterest.status",
            "AdoptionInterest.adoptablePetId",
            "AdoptionInterest.customerName",
            "AdoptionInterest.createdAt"
          ]
        }
      }
    ],
    "routes": [
      {
        "key": "petShop.expressAdoptionInterest.expressAdoptionInterest",
        "handlerName": "petShopExpressAdoptionInterestHandler"
      }
    ]
  }
} as const;

export default expressAdoptionInterestController;

export const pipeline = [
  {
    "id": "expressAdoptionInterest__httpController",
    "type": "httpController",
    "outputPath": "_102049_/l1/petShop/layer_1_external/adapters/http/controllers/expressAdoptionInterest.ts",
    "defPath": "_102049_/l1/petShop/layer_1_external/adapters/http/controllers/expressAdoptionInterest.defs.ts",
    "dependsFiles": [
      "_102049_/l1/petShop/layer_2_application/usecases/expressAdoptionInterest.d.ts"
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
