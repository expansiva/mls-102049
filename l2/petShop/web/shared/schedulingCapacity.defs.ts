/// <mls fileReference="_102049_/l2/petShop/web/shared/schedulingCapacity.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "schedulingCapacity",
  "pageName": "Alocação e capacidade de atendimento",
  "moduleName": "petShop",
  "baseClassName": "PetShopSchedulingCapacityBase",
  "routePattern": "/petShop/schedulingCapacity",
  "sourceKind": "operation",
  "ownerIds": [
    "operation:assignOperatorToShift",
    "operation:reviewSchedulingCapacity"
  ],
  "operationIds": [
    "assignOperatorToShift",
    "reviewSchedulingCapacity"
  ],
  "origin": {
    "source": "l4-journey",
    "workspaceId": "schedulingCapacity",
    "workspaceKind": "operation",
    "actor": "admin",
    "entity": "ShiftAssignment",
    "owners": [
      {
        "kind": "operation",
        "id": "assignOperatorToShift",
        "defPath": "_102049_/l4/operations/assignOperatorToShift.defs.ts"
      },
      {
        "kind": "operation",
        "id": "reviewSchedulingCapacity",
        "defPath": "_102049_/l4/operations/reviewSchedulingCapacity.defs.ts"
      }
    ],
    "microUserFlow": {
      "source": "l4/story.steps",
      "workflowSteps": [],
      "operations": [
        {
          "operationId": "assignOperatorToShift",
          "commandName": "assignOperatorToShift",
          "steps": [
            "O administrador seleciona um operador existente e um turno existente no formulário de alocação.",
            "O sistema valida que o operador e o turno existem e cria o vínculo de alocação.",
            "A capacidade de agendamento do turno é recalculada considerando o novo operador alocado."
          ]
        },
        {
          "operationId": "reviewSchedulingCapacity",
          "commandName": "reviewSchedulingCapacity",
          "steps": [
            "O administrador acessa a tela de revisão de capacidade de atendimento",
            "O sistema lista todas as alocações de operadores em turnos, agrupadas por turno",
            "O administrador pode filtrar as alocações por um turno específico para análise detalhada",
            "O sistema apresenta o número de operadores alocados por turno como indicador da capacidade de agendamento disponível"
          ]
        }
      ]
    }
  },
  "contractRef": {
    "defPath": "_102049_/l2/petShop/web/contracts/schedulingCapacity.defs.ts",
    "tsPath": "_102049_/l2/petShop/web/contracts/schedulingCapacity.ts"
  },
  "layoutRef": {
    "defPath": "_102049_/l2/petShop/web/desktop/page11/schedulingCapacity.defs.ts",
    "layoutId": "schedulingCapacity_page11_pos_workspace"
  },
  "states": [
    {
      "stateKey": "ui.schedulingCapacity.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.schedulingCapacity.action.assignOperatorToShift.status",
      "name": "assignOperatorToShiftState",
      "kind": "actionStatus",
      "actionRef": "assignOperatorToShift",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.schedulingCapacity.input.assignOperatorToShift.operatorId",
      "name": "assignOperatorToShiftOperatorId",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "assignOperatorToShift",
        "direction": "input",
        "field": "operatorId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.schedulingCapacity.input.assignOperatorToShift.shiftId",
      "name": "assignOperatorToShiftShiftId",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "assignOperatorToShift",
        "direction": "input",
        "field": "shiftId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.schedulingCapacity.output.assignOperatorToShift",
      "name": "assignOperatorToShiftOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "assignOperatorToShift",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.schedulingCapacity.action.assignOperatorToShift.error",
      "name": "assignOperatorToShiftError",
      "kind": "actionError",
      "actionRef": "assignOperatorToShift",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.schedulingCapacity.action.reviewSchedulingCapacity.status",
      "name": "reviewSchedulingCapacityState",
      "kind": "actionStatus",
      "actionRef": "reviewSchedulingCapacity",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.schedulingCapacity.input.reviewSchedulingCapacity.shiftId",
      "name": "reviewSchedulingCapacityShiftId",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "reviewSchedulingCapacity",
        "direction": "input",
        "field": "shiftId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.schedulingCapacity.data.reviewSchedulingCapacity",
      "name": "reviewSchedulingCapacityData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "reviewSchedulingCapacity",
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
      "stateKey": "ui.schedulingCapacity.businessContext.activeCompanyId",
      "name": "activeCompanyId",
      "kind": "businessContext",
      "source": "businessContext.activeCompanyId",
      "targetRef": "businessContext.activeCompanyId",
      "required": true,
      "selector": "company",
      "defaultValue": ""
    }
  ],
  "actions": [
    {
      "actionId": "assignOperatorToShift",
      "kind": "command",
      "commandRef": "assignOperatorToShift",
      "routeKey": "petShop.assignOperatorToShift.assignOperatorToShift",
      "purpose": "Alocar operador em turno",
      "methodName": "assignOperatorToShift",
      "handlerName": "handleAssignOperatorToShiftClick",
      "inputStateKeys": [
        "ui.schedulingCapacity.input.assignOperatorToShift.operatorId",
        "ui.schedulingCapacity.input.assignOperatorToShift.shiftId"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.schedulingCapacity.output.assignOperatorToShift"
      ],
      "statusStateKey": "ui.schedulingCapacity.action.assignOperatorToShift.status",
      "errorStateKey": "ui.schedulingCapacity.action.assignOperatorToShift.error",
      "feedback": {
        "successMessageKey": "action.assignOperatorToShift.success",
        "errorMessageKey": "action.assignOperatorToShift.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.schedulingCapacity.input.assignOperatorToShift.operatorId",
        "ui.schedulingCapacity.input.assignOperatorToShift.shiftId"
      ],
      "refreshActionIds": [
        "reviewSchedulingCapacity"
      ]
    },
    {
      "actionId": "reviewSchedulingCapacity",
      "kind": "query",
      "commandRef": "reviewSchedulingCapacity",
      "routeKey": "petShop.reviewSchedulingCapacity.reviewSchedulingCapacity",
      "purpose": "Revisar capacidade de atendimento",
      "methodName": "loadReviewSchedulingCapacity",
      "handlerName": "handleReviewSchedulingCapacityClick",
      "inputStateKeys": [
        "ui.schedulingCapacity.input.reviewSchedulingCapacity.shiftId"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.schedulingCapacity.data.reviewSchedulingCapacity"
      ],
      "statusStateKey": "ui.schedulingCapacity.action.reviewSchedulingCapacity.status"
    },
    {
      "actionId": "set.assignOperatorToShiftOperatorId",
      "kind": "stateSetter",
      "stateKey": "ui.schedulingCapacity.input.assignOperatorToShift.operatorId",
      "methodName": "setAssignOperatorToShiftOperatorId",
      "handlerName": "handleAssignOperatorToShiftOperatorIdChange"
    },
    {
      "actionId": "set.assignOperatorToShiftShiftId",
      "kind": "stateSetter",
      "stateKey": "ui.schedulingCapacity.input.assignOperatorToShift.shiftId",
      "methodName": "setAssignOperatorToShiftShiftId",
      "handlerName": "handleAssignOperatorToShiftShiftIdChange"
    },
    {
      "actionId": "set.reviewSchedulingCapacityShiftId",
      "kind": "stateSetter",
      "stateKey": "ui.schedulingCapacity.input.reviewSchedulingCapacity.shiftId",
      "methodName": "setReviewSchedulingCapacityShiftId",
      "handlerName": "handleReviewSchedulingCapacityShiftIdChange"
    }
  ],
  "initialLoads": [
    {
      "actionId": "reviewSchedulingCapacity",
      "stateKey": "ui.schedulingCapacity.data.reviewSchedulingCapacity"
    }
  ],
  "businessContextRefs": [
    {
      "operationId": "reviewSchedulingCapacity",
      "contextKey": "activeCompanyId",
      "originRef": "businessContext.activeCompanyId",
      "targetRef": "businessContext.activeCompanyId",
      "required": true,
      "description": "O backend resolve a empresa ativa a partir do contexto de negócio para escopar as alocações consultadas à empresa correta"
    }
  ],
  "navigationRefs": [],
  "i18nMeta": {
    "defaultLocale": "pt",
    "activeLocales": [
      "pt"
    ]
  },
  "i18n": {
    "section.schedulingCapacity.title": "Alocação e capacidade de atendimento",
    "intention.queryList.title": "Alocações de operadores em turnos",
    "intention.queryList.empty": "Nenhuma alocação encontrada. Ajuste o filtro de turno ou aloque um operador para visualizar a capacidade.",
    "intention.commandForm.title": "Alocar operador em turno",
    "intention.commandForm.empty": "Selecione um operador e um turno para criar a alocação.",
    "intention.summary.title": "Capacidade de atendimento por turno",
    "intention.summary.empty": "Nenhuma capacidade calculada. Revise as alocações para visualizar a capacidade de atendimento.",
    "field.operatorId.label": "Operador",
    "field.shiftId.label": "Turno",
    "column.shiftAssignmentId.label": "ID da alocação",
    "column.name.label": "Nome do operador",
    "column.shiftId.label": "Turno",
    "column.startTime.label": "Início",
    "column.endTime.label": "Fim",
    "column.createdAt.label": "Criado em",
    "filter.shiftId.label": "Filtrar por turno",
    "action.assignOperatorToShift.label": "Alocar",
    "action.reviewSchedulingCapacity.label": "Atualizar",
    "action.assignOperatorToShift.success": "Operador alocado no turno com sucesso. A capacidade de atendimento foi recalculada.",
    "action.assignOperatorToShift.error": "Não foi possível alocar o operador no turno. Verifique os dados e tente novamente.",
    "action.reviewSchedulingCapacity.success": "Capacidade de atendimento atualizada.",
    "action.reviewSchedulingCapacity.error": "Não foi possível carregar as alocações. Tente novamente.",
    "org.review.scheduling.capacity.title": "Revisar capacidade de atendimento listando alocações de operadores em turnos",
    "org.assign.operator.to.shift.title": "Alocar operador em turno selecionando operador e turno existentes",
    "org.capacity.summary.title": "Apresentar o número de operadores alocados por turno como indicador da capacidade de agendamento disponível"
  },
  "automation": {
    "statePrefix": "ui.schedulingCapacity",
    "stateKeys": [
      "ui.schedulingCapacity.status",
      "ui.schedulingCapacity.action.assignOperatorToShift.status",
      "ui.schedulingCapacity.input.assignOperatorToShift.operatorId",
      "ui.schedulingCapacity.input.assignOperatorToShift.shiftId",
      "ui.schedulingCapacity.output.assignOperatorToShift",
      "ui.schedulingCapacity.action.assignOperatorToShift.error",
      "ui.schedulingCapacity.action.reviewSchedulingCapacity.status",
      "ui.schedulingCapacity.input.reviewSchedulingCapacity.shiftId",
      "ui.schedulingCapacity.data.reviewSchedulingCapacity",
      "ui.schedulingCapacity.businessContext.activeCompanyId"
    ],
    "actionIds": [
      "assignOperatorToShift",
      "reviewSchedulingCapacity",
      "set.assignOperatorToShiftOperatorId",
      "set.assignOperatorToShiftShiftId",
      "set.reviewSchedulingCapacityShiftId"
    ]
  }
};

export const pipeline = [
  {
    "id": "schedulingCapacity__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102049_/l2/petShop/web/shared/schedulingCapacity.ts",
    "defPath": "_102049_/l2/petShop/web/shared/schedulingCapacity.defs.ts",
    "dependsFiles": [
      "_102049_/l2/petShop/web/contracts/schedulingCapacity.ts",
      "_102029_.d.ts"
    ],
    "dependsOn": [
      "schedulingCapacity__l2_contract"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
