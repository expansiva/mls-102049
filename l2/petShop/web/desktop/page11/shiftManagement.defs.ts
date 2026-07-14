/// <mls fileReference="_102049_/l2/petShop/web/desktop/page11/shiftManagement.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "shiftManagement",
  "pageName": "Gestão de turnos",
  "baseClassName": "PetShopShiftManagementBase",
  "actor": "admin",
  "purpose": "Executar Gestão de turnos.",
  "capabilities": [
    "browseShifts",
    "createShift",
    "updateShift"
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
  "pageInputs": [],
  "navigationRefs": [],
  "sections": [
    {
      "id": "section_gestao_turnos",
      "type": "section",
      "sectionName": "Gestão de turnos",
      "titleKey": "shiftManagement.section.gestaoTurnos.title",
      "mode": "edit",
      "order": 10,
      "organisms": [
        {
          "id": "organism_browse_shifts",
          "type": "organism",
          "organismName": "BrowseShifts",
          "titleKey": "shiftManagement.organism.browseShifts.title",
          "purpose": "Listar turnos de trabalho",
          "userActions": [
            "browseShifts"
          ],
          "requiredEntities": [
            "Shift"
          ],
          "readsFields": [
            "activeFilter",
            "shiftId",
            "name",
            "startTime",
            "endTime",
            "monday",
            "tuesday",
            "wednesday",
            "thursday",
            "friday",
            "saturday",
            "sunday",
            "active"
          ],
          "writesFields": [],
          "rulesApplied": [
            "businessHoursForScheduling",
            "operatorMultipleShiftsAllowed"
          ],
          "order": 10,
          "intentionRefs": [
            {
              "id": "intention_browse_list",
              "intent": "queryList",
              "stateKey": "ui.shiftManagement.data.browseShifts",
              "order": 10
            }
          ]
        },
        {
          "id": "organism_create_shift",
          "type": "organism",
          "organismName": "CreateShift",
          "titleKey": "shiftManagement.organism.createShift.title",
          "purpose": "Criar turno de trabalho",
          "userActions": [
            "createShift"
          ],
          "requiredEntities": [
            "Shift"
          ],
          "readsFields": [
            "name",
            "startTime",
            "endTime",
            "monday",
            "tuesday",
            "wednesday",
            "thursday",
            "friday",
            "saturday",
            "sunday",
            "active"
          ],
          "writesFields": [
            "name",
            "startTime",
            "endTime",
            "monday",
            "tuesday",
            "wednesday",
            "thursday",
            "friday",
            "saturday",
            "sunday",
            "active"
          ],
          "rulesApplied": [
            "businessHoursForScheduling"
          ],
          "order": 20,
          "intentionRefs": [
            {
              "id": "intention_create_form",
              "intent": "commandForm",
              "order": 10
            }
          ]
        },
        {
          "id": "organism_update_shift",
          "type": "organism",
          "organismName": "UpdateShift",
          "titleKey": "shiftManagement.organism.updateShift.title",
          "purpose": "Editar turno de trabalho",
          "userActions": [
            "updateShift"
          ],
          "requiredEntities": [
            "Shift"
          ],
          "readsFields": [
            "shiftId",
            "name",
            "startTime",
            "endTime",
            "monday",
            "tuesday",
            "wednesday",
            "thursday",
            "friday",
            "saturday",
            "sunday",
            "active"
          ],
          "writesFields": [
            "shiftId",
            "name",
            "startTime",
            "endTime",
            "monday",
            "tuesday",
            "wednesday",
            "thursday",
            "friday",
            "saturday",
            "sunday",
            "active"
          ],
          "rulesApplied": [
            "businessHoursForScheduling",
            "operatorMultipleShiftsAllowed"
          ],
          "order": 30,
          "intentionRefs": [
            {
              "id": "intention_update_form",
              "intent": "commandForm",
              "order": 10
            }
          ]
        }
      ]
    }
  ],
  "templateId": "tabular_classic",
  "visualStyle": "Site-first, visualmente atraente, com galerias de imagens, catálogos navegáveis, carrinho de compras e agenda orientada por status",
  "layout": {
    "id": "shiftManagement.page11.tabular_classic",
    "type": "page",
    "sections": [
      {
        "id": "section_gestao_turnos",
        "type": "section",
        "sectionName": "Gestão de turnos",
        "titleKey": "shiftManagement.section.gestaoTurnos.title",
        "mode": "edit",
        "order": 10,
        "organisms": [
          {
            "id": "organism_browse_shifts",
            "type": "organism",
            "organismName": "BrowseShifts",
            "titleKey": "shiftManagement.organism.browseShifts.title",
            "purpose": "Listar turnos de trabalho",
            "userActions": [
              "browseShifts"
            ],
            "requiredEntities": [
              "Shift"
            ],
            "readsFields": [
              "activeFilter",
              "shiftId",
              "name",
              "startTime",
              "endTime",
              "monday",
              "tuesday",
              "wednesday",
              "thursday",
              "friday",
              "saturday",
              "sunday",
              "active"
            ],
            "writesFields": [],
            "rulesApplied": [
              "businessHoursForScheduling",
              "operatorMultipleShiftsAllowed"
            ],
            "order": 10,
            "intentions": [
              {
                "id": "intention_browse_list",
                "intent": "queryList",
                "order": 10,
                "titleKey": "shiftManagement.intent.browseList.title",
                "emptyKey": "shiftManagement.intent.browseList.empty",
                "fields": [],
                "columns": [
                  {
                    "id": "col_name",
                    "field": "name",
                    "labelKey": "shiftManagement.field.name.label",
                    "order": 10,
                    "required": false,
                    "stateKey": "ui.shiftManagement.data.browseShifts"
                  },
                  {
                    "id": "col_start_time",
                    "field": "startTime",
                    "labelKey": "shiftManagement.field.startTime.label",
                    "order": 20,
                    "required": false,
                    "format": "HH:mm",
                    "stateKey": "ui.shiftManagement.data.browseShifts"
                  },
                  {
                    "id": "col_end_time",
                    "field": "endTime",
                    "labelKey": "shiftManagement.field.endTime.label",
                    "order": 30,
                    "required": false,
                    "format": "HH:mm",
                    "stateKey": "ui.shiftManagement.data.browseShifts"
                  },
                  {
                    "id": "col_monday",
                    "field": "monday",
                    "labelKey": "shiftManagement.field.monday.label",
                    "order": 40,
                    "required": false,
                    "stateKey": "ui.shiftManagement.data.browseShifts"
                  },
                  {
                    "id": "col_tuesday",
                    "field": "tuesday",
                    "labelKey": "shiftManagement.field.tuesday.label",
                    "order": 50,
                    "required": false,
                    "stateKey": "ui.shiftManagement.data.browseShifts"
                  },
                  {
                    "id": "col_wednesday",
                    "field": "wednesday",
                    "labelKey": "shiftManagement.field.wednesday.label",
                    "order": 60,
                    "required": false,
                    "stateKey": "ui.shiftManagement.data.browseShifts"
                  },
                  {
                    "id": "col_thursday",
                    "field": "thursday",
                    "labelKey": "shiftManagement.field.thursday.label",
                    "order": 70,
                    "required": false,
                    "stateKey": "ui.shiftManagement.data.browseShifts"
                  },
                  {
                    "id": "col_friday",
                    "field": "friday",
                    "labelKey": "shiftManagement.field.friday.label",
                    "order": 80,
                    "required": false,
                    "stateKey": "ui.shiftManagement.data.browseShifts"
                  },
                  {
                    "id": "col_saturday",
                    "field": "saturday",
                    "labelKey": "shiftManagement.field.saturday.label",
                    "order": 90,
                    "required": false,
                    "stateKey": "ui.shiftManagement.data.browseShifts"
                  },
                  {
                    "id": "col_sunday",
                    "field": "sunday",
                    "labelKey": "shiftManagement.field.sunday.label",
                    "order": 100,
                    "required": false,
                    "stateKey": "ui.shiftManagement.data.browseShifts"
                  },
                  {
                    "id": "col_active",
                    "field": "active",
                    "labelKey": "shiftManagement.field.active.label",
                    "order": 110,
                    "required": false,
                    "stateKey": "ui.shiftManagement.data.browseShifts"
                  }
                ],
                "filters": [
                  {
                    "id": "filter_active",
                    "field": "activeFilter",
                    "labelKey": "shiftManagement.filter.activeFilter.label",
                    "order": 10,
                    "required": false,
                    "inputType": "checkbox",
                    "stateKey": "ui.shiftManagement.input.browseShifts.activeFilter"
                  }
                ],
                "toolbar": [
                  {
                    "id": "toolbar_create",
                    "action": "createShift",
                    "labelKey": "shiftManagement.action.createShift.label",
                    "order": 10,
                    "displayHint": "primary",
                    "actionKey": "createShift"
                  }
                ],
                "rowActions": [
                  {
                    "id": "row_update",
                    "action": "updateShift",
                    "labelKey": "shiftManagement.action.updateShift.label",
                    "order": 10,
                    "actionKey": "updateShift"
                  }
                ],
                "actions": [],
                "stateKey": "ui.shiftManagement.data.browseShifts"
              }
            ]
          },
          {
            "id": "organism_create_shift",
            "type": "organism",
            "organismName": "CreateShift",
            "titleKey": "shiftManagement.organism.createShift.title",
            "purpose": "Criar turno de trabalho",
            "userActions": [
              "createShift"
            ],
            "requiredEntities": [
              "Shift"
            ],
            "readsFields": [
              "name",
              "startTime",
              "endTime",
              "monday",
              "tuesday",
              "wednesday",
              "thursday",
              "friday",
              "saturday",
              "sunday",
              "active"
            ],
            "writesFields": [
              "name",
              "startTime",
              "endTime",
              "monday",
              "tuesday",
              "wednesday",
              "thursday",
              "friday",
              "saturday",
              "sunday",
              "active"
            ],
            "rulesApplied": [
              "businessHoursForScheduling"
            ],
            "order": 20,
            "intentions": [
              {
                "id": "intention_create_form",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "shiftManagement.intent.createForm.title",
                "fields": [
                  {
                    "id": "field_create_name",
                    "field": "name",
                    "labelKey": "shiftManagement.field.name.label",
                    "order": 10,
                    "required": true,
                    "inputType": "text",
                    "stateKey": "ui.shiftManagement.input.createShift.name"
                  },
                  {
                    "id": "field_create_start_time",
                    "field": "startTime",
                    "labelKey": "shiftManagement.field.startTime.label",
                    "order": 20,
                    "required": true,
                    "inputType": "time",
                    "format": "HH:mm",
                    "stateKey": "ui.shiftManagement.input.createShift.startTime"
                  },
                  {
                    "id": "field_create_end_time",
                    "field": "endTime",
                    "labelKey": "shiftManagement.field.endTime.label",
                    "order": 30,
                    "required": true,
                    "inputType": "time",
                    "format": "HH:mm",
                    "stateKey": "ui.shiftManagement.input.createShift.endTime"
                  },
                  {
                    "id": "field_create_monday",
                    "field": "monday",
                    "labelKey": "shiftManagement.field.monday.label",
                    "order": 40,
                    "required": true,
                    "inputType": "checkbox",
                    "stateKey": "ui.shiftManagement.input.createShift.monday"
                  },
                  {
                    "id": "field_create_tuesday",
                    "field": "tuesday",
                    "labelKey": "shiftManagement.field.tuesday.label",
                    "order": 50,
                    "required": true,
                    "inputType": "checkbox",
                    "stateKey": "ui.shiftManagement.input.createShift.tuesday"
                  },
                  {
                    "id": "field_create_wednesday",
                    "field": "wednesday",
                    "labelKey": "shiftManagement.field.wednesday.label",
                    "order": 60,
                    "required": true,
                    "inputType": "checkbox",
                    "stateKey": "ui.shiftManagement.input.createShift.wednesday"
                  },
                  {
                    "id": "field_create_thursday",
                    "field": "thursday",
                    "labelKey": "shiftManagement.field.thursday.label",
                    "order": 70,
                    "required": true,
                    "inputType": "checkbox",
                    "stateKey": "ui.shiftManagement.input.createShift.thursday"
                  },
                  {
                    "id": "field_create_friday",
                    "field": "friday",
                    "labelKey": "shiftManagement.field.friday.label",
                    "order": 80,
                    "required": true,
                    "inputType": "checkbox",
                    "stateKey": "ui.shiftManagement.input.createShift.friday"
                  },
                  {
                    "id": "field_create_saturday",
                    "field": "saturday",
                    "labelKey": "shiftManagement.field.saturday.label",
                    "order": 90,
                    "required": true,
                    "inputType": "checkbox",
                    "stateKey": "ui.shiftManagement.input.createShift.saturday"
                  },
                  {
                    "id": "field_create_sunday",
                    "field": "sunday",
                    "labelKey": "shiftManagement.field.sunday.label",
                    "order": 100,
                    "required": true,
                    "inputType": "checkbox",
                    "stateKey": "ui.shiftManagement.input.createShift.sunday"
                  },
                  {
                    "id": "field_create_active",
                    "field": "active",
                    "labelKey": "shiftManagement.field.active.label",
                    "order": 110,
                    "required": true,
                    "inputType": "checkbox",
                    "stateKey": "ui.shiftManagement.input.createShift.active"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "action_submit_create",
                    "action": "createShift",
                    "labelKey": "shiftManagement.action.createShift.submit",
                    "order": 10,
                    "displayHint": "primary",
                    "actionKey": "createShift"
                  }
                ]
              }
            ]
          },
          {
            "id": "organism_update_shift",
            "type": "organism",
            "organismName": "UpdateShift",
            "titleKey": "shiftManagement.organism.updateShift.title",
            "purpose": "Editar turno de trabalho",
            "userActions": [
              "updateShift"
            ],
            "requiredEntities": [
              "Shift"
            ],
            "readsFields": [
              "shiftId",
              "name",
              "startTime",
              "endTime",
              "monday",
              "tuesday",
              "wednesday",
              "thursday",
              "friday",
              "saturday",
              "sunday",
              "active"
            ],
            "writesFields": [
              "shiftId",
              "name",
              "startTime",
              "endTime",
              "monday",
              "tuesday",
              "wednesday",
              "thursday",
              "friday",
              "saturday",
              "sunday",
              "active"
            ],
            "rulesApplied": [
              "businessHoursForScheduling",
              "operatorMultipleShiftsAllowed"
            ],
            "order": 30,
            "intentions": [
              {
                "id": "intention_update_form",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "shiftManagement.intent.updateForm.title",
                "fields": [
                  {
                    "id": "field_update_name",
                    "field": "name",
                    "labelKey": "shiftManagement.field.name.label",
                    "order": 10,
                    "required": true,
                    "inputType": "text",
                    "stateKey": "ui.shiftManagement.input.updateShift.name"
                  },
                  {
                    "id": "field_update_start_time",
                    "field": "startTime",
                    "labelKey": "shiftManagement.field.startTime.label",
                    "order": 20,
                    "required": true,
                    "inputType": "time",
                    "format": "HH:mm",
                    "stateKey": "ui.shiftManagement.input.updateShift.startTime"
                  },
                  {
                    "id": "field_update_end_time",
                    "field": "endTime",
                    "labelKey": "shiftManagement.field.endTime.label",
                    "order": 30,
                    "required": true,
                    "inputType": "time",
                    "format": "HH:mm",
                    "stateKey": "ui.shiftManagement.input.updateShift.endTime"
                  },
                  {
                    "id": "field_update_monday",
                    "field": "monday",
                    "labelKey": "shiftManagement.field.monday.label",
                    "order": 40,
                    "required": true,
                    "inputType": "checkbox",
                    "stateKey": "ui.shiftManagement.input.updateShift.monday"
                  },
                  {
                    "id": "field_update_tuesday",
                    "field": "tuesday",
                    "labelKey": "shiftManagement.field.tuesday.label",
                    "order": 50,
                    "required": true,
                    "inputType": "checkbox",
                    "stateKey": "ui.shiftManagement.input.updateShift.tuesday"
                  },
                  {
                    "id": "field_update_wednesday",
                    "field": "wednesday",
                    "labelKey": "shiftManagement.field.wednesday.label",
                    "order": 60,
                    "required": true,
                    "inputType": "checkbox",
                    "stateKey": "ui.shiftManagement.input.updateShift.wednesday"
                  },
                  {
                    "id": "field_update_thursday",
                    "field": "thursday",
                    "labelKey": "shiftManagement.field.thursday.label",
                    "order": 70,
                    "required": true,
                    "inputType": "checkbox",
                    "stateKey": "ui.shiftManagement.input.updateShift.thursday"
                  },
                  {
                    "id": "field_update_friday",
                    "field": "friday",
                    "labelKey": "shiftManagement.field.friday.label",
                    "order": 80,
                    "required": true,
                    "inputType": "checkbox",
                    "stateKey": "ui.shiftManagement.input.updateShift.friday"
                  },
                  {
                    "id": "field_update_saturday",
                    "field": "saturday",
                    "labelKey": "shiftManagement.field.saturday.label",
                    "order": 90,
                    "required": true,
                    "inputType": "checkbox",
                    "stateKey": "ui.shiftManagement.input.updateShift.saturday"
                  },
                  {
                    "id": "field_update_sunday",
                    "field": "sunday",
                    "labelKey": "shiftManagement.field.sunday.label",
                    "order": 100,
                    "required": true,
                    "inputType": "checkbox",
                    "stateKey": "ui.shiftManagement.input.updateShift.sunday"
                  },
                  {
                    "id": "field_update_active",
                    "field": "active",
                    "labelKey": "shiftManagement.field.active.label",
                    "order": 110,
                    "required": true,
                    "inputType": "checkbox",
                    "stateKey": "ui.shiftManagement.input.updateShift.active"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "action_submit_update",
                    "action": "updateShift",
                    "labelKey": "shiftManagement.action.updateShift.submit",
                    "order": 10,
                    "displayHint": "primary",
                    "actionKey": "updateShift"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "dataBindings": [
    {
      "id": "binding_browseShifts",
      "source": "command",
      "command": "browseShifts",
      "description": "Listar turnos de trabalho",
      "stateKey": "ui.shiftManagement.data.browseShifts",
      "inputStateKeys": [
        "ui.shiftManagement.input.browseShifts.activeFilter"
      ]
    },
    {
      "id": "binding_createShift",
      "source": "command",
      "command": "createShift",
      "description": "Criar turno de trabalho",
      "stateKey": "ui.shiftManagement.output.createShift",
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
      ]
    },
    {
      "id": "binding_updateShift",
      "source": "command",
      "command": "updateShift",
      "description": "Editar turno de trabalho",
      "stateKey": "ui.shiftManagement.output.updateShift",
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
      ]
    }
  ]
};

export const pipeline = [
  {
    "id": "shiftManagement__l2_page",
    "type": "l2_page",
    "outputPath": "_102049_/l2/petShop/web/desktop/page11/shiftManagement.ts",
    "defPath": "_102049_/l2/petShop/web/desktop/page11/shiftManagement.defs.ts",
    "dependsFiles": [
      "_102049_/l2/petShop/web/shared/shiftManagement.defs.ts",
      "_102049_/l2/petShop/web/shared/shiftManagement.ts",
      "_102049_/l2/petShop/web/contracts/shiftManagement.defs.ts",
      "_102049_/l2/petShop/web/contracts/shiftManagement.ts",
      "_102049_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "shiftManagement__l2_shared"
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
