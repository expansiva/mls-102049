/// <mls fileReference="_102049_/l4/petShop/operations/createReservation.defs.ts" enhancement="_blank"/>

export const operationCreateReservation = {
  "operationId": "createReservation",
  "title": "Reservar produtos para retirada na loja",
  "actors": [
    "cliente"
  ],
  "entity": "Reservation",
  "kind": "create",
  "reads": [
    "Product"
  ],
  "writes": [
    "Reservation",
    "ReservationItem"
  ],
  "rulesApplied": [
    "reservationRequiresContact",
    "reservationValidity24h",
    "reservationStatuses"
  ],
  "story": {
    "actor": "cliente",
    "goal": "Reservar um produto para retirada na loja fornecendo dados de contato e quantidade desejada",
    "steps": [
      "O cliente visualiza os detalhes de um produto e decide reservá-lo para retirada presencial",
      "Informa a quantidade desejada do produto",
      "Fornece seu nome e telefone de contato para identificação na loja",
      "Revisa os itens e seus dados e confirma a reserva",
      "Recebe o número da reserva como comprovante para apresentar na retirada"
    ],
    "outcome": "A reserva é criada com status 'pending', validade de 24 horas, contendo o item reservado e os dados de contato do cliente, e o reservationId é retornado como comprovante"
  },
  "accessPattern": {
    "kind": "commandInput",
    "entity": "Reservation",
    "keyField": "Reservation.reservationId",
    "pagination": "none",
    "selection": "none",
    "output": [
      "Reservation.reservationId",
      "Reservation.customerName",
      "Reservation.customerPhone",
      "Reservation.status",
      "Reservation.expiresAt",
      "Reservation.createdAt"
    ]
  },
  "outputShape": {
    "kind": "object",
    "fields": [
      {
        "name": "reservationId",
        "type": "string",
        "required": true,
        "fieldRef": "Reservation.reservationId"
      },
      {
        "name": "customerName",
        "type": "string",
        "required": true,
        "fieldRef": "Reservation.customerName"
      },
      {
        "name": "customerPhone",
        "type": "string",
        "required": true,
        "fieldRef": "Reservation.customerPhone"
      },
      {
        "name": "status",
        "type": "string",
        "required": true,
        "fieldRef": "Reservation.status"
      },
      {
        "name": "expiresAt",
        "type": "string",
        "required": true,
        "fieldRef": "Reservation.expiresAt"
      },
      {
        "name": "createdAt",
        "type": "string",
        "required": true,
        "fieldRef": "Reservation.createdAt"
      },
      {
        "name": "items",
        "type": "array",
        "required": true,
        "item": {
          "fields": [
            {
              "name": "productId",
              "type": "string",
              "required": true,
              "fieldRef": "Product.productId"
            },
            {
              "name": "productName",
              "type": "string",
              "required": true,
              "fieldRef": "Product.name"
            },
            {
              "name": "quantity",
              "type": "number",
              "required": true,
              "fieldRef": "ReservationItem.quantity"
            }
          ]
        }
      }
    ]
  },
  "inputs": [
    {
      "inputId": "customerName",
      "fieldRef": "Reservation.customerName",
      "required": true,
      "source": "userInput",
      "description": "Nome do cliente que está fazendo a reserva"
    },
    {
      "inputId": "customerPhone",
      "fieldRef": "Reservation.customerPhone",
      "required": true,
      "source": "userInput",
      "description": "Telefone de contato do cliente para identificação na loja"
    },
    {
      "inputId": "productId",
      "fieldRef": "Product.productId",
      "required": true,
      "source": "selectedEntity",
      "description": "Identificador do produto selecionado na tela de detalhes que o cliente deseja reservar"
    },
    {
      "inputId": "quantity",
      "type": "number",
      "required": true,
      "source": "userInput",
      "description": "Quantidade de unidades do produto que o cliente deseja reservar"
    }
  ],
  "contextResolution": [
    {
      "targetRef": "Reservation.reservationId",
      "source": "systemDefault",
      "originRef": "systemDefault.uuid",
      "description": "O backend gera um UUID para o reservationId no momento da criação da reserva"
    },
    {
      "targetRef": "Reservation.expiresAt",
      "source": "systemDefault",
      "originRef": "systemDefault.now",
      "description": "O backend calcula expiresAt como o timestamp atual mais 24 horas, conforme a regra de validade da reserva"
    },
    {
      "targetRef": "Reservation.createdAt",
      "source": "systemDefault",
      "originRef": "systemDefault.now",
      "description": "O backend define createdAt com o timestamp atual no momento da criação"
    },
    {
      "targetRef": "Reservation.updatedAt",
      "source": "systemDefault",
      "originRef": "systemDefault.now",
      "description": "O backend define updatedAt com o timestamp atual no momento da criação"
    },
    {
      "targetRef": "Reservation.status",
      "source": "workflowState",
      "originRef": "Reservation.status",
      "description": "O backend define o status inicial como 'pending' conforme o estado inicial do lifecycle reservationLifecycle"
    },
    {
      "targetRef": "Product.productId",
      "source": "selectedEntity",
      "originRef": "Product.productId",
      "description": "O backend obtém o productId do produto atualmente selecionado na tela de detalhes de produto"
    }
  ],
  "acceptanceAssertions": [
    "Após a confirmação, a reserva existe com status 'pending'",
    "A reserva contém o nome e telefone do cliente informados nos dados de contato",
    "A data de validade (expiresAt) é definida para 24 horas após o momento da criação",
    "A reserva contém pelo menos um item com o productId e a quantidade informados pelo cliente",
    "O reservationId é retornado na resposta para o cliente usar como comprovante de retirada",
    "A reserva sem nome ou telefone do cliente é rejeitada conforme a regra de contato obrigatório"
  ],
  "pageId": "reservationLifecycle",
  "commandName": "createReservation",
  "bffName": "petShop.reservationLifecycle.createReservation",
  "capability": {
    "capabilityId": "reservationLifecycle",
    "title": "Ciclo de vida da reserva",
    "actor": "cliente",
    "priority": "now"
  },
  "statusFrontend": "toCreate",
  "statusBackend": "toCreate"
} as const;

export default operationCreateReservation;
