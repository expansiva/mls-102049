/// <mls fileReference="_102049_/l2/petShop/web/desktop/page11/schedulingCapacity.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "schedulingCapacity",
  "pageName": "Alocação e capacidade de atendimento",
  "baseClassName": "PetShopSchedulingCapacityBase",
  "actor": "admin",
  "purpose": "Executar Alocação e capacidade de atendimento.",
  "capabilities": [
    "assignOperatorToShift",
    "reviewSchedulingCapacity"
  ],
  "flowRefs": {
    "experienceFlows": [],
    "entityLifecycles": [],
    "taskWorkflows": [],
    "automations": []
  },
  "pluginRefs": [],
  "mdmRefs": [],
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
  "pageInputs": [
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
  "sections": [
    {
      "id": "sec_scheduling_capacity",
      "type": "section",
      "sectionName": "Alocação e capacidade de atendimento",
      "titleKey": "section.schedulingCapacity.title",
      "mode": "edit",
      "order": 10,
      "organisms": [
        {
          "id": "org_review_scheduling_capacity",
          "type": "organism",
          "organismName": "ReviewSchedulingCapacity",
          "titleKey": "org.review.scheduling.capacity.title",
          "purpose": "Revisar capacidade de atendimento listando alocações de operadores em turnos",
          "userActions": [
            "reviewSchedulingCapacity"
          ],
          "requiredEntities": [
            "ShiftAssignment",
            "Shift",
            "Operator"
          ],
          "readsFields": [
            "shiftAssignmentId",
            "operatorId",
            "shiftId",
            "createdAt",
            "startTime",
            "endTime",
            "name"
          ],
          "writesFields": [],
          "rulesApplied": [
            "schedulingCapacityByOperators",
            "operatorMultipleShiftsAllowed"
          ],
          "order": 10,
          "intentionRefs": [
            {
              "id": "intent_query_list",
              "intent": "queryList",
              "stateKey": "ui.schedulingCapacity.data.reviewSchedulingCapacity",
              "order": 10
            }
          ]
        },
        {
          "id": "org_assign_operator_to_shift",
          "type": "organism",
          "organismName": "AssignOperatorToShift",
          "titleKey": "org.assign.operator.to.shift.title",
          "purpose": "Alocar operador em turno selecionando operador e turno existentes",
          "userActions": [
            "assignOperatorToShift"
          ],
          "requiredEntities": [
            "ShiftAssignment",
            "Operator",
            "Shift"
          ],
          "readsFields": [],
          "writesFields": [
            "operatorId",
            "shiftId"
          ],
          "rulesApplied": [
            "schedulingCapacityByOperators",
            "operatorMultipleShiftsAllowed"
          ],
          "order": 20,
          "intentionRefs": [
            {
              "id": "intent_command_form",
              "intent": "commandForm",
              "stateKey": "ui.schedulingCapacity.output.assignOperatorToShift",
              "action": "assignOperatorToShift",
              "submitAction": "assignOperatorToShift",
              "order": 10
            }
          ]
        },
        {
          "id": "org_capacity_summary",
          "type": "organism",
          "organismName": "CapacitySummary",
          "titleKey": "org.capacity.summary.title",
          "purpose": "Apresentar o número de operadores alocados por turno como indicador da capacidade de agendamento disponível",
          "userActions": [
            "reviewSchedulingCapacity"
          ],
          "requiredEntities": [
            "ShiftAssignment",
            "Shift",
            "Operator"
          ],
          "readsFields": [
            "shiftId",
            "startTime",
            "endTime",
            "operatorId",
            "name"
          ],
          "writesFields": [],
          "rulesApplied": [
            "schedulingCapacityByOperators",
            "operatorMultipleShiftsAllowed"
          ],
          "order": 30,
          "intentionRefs": [
            {
              "id": "intent_summary",
              "intent": "summary",
              "stateKey": "ui.schedulingCapacity.data.reviewSchedulingCapacity",
              "order": 10
            }
          ]
        }
      ]
    }
  ],
  "templateId": "pos_workspace",
  "visualStyle": "Site-first, visualmente atraente, com galerias de imagens, catálogos navegáveis, carrinho de compras e agenda orientada por status",
  "layout": {
    "id": "schedulingCapacity_page11_pos_workspace",
    "type": "page",
    "sections": [
      {
        "id": "sec_scheduling_capacity",
        "type": "section",
        "sectionName": "Alocação e capacidade de atendimento",
        "titleKey": "section.schedulingCapacity.title",
        "mode": "edit",
        "order": 10,
        "organisms": [
          {
            "id": "org_review_scheduling_capacity",
            "type": "organism",
            "organismName": "ReviewSchedulingCapacity",
            "titleKey": "org.review.scheduling.capacity.title",
            "purpose": "Revisar capacidade de atendimento listando alocações de operadores em turnos",
            "userActions": [
              "reviewSchedulingCapacity"
            ],
            "requiredEntities": [
              "ShiftAssignment",
              "Shift",
              "Operator"
            ],
            "readsFields": [
              "shiftAssignmentId",
              "operatorId",
              "shiftId",
              "createdAt",
              "startTime",
              "endTime",
              "name"
            ],
            "writesFields": [],
            "rulesApplied": [
              "schedulingCapacityByOperators",
              "operatorMultipleShiftsAllowed"
            ],
            "order": 10,
            "intentions": [
              {
                "id": "intent_query_list",
                "intent": "queryList",
                "order": 10,
                "titleKey": "intention.queryList.title",
                "source": "petShop.reviewSchedulingCapacity.reviewSchedulingCapacity",
                "binding": "bind_reviewSchedulingCapacity",
                "emptyKey": "intention.queryList.empty",
                "stateKey": "ui.schedulingCapacity.data.reviewSchedulingCapacity",
                "fields": [],
                "columns": [
                  {
                    "id": "col_shift_assignment_id",
                    "field": "shiftAssignmentId",
                    "labelKey": "column.shiftAssignmentId.label",
                    "order": 10,
                    "required": false,
                    "inputType": "text",
                    "format": "uuid",
                    "stateKey": "ui.schedulingCapacity.data.reviewSchedulingCapacity"
                  },
                  {
                    "id": "col_name",
                    "field": "name",
                    "labelKey": "column.name.label",
                    "order": 20,
                    "required": false,
                    "inputType": "text",
                    "format": "string",
                    "stateKey": "ui.schedulingCapacity.data.reviewSchedulingCapacity"
                  },
                  {
                    "id": "col_shift_id",
                    "field": "shiftId",
                    "labelKey": "column.shiftId.label",
                    "order": 30,
                    "required": false,
                    "inputType": "text",
                    "format": "uuid",
                    "stateKey": "ui.schedulingCapacity.data.reviewSchedulingCapacity"
                  },
                  {
                    "id": "col_start_time",
                    "field": "startTime",
                    "labelKey": "column.startTime.label",
                    "order": 40,
                    "required": false,
                    "inputType": "text",
                    "format": "string",
                    "stateKey": "ui.schedulingCapacity.data.reviewSchedulingCapacity"
                  },
                  {
                    "id": "col_end_time",
                    "field": "endTime",
                    "labelKey": "column.endTime.label",
                    "order": 50,
                    "required": false,
                    "inputType": "text",
                    "format": "string",
                    "stateKey": "ui.schedulingCapacity.data.reviewSchedulingCapacity"
                  },
                  {
                    "id": "col_created_at",
                    "field": "createdAt",
                    "labelKey": "column.createdAt.label",
                    "order": 60,
                    "required": false,
                    "inputType": "text",
                    "format": "date",
                    "stateKey": "ui.schedulingCapacity.data.reviewSchedulingCapacity"
                  }
                ],
                "filters": [
                  {
                    "id": "filter_shift_id",
                    "field": "shiftId",
                    "labelKey": "filter.shiftId.label",
                    "order": 10,
                    "required": false,
                    "inputType": "select",
                    "stateKey": "ui.schedulingCapacity.input.reviewSchedulingCapacity.shiftId"
                  }
                ],
                "toolbar": [
                  {
                    "id": "tb_refresh",
                    "action": "reviewSchedulingCapacity",
                    "labelKey": "action.reviewSchedulingCapacity.label",
                    "order": 10,
                    "displayHint": "primary",
                    "actionKey": "reviewSchedulingCapacity"
                  }
                ],
                "rowActions": [],
                "actions": []
              }
            ]
          },
          {
            "id": "org_assign_operator_to_shift",
            "type": "organism",
            "organismName": "AssignOperatorToShift",
            "titleKey": "org.assign.operator.to.shift.title",
            "purpose": "Alocar operador em turno selecionando operador e turno existentes",
            "userActions": [
              "assignOperatorToShift"
            ],
            "requiredEntities": [
              "ShiftAssignment",
              "Operator",
              "Shift"
            ],
            "readsFields": [],
            "writesFields": [
              "operatorId",
              "shiftId"
            ],
            "rulesApplied": [
              "schedulingCapacityByOperators",
              "operatorMultipleShiftsAllowed"
            ],
            "order": 20,
            "intentions": [
              {
                "id": "intent_command_form",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "intention.commandForm.title",
                "source": "petShop.assignOperatorToShift.assignOperatorToShift",
                "binding": "bind_assignOperatorToShift",
                "action": "assignOperatorToShift",
                "submitAction": "assignOperatorToShift",
                "emptyKey": "intention.commandForm.empty",
                "stateKey": "ui.schedulingCapacity.output.assignOperatorToShift",
                "fields": [
                  {
                    "id": "field_operator_id",
                    "field": "operatorId",
                    "labelKey": "field.operatorId.label",
                    "order": 10,
                    "required": true,
                    "inputType": "select",
                    "stateKey": "ui.schedulingCapacity.input.assignOperatorToShift.operatorId"
                  },
                  {
                    "id": "field_shift_id",
                    "field": "shiftId",
                    "labelKey": "field.shiftId.label",
                    "order": 20,
                    "required": true,
                    "inputType": "select",
                    "stateKey": "ui.schedulingCapacity.input.assignOperatorToShift.shiftId"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "act_assign",
                    "action": "assignOperatorToShift",
                    "labelKey": "action.assignOperatorToShift.label",
                    "order": 10,
                    "displayHint": "primary",
                    "actionKey": "assignOperatorToShift"
                  }
                ]
              }
            ]
          },
          {
            "id": "org_capacity_summary",
            "type": "organism",
            "organismName": "CapacitySummary",
            "titleKey": "org.capacity.summary.title",
            "purpose": "Apresentar o número de operadores alocados por turno como indicador da capacidade de agendamento disponível",
            "userActions": [
              "reviewSchedulingCapacity"
            ],
            "requiredEntities": [
              "ShiftAssignment",
              "Shift",
              "Operator"
            ],
            "readsFields": [
              "shiftId",
              "startTime",
              "endTime",
              "operatorId",
              "name"
            ],
            "writesFields": [],
            "rulesApplied": [
              "schedulingCapacityByOperators",
              "operatorMultipleShiftsAllowed"
            ],
            "order": 30,
            "intentions": [
              {
                "id": "intent_summary",
                "intent": "summary",
                "order": 10,
                "titleKey": "intention.summary.title",
                "source": "petShop.reviewSchedulingCapacity.reviewSchedulingCapacity",
                "binding": "bind_reviewSchedulingCapacity",
                "emptyKey": "intention.summary.empty",
                "stateKey": "ui.schedulingCapacity.data.reviewSchedulingCapacity",
                "fields": [],
                "columns": [
                  {
                    "id": "col_summary_shift_id",
                    "field": "shiftId",
                    "labelKey": "column.shiftId.label",
                    "order": 10,
                    "required": false,
                    "inputType": "text",
                    "format": "uuid",
                    "stateKey": "ui.schedulingCapacity.data.reviewSchedulingCapacity"
                  },
                  {
                    "id": "col_summary_start_time",
                    "field": "startTime",
                    "labelKey": "column.startTime.label",
                    "order": 20,
                    "required": false,
                    "inputType": "text",
                    "format": "string",
                    "stateKey": "ui.schedulingCapacity.data.reviewSchedulingCapacity"
                  },
                  {
                    "id": "col_summary_end_time",
                    "field": "endTime",
                    "labelKey": "column.endTime.label",
                    "order": 30,
                    "required": false,
                    "inputType": "text",
                    "format": "string",
                    "stateKey": "ui.schedulingCapacity.data.reviewSchedulingCapacity"
                  },
                  {
                    "id": "col_summary_name",
                    "field": "name",
                    "labelKey": "column.name.label",
                    "order": 40,
                    "required": false,
                    "inputType": "text",
                    "format": "string",
                    "stateKey": "ui.schedulingCapacity.data.reviewSchedulingCapacity"
                  }
                ],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": []
              }
            ]
          }
        ]
      }
    ]
  },
  "dataBindings": [
    {
      "id": "bind_assignOperatorToShift",
      "source": "petShop.assignOperatorToShift.assignOperatorToShift",
      "entity": "ShiftAssignment",
      "command": "assignOperatorToShift",
      "description": "Alocar operador em turno",
      "stateKey": "ui.schedulingCapacity.output.assignOperatorToShift",
      "inputStateKeys": [
        "ui.schedulingCapacity.input.assignOperatorToShift.operatorId",
        "ui.schedulingCapacity.input.assignOperatorToShift.shiftId"
      ]
    },
    {
      "id": "bind_reviewSchedulingCapacity",
      "source": "petShop.reviewSchedulingCapacity.reviewSchedulingCapacity",
      "entity": "ShiftAssignment",
      "command": "reviewSchedulingCapacity",
      "description": "Revisar capacidade de atendimento listando alocações agrupadas por turno",
      "stateKey": "ui.schedulingCapacity.data.reviewSchedulingCapacity",
      "inputStateKeys": [
        "ui.schedulingCapacity.input.reviewSchedulingCapacity.shiftId"
      ]
    }
  ]
};

export const pipeline = [
  {
    "id": "schedulingCapacity__l2_page",
    "type": "l2_page",
    "outputPath": "_102049_/l2/petShop/web/desktop/page11/schedulingCapacity.ts",
    "defPath": "_102049_/l2/petShop/web/desktop/page11/schedulingCapacity.defs.ts",
    "dependsFiles": [
      "_102049_/l2/petShop/web/shared/schedulingCapacity.defs.ts",
      "_102049_/l2/petShop/web/shared/schedulingCapacity.ts",
      "_102049_/l2/petShop/web/contracts/schedulingCapacity.defs.ts",
      "_102049_/l2/petShop/web/contracts/schedulingCapacity.ts",
      "_102049_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "schedulingCapacity__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage11RenderTs.ts"
    ],
    "visualStyle": {
      "description": "Site-first, visualmente atraente, com galerias de imagens, catálogos navegáveis, carrinho de compras e agenda orientada por status"
    },
    "agent": "agentCfeMaterializeGen"
  }
] as const;
