/// <mls fileReference="_102049_/l2/cafeFlow/web/desktop/page11/ws-attendant-pos.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "ws-attendant-pos",
  "pageName": "POS – Lançamento e Finalização de Pedidos",
  "actor": "attendant",
  "purpose": "Executar POS – Lançamento e Finalização de Pedidos.",
  "capabilities": [
    "orderLifecycle",
    "posOrderEntry"
  ],
  "flowRefs": {
    "experienceFlows": [
      "orderLifecycle"
    ],
    "entityLifecycles": [],
    "taskWorkflows": [
      "orderLifecycle"
    ],
    "automations": []
  },
  "pluginRefs": [],
  "mdmRefs": [],
  "origin": {
    "source": "l4-journey",
    "workspaceId": "ws-attendant-pos",
    "workspaceKind": "workflow",
    "workflowId": "orderLifecycle",
    "actor": "attendant",
    "entity": "",
    "owners": [
      {
        "kind": "workflow",
        "id": "orderLifecycle",
        "defPath": "_102049_/l4/workflows/orderLifecycle.defs.ts"
      },
      {
        "kind": "operation",
        "id": "createOrder",
        "defPath": "_102049_/l4/operations/createOrder.defs.ts"
      },
      {
        "kind": "operation",
        "id": "settleOrder",
        "defPath": "_102049_/l4/operations/settleOrder.defs.ts"
      }
    ],
    "microUserFlow": {
      "source": "l4/story.steps",
      "workflowSteps": [
        "Atendente lança o pedido no POS informando mesa e itens do cardápio",
        "Pedido é enviado para a cozinha como ticket",
        "Cozinheiro atualiza status de preparação conforme sequência de cozinha",
        "Estoque é decrementado automaticamente ao preparar",
        "Atendente finaliza o pedido quando entregue e/ou pago"
      ],
      "operations": [
        {
          "operationId": "createOrder",
          "commandName": "createOrder",
          "steps": [
            "Selecionar a mesa ou informar número",
            "Adicionar itens do cardápio ao pedido",
            "Aplicar regras de combo e substituições se aplicável",
            "Confirmar e enviar o pedido para a cozinha"
          ]
        },
        {
          "operationId": "settleOrder",
          "commandName": "settleOrder",
          "steps": [
            "Verificar que o pedido está marcado como pronto pela cozinha",
            "Confirmar entrega ou pagamento",
            "Marcar pedido como finalizado"
          ]
        }
      ]
    }
  },
  "pageInputs": [],
  "navigationRefs": [],
  "sections": [
    {
      "id": "sec-pos-main",
      "type": "section",
      "sectionName": "POS – Lançamento e Finalização de Pedidos",
      "titleKey": "ws-attendant-pos.section.main.title",
      "mode": "edit",
      "order": 10,
      "organisms": [
        {
          "id": "org-create-order",
          "type": "organism",
          "organismName": "CreateOrder",
          "titleKey": "ws-attendant-pos.organism.createOrder.title",
          "purpose": "Lançar pedido no POS",
          "userActions": [
            "createOrder"
          ],
          "requiredEntities": [
            "Order",
            "MenuItem",
            "Table",
            "Shift",
            "ComboRule",
            "OrderItem"
          ],
          "readsFields": [],
          "writesFields": [
            "Order.id",
            "Order.orderType",
            "Order.tableId",
            "Order.shiftId",
            "Order.status",
            "Order.total",
            "Order.createdAt",
            "Order.updatedAt"
          ],
          "rulesApplied": [
            "orderRequiresOpenShift",
            "shiftClosingRequiresSettledOrders"
          ],
          "order": 10,
          "intentionRefs": [
            {
              "id": "int-createOrder-select-table",
              "intent": "commandForm",
              "order": 10
            },
            {
              "id": "int-createOrder-add-items",
              "intent": "summary",
              "order": 20
            },
            {
              "id": "int-createOrder-apply-combos",
              "intent": "summary",
              "order": 30
            },
            {
              "id": "int-createOrder-confirm-send",
              "intent": "commandForm",
              "submitAction": "createOrder",
              "order": 40
            }
          ]
        },
        {
          "id": "org-settle-order",
          "type": "organism",
          "organismName": "SettleOrder",
          "titleKey": "ws-attendant-pos.organism.settleOrder.title",
          "purpose": "Finalizar pedido",
          "userActions": [
            "settleOrder"
          ],
          "requiredEntities": [
            "Order",
            "OrderStatusEvent"
          ],
          "readsFields": [
            "Order.status",
            "Order.shiftId"
          ],
          "writesFields": [
            "Order.status",
            "Order.updatedAt"
          ],
          "rulesApplied": [
            "orderRequiresOpenShift",
            "shiftClosingRequiresSettledOrders"
          ],
          "order": 20,
          "intentionRefs": [
            {
              "id": "int-settleOrder-verify-ready",
              "intent": "workflowStatus",
              "order": 10
            },
            {
              "id": "int-settleOrder-confirm-delivery",
              "intent": "summary",
              "order": 20
            },
            {
              "id": "int-settleOrder-finalize",
              "intent": "commandForm",
              "submitAction": "settleOrder",
              "order": 30
            }
          ]
        }
      ]
    }
  ],
  "layout": {
    "id": "ws-attendant-pos.layout",
    "type": "page",
    "sections": [
      {
        "id": "sec-pos-main",
        "type": "section",
        "sectionName": "POS – Lançamento e Finalização de Pedidos",
        "titleKey": "ws-attendant-pos.section.main.title",
        "mode": "edit",
        "order": 10,
        "organisms": [
          {
            "id": "org-create-order",
            "type": "organism",
            "organismName": "CreateOrder",
            "titleKey": "ws-attendant-pos.organism.createOrder.title",
            "purpose": "Lançar pedido no POS",
            "userActions": [
              "createOrder"
            ],
            "requiredEntities": [
              "Order",
              "MenuItem",
              "Table",
              "Shift",
              "ComboRule",
              "OrderItem"
            ],
            "readsFields": [],
            "writesFields": [
              "Order.id",
              "Order.orderType",
              "Order.tableId",
              "Order.shiftId",
              "Order.status",
              "Order.total",
              "Order.createdAt",
              "Order.updatedAt"
            ],
            "rulesApplied": [
              "orderRequiresOpenShift",
              "shiftClosingRequiresSettledOrders"
            ],
            "order": 10,
            "intentions": [
              {
                "id": "int-createOrder-select-table",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "ws-attendant-pos.createOrder.step.selectTable.title",
                "fields": [
                  {
                    "id": "fld-createOrder-orderType",
                    "field": "orderType",
                    "labelKey": "ws-attendant-pos.field.orderType.label",
                    "order": 10,
                    "required": true,
                    "inputType": "select",
                    "stateKey": "ui.ws-attendant-pos.input.createOrder.orderType"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": []
              },
              {
                "id": "int-createOrder-add-items",
                "intent": "summary",
                "order": 20,
                "titleKey": "ws-attendant-pos.createOrder.step.addItems.title",
                "fields": [],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": []
              },
              {
                "id": "int-createOrder-apply-combos",
                "intent": "summary",
                "order": 30,
                "titleKey": "ws-attendant-pos.createOrder.step.applyCombos.title",
                "fields": [],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": []
              },
              {
                "id": "int-createOrder-confirm-send",
                "intent": "commandForm",
                "order": 40,
                "titleKey": "ws-attendant-pos.createOrder.step.confirmSend.title",
                "submitAction": "createOrder",
                "fields": [
                  {
                    "id": "fld-createOrder-status",
                    "field": "status",
                    "labelKey": "ws-attendant-pos.field.status.label",
                    "order": 10,
                    "required": true,
                    "inputType": "select",
                    "stateKey": "ui.ws-attendant-pos.input.createOrder.status"
                  },
                  {
                    "id": "fld-createOrder-total",
                    "field": "total",
                    "labelKey": "ws-attendant-pos.field.total.label",
                    "order": 20,
                    "required": true,
                    "inputType": "money",
                    "stateKey": "ui.ws-attendant-pos.input.createOrder.total"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "act-createOrder-submit",
                    "action": "createOrder",
                    "labelKey": "ws-attendant-pos.action.createOrder.label",
                    "order": 10,
                    "actionKey": "createOrder"
                  }
                ]
              }
            ]
          },
          {
            "id": "org-settle-order",
            "type": "organism",
            "organismName": "SettleOrder",
            "titleKey": "ws-attendant-pos.organism.settleOrder.title",
            "purpose": "Finalizar pedido",
            "userActions": [
              "settleOrder"
            ],
            "requiredEntities": [
              "Order",
              "OrderStatusEvent"
            ],
            "readsFields": [
              "Order.status",
              "Order.shiftId"
            ],
            "writesFields": [
              "Order.status",
              "Order.updatedAt"
            ],
            "rulesApplied": [
              "orderRequiresOpenShift",
              "shiftClosingRequiresSettledOrders"
            ],
            "order": 20,
            "intentions": [
              {
                "id": "int-settleOrder-verify-ready",
                "intent": "workflowStatus",
                "order": 10,
                "titleKey": "ws-attendant-pos.settleOrder.step.verifyReady.title",
                "fields": [],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": []
              },
              {
                "id": "int-settleOrder-confirm-delivery",
                "intent": "summary",
                "order": 20,
                "titleKey": "ws-attendant-pos.settleOrder.step.confirmDelivery.title",
                "fields": [],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": []
              },
              {
                "id": "int-settleOrder-finalize",
                "intent": "commandForm",
                "order": 30,
                "titleKey": "ws-attendant-pos.settleOrder.step.finalize.title",
                "submitAction": "settleOrder",
                "fields": [
                  {
                    "id": "fld-settleOrder-status",
                    "field": "status",
                    "labelKey": "ws-attendant-pos.field.status.label",
                    "order": 10,
                    "required": true,
                    "inputType": "select",
                    "stateKey": "ui.ws-attendant-pos.input.settleOrder.status"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "act-settleOrder-submit",
                    "action": "settleOrder",
                    "labelKey": "ws-attendant-pos.action.settleOrder.label",
                    "order": 10,
                    "actionKey": "settleOrder"
                  }
                ]
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
    "id": "ws-attendant-pos__l2_page",
    "type": "l2_page",
    "outputPath": "_102049_/l2/cafeFlow/web/desktop/page11/ws-attendant-pos.ts",
    "defPath": "_102049_/l2/cafeFlow/web/desktop/page11/ws-attendant-pos.defs.ts",
    "dependsFiles": [
      "_102049_/l2/cafeFlow/web/shared/ws-attendant-pos.defs.ts",
      "_102049_/l2/cafeFlow/web/shared/ws-attendant-pos.ts",
      "_102049_/l2/cafeFlow/web/contracts/ws-attendant-pos.defs.ts",
      "_102049_/l2/cafeFlow/web/contracts/ws-attendant-pos.ts"
    ],
    "dependsOn": [
      "ws-attendant-pos__l2_shared"
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
