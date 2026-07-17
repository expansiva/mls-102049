/// <mls fileReference="_102049_/l4/operations/createReservation.defs.ts" enhancement="_blank"/>

export const operationCreateReservation = {
  "operationId": "createReservation",
  "title": "Criar reserva",
  "actor": "cliente",
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
    "reservationRequiresAuthentication",
    "reservationExpiresIn24Hours",
    "reservationStatusReflectsStage"
  ],
  "story": {
    "actor": "cliente",
    "goal": "Selecionar produtos do catálogo com suas quantidades e confirmar uma reserva para retirada na loja física",
    "steps": [
      "O cliente autenticado seleciona um ou mais produtos do catálogo informando as quantidades desejadas",
      "O sistema valida a disponibilidade de cada produto no catálogo",
      "O sistema cria a reserva com status 'active', define o prazo de expiração para 24 horas e cria os itens de reserva associados",
      "O cliente recebe a confirmação da reserva com o prazo de retirada na loja"
    ],
    "outcome": "Uma nova reserva ativa é criada com os itens selecionados, prazo de retirada de 24 horas e os produtos têm sua disponibilidade comprometida no catálogo"
  },
  "accessPattern": {
    "kind": "commandInput",
    "entity": "Reservation",
    "keyField": "Reservation.reservationId",
    "pagination": "none",
    "selection": "none",
    "output": [
      "Reservation.reservationId",
      "Reservation.customerId",
      "Reservation.status",
      "Reservation.expiresAt",
      "Reservation.createdAt",
      "Reservation.updatedAt",
      "ReservationItem.productId",
      "ReservationItem.quantity"
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
        "name": "customerId",
        "type": "string",
        "required": true,
        "fieldRef": "Reservation.customerId"
      },
      {
        "name": "status",
        "type": "string",
        "required": true,
        "fieldRef": "Reservation.status"
      },
      {
        "name": "confirmedAt",
        "type": "string",
        "required": true,
        "fieldRef": "Reservation.confirmedAt"
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
        "name": "updatedAt",
        "type": "string",
        "required": true,
        "fieldRef": "Reservation.updatedAt"
      },
      {
        "name": "items",
        "type": "array",
        "required": true,
        "item": {
          "fields": [
            {
              "name": "reservationItemId",
              "type": "string",
              "required": true,
              "fieldRef": "ReservationItem.reservationItemId"
            },
            {
              "name": "productId",
              "type": "string",
              "required": true,
              "fieldRef": "ReservationItem.productId"
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
      "inputId": "items",
      "fieldRef": "ReservationItem.productId",
      "required": true,
      "source": "userInput",
      "description": "Lista de produtos e quantidades que o cliente deseja reservar para retirada na loja"
    }
  ],
  "contextResolution": [
    {
      "targetRef": "Reservation.customerId",
      "source": "actorSession",
      "originRef": "actorSession.actorId",
      "description": "O identificador do cliente autenticado é obtido da sessão ativa do actor"
    },
    {
      "targetRef": "Reservation.reservationId",
      "source": "systemDefault",
      "originRef": "systemDefault.uuid",
      "description": "Um novo UUID é gerado pelo sistema para o identificador da reserva"
    },
    {
      "targetRef": "Reservation.status",
      "source": "systemDefault",
      "originRef": "systemDefault.now",
      "description": "O status é definido como 'active' pois a reserva é confirmada no momento da criação"
    },
    {
      "targetRef": "Reservation.confirmedAt",
      "source": "systemDefault",
      "originRef": "systemDefault.now",
      "description": "O momento de confirmação é definido como o timestamp atual do sistema"
    },
    {
      "targetRef": "Reservation.expiresAt",
      "source": "systemDefault",
      "originRef": "systemDefault.now",
      "description": "O prazo de expiração é calculado como o timestamp atual mais 24 horas, conforme a regra de expiração"
    },
    {
      "targetRef": "Reservation.createdAt",
      "source": "systemDefault",
      "originRef": "systemDefault.now",
      "description": "O momento de criação é definido como o timestamp atual do sistema"
    },
    {
      "targetRef": "Reservation.updatedAt",
      "source": "systemDefault",
      "originRef": "systemDefault.now",
      "description": "O momento da última atualização é definido como o timestamp atual do sistema"
    }
  ],
  "acceptanceAssertions": [
    "A reserva criada possui status 'active' após a confirmação do cliente",
    "A reserva criada possui expiresAt definido para exatamente 24 horas após o momento de criação",
    "A reserva criada contém todos os itens de reserva com productId e quantidade informados pelo cliente",
    "A reserva criada possui customerId correspondente ao cliente autenticado na sessão",
    "Cada item de reserva possui um reservationItemId único gerado pelo sistema",
    "Os produtos reservados têm sua disponibilidade comprometida no catálogo após a criação da reserva",
    "A reserva criada possui confirmedAt preenchido com o timestamp do momento de confirmação"
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
