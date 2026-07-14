/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/http/controllers/createOperator.defs.ts" enhancement="_blank"/>

export const createOperatorController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "createOperator",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "createOperator",
    "controllerName": "CreateOperatorController",
    "ownerKind": "operation",
    "outputSource": "usecase",
    "handlers": [
      {
        "handlerName": "petShopCreateOperatorHandler",
        "command": "createOperator",
        "usecaseRef": "createOperator",
        "inputTypeName": "CreateOperatorInput",
        "kind": "create",
        "inputContract": [
          {
            "inputId": "name",
            "fieldRef": "Operator.name",
            "required": true,
            "source": "userInput",
            "description": "Nome completo do operador exibido na agenda e nos agendamentos atribuídos."
          },
          {
            "inputId": "email",
            "fieldRef": "Operator.email",
            "required": false,
            "source": "userInput",
            "description": "E-mail de contato do operador para notificações de agenda."
          },
          {
            "inputId": "phone",
            "fieldRef": "Operator.phone",
            "required": false,
            "source": "userInput",
            "description": "Telefone de contato do operador."
          },
          {
            "inputId": "active",
            "fieldRef": "Operator.active",
            "required": true,
            "source": "userInput",
            "description": "Indica se o operador inicia ativo e pode ser alocado em turnos; o formulário apresenta a opção marcada por padrão."
          },
          {
            "inputId": "operatorId",
            "fieldRef": "Operator.operatorId",
            "required": true,
            "source": "systemDefault",
            "description": "Identificador único do operador gerado automaticamente pelo sistema."
          },
          {
            "inputId": "createdAt",
            "fieldRef": "Operator.createdAt",
            "required": true,
            "source": "systemDefault",
            "description": "Data e hora de cadastro do operador, definida automaticamente no momento da criação."
          },
          {
            "inputId": "updatedAt",
            "fieldRef": "Operator.updatedAt",
            "required": true,
            "source": "systemDefault",
            "description": "Data e hora da última atualização, inicialmente igual à data de criação."
          }
        ],
        "contextResolution": [
          {
            "targetRef": "Operator.operatorId",
            "source": "systemDefault",
            "originRef": "systemDefault.uuid",
            "description": "O backend gera um UUID v4 automaticamente ao persistir o novo operador."
          },
          {
            "targetRef": "Operator.createdAt",
            "source": "systemDefault",
            "originRef": "systemDefault.now",
            "description": "O backend registra o timestamp atual no momento da criação do operador."
          },
          {
            "targetRef": "Operator.updatedAt",
            "source": "systemDefault",
            "originRef": "systemDefault.now",
            "description": "O backend define o timestamp atual igual ao de criação na primeira persistência."
          }
        ],
        "accessPattern": {
          "kind": "commandInput",
          "description": "",
          "entity": "Operator",
          "keyField": "Operator.operatorId",
          "pagination": "none",
          "selection": "none",
          "output": [
            "Operator.operatorId",
            "Operator.name",
            "Operator.email",
            "Operator.phone",
            "Operator.active",
            "Operator.createdAt"
          ]
        }
      }
    ],
    "routes": [
      {
        "key": "petShop.createOperator.createOperator",
        "handlerName": "petShopCreateOperatorHandler"
      }
    ]
  }
} as const;

export default createOperatorController;

export const pipeline = [
  {
    "id": "createOperator__httpController",
    "type": "httpController",
    "outputPath": "_102049_/l1/petShop/layer_1_external/adapters/http/controllers/createOperator.ts",
    "defPath": "_102049_/l1/petShop/layer_1_external/adapters/http/controllers/createOperator.defs.ts",
    "dependsFiles": [
      "_102049_/l1/petShop/layer_2_application/usecases/createOperator.d.ts"
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
