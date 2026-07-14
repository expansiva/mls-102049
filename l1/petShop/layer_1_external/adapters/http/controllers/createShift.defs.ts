/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/http/controllers/createShift.defs.ts" enhancement="_blank"/>

export const createShiftController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "createShift",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "createShift",
    "controllerName": "CreateShiftController",
    "ownerKind": "operation",
    "outputSource": "usecase",
    "handlers": [
      {
        "handlerName": "petShopCreateShiftHandler",
        "command": "createShift",
        "usecaseRef": "createShift",
        "kind": "create",
        "inputContract": [
          {
            "inputId": "name",
            "fieldRef": "Shift.name",
            "required": true,
            "source": "userInput",
            "description": "Nome do turno para identificação (ex.: Manhã, Tarde, Dia Inteiro)."
          },
          {
            "inputId": "startTime",
            "fieldRef": "Shift.startTime",
            "required": true,
            "source": "userInput",
            "description": "Horário de início do turno no formato HH:mm (ex.: 09:00)."
          },
          {
            "inputId": "endTime",
            "fieldRef": "Shift.endTime",
            "required": true,
            "source": "userInput",
            "description": "Horário de fim do turno no formato HH:mm (ex.: 18:00)."
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
            "description": "Indica se o turno está ativo e disponível para alocação de operadores e agendamentos."
          },
          {
            "inputId": "shiftId",
            "fieldRef": "Shift.shiftId",
            "required": true,
            "source": "systemDefault",
            "description": "Identificador único do turno gerado automaticamente pelo sistema."
          },
          {
            "inputId": "createdAt",
            "fieldRef": "Shift.createdAt",
            "required": true,
            "source": "systemDefault",
            "description": "Data e hora de criação do turno, definida automaticamente pelo sistema."
          },
          {
            "inputId": "updatedAt",
            "fieldRef": "Shift.updatedAt",
            "required": true,
            "source": "systemDefault",
            "description": "Data e hora da última atualização do turno, definida automaticamente como a data de criação."
          }
        ],
        "contextResolution": [
          {
            "targetRef": "Shift.shiftId",
            "source": "systemDefault",
            "originRef": "systemDefault.uuid",
            "description": "O backend gera um UUID v4 para o identificador único do turno no momento da criação."
          },
          {
            "targetRef": "Shift.createdAt",
            "source": "systemDefault",
            "originRef": "systemDefault.now",
            "description": "O backend registra o timestamp atual do servidor como data de criação do turno."
          },
          {
            "targetRef": "Shift.updatedAt",
            "source": "systemDefault",
            "originRef": "systemDefault.now",
            "description": "O backend registra o timestamp atual do servidor como data de atualização do turno, igual à data de criação na criação."
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
            "Shift.active",
            "Shift.createdAt"
          ]
        }
      }
    ],
    "routes": [
      {
        "key": "petShop.createShift.createShift",
        "handlerName": "petShopCreateShiftHandler"
      }
    ]
  }
} as const;

export default createShiftController;

export const pipeline = [
  {
    "id": "createShift__httpController",
    "type": "httpController",
    "outputPath": "_102049_/l1/petShop/layer_1_external/adapters/http/controllers/createShift.ts",
    "defPath": "_102049_/l1/petShop/layer_1_external/adapters/http/controllers/createShift.defs.ts",
    "dependsFiles": [
      "_102049_/l1/petShop/layer_2_application/usecases/createShift.d.ts"
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
