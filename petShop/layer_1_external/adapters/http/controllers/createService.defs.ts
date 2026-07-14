/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/http/controllers/createService.defs.ts" enhancement="_blank"/>

export const createServiceController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "createService",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "createService",
    "controllerName": "CreateServiceController",
    "ownerKind": "operation",
    "outputSource": "usecase",
    "handlers": [
      {
        "handlerName": "petShopCreateServiceHandler",
        "command": "createService",
        "usecaseRef": "createService",
        "inputTypeName": "CreateServiceInput",
        "kind": "create",
        "inputContract": [
          {
            "inputId": "name",
            "fieldRef": "Service.name",
            "required": true,
            "source": "userInput",
            "description": "Nome do serviço oferecido, como banho e tosa."
          },
          {
            "inputId": "description",
            "fieldRef": "Service.description",
            "required": true,
            "source": "userInput",
            "description": "Descrição detalhada do serviço oferecido ao cliente."
          },
          {
            "inputId": "estimatedDurationMinutes",
            "fieldRef": "Service.estimatedDurationMinutes",
            "required": true,
            "source": "userInput",
            "description": "Duração estimada do serviço em minutos, usada para cálculo de horários disponíveis."
          },
          {
            "inputId": "price",
            "fieldRef": "Service.price",
            "required": true,
            "source": "userInput",
            "description": "Preço do serviço, cobrado presencialmente na loja após a execução."
          },
          {
            "inputId": "serviceId",
            "fieldRef": "Service.serviceId",
            "required": true,
            "source": "systemDefault",
            "description": "Identificador único do serviço, gerado automaticamente pelo sistema."
          },
          {
            "inputId": "status",
            "fieldRef": "Service.status",
            "required": true,
            "source": "systemDefault",
            "description": "Estado de ativação do serviço; ao cadastrar, o sistema define automaticamente como ativo."
          },
          {
            "inputId": "createdAt",
            "fieldRef": "Service.createdAt",
            "required": true,
            "source": "systemDefault",
            "description": "Data e hora de criação do registro, definida automaticamente pelo sistema."
          },
          {
            "inputId": "updatedAt",
            "fieldRef": "Service.updatedAt",
            "required": true,
            "source": "systemDefault",
            "description": "Data e hora da última atualização do registro, definida automaticamente pelo sistema."
          }
        ],
        "contextResolution": [
          {
            "targetRef": "Service.serviceId",
            "source": "systemDefault",
            "originRef": "systemDefault.uuid",
            "description": "O backend gera um UUID para o novo serviço no momento da persistência."
          },
          {
            "targetRef": "Service.status",
            "source": "systemDefault",
            "originRef": "systemDefault.now",
            "description": "O backend define o status inicial como 'active' para que o serviço recém-criado apareça na listagem para clientes."
          },
          {
            "targetRef": "Service.createdAt",
            "source": "systemDefault",
            "originRef": "systemDefault.now",
            "description": "O backend registra a data e hora atuais no momento da criação do registro."
          },
          {
            "targetRef": "Service.updatedAt",
            "source": "systemDefault",
            "originRef": "systemDefault.now",
            "description": "O backend registra a data e hora atuais no momento da criação do registro, coincidindo com createdAt."
          }
        ],
        "accessPattern": {
          "kind": "commandInput",
          "description": "",
          "entity": "Service",
          "keyField": "Service.serviceId",
          "pagination": "none",
          "selection": "none",
          "output": [
            "Service.serviceId",
            "Service.name",
            "Service.description",
            "Service.estimatedDurationMinutes",
            "Service.price",
            "Service.status",
            "Service.createdAt"
          ]
        }
      }
    ],
    "routes": [
      {
        "key": "petShop.createService.createService",
        "handlerName": "petShopCreateServiceHandler"
      }
    ]
  }
} as const;

export default createServiceController;

export const pipeline = [
  {
    "id": "createService__httpController",
    "type": "httpController",
    "outputPath": "_102049_/l1/petShop/layer_1_external/adapters/http/controllers/createService.ts",
    "defPath": "_102049_/l1/petShop/layer_1_external/adapters/http/controllers/createService.defs.ts",
    "dependsFiles": [
      "_102049_/l1/petShop/layer_2_application/usecases/createService.d.ts"
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
