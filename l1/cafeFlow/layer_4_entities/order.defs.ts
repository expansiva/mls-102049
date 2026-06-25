/// <mls fileReference="_102049_/l1/cafeFlow/layer_4_entities/order.defs.ts" enhancement="_blank"/>

export const entity = {
  "entityId": "order",
  "title": "Entidade de Pedido",
  "purpose": "Agrupa pedidos, itens de pedido, mesas/comandas e status de pedido",
  "layer": "layer_4_entities",
  "fields": [
    {
      "fieldId": "orderId",
      "type": "uuid",
      "required": true,
      "description": "Identificador único do pedido."
    },
    {
      "fieldId": "originType",
      "type": "string",
      "required": true,
      "description": "Origem do pedido (mesa ou takeout).",
      "enum": [
        "mesa",
        "takeout"
      ]
    },
    {
      "fieldId": "tableSeatId",
      "type": "TableSeat",
      "required": false,
      "description": "Referência opcional à mesa/comanda associada ao pedido."
    },
    {
      "fieldId": "dailyShiftId",
      "type": "DailyShift",
      "required": true,
      "description": "Turno diário ao qual o pedido pertence."
    },
    {
      "fieldId": "orderStatusId",
      "type": "OrderStatus",
      "required": true,
      "description": "Status padronizado atual do pedido."
    },
    {
      "fieldId": "createdAt",
      "type": "datetime",
      "required": true,
      "description": "Data e hora de criação do pedido."
    },
    {
      "fieldId": "updatedAt",
      "type": "datetime",
      "required": true,
      "description": "Data e hora da última atualização do pedido."
    }
  ],
  "statusEnum": [
    "recebido",
    "preparando",
    "pronto",
    "entregue",
    "cancelado"
  ],
  "ontologyEntities": [
    "Order",
    "OrderItem",
    "TableSeat",
    "OrderStatus"
  ],
  "sourceTables": [
    {
      "tableName": "orders",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "order_items",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "table_seats",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "OrderStatus",
      "ownership": "mdmOwned"
    }
  ],
  "storage": [
    {
      "kind": "moduleTable",
      "tableId": "order",
      "tableName": "orders",
      "fileRef": "_102049_/l1/cafeFlow/layer_1_external/order.defs.ts"
    },
    {
      "kind": "moduleTable",
      "tableId": "orderItem",
      "tableName": "order_items",
      "fileRef": "_102049_/l1/cafeFlow/layer_1_external/orderItem.defs.ts"
    },
    {
      "kind": "moduleTable",
      "tableId": "tableSeat",
      "tableName": "table_seats",
      "fileRef": "_102049_/l1/cafeFlow/layer_1_external/tableSeat.defs.ts"
    },
    {
      "kind": "mdm",
      "moduleRef": "102034",
      "entity": "OrderStatus",
      "domainId": "orderStatus",
      "sourceOfTruth": "project 102034",
      "governanceRules": [
        "Status seguem o fluxo padronizado obrigatório: recebido → preparando → pronto → entregue.",
        "Cancelado é um estado terminal que encerra o fluxo do pedido sem permitir retorno.",
        "Transições de status são controladas exclusivamente pelos workflows de pedido e cozinha."
      ]
    }
  ],
  "allowedOperations": [
    "create",
    "read",
    "update",
    "list",
    "search"
  ],
  "rulesApplied": [
    "orderStatusLifecycle",
    "inventoryDecrementRule"
  ],
  "usecaseRefs": [
    "criarPedido",
    "atualizarStatusPedido",
    "cancelarPedido",
    "listarPedidos",
    "buscarPedidoPorId",
    "criarMesa",
    "atualizarMesa",
    "listarMesas",
    "registrarMovimentoEstoque",
    "fecharTurno",
    "visualizarDashboard",
    "gerarResumoVendas",
    "sugerirPromocoes"
  ],
  "materialization": {
    "fileName": "layer_4_entities/OrderEntity.ts",
    "className": "OrderEntity",
    "contractName": "IOrderEntity"
  }
} as const;

export default entity;
