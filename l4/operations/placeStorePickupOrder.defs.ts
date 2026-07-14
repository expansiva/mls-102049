/// <mls fileReference="_102049_/l4/operations/placeStorePickupOrder.defs.ts" enhancement="_blank"/>

export const operationPlaceStorePickupOrder = {
  "operationId": "placeStorePickupOrder",
  "title": "Finalizar pedido para retirada na loja",
  "actor": "cliente",
  "entity": "Order",
  "kind": "create",
  "reads": [
    "Product"
  ],
  "writes": [
    "Order",
    "OrderItem"
  ],
  "rulesApplied": [
    "paymentInStoreOnly",
    "pickupInStoreOnly",
    "orderRequiresAtLeastOneItem"
  ],
  "story": {
    "actor": "cliente",
    "goal": "Finalizar o pedido de retirada na loja com os itens do carrinho de compras, para pagamento e retirada presencial",
    "steps": [
      "O cliente revisa os itens do carrinho de compras e o valor total",
      "O cliente informa seu nome e, opcionalmente, seu telefone de contato",
      "O cliente confirma a finalização do pedido para retirada na loja física",
      "O sistema valida que o carrinho contém ao menos um item e registra o pedido com status 'registered'",
      "O sistema associa os itens do carrinho ao novo pedido como OrderItems"
    ],
    "outcome": "O pedido de retirada é criado com status 'registered', com os itens do carrinho associados, pronto para retirada e pagamento presencial na loja física"
  },
  "accessPattern": {
    "kind": "commandInput",
    "entity": "Order",
    "keyField": "Order.orderId",
    "pagination": "none",
    "selection": "single",
    "output": [
      "Order.orderId",
      "Order.status",
      "Order.customerName",
      "Order.customerPhone",
      "Order.createdAt"
    ]
  },
  "inputs": [
    {
      "inputId": "customerName",
      "fieldRef": "Order.customerName",
      "required": true,
      "source": "userInput",
      "description": "Nome do cliente que está finalizando o pedido de retirada"
    },
    {
      "inputId": "customerPhone",
      "fieldRef": "Order.customerPhone",
      "required": false,
      "source": "userInput",
      "description": "Telefone de contato opcional do cliente para confirmação da retirada"
    },
    {
      "inputId": "orderId",
      "fieldRef": "Order.orderId",
      "required": true,
      "source": "systemDefault",
      "description": "Identificador único gerado pelo sistema para o novo pedido"
    },
    {
      "inputId": "createdAt",
      "fieldRef": "Order.createdAt",
      "required": true,
      "source": "systemDefault",
      "description": "Data e hora de registro do pedido no momento da criação"
    },
    {
      "inputId": "updatedAt",
      "fieldRef": "Order.updatedAt",
      "required": true,
      "source": "systemDefault",
      "description": "Data e hora da última atualização do pedido no momento da criação"
    },
    {
      "inputId": "cartItems",
      "fieldRef": "OrderItem.productId",
      "required": true,
      "source": "workflowState",
      "description": "Itens do carrinho de compras construídos nas etapas anteriores do fluxo de navegação e revisão"
    }
  ],
  "contextResolution": [
    {
      "targetRef": "Order.orderId",
      "source": "systemDefault",
      "originRef": "systemDefault.uuid",
      "description": "O sistema gera um novo UUID para identificar o pedido no momento da criação"
    },
    {
      "targetRef": "Order.createdAt",
      "source": "systemDefault",
      "originRef": "systemDefault.now",
      "description": "O sistema registra a data e hora atual no momento da criação do pedido"
    },
    {
      "targetRef": "Order.updatedAt",
      "source": "systemDefault",
      "originRef": "systemDefault.now",
      "description": "O sistema registra a data e hora atual como última atualização no momento da criação do pedido"
    },
    {
      "targetRef": "OrderItem.productId",
      "source": "workflowState",
      "originRef": "OrderItem.productId",
      "description": "O estado do fluxo mantém os itens do carrinho adicionados pelo cliente nas etapas anteriores de navegação e revisão, que são associados ao novo pedido como OrderItems"
    }
  ],
  "acceptanceAssertions": [
    "Após a criação, o pedido existe com status 'registered'",
    "O pedido contém pelo menos um OrderItem associado, proveniente dos itens do carrinho de compras",
    "Nenhum pagamento online é processado — o pagamento deve ser realizado presencialmente na loja física no momento da retirada",
    "Order.customerName corresponde ao nome informado pelo cliente na finalização",
    "Order.createdAt e Order.updatedAt são definidos com a data e hora atual no momento da criação",
    "O pedido não possui opção de entrega — a retirada é exclusivamente na loja física"
  ],
  "pageId": "placeStorePickupOrder",
  "commandName": "placeStorePickupOrder",
  "bffName": "petShop.placeStorePickupOrder.placeStorePickupOrder",
  "capability": {
    "capabilityId": "placeStorePickupOrder",
    "title": "Finalizar pedido para retirada na loja",
    "actor": "cliente",
    "priority": "now"
  },
  "statusFrontend": "toCreate",
  "statusBackend": "toCreate"
} as const;

export default operationPlaceStorePickupOrder;
