/// <mls fileReference="_102049_/l2/cafeFlow/web/desktop/page11/ws-manager-shift.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "ws-manager-shift",
  "pageName": "Turno Diário – Abertura, Dashboard e Fechamento",
  "actor": "manager",
  "purpose": "Executar Turno Diário – Abertura, Dashboard e Fechamento.",
  "capabilities": [
    "dailyShiftLifecycle",
    "dashboardAggregation",
    "generateShiftClosingReport"
  ],
  "flowRefs": {
    "experienceFlows": [
      "dailyShiftLifecycle"
    ],
    "entityLifecycles": [],
    "taskWorkflows": [
      "dailyShiftLifecycle"
    ],
    "automations": []
  },
  "pluginRefs": [],
  "mdmRefs": [],
  "origin": {
    "source": "l4-journey",
    "workspaceId": "ws-manager-shift",
    "workspaceKind": "workflow",
    "workflowId": "dailyShiftLifecycle",
    "actor": "manager",
    "entity": "",
    "owners": [
      {
        "kind": "workflow",
        "id": "dailyShiftLifecycle",
        "defPath": "_102049_/l4/workflows/dailyShiftLifecycle.defs.ts"
      },
      {
        "kind": "operation",
        "id": "openShift",
        "defPath": "_102049_/l4/operations/openShift.defs.ts"
      },
      {
        "kind": "operation",
        "id": "queryDashboard",
        "defPath": "_102049_/l4/operations/queryDashboard.defs.ts"
      },
      {
        "kind": "operation",
        "id": "closeShift",
        "defPath": "_102049_/l4/operations/closeShift.defs.ts"
      },
      {
        "kind": "operation",
        "id": "generateShiftClosingReport",
        "defPath": "_102049_/l4/operations/generateShiftClosingReport.defs.ts"
      }
    ],
    "microUserFlow": {
      "source": "l4/story.steps",
      "workflowSteps": [
        "Gerente abre o turno gerando um ID de turno",
        "Pedidos são lançados e processados durante o turno",
        "Gerente acompanha o dashboard de agregação em tempo real",
        "Gerente verifica que todos os pedidos estão finalizados",
        "Gerente fecha o turno e gera o relatório de fechamento"
      ],
      "operations": [
        {
          "operationId": "openShift",
          "commandName": "openShift",
          "steps": [
            "Gerente inicia a abertura do turno no sistema",
            "Sistema gera ID do turno",
            "Turno fica disponível para receber pedidos"
          ]
        },
        {
          "operationId": "queryDashboard",
          "commandName": "queryDashboard",
          "steps": [
            "Acessar a tela de dashboard no desktop do escritório",
            "Sistema agrega pedidos, status de cozinha e níveis de estoque do turno atual",
            "Visualizar métricas e indicadores"
          ]
        },
        {
          "operationId": "closeShift",
          "commandName": "closeShift",
          "steps": [
            "Verificar que todos os pedidos estão finalizados",
            "Confirmar fechamento do turno",
            "Sistema bloqueia novos pedidos para o turno"
          ]
        },
        {
          "operationId": "generateShiftClosingReport",
          "commandName": "generateShiftClosingReport",
          "steps": [
            "Selecionar o turno a ser relatado",
            "Sistema agrega pedidos, faturamento e movimentações de estoque",
            "Gerar relatório em pt-BR ou en"
          ]
        }
      ]
    }
  },
  "pageInputs": [],
  "navigationRefs": [],
  "sections": [
    {
      "id": "section.shiftLifecycle",
      "type": "section",
      "sectionName": "Turno Diário – Abertura, Dashboard e Fechamento",
      "titleKey": "wsManagerShift.section.shiftLifecycle.title",
      "mode": "edit",
      "order": 10,
      "organisms": [
        {
          "id": "organism.openShift",
          "type": "panel",
          "organismName": "OpenShift",
          "titleKey": "wsManagerShift.organism.openShift.title",
          "purpose": "Abrir turno",
          "userActions": [
            "openShift"
          ],
          "requiredEntities": [
            "Shift",
            "ShiftStatusEvent"
          ],
          "readsFields": [],
          "writesFields": [],
          "rulesApplied": [
            "orderRequiresOpenShift",
            "shiftClosingRequiresSettledOrders"
          ],
          "order": 10,
          "intentionRefs": [
            {
              "id": "intention.openShift.form",
              "intent": "commandForm",
              "submitAction": "openShift",
              "order": 10
            }
          ]
        },
        {
          "id": "organism.queryDashboard",
          "type": "panel",
          "organismName": "QueryDashboard",
          "titleKey": "wsManagerShift.organism.queryDashboard.title",
          "purpose": "Agregação de dados do Dashboard",
          "userActions": [
            "queryDashboard"
          ],
          "requiredEntities": [
            "Shift",
            "Order",
            "OrderItem",
            "OrderStatusEvent",
            "StockLevel",
            "StockItem",
            "StockMovementEvent",
            "MenuItem",
            "ShiftStatusEvent"
          ],
          "readsFields": [],
          "writesFields": [],
          "rulesApplied": [
            "orderRequiresOpenShift",
            "shiftClosingRequiresSettledOrders"
          ],
          "order": 20,
          "intentionRefs": [
            {
              "id": "intention.queryDashboard.list",
              "intent": "queryList",
              "stateKey": "ui.ws-manager-shift.data.queryDashboard",
              "order": 10
            }
          ]
        },
        {
          "id": "organism.closeShift",
          "type": "panel",
          "organismName": "CloseShift",
          "titleKey": "wsManagerShift.organism.closeShift.title",
          "purpose": "Fechar turno",
          "userActions": [
            "closeShift"
          ],
          "requiredEntities": [
            "Shift",
            "Order",
            "ShiftStatusEvent"
          ],
          "readsFields": [],
          "writesFields": [
            "Shift.status",
            "Shift.closedAt",
            "Shift.updatedAt"
          ],
          "rulesApplied": [
            "orderRequiresOpenShift",
            "shiftClosingRequiresSettledOrders"
          ],
          "order": 30,
          "intentionRefs": [
            {
              "id": "intention.closeShift.form",
              "intent": "commandForm",
              "submitAction": "closeShift",
              "order": 10
            }
          ]
        },
        {
          "id": "organism.generateShiftClosingReport",
          "type": "panel",
          "organismName": "GenerateShiftClosingReport",
          "titleKey": "wsManagerShift.organism.generateShiftClosingReport.title",
          "purpose": "Gerar relatório de fechamento de turno",
          "userActions": [
            "generateShiftClosingReport"
          ],
          "requiredEntities": [
            "Shift",
            "Order",
            "OrderItem",
            "ShiftStatusEvent",
            "StockMovementEvent"
          ],
          "readsFields": [],
          "writesFields": [],
          "rulesApplied": [
            "shiftClosingRequiresSettledOrders"
          ],
          "order": 40,
          "intentionRefs": [
            {
              "id": "intention.generateShiftClosingReport.list",
              "intent": "queryList",
              "stateKey": "ui.ws-manager-shift.data.generateShiftClosingReport",
              "order": 10
            }
          ]
        }
      ]
    }
  ],
  "layout": {
    "id": "ws-manager-shift.layout",
    "type": "page",
    "sections": [
      {
        "id": "section.shiftLifecycle",
        "type": "section",
        "sectionName": "Turno Diário – Abertura, Dashboard e Fechamento",
        "titleKey": "wsManagerShift.section.shiftLifecycle.title",
        "mode": "edit",
        "order": 10,
        "organisms": [
          {
            "id": "organism.openShift",
            "type": "panel",
            "organismName": "OpenShift",
            "titleKey": "wsManagerShift.organism.openShift.title",
            "purpose": "Abrir turno",
            "userActions": [
              "openShift"
            ],
            "requiredEntities": [
              "Shift",
              "ShiftStatusEvent"
            ],
            "readsFields": [],
            "writesFields": [],
            "rulesApplied": [
              "orderRequiresOpenShift",
              "shiftClosingRequiresSettledOrders"
            ],
            "order": 10,
            "intentions": [
              {
                "id": "intention.openShift.form",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "wsManagerShift.intention.openShift.form.title",
                "submitAction": "openShift",
                "fields": [
                  {
                    "id": "field.openShift.status",
                    "field": "status",
                    "labelKey": "wsManagerShift.field.openShift.status",
                    "order": 10,
                    "required": true,
                    "inputType": "select",
                    "stateKey": "ui.ws-manager-shift.input.openShift.status"
                  },
                  {
                    "id": "field.openShift.openedAt",
                    "field": "openedAt",
                    "labelKey": "wsManagerShift.field.openShift.openedAt",
                    "order": 20,
                    "required": true,
                    "inputType": "datetime",
                    "stateKey": "ui.ws-manager-shift.input.openShift.openedAt"
                  },
                  {
                    "id": "field.openShift.closedAt",
                    "field": "closedAt",
                    "labelKey": "wsManagerShift.field.openShift.closedAt",
                    "order": 30,
                    "required": false,
                    "inputType": "datetime",
                    "stateKey": "ui.ws-manager-shift.input.openShift.closedAt"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "action.openShift.submit",
                    "action": "openShift",
                    "labelKey": "wsManagerShift.action.openShift.submit",
                    "order": 10,
                    "displayHint": "primary",
                    "actionKey": "openShift"
                  }
                ]
              }
            ]
          },
          {
            "id": "organism.queryDashboard",
            "type": "panel",
            "organismName": "QueryDashboard",
            "titleKey": "wsManagerShift.organism.queryDashboard.title",
            "purpose": "Agregação de dados do Dashboard",
            "userActions": [
              "queryDashboard"
            ],
            "requiredEntities": [
              "Shift",
              "Order",
              "OrderItem",
              "OrderStatusEvent",
              "StockLevel",
              "StockItem",
              "StockMovementEvent",
              "MenuItem",
              "ShiftStatusEvent"
            ],
            "readsFields": [],
            "writesFields": [],
            "rulesApplied": [
              "orderRequiresOpenShift",
              "shiftClosingRequiresSettledOrders"
            ],
            "order": 20,
            "intentions": [
              {
                "id": "intention.queryDashboard.list",
                "intent": "queryList",
                "order": 10,
                "titleKey": "wsManagerShift.intention.queryDashboard.list.title",
                "fields": [],
                "columns": [
                  {
                    "id": "col.queryDashboard.shiftId",
                    "field": "shiftId",
                    "labelKey": "wsManagerShift.col.queryDashboard.shiftId",
                    "order": 10,
                    "required": false,
                    "stateKey": "ui.ws-manager-shift.data.queryDashboard"
                  },
                  {
                    "id": "col.queryDashboard.status",
                    "field": "status",
                    "labelKey": "wsManagerShift.col.queryDashboard.status",
                    "order": 20,
                    "required": false,
                    "stateKey": "ui.ws-manager-shift.data.queryDashboard"
                  },
                  {
                    "id": "col.queryDashboard.openedAt",
                    "field": "openedAt",
                    "labelKey": "wsManagerShift.col.queryDashboard.openedAt",
                    "order": 30,
                    "required": false,
                    "stateKey": "ui.ws-manager-shift.data.queryDashboard"
                  },
                  {
                    "id": "col.queryDashboard.closedAt",
                    "field": "closedAt",
                    "labelKey": "wsManagerShift.col.queryDashboard.closedAt",
                    "order": 40,
                    "required": false,
                    "stateKey": "ui.ws-manager-shift.data.queryDashboard"
                  },
                  {
                    "id": "col.queryDashboard.createdAt",
                    "field": "createdAt",
                    "labelKey": "wsManagerShift.col.queryDashboard.createdAt",
                    "order": 50,
                    "required": false,
                    "stateKey": "ui.ws-manager-shift.data.queryDashboard"
                  },
                  {
                    "id": "col.queryDashboard.updatedAt",
                    "field": "updatedAt",
                    "labelKey": "wsManagerShift.col.queryDashboard.updatedAt",
                    "order": 60,
                    "required": false,
                    "stateKey": "ui.ws-manager-shift.data.queryDashboard"
                  }
                ],
                "filters": [
                  {
                    "id": "filter.queryDashboard.shiftId",
                    "field": "shiftId",
                    "labelKey": "wsManagerShift.filter.queryDashboard.shiftId",
                    "order": 10,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.ws-manager-shift.input.queryDashboard.shiftId"
                  },
                  {
                    "id": "filter.queryDashboard.status",
                    "field": "status",
                    "labelKey": "wsManagerShift.filter.queryDashboard.status",
                    "order": 20,
                    "required": false,
                    "inputType": "select",
                    "stateKey": "ui.ws-manager-shift.input.queryDashboard.status"
                  },
                  {
                    "id": "filter.queryDashboard.openedAt",
                    "field": "openedAt",
                    "labelKey": "wsManagerShift.filter.queryDashboard.openedAt",
                    "order": 30,
                    "required": false,
                    "inputType": "datetime",
                    "stateKey": "ui.ws-manager-shift.input.queryDashboard.openedAt"
                  },
                  {
                    "id": "filter.queryDashboard.closedAt",
                    "field": "closedAt",
                    "labelKey": "wsManagerShift.filter.queryDashboard.closedAt",
                    "order": 40,
                    "required": false,
                    "inputType": "datetime",
                    "stateKey": "ui.ws-manager-shift.input.queryDashboard.closedAt"
                  },
                  {
                    "id": "filter.queryDashboard.createdAt",
                    "field": "createdAt",
                    "labelKey": "wsManagerShift.filter.queryDashboard.createdAt",
                    "order": 50,
                    "required": false,
                    "inputType": "datetime",
                    "stateKey": "ui.ws-manager-shift.input.queryDashboard.createdAt"
                  },
                  {
                    "id": "filter.queryDashboard.updatedAt",
                    "field": "updatedAt",
                    "labelKey": "wsManagerShift.filter.queryDashboard.updatedAt",
                    "order": 60,
                    "required": false,
                    "inputType": "datetime",
                    "stateKey": "ui.ws-manager-shift.input.queryDashboard.updatedAt"
                  }
                ],
                "toolbar": [
                  {
                    "id": "toolbar.queryDashboard.refresh",
                    "action": "queryDashboard",
                    "labelKey": "wsManagerShift.action.queryDashboard.refresh",
                    "order": 10,
                    "displayHint": "primary",
                    "actionKey": "queryDashboard"
                  }
                ],
                "rowActions": [],
                "actions": [],
                "stateKey": "ui.ws-manager-shift.data.queryDashboard"
              }
            ]
          },
          {
            "id": "organism.closeShift",
            "type": "panel",
            "organismName": "CloseShift",
            "titleKey": "wsManagerShift.organism.closeShift.title",
            "purpose": "Fechar turno",
            "userActions": [
              "closeShift"
            ],
            "requiredEntities": [
              "Shift",
              "Order",
              "ShiftStatusEvent"
            ],
            "readsFields": [],
            "writesFields": [
              "Shift.status",
              "Shift.closedAt",
              "Shift.updatedAt"
            ],
            "rulesApplied": [
              "orderRequiresOpenShift",
              "shiftClosingRequiresSettledOrders"
            ],
            "order": 30,
            "intentions": [
              {
                "id": "intention.closeShift.form",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "wsManagerShift.intention.closeShift.form.title",
                "submitAction": "closeShift",
                "fields": [
                  {
                    "id": "field.closeShift.status",
                    "field": "status",
                    "labelKey": "wsManagerShift.field.closeShift.status",
                    "order": 10,
                    "required": true,
                    "inputType": "select",
                    "stateKey": "ui.ws-manager-shift.input.closeShift.status"
                  },
                  {
                    "id": "field.closeShift.closedAt",
                    "field": "closedAt",
                    "labelKey": "wsManagerShift.field.closeShift.closedAt",
                    "order": 20,
                    "required": false,
                    "inputType": "datetime",
                    "stateKey": "ui.ws-manager-shift.input.closeShift.closedAt"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "action.closeShift.submit",
                    "action": "closeShift",
                    "labelKey": "wsManagerShift.action.closeShift.submit",
                    "order": 10,
                    "displayHint": "primary",
                    "actionKey": "closeShift"
                  }
                ]
              }
            ]
          },
          {
            "id": "organism.generateShiftClosingReport",
            "type": "panel",
            "organismName": "GenerateShiftClosingReport",
            "titleKey": "wsManagerShift.organism.generateShiftClosingReport.title",
            "purpose": "Gerar relatório de fechamento de turno",
            "userActions": [
              "generateShiftClosingReport"
            ],
            "requiredEntities": [
              "Shift",
              "Order",
              "OrderItem",
              "ShiftStatusEvent",
              "StockMovementEvent"
            ],
            "readsFields": [],
            "writesFields": [],
            "rulesApplied": [
              "shiftClosingRequiresSettledOrders"
            ],
            "order": 40,
            "intentions": [
              {
                "id": "intention.generateShiftClosingReport.list",
                "intent": "queryList",
                "order": 10,
                "titleKey": "wsManagerShift.intention.generateShiftClosingReport.list.title",
                "fields": [],
                "columns": [
                  {
                    "id": "col.generateShiftClosingReport.shiftId",
                    "field": "shiftId",
                    "labelKey": "wsManagerShift.col.generateShiftClosingReport.shiftId",
                    "order": 10,
                    "required": false,
                    "stateKey": "ui.ws-manager-shift.data.generateShiftClosingReport"
                  },
                  {
                    "id": "col.generateShiftClosingReport.status",
                    "field": "status",
                    "labelKey": "wsManagerShift.col.generateShiftClosingReport.status",
                    "order": 20,
                    "required": false,
                    "stateKey": "ui.ws-manager-shift.data.generateShiftClosingReport"
                  },
                  {
                    "id": "col.generateShiftClosingReport.openedAt",
                    "field": "openedAt",
                    "labelKey": "wsManagerShift.col.generateShiftClosingReport.openedAt",
                    "order": 30,
                    "required": false,
                    "stateKey": "ui.ws-manager-shift.data.generateShiftClosingReport"
                  },
                  {
                    "id": "col.generateShiftClosingReport.closedAt",
                    "field": "closedAt",
                    "labelKey": "wsManagerShift.col.generateShiftClosingReport.closedAt",
                    "order": 40,
                    "required": false,
                    "stateKey": "ui.ws-manager-shift.data.generateShiftClosingReport"
                  },
                  {
                    "id": "col.generateShiftClosingReport.createdAt",
                    "field": "createdAt",
                    "labelKey": "wsManagerShift.col.generateShiftClosingReport.createdAt",
                    "order": 50,
                    "required": false,
                    "stateKey": "ui.ws-manager-shift.data.generateShiftClosingReport"
                  },
                  {
                    "id": "col.generateShiftClosingReport.updatedAt",
                    "field": "updatedAt",
                    "labelKey": "wsManagerShift.col.generateShiftClosingReport.updatedAt",
                    "order": 60,
                    "required": false,
                    "stateKey": "ui.ws-manager-shift.data.generateShiftClosingReport"
                  }
                ],
                "filters": [
                  {
                    "id": "filter.generateShiftClosingReport.shiftId",
                    "field": "shiftId",
                    "labelKey": "wsManagerShift.filter.generateShiftClosingReport.shiftId",
                    "order": 10,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.ws-manager-shift.input.generateShiftClosingReport.shiftId"
                  },
                  {
                    "id": "filter.generateShiftClosingReport.status",
                    "field": "status",
                    "labelKey": "wsManagerShift.filter.generateShiftClosingReport.status",
                    "order": 20,
                    "required": false,
                    "inputType": "select",
                    "stateKey": "ui.ws-manager-shift.input.generateShiftClosingReport.status"
                  },
                  {
                    "id": "filter.generateShiftClosingReport.openedAt",
                    "field": "openedAt",
                    "labelKey": "wsManagerShift.filter.generateShiftClosingReport.openedAt",
                    "order": 30,
                    "required": false,
                    "inputType": "datetime",
                    "stateKey": "ui.ws-manager-shift.input.generateShiftClosingReport.openedAt"
                  },
                  {
                    "id": "filter.generateShiftClosingReport.closedAt",
                    "field": "closedAt",
                    "labelKey": "wsManagerShift.filter.generateShiftClosingReport.closedAt",
                    "order": 40,
                    "required": false,
                    "inputType": "datetime",
                    "stateKey": "ui.ws-manager-shift.input.generateShiftClosingReport.closedAt"
                  },
                  {
                    "id": "filter.generateShiftClosingReport.createdAt",
                    "field": "createdAt",
                    "labelKey": "wsManagerShift.filter.generateShiftClosingReport.createdAt",
                    "order": 50,
                    "required": false,
                    "inputType": "datetime",
                    "stateKey": "ui.ws-manager-shift.input.generateShiftClosingReport.createdAt"
                  },
                  {
                    "id": "filter.generateShiftClosingReport.updatedAt",
                    "field": "updatedAt",
                    "labelKey": "wsManagerShift.filter.generateShiftClosingReport.updatedAt",
                    "order": 60,
                    "required": false,
                    "inputType": "datetime",
                    "stateKey": "ui.ws-manager-shift.input.generateShiftClosingReport.updatedAt"
                  }
                ],
                "toolbar": [
                  {
                    "id": "toolbar.generateShiftClosingReport.run",
                    "action": "generateShiftClosingReport",
                    "labelKey": "wsManagerShift.action.generateShiftClosingReport.run",
                    "order": 10,
                    "displayHint": "primary",
                    "actionKey": "generateShiftClosingReport"
                  }
                ],
                "rowActions": [],
                "actions": [],
                "stateKey": "ui.ws-manager-shift.data.generateShiftClosingReport"
              }
            ]
          }
        ]
      }
    ]
  },
  "dataBindings": []
};

export const pipeline = [
  {
    "id": "ws-manager-shift__l2_page",
    "type": "l2_page",
    "outputPath": "_102049_/l2/cafeFlow/web/desktop/page11/ws-manager-shift.ts",
    "defPath": "_102049_/l2/cafeFlow/web/desktop/page11/ws-manager-shift.defs.ts",
    "dependsFiles": [
      "_102049_/l2/cafeFlow/web/shared/ws-manager-shift.defs.ts",
      "_102049_/l2/cafeFlow/web/shared/ws-manager-shift.ts",
      "_102049_/l2/cafeFlow/web/contracts/ws-manager-shift.defs.ts",
      "_102049_/l2/cafeFlow/web/contracts/ws-manager-shift.ts"
    ],
    "dependsOn": [
      "ws-manager-shift__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage11RenderTs.ts"
    ],
    "visualStyle": {
      "description": "Clean, fast-touch POS interface with kitchen display board; dashboard with cards and charts for management."
    },
    "agent": "agentCfeMaterializeGen"
  }
] as const;
