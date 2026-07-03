/// <mls fileReference="_102049_/l4/operations/createOrder.defs.ts" enhancement="_blank"/>

export const operationCreateOrder = {
  "operationId": "createOrder",
  "title": "Lançar pedido no POS",
  "actor": "attendant",
  "entity": "Order",
  "kind": "create",
  "reads": [
    "MenuItem",
    "Table",
    "Shift",
    "ComboRule"
  ],
  "writes": [
    "Order",
    "Order.id",
    "Order.orderType",
    "Order.tableId",
    "Order.shiftId",
    "Order.status",
    "Order.total",
    "Order.createdAt",
    "Order.updatedAt",
    "OrderItem"
  ],
  "rulesApplied": [
    "orderRequiresOpenShift",
    "shiftClosingRequiresSettledOrders"
  ],
  "story": {
    "actor": "attendant",
    "goal": "Registrar um novo pedido no POS",
    "soThat": "O pedido entre na fila de preparo rapidamente durante o pico de atendimento",
    "steps": [
      "Selecionar a mesa ou informar número",
      "Adicionar itens do cardápio ao pedido",
      "Aplicar regras de combo e substituições se aplicável",
      "Confirmar e enviar o pedido para a cozinha"
    ],
    "outcome": "Pedido criado com itens vinculados e enviado como ticket para a cozinha"
  },
  "accessPattern": {
    "kind": "commandInput",
    "description": "Criação de pedido no POS com itens compostos e vinculação automática ao turno aberto",
    "entity": "Order",
    "filters": [],
    "sort": [],
    "pagination": "none",
    "selection": "none",
    "output": []
  },
  "inputs": [
    {
      "inputId": "orderType",
      "fieldRef": "Order.orderType",
      "required": true,
      "source": "userInput",
      "description": "Modalidade do pedido: dine-in (mesa) ou takeout"
    },
    {
      "inputId": "tableId",
      "fieldRef": "Order.tableId",
      "required": false,
      "source": "userInput",
      "description": "Mesa selecionada para pedidos dine-in; omitido para takeout"
    },
    {
      "inputId": "items",
      "fieldRef": "OrderItem",
      "required": true,
      "source": "userInput",
      "description": "Lista de itens do cardápio que compõem o pedido, com quantidade e substituições aplicadas"
    }
  ],
  "contextResolution": [
    {
      "targetRef": "Order.shiftId",
      "source": "currentWorkspace",
      "originRef": "currentWorkspace.workspaceId",
      "description": "Sistema vincula o pedido ao turno aberto do workspace atual"
    },
    {
      "targetRef": "Order.id",
      "source": "systemDefault",
      "originRef": "systemDefault.uuid",
      "description": "Identificador único do pedido gerado pelo sistema"
    },
    {
      "targetRef": "Order.createdAt",
      "source": "systemDefault",
      "originRef": "systemDefault.now",
      "description": "Data e hora de criação atribuída automaticamente"
    },
    {
      "targetRef": "Order.updatedAt",
      "source": "systemDefault",
      "originRef": "systemDefault.now",
      "description": "Data e hora da última atualização atribuída automaticamente"
    }
  ],
  "acceptanceAssertions": [
    "O atendente não precisa digitar o identificador do turno; o sistema resolve o turno aberto do workspace automaticamente",
    "Pedido e itens são criados em uma única submissão de comando, sem operação separada para OrderItem",
    "A modalidade do pedido é informada pelo atendente e a mesa é opcional, sem exigir digitação de UUID",
    "O status inicial e o total são calculados e atribuídos pelo sistema na criação do pedido",
    "A operação só permite criação se existir um turno aberto para o workspace (regra orderRequiresOpenShift)"
  ],
  "capability": {
    "capabilityId": "posOrderEntry",
    "title": "Lançar pedido no POS",
    "actor": "attendant",
    "priority": "now"
  },
  "pageId": "orderLifecycle",
  "commandName": "createOrder",
  "bffName": "cafeFlow.orderLifecycle.createOrder"
} as const;

export default operationCreateOrder;
