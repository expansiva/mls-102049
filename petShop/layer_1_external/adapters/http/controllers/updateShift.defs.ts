/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/http/controllers/updateShift.defs.ts" enhancement="_blank"/>

export const updateShiftController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "updateShift",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "updateShift",
    "controllerName": "UpdateShiftController",
    "ownerKind": "operation",
    "outputSource": "usecase",
    "handlers": [
      {
        "handlerName": "petShopUpdateShiftHandler",
        "command": "updateShift",
        "usecaseRef": "updateShift",
        "inputTypeName": "UpdateShiftInput",
        "kind": "update",
        "inputContract": [
          {
            "inputId": "shiftId",
            "fieldRef": "Shift.shiftId",
            "required": true,
            "source": "selectedEntity",
            "description": "Identificador do turno selecionado para edição."
          },
          {
            "inputId": "name",
            "fieldRef": "Shift.name",
            "required": true,
            "source": "userInput",
            "description": "Nome do turno informado pelo administrador (ex.: Manhã, Tarde, Dia Inteiro)."
          },
          {
            "inputId": "startTime",
            "fieldRef": "Shift.startTime",
            "required": true,
            "source": "userInput",
            "description": "Horário de início do turno no formato HH:mm."
          },
          {
            "inputId": "endTime",
            "fieldRef": "Shift.endTime",
            "required": true,
            "source": "userInput",
            "description": "Horário de fim do turno no formato HH:mm."
          },
          {
            "inputId": "monday",
            "fieldRef": "Shift.monday",
            "required": true,
            "source": "userInput",
            "description": "Indica se o turno ocorre às segundas-feiras."
          },
          {
            "inputId": "tuesday",
            "fieldRef": "Shift.tuesday",
            "required": true,
            "source": "userInput",
            "description": "Indica se o turno ocorre às terças-feiras."
          },
          {
            "inputId": "wednesday",
            "fieldRef": "Shift.wednesday",
            "required": true,
            "source": "userInput",
            "description": "Indica se o turno ocorre às quartas-feiras."
          },
          {
            "inputId": "thursday",
            "fieldRef": "Shift.thursday",
            "required": true,
            "source": "userInput",
            "description": "Indica se o turno ocorre às quintas-feiras."
          },
          {
            "inputId": "friday",
            "fieldRef": "Shift.friday",
            "required": true,
            "source": "userInput",
            "description": "Indica se o turno ocorre às sextas-feiras."
          },
          {
            "inputId": "saturday",
            "fieldRef": "Shift.saturday",
            "required": true,
            "source": "userInput",
            "description": "Indica se o turno ocorre aos sábados."
          },
          {
            "inputId": "sunday",
            "fieldRef": "Shift.sunday",
            "required": true,
            "source": "userInput",
            "description": "Indica se o turno ocorre aos domingos."
          },
          {
            "inputId": "active",
            "fieldRef": "Shift.active",
            "required": true,
            "source": "userInput",
            "description": "Indica se o turno está ativo e disponível para alocação."
          },
          {
            "inputId": "updatedAt",
            "fieldRef": "Shift.updatedAt",
            "required": true,
            "source": "systemDefault",
            "description": "Data e hora da última atualização, gerada automaticamente pelo sistema."
          },
          {
            "inputId": "actorId",
            "fieldRef": "Shift.shiftId",
            "required": true,
            "source": "actorSession",
            "description": "Identificador do administrador autenticado que realiza a edição, para auditoria."
          }
        ],
        "contextResolution": [
          {
            "targetRef": "Shift.shiftId",
            "source": "selectedEntity",
            "originRef": "Shift.shiftId",
            "description": "O backend obtém o shiftId a partir do turno atualmente selecionado na tela de listagem de turnos."
          },
          {
            "targetRef": "Shift.updatedAt",
            "source": "systemDefault",
            "originRef": "systemDefault.now",
            "description": "O backend define updatedAt com o timestamp atual no momento da execução da atualização."
          },
          {
            "targetRef": "actorSession.actorId",
            "source": "actorSession",
            "originRef": "actorSession.actorId",
            "description": "O backend extrai o actorId da sessão autenticada do administrador para registro de auditoria."
          }
        ],
        "accessPattern": {
          "kind": "commandInput",
          "description": "",
          "entity": "Shift",
          "keyField": "Shift.shiftId",
          "pagination": "none",
          "selection": "single",
          "output": [
            "Shift.shiftId",
            "Shift.name",
            "Shift.startTime",
            "Shift.endTime",
            "Shift.monday",
            "Shift.tuesday",
            "Shift.wednesday",
            "Shift.thursday",
            "Shift.friday",
            "Shift.saturday",
            "Shift.sunday",
            "Shift.active"
          ]
        }
      }
    ],
    "routes": [
      {
        "key": "petShop.updateShift.updateShift",
        "handlerName": "petShopUpdateShiftHandler"
      }
    ]
  }
} as const;

export default updateShiftController;

export const pipeline = [
  {
    "id": "updateShift__httpController",
    "type": "httpController",
    "outputPath": "_102049_/l1/petShop/layer_1_external/adapters/http/controllers/updateShift.ts",
    "defPath": "_102049_/l1/petShop/layer_1_external/adapters/http/controllers/updateShift.defs.ts",
    "dependsFiles": [
      "_102049_/l1/petShop/layer_2_application/usecases/updateShift.d.ts"
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
