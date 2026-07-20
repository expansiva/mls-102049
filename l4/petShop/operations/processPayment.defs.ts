/// <mls fileReference="_102049_/l4/petShop/operations/processPayment.defs.ts" enhancement="_blank"/>

export const operationProcessPayment = {
  "operationId": "processPayment",
  "title": "Receber pagamento presencial e encerrar reserva",
  "actors": [
    "atendente"
  ],
  "entity": "Payment",
  "kind": "create",
  "reads": [
    "Reservation",
    "ReservationItem",
    "Product"
  ],
  "writes": [
    "Payment",
    "Reservation"
  ],
  "rulesApplied": [
    "inStorePaymentOnly",
    "totalFromPricesAndQuantities",
    "paymentRequiresReceipt"
  ],
  "story": {
    "actor": "atendente",
    "goal": "Receber o pagamento presencial do cliente na loja e encerrar a reserva registrando o pagamento no sistema",
    "steps": [
      "O atendente seleciona a reserva do cliente que chegou para retirada",
      "O sistema calcula o valor total a partir dos preços dos produtos e das quantidades reservadas nos itens da reserva",
      "O atendente informa o método de pagamento escolhido pelo cliente (dinheiro, cartão de crédito, cartão de débito ou pix)",
      "O sistema cria o registro de pagamento com status 'posted' e marca a reserva associada como paga e entregue, encerrando o ciclo da reserva"
    ],
    "outcome": "O pagamento é registrado com status posted, a reserva é encerrada como paga e entregue, e o cliente retira os produtos da loja"
  },
  "accessPattern": {
    "kind": "commandInput",
    "entity": "Payment",
    "keyField": "Payment.paymentId",
    "pagination": "none",
    "selection": "single",
    "output": [
      "Payment.paymentId",
      "Payment.reservationId",
      "Payment.amount",
      "Payment.method",
      "Payment.status",
      "Payment.receivedBy",
      "Payment.createdAt"
    ]
  },
  "outputShape": {
    "kind": "object",
    "fields": [
      {
        "name": "paymentId",
        "type": "string",
        "required": true,
        "fieldRef": "Payment.paymentId"
      },
      {
        "name": "reservationId",
        "type": "string",
        "required": true,
        "fieldRef": "Payment.reservationId"
      },
      {
        "name": "amount",
        "type": "number",
        "required": true,
        "fieldRef": "Payment.amount"
      },
      {
        "name": "method",
        "type": "string",
        "required": true,
        "fieldRef": "Payment.method"
      },
      {
        "name": "status",
        "type": "string",
        "required": true,
        "fieldRef": "Payment.status"
      },
      {
        "name": "receivedBy",
        "type": "string",
        "required": true,
        "fieldRef": "Payment.receivedBy"
      },
      {
        "name": "createdAt",
        "type": "string",
        "required": true,
        "fieldRef": "Payment.createdAt"
      },
      {
        "name": "reservationStatus",
        "type": "string",
        "required": true
      }
    ]
  },
  "inputs": [
    {
      "inputId": "reservationId",
      "fieldRef": "Payment.reservationId",
      "required": true,
      "source": "selectedEntity",
      "description": "Reserva atualmente selecionada pelo atendente na tela de retirada, associada a este pagamento presencial"
    },
    {
      "inputId": "method",
      "fieldRef": "Payment.method",
      "required": true,
      "source": "userInput",
      "description": "Método de pagamento escolhido pelo cliente na loja: dinheiro, cartão de crédito, cartão de débito ou pix"
    }
  ],
  "contextResolution": [
    {
      "targetRef": "Payment.reservationId",
      "source": "selectedEntity",
      "originRef": "Reservation.reservationId",
      "description": "A reserva atualmente selecionada pelo atendente na tela de retirada, identificada pelo seu reservationId"
    },
    {
      "targetRef": "Payment.receivedBy",
      "source": "actorSession",
      "originRef": "actorSession.actorId",
      "description": "O identificador do atendente logado no sistema que está processando o recebimento do pagamento"
    },
    {
      "targetRef": "Payment.paymentId",
      "source": "systemDefault",
      "originRef": "systemDefault.uuid",
      "description": "Identificador único gerado automaticamente pelo sistema ao criar o registro de pagamento"
    },
    {
      "targetRef": "Payment.createdAt",
      "source": "systemDefault",
      "originRef": "systemDefault.now",
      "description": "Data e hora atual do sistema no momento em que o pagamento é registrado"
    },
    {
      "targetRef": "Payment.amount",
      "source": "previousStepOutput",
      "originRef": "ReservationItem.quantity",
      "description": "O valor total é calculado server-side somando o produto de ReservationItem.quantity pelo preço de cada Product associado aos itens da reserva selecionada"
    },
    {
      "targetRef": "Payment.status",
      "source": "systemDefault",
      "originRef": "systemDefault.now",
      "description": "O status do pagamento é definido como 'posted' no momento da criação, indicando recebimento confirmado"
    }
  ],
  "acceptanceAssertions": [
    "Após a confirmação, existe um registro de Payment com status 'posted' associado ao reservationId informado",
    "O valor do campo amount é calculado a partir dos preços dos produtos (Product) e das quantidades reservadas (ReservationItem) da reserva selecionada",
    "O campo receivedBy corresponde ao identificador do atendente que processou o pagamento, obtido da sessão ativa",
    "O método de pagamento informado está entre os valores permitidos: cash, creditCard, debitCard ou pix",
    "Após o registro do pagamento, a reserva associada é marcada como paga e entregue, encerrando seu ciclo de vida",
    "Não é possível registrar um pagamento sem a confirmação presencial do recebimento pelo atendente",
    "O pagamento é sempre presencial na loja; não existe pagamento online nem cobrança remota neste módulo"
  ],
  "pageId": "reservationLifecycle",
  "commandName": "processPayment",
  "bffName": "petShop.reservationLifecycle.processPayment",
  "capability": {
    "capabilityId": "reservationLifecycle",
    "title": "Ciclo de vida da reserva",
    "actor": "atendente",
    "priority": "now"
  },
  "statusFrontend": "toCreate",
  "statusBackend": "toCreate"
} as const;

export default operationProcessPayment;
