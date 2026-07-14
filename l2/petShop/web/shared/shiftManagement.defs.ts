/// <mls fileReference="_102049_/l2/petShop/web/shared/shiftManagement.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "shiftManagement",
  "pageName": "Gestão de turnos",
  "moduleName": "petShop",
  "baseClassName": "PetShopShiftManagementBase",
  "routePattern": "/petShop/shiftManagement",
  "sourceKind": "operation",
  "ownerIds": [
    "operation:browseShifts",
    "operation:createShift",
    "operation:updateShift"
  ],
  "operationIds": [
    "browseShifts",
    "createShift",
    "updateShift"
  ],
  "origin": {
    "source": "l4-journey",
    "workspaceId": "shiftManagement",
    "workspaceKind": "entityManagement",
    "actor": "admin",
    "entity": "Shift",
    "owners": [
      {
        "kind": "operation",
        "id": "browseShifts",
        "defPath": "_102049_/l4/operations/browseShifts.defs.ts"
      },
      {
        "kind": "operation",
        "id": "createShift",
        "defPath": "_102049_/l4/operations/createShift.defs.ts"
      },
      {
        "kind": "operation",
        "id": "updateShift",
        "defPath": "_102049_/l4/operations/updateShift.defs.ts"
      }
    ],
    "microUserFlow": {
      "source": "l4/story.steps",
      "workflowSteps": [],
      "operations": [
        {
          "operationId": "browseShifts",
          "commandName": "browseShifts",
          "steps": [
            "O administrador acessa a tela de gestão de turnos.",
            "O sistema retorna a lista de todos os turnos cadastrados com nome, horário de início e fim, dias da semana e status ativo.",
            "O administrador pode filtrar por turnos ativos e ordenar os resultados."
          ]
        },
        {
          "operationId": "createShift",
          "commandName": "createShift",
          "steps": [
            "O administrador acessa a tela de gestão de turnos e solicita a criação de um novo turno.",
            "O administrador informa o nome do turno, horário de início (HH:mm), horário de fim (HH:mm) e marca os dias da semana em que o turno ocorre.",
            "O administrador confirma a criação e o sistema gera um identificador único, registra as datas de criação e atualização e persiste o turno.",
            "O turno criado fica disponível para alocação de operadores e cálculo de capacidade de agendamento."
          ]
        },
        {
          "operationId": "updateShift",
          "commandName": "updateShift",
          "steps": [
            "O administrador seleciona um turno existente na lista de turnos.",
            "O sistema carrega os dados atuais do turno para edição.",
            "O administrador modifica os campos desejados (nome, horário de início, horário de fim, dias da semana, ativo).",
            "O sistema valida que pelo menos um dia da semana está selecionado e que os horários estão no formato HH:mm.",
            "O sistema atualiza o turno e registra a data/hora da última atualização."
          ]
        }
      ]
    }
  },
  "contractRef": {
    "defPath": "_102049_/l2/petShop/web/contracts/shiftManagement.defs.ts",
    "tsPath": "_102049_/l2/petShop/web/contracts/shiftManagement.ts"
  },
  "layoutRef": {
    "defPath": "_102049_/l2/petShop/web/desktop/page11/shiftManagement.defs.ts",
    "layoutId": "shiftManagement.page11.tabular_classic"
  },
  "states": [
    {
      "stateKey": "ui.shiftManagement.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.shiftManagement.action.browseShifts.status",
      "name": "browseShiftsState",
      "kind": "actionStatus",
      "actionRef": "browseShifts",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.shiftManagement.input.browseShifts.activeFilter",
      "name": "browseShiftsActiveFilter",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "browseShifts",
        "direction": "input",
        "field": "activeFilter"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.shiftManagement.data.browseShifts",
      "name": "browseShiftsData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "browseShifts",
        "direction": "output"
      },
      "outputShape": "paginated",
      "collection": false,
      "defaultValue": {
        "items": [],
        "total": 0
      }
    },
    {
      "stateKey": "ui.shiftManagement.action.createShift.status",
      "name": "createShiftState",
      "kind": "actionStatus",
      "actionRef": "createShift",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.shiftManagement.input.createShift.name",
      "name": "createShiftName",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "createShift",
        "direction": "input",
        "field": "name"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.shiftManagement.input.createShift.startTime",
      "name": "createShiftStartTime",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "createShift",
        "direction": "input",
        "field": "startTime"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.shiftManagement.input.createShift.endTime",
      "name": "createShiftEndTime",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "createShift",
        "direction": "input",
        "field": "endTime"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.shiftManagement.input.createShift.monday",
      "name": "createShiftMonday",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "createShift",
        "direction": "input",
        "field": "monday"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.shiftManagement.input.createShift.tuesday",
      "name": "createShiftTuesday",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "createShift",
        "direction": "input",
        "field": "tuesday"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.shiftManagement.input.createShift.wednesday",
      "name": "createShiftWednesday",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "createShift",
        "direction": "input",
        "field": "wednesday"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.shiftManagement.input.createShift.thursday",
      "name": "createShiftThursday",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "createShift",
        "direction": "input",
        "field": "thursday"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.shiftManagement.input.createShift.friday",
      "name": "createShiftFriday",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "createShift",
        "direction": "input",
        "field": "friday"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.shiftManagement.input.createShift.saturday",
      "name": "createShiftSaturday",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "createShift",
        "direction": "input",
        "field": "saturday"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.shiftManagement.input.createShift.sunday",
      "name": "createShiftSunday",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "createShift",
        "direction": "input",
        "field": "sunday"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.shiftManagement.input.createShift.active",
      "name": "createShiftActive",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "createShift",
        "direction": "input",
        "field": "active"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.shiftManagement.output.createShift",
      "name": "createShiftOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "createShift",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.shiftManagement.action.createShift.error",
      "name": "createShiftError",
      "kind": "actionError",
      "actionRef": "createShift",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.shiftManagement.action.updateShift.status",
      "name": "updateShiftState",
      "kind": "actionStatus",
      "actionRef": "updateShift",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.shiftManagement.input.updateShift.shiftId",
      "name": "updateShiftShiftId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "updateShift",
        "direction": "input",
        "field": "shiftId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.shiftManagement.input.updateShift.name",
      "name": "updateShiftName",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "updateShift",
        "direction": "input",
        "field": "name"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.shiftManagement.input.updateShift.startTime",
      "name": "updateShiftStartTime",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "updateShift",
        "direction": "input",
        "field": "startTime"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.shiftManagement.input.updateShift.endTime",
      "name": "updateShiftEndTime",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "updateShift",
        "direction": "input",
        "field": "endTime"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.shiftManagement.input.updateShift.monday",
      "name": "updateShiftMonday",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "updateShift",
        "direction": "input",
        "field": "monday"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.shiftManagement.input.updateShift.tuesday",
      "name": "updateShiftTuesday",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "updateShift",
        "direction": "input",
        "field": "tuesday"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.shiftManagement.input.updateShift.wednesday",
      "name": "updateShiftWednesday",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "updateShift",
        "direction": "input",
        "field": "wednesday"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.shiftManagement.input.updateShift.thursday",
      "name": "updateShiftThursday",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "updateShift",
        "direction": "input",
        "field": "thursday"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.shiftManagement.input.updateShift.friday",
      "name": "updateShiftFriday",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "updateShift",
        "direction": "input",
        "field": "friday"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.shiftManagement.input.updateShift.saturday",
      "name": "updateShiftSaturday",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "updateShift",
        "direction": "input",
        "field": "saturday"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.shiftManagement.input.updateShift.sunday",
      "name": "updateShiftSunday",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "updateShift",
        "direction": "input",
        "field": "sunday"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.shiftManagement.input.updateShift.active",
      "name": "updateShiftActive",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "updateShift",
        "direction": "input",
        "field": "active"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.shiftManagement.output.updateShift",
      "name": "updateShiftOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "updateShift",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.shiftManagement.action.updateShift.error",
      "name": "updateShiftError",
      "kind": "actionError",
      "actionRef": "updateShift",
      "defaultValue": ""
    }
  ],
  "actions": [
    {
      "actionId": "browseShifts",
      "kind": "query",
      "commandRef": "browseShifts",
      "routeKey": "petShop.browseShifts.browseShifts",
      "purpose": "Listar turnos de trabalho",
      "methodName": "loadBrowseShifts",
      "handlerName": "handleBrowseShiftsClick",
      "inputStateKeys": [
        "ui.shiftManagement.input.browseShifts.activeFilter"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.shiftManagement.data.browseShifts"
      ],
      "statusStateKey": "ui.shiftManagement.action.browseShifts.status"
    },
    {
      "actionId": "createShift",
      "kind": "command",
      "commandRef": "createShift",
      "routeKey": "petShop.createShift.createShift",
      "purpose": "Criar turno de trabalho",
      "methodName": "createShift",
      "handlerName": "handleCreateShiftClick",
      "inputStateKeys": [
        "ui.shiftManagement.input.createShift.name",
        "ui.shiftManagement.input.createShift.startTime",
        "ui.shiftManagement.input.createShift.endTime",
        "ui.shiftManagement.input.createShift.monday",
        "ui.shiftManagement.input.createShift.tuesday",
        "ui.shiftManagement.input.createShift.wednesday",
        "ui.shiftManagement.input.createShift.thursday",
        "ui.shiftManagement.input.createShift.friday",
        "ui.shiftManagement.input.createShift.saturday",
        "ui.shiftManagement.input.createShift.sunday",
        "ui.shiftManagement.input.createShift.active"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.shiftManagement.output.createShift"
      ],
      "statusStateKey": "ui.shiftManagement.action.createShift.status",
      "errorStateKey": "ui.shiftManagement.action.createShift.error",
      "feedback": {
        "successMessageKey": "action.createShift.success",
        "errorMessageKey": "action.createShift.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.shiftManagement.input.createShift.name",
        "ui.shiftManagement.input.createShift.startTime",
        "ui.shiftManagement.input.createShift.endTime",
        "ui.shiftManagement.input.createShift.monday",
        "ui.shiftManagement.input.createShift.tuesday",
        "ui.shiftManagement.input.createShift.wednesday",
        "ui.shiftManagement.input.createShift.thursday",
        "ui.shiftManagement.input.createShift.friday",
        "ui.shiftManagement.input.createShift.saturday",
        "ui.shiftManagement.input.createShift.sunday",
        "ui.shiftManagement.input.createShift.active"
      ],
      "refreshActionIds": [
        "browseShifts"
      ]
    },
    {
      "actionId": "updateShift",
      "kind": "command",
      "commandRef": "updateShift",
      "routeKey": "petShop.updateShift.updateShift",
      "purpose": "Editar turno de trabalho",
      "methodName": "updateShift",
      "handlerName": "handleUpdateShiftClick",
      "inputStateKeys": [
        "ui.shiftManagement.input.updateShift.shiftId",
        "ui.shiftManagement.input.updateShift.name",
        "ui.shiftManagement.input.updateShift.startTime",
        "ui.shiftManagement.input.updateShift.endTime",
        "ui.shiftManagement.input.updateShift.monday",
        "ui.shiftManagement.input.updateShift.tuesday",
        "ui.shiftManagement.input.updateShift.wednesday",
        "ui.shiftManagement.input.updateShift.thursday",
        "ui.shiftManagement.input.updateShift.friday",
        "ui.shiftManagement.input.updateShift.saturday",
        "ui.shiftManagement.input.updateShift.sunday",
        "ui.shiftManagement.input.updateShift.active"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [
        "ui.shiftManagement.input.updateShift.shiftId"
      ],
      "outputStateKeys": [
        "ui.shiftManagement.output.updateShift"
      ],
      "statusStateKey": "ui.shiftManagement.action.updateShift.status",
      "errorStateKey": "ui.shiftManagement.action.updateShift.error",
      "feedback": {
        "successMessageKey": "action.updateShift.success",
        "errorMessageKey": "action.updateShift.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.shiftManagement.input.updateShift.shiftId",
        "ui.shiftManagement.input.updateShift.name",
        "ui.shiftManagement.input.updateShift.startTime",
        "ui.shiftManagement.input.updateShift.endTime",
        "ui.shiftManagement.input.updateShift.monday",
        "ui.shiftManagement.input.updateShift.tuesday",
        "ui.shiftManagement.input.updateShift.wednesday",
        "ui.shiftManagement.input.updateShift.thursday",
        "ui.shiftManagement.input.updateShift.friday",
        "ui.shiftManagement.input.updateShift.saturday",
        "ui.shiftManagement.input.updateShift.sunday",
        "ui.shiftManagement.input.updateShift.active"
      ],
      "refreshActionIds": [
        "browseShifts"
      ]
    },
    {
      "actionId": "set.browseShiftsActiveFilter",
      "kind": "stateSetter",
      "stateKey": "ui.shiftManagement.input.browseShifts.activeFilter",
      "methodName": "setBrowseShiftsActiveFilter",
      "handlerName": "handleBrowseShiftsActiveFilterChange"
    },
    {
      "actionId": "set.createShiftName",
      "kind": "stateSetter",
      "stateKey": "ui.shiftManagement.input.createShift.name",
      "methodName": "setCreateShiftName",
      "handlerName": "handleCreateShiftNameChange"
    },
    {
      "actionId": "set.createShiftStartTime",
      "kind": "stateSetter",
      "stateKey": "ui.shiftManagement.input.createShift.startTime",
      "methodName": "setCreateShiftStartTime",
      "handlerName": "handleCreateShiftStartTimeChange"
    },
    {
      "actionId": "set.createShiftEndTime",
      "kind": "stateSetter",
      "stateKey": "ui.shiftManagement.input.createShift.endTime",
      "methodName": "setCreateShiftEndTime",
      "handlerName": "handleCreateShiftEndTimeChange"
    },
    {
      "actionId": "set.createShiftMonday",
      "kind": "stateSetter",
      "stateKey": "ui.shiftManagement.input.createShift.monday",
      "methodName": "setCreateShiftMonday",
      "handlerName": "handleCreateShiftMondayChange"
    },
    {
      "actionId": "set.createShiftTuesday",
      "kind": "stateSetter",
      "stateKey": "ui.shiftManagement.input.createShift.tuesday",
      "methodName": "setCreateShiftTuesday",
      "handlerName": "handleCreateShiftTuesdayChange"
    },
    {
      "actionId": "set.createShiftWednesday",
      "kind": "stateSetter",
      "stateKey": "ui.shiftManagement.input.createShift.wednesday",
      "methodName": "setCreateShiftWednesday",
      "handlerName": "handleCreateShiftWednesdayChange"
    },
    {
      "actionId": "set.createShiftThursday",
      "kind": "stateSetter",
      "stateKey": "ui.shiftManagement.input.createShift.thursday",
      "methodName": "setCreateShiftThursday",
      "handlerName": "handleCreateShiftThursdayChange"
    },
    {
      "actionId": "set.createShiftFriday",
      "kind": "stateSetter",
      "stateKey": "ui.shiftManagement.input.createShift.friday",
      "methodName": "setCreateShiftFriday",
      "handlerName": "handleCreateShiftFridayChange"
    },
    {
      "actionId": "set.createShiftSaturday",
      "kind": "stateSetter",
      "stateKey": "ui.shiftManagement.input.createShift.saturday",
      "methodName": "setCreateShiftSaturday",
      "handlerName": "handleCreateShiftSaturdayChange"
    },
    {
      "actionId": "set.createShiftSunday",
      "kind": "stateSetter",
      "stateKey": "ui.shiftManagement.input.createShift.sunday",
      "methodName": "setCreateShiftSunday",
      "handlerName": "handleCreateShiftSundayChange"
    },
    {
      "actionId": "set.createShiftActive",
      "kind": "stateSetter",
      "stateKey": "ui.shiftManagement.input.createShift.active",
      "methodName": "setCreateShiftActive",
      "handlerName": "handleCreateShiftActiveChange"
    },
    {
      "actionId": "set.updateShiftShiftId",
      "kind": "stateSetter",
      "stateKey": "ui.shiftManagement.input.updateShift.shiftId",
      "methodName": "setUpdateShiftShiftId",
      "handlerName": "handleUpdateShiftShiftIdChange"
    },
    {
      "actionId": "set.updateShiftName",
      "kind": "stateSetter",
      "stateKey": "ui.shiftManagement.input.updateShift.name",
      "methodName": "setUpdateShiftName",
      "handlerName": "handleUpdateShiftNameChange"
    },
    {
      "actionId": "set.updateShiftStartTime",
      "kind": "stateSetter",
      "stateKey": "ui.shiftManagement.input.updateShift.startTime",
      "methodName": "setUpdateShiftStartTime",
      "handlerName": "handleUpdateShiftStartTimeChange"
    },
    {
      "actionId": "set.updateShiftEndTime",
      "kind": "stateSetter",
      "stateKey": "ui.shiftManagement.input.updateShift.endTime",
      "methodName": "setUpdateShiftEndTime",
      "handlerName": "handleUpdateShiftEndTimeChange"
    },
    {
      "actionId": "set.updateShiftMonday",
      "kind": "stateSetter",
      "stateKey": "ui.shiftManagement.input.updateShift.monday",
      "methodName": "setUpdateShiftMonday",
      "handlerName": "handleUpdateShiftMondayChange"
    },
    {
      "actionId": "set.updateShiftTuesday",
      "kind": "stateSetter",
      "stateKey": "ui.shiftManagement.input.updateShift.tuesday",
      "methodName": "setUpdateShiftTuesday",
      "handlerName": "handleUpdateShiftTuesdayChange"
    },
    {
      "actionId": "set.updateShiftWednesday",
      "kind": "stateSetter",
      "stateKey": "ui.shiftManagement.input.updateShift.wednesday",
      "methodName": "setUpdateShiftWednesday",
      "handlerName": "handleUpdateShiftWednesdayChange"
    },
    {
      "actionId": "set.updateShiftThursday",
      "kind": "stateSetter",
      "stateKey": "ui.shiftManagement.input.updateShift.thursday",
      "methodName": "setUpdateShiftThursday",
      "handlerName": "handleUpdateShiftThursdayChange"
    },
    {
      "actionId": "set.updateShiftFriday",
      "kind": "stateSetter",
      "stateKey": "ui.shiftManagement.input.updateShift.friday",
      "methodName": "setUpdateShiftFriday",
      "handlerName": "handleUpdateShiftFridayChange"
    },
    {
      "actionId": "set.updateShiftSaturday",
      "kind": "stateSetter",
      "stateKey": "ui.shiftManagement.input.updateShift.saturday",
      "methodName": "setUpdateShiftSaturday",
      "handlerName": "handleUpdateShiftSaturdayChange"
    },
    {
      "actionId": "set.updateShiftSunday",
      "kind": "stateSetter",
      "stateKey": "ui.shiftManagement.input.updateShift.sunday",
      "methodName": "setUpdateShiftSunday",
      "handlerName": "handleUpdateShiftSundayChange"
    },
    {
      "actionId": "set.updateShiftActive",
      "kind": "stateSetter",
      "stateKey": "ui.shiftManagement.input.updateShift.active",
      "methodName": "setUpdateShiftActive",
      "handlerName": "handleUpdateShiftActiveChange"
    }
  ],
  "initialLoads": [
    {
      "actionId": "browseShifts",
      "stateKey": "ui.shiftManagement.data.browseShifts"
    }
  ],
  "businessContextRefs": [],
  "navigationRefs": [],
  "i18nMeta": {
    "defaultLocale": "pt",
    "activeLocales": [
      "pt"
    ]
  },
  "i18n": {
    "shiftManagement.section.gestaoTurnos.title": "Gestão de turnos",
    "shiftManagement.organism.browseShifts.title": "Turnos cadastrados",
    "shiftManagement.organism.createShift.title": "Novo turno",
    "shiftManagement.organism.updateShift.title": "Editar turno",
    "shiftManagement.intent.browseList.title": "Lista de turnos",
    "shiftManagement.intent.browseList.empty": "Nenhum turno encontrado. Crie um novo turno para começar.",
    "shiftManagement.intent.createForm.title": "Criar turno",
    "shiftManagement.intent.updateForm.title": "Atualizar turno",
    "shiftManagement.field.name.label": "Nome do turno",
    "shiftManagement.field.startTime.label": "Início",
    "shiftManagement.field.endTime.label": "Fim",
    "shiftManagement.field.monday.label": "Segunda",
    "shiftManagement.field.tuesday.label": "Terça",
    "shiftManagement.field.wednesday.label": "Quarta",
    "shiftManagement.field.thursday.label": "Quinta",
    "shiftManagement.field.friday.label": "Sexta",
    "shiftManagement.field.saturday.label": "Sábado",
    "shiftManagement.field.sunday.label": "Domingo",
    "shiftManagement.field.active.label": "Ativo",
    "shiftManagement.filter.activeFilter.label": "Somente ativos",
    "shiftManagement.action.createShift.label": "Novo turno",
    "shiftManagement.action.updateShift.label": "Editar",
    "shiftManagement.action.createShift.submit": "Criar turno",
    "shiftManagement.action.updateShift.submit": "Salvar alterações",
    "action.createShift.success": "Turno criado com sucesso.",
    "action.createShift.error": "Não foi possível criar o turno. Tente novamente.",
    "action.updateShift.success": "Turno atualizado com sucesso.",
    "action.updateShift.error": "Não foi possível atualizar o turno. Tente novamente."
  },
  "automation": {
    "statePrefix": "ui.shiftManagement",
    "stateKeys": [
      "ui.shiftManagement.status",
      "ui.shiftManagement.action.browseShifts.status",
      "ui.shiftManagement.input.browseShifts.activeFilter",
      "ui.shiftManagement.data.browseShifts",
      "ui.shiftManagement.action.createShift.status",
      "ui.shiftManagement.input.createShift.name",
      "ui.shiftManagement.input.createShift.startTime",
      "ui.shiftManagement.input.createShift.endTime",
      "ui.shiftManagement.input.createShift.monday",
      "ui.shiftManagement.input.createShift.tuesday",
      "ui.shiftManagement.input.createShift.wednesday",
      "ui.shiftManagement.input.createShift.thursday",
      "ui.shiftManagement.input.createShift.friday",
      "ui.shiftManagement.input.createShift.saturday",
      "ui.shiftManagement.input.createShift.sunday",
      "ui.shiftManagement.input.createShift.active",
      "ui.shiftManagement.output.createShift",
      "ui.shiftManagement.action.createShift.error",
      "ui.shiftManagement.action.updateShift.status",
      "ui.shiftManagement.input.updateShift.shiftId",
      "ui.shiftManagement.input.updateShift.name",
      "ui.shiftManagement.input.updateShift.startTime",
      "ui.shiftManagement.input.updateShift.endTime",
      "ui.shiftManagement.input.updateShift.monday",
      "ui.shiftManagement.input.updateShift.tuesday",
      "ui.shiftManagement.input.updateShift.wednesday",
      "ui.shiftManagement.input.updateShift.thursday",
      "ui.shiftManagement.input.updateShift.friday",
      "ui.shiftManagement.input.updateShift.saturday",
      "ui.shiftManagement.input.updateShift.sunday",
      "ui.shiftManagement.input.updateShift.active",
      "ui.shiftManagement.output.updateShift",
      "ui.shiftManagement.action.updateShift.error"
    ],
    "actionIds": [
      "browseShifts",
      "createShift",
      "updateShift",
      "set.browseShiftsActiveFilter",
      "set.createShiftName",
      "set.createShiftStartTime",
      "set.createShiftEndTime",
      "set.createShiftMonday",
      "set.createShiftTuesday",
      "set.createShiftWednesday",
      "set.createShiftThursday",
      "set.createShiftFriday",
      "set.createShiftSaturday",
      "set.createShiftSunday",
      "set.createShiftActive",
      "set.updateShiftShiftId",
      "set.updateShiftName",
      "set.updateShiftStartTime",
      "set.updateShiftEndTime",
      "set.updateShiftMonday",
      "set.updateShiftTuesday",
      "set.updateShiftWednesday",
      "set.updateShiftThursday",
      "set.updateShiftFriday",
      "set.updateShiftSaturday",
      "set.updateShiftSunday",
      "set.updateShiftActive"
    ]
  }
};

export const pipeline = [
  {
    "id": "shiftManagement__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102049_/l2/petShop/web/shared/shiftManagement.ts",
    "defPath": "_102049_/l2/petShop/web/shared/shiftManagement.defs.ts",
    "dependsFiles": [
      "_102049_/l2/petShop/web/contracts/shiftManagement.ts",
      "_102029_.d.ts"
    ],
    "dependsOn": [
      "shiftManagement__l2_contract"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
