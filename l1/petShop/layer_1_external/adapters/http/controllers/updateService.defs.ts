/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/http/controllers/updateService.defs.ts" enhancement="_blank"/>

export const updateServiceController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "updateService",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "updateService",
    "controllerName": "UpdateServiceController",
    "ownerKind": "operation",
    "outputSource": "usecase",
    "handlers": [
      {
        "handlerName": "petShopUpdateServiceHandler",
        "command": "updateService",
        "usecaseRef": "updateService",
        "inputTypeName": "UpdateServiceInput",
        "kind": "update",
        "inputContract": [
          {
            "inputId": "serviceId",
            "fieldRef": "Service.serviceId",
            "required": true,
            "source": "selectedEntity",
            "description": "Identificador do serviço selecionado para edição."
          },
          {
            "inputId": "name",
            "fieldRef": "Service.name",
            "required": true,
            "source": "userInput",
            "description": "Nome atualizado do serviço, como banho e tosa."
          },
          {
            "inputId": "description",
            "fieldRef": "Service.description",
            "required": true,
            "source": "userInput",
            "description": "Descrição detalhada atualizada do serviço oferecido."
          },
          {
            "inputId": "estimatedDurationMinutes",
            "fieldRef": "Service.estimatedDurationMinutes",
            "required": true,
            "source": "userInput",
            "description": "Duração estimada atualizada do serviço em minutos."
          },
          {
            "inputId": "price",
            "fieldRef": "Service.price",
            "required": true,
            "source": "userInput",
            "description": "Preço atualizado do serviço cobrado na loja."
          },
          {
            "inputId": "status",
            "fieldRef": "Service.status",
            "required": true,
            "source": "userInput",
            "description": "Novo estado de ativação do serviço: active ou inactive."
          },
          {
            "inputId": "updatedAt",
            "fieldRef": "Service.updatedAt",
            "required": true,
            "source": "systemDefault",
            "description": "Data e hora da última atualização, definida automaticamente pelo sistema."
          },
          {
            "inputId": "deactivatedAt",
            "fieldRef": "Service.deactivatedAt",
            "required": false,
            "source": "systemDefault",
            "description": "Data e hora de desativação, definida automaticamente quando o status passa a inactive."
          }
        ],
        "contextResolution": [
          {
            "targetRef": "Service.serviceId",
            "source": "selectedEntity",
            "originRef": "Service.serviceId",
            "description": "O backend resolve o serviceId a partir do serviço atualmente selecionado pelo administrador na lista de serviços."
          },
          {
            "targetRef": "Service.updatedAt",
            "source": "systemDefault",
            "originRef": "systemDefault.now",
            "description": "O backend define updatedAt com o timestamp atual no momento da persistência da atualização."
          },
          {
            "targetRef": "Service.deactivatedAt",
            "source": "systemDefault",
            "originRef": "systemDefault.now",
            "description": "O backend define deactivatedAt com o timestamp atual quando o status do serviço passa a inactive; permanece nulo quando o status é active."
          }
        ],
        "accessPattern": {
          "kind": "commandInput",
          "description": "",
          "entity": "Service",
          "keyField": "Service.serviceId",
          "pagination": "none",
          "selection": "single",
          "output": [
            "Service.serviceId",
            "Service.name",
            "Service.description",
            "Service.estimatedDurationMinutes",
            "Service.price",
            "Service.status",
            "Service.deactivatedAt",
            "Service.updatedAt"
          ]
        }
      }
    ],
    "routes": [
      {
        "key": "petShop.updateService.updateService",
        "handlerName": "petShopUpdateServiceHandler"
      }
    ]
  }
} as const;

export default updateServiceController;

export const pipeline = [
  {
    "id": "updateService__httpController",
    "type": "httpController",
    "outputPath": "_102049_/l1/petShop/layer_1_external/adapters/http/controllers/updateService.ts",
    "defPath": "_102049_/l1/petShop/layer_1_external/adapters/http/controllers/updateService.defs.ts",
    "dependsFiles": [
      "_102049_/l1/petShop/layer_2_application/usecases/updateService.d.ts"
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
