/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/http/controllers/updateOperator.defs.ts" enhancement="_blank"/>

export const updateOperatorController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "updateOperator",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "updateOperator",
    "controllerName": "UpdateOperatorController",
    "ownerKind": "operation",
    "outputSource": "usecase",
    "handlers": [
      {
        "handlerName": "petShopUpdateOperatorHandler",
        "command": "updateOperator",
        "usecaseRef": "updateOperator",
        "inputTypeName": "UpdateOperatorInput",
        "kind": "update",
        "inputContract": [
          {
            "inputId": "operatorId",
            "fieldRef": "Operator.operatorId",
            "required": true,
            "source": "routeParam",
            "description": "Identificador do operador a ser editado, obtido da rota de edição."
          },
          {
            "inputId": "name",
            "fieldRef": "Operator.name",
            "required": true,
            "source": "userInput",
            "description": "Nome completo do operador editado pelo administrador."
          },
          {
            "inputId": "email",
            "fieldRef": "Operator.email",
            "required": false,
            "source": "userInput",
            "description": "E-mail de contato do operador, opcional."
          },
          {
            "inputId": "phone",
            "fieldRef": "Operator.phone",
            "required": false,
            "source": "userInput",
            "description": "Telefone de contato do operador, opcional."
          },
          {
            "inputId": "active",
            "fieldRef": "Operator.active",
            "required": true,
            "source": "userInput",
            "description": "Indica se o operador está ativo e pode ser alocado em turnos."
          },
          {
            "inputId": "updatedAt",
            "fieldRef": "Operator.updatedAt",
            "required": true,
            "source": "systemDefault",
            "description": "Data e hora da atualização, definida automaticamente pelo servidor."
          },
          {
            "inputId": "actorId",
            "fieldRef": "Operator.operatorId",
            "required": true,
            "source": "actorSession",
            "description": "Identificador do administrador autenticado que realiza a edição, para auditoria."
          }
        ],
        "contextResolution": [
          {
            "targetRef": "Operator.operatorId",
            "source": "routeParam",
            "originRef": "routeParam.operatorId",
            "description": "O backend extrai o operatorId do parâmetro de rota para localizar o operador a ser editado."
          },
          {
            "targetRef": "Operator.updatedAt",
            "source": "systemDefault",
            "originRef": "systemDefault.now",
            "description": "O backend define updatedAt com o timestamp atual no momento da persistência da alteração."
          },
          {
            "targetRef": "Operator.operatorId",
            "source": "actorSession",
            "originRef": "actorSession.actorId",
            "description": "O backend obtém o identificador do administrador autenticado a partir da sessão para auditoria da alteração."
          }
        ],
        "accessPattern": {
          "kind": "commandInput",
          "description": "",
          "entity": "Operator",
          "keyField": "Operator.operatorId",
          "pagination": "none",
          "selection": "single",
          "output": [
            "Operator.operatorId",
            "Operator.name",
            "Operator.email",
            "Operator.phone",
            "Operator.active",
            "Operator.updatedAt"
          ]
        }
      }
    ],
    "routes": [
      {
        "key": "petShop.updateOperator.updateOperator",
        "handlerName": "petShopUpdateOperatorHandler"
      }
    ]
  }
} as const;

export default updateOperatorController;

export const pipeline = [
  {
    "id": "updateOperator__httpController",
    "type": "httpController",
    "outputPath": "_102049_/l1/petShop/layer_1_external/adapters/http/controllers/updateOperator.ts",
    "defPath": "_102049_/l1/petShop/layer_1_external/adapters/http/controllers/updateOperator.defs.ts",
    "dependsFiles": [
      "_102049_/l1/petShop/layer_2_application/usecases/updateOperator.d.ts"
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
