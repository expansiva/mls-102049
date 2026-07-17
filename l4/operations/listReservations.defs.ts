/// <mls fileReference="_102049_/l4/operations/listReservations.defs.ts" enhancement="_blank"/>

export const operationListReservations = {
  "operationId": "listReservations",
  "title": "Listar reservas recebidas",
  "actor": "loja",
  "entity": "Reservation",
  "kind": "query",
  "reads": [
    "Reservation",
    "ReservationItem"
  ],
  "writes": [],
  "rulesApplied": [
    "reservationStatusReflectsStage"
  ],
  "story": {
    "actor": "loja",
    "goal": "Consultar as reservas feitas pelos clientes para saber o que precisa ser separado para retirada na loja física",
    "steps": [
      "A loja acessa a tela de reservas recebidas",
      "O sistema lista as reservas com seus status atuais e itens associados",
      "A loja visualiza quais reservas estão ativas, prontas, entregues, expiradas ou canceladas",
      "A loja pode filtrar opcionalmente por status para focar no que precisa ser separado"
    ],
    "outcome": "A loja obtém a lista de reservas com status e itens, permitindo planejar a separação dos produtos para retirada"
  },
  "accessPattern": {
    "kind": "list",
    "entity": "Reservation",
    "keyField": "Reservation.reservationId",
    "pagination": "optional",
    "selection": "none",
    "output": [
      "Reservation.reservationId",
      "Reservation.customerId",
      "Reservation.status",
      "Reservation.confirmedAt",
      "Reservation.expiresAt",
      "Reservation.readyAt",
      "Reservation.deliveredAt",
      "Reservation.createdAt",
      "Reservation.updatedAt"
    ]
  },
  "outputShape": {
    "kind": "list",
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
        "required": false,
        "fieldRef": "Reservation.confirmedAt"
      },
      {
        "name": "expiresAt",
        "type": "string",
        "required": true,
        "fieldRef": "Reservation.expiresAt"
      },
      {
        "name": "readyAt",
        "type": "string",
        "required": false,
        "fieldRef": "Reservation.readyAt"
      },
      {
        "name": "deliveredAt",
        "type": "string",
        "required": false,
        "fieldRef": "Reservation.deliveredAt"
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
      "inputId": "status",
      "fieldRef": "Reservation.status",
      "required": false,
      "source": "userInput",
      "description": "Filtro opcional por status da reserva (draft, active, ready, delivered, expired, cancelled)"
    }
  ],
  "contextResolution": [
    {
      "targetRef": "actorSession.actorId",
      "source": "actorSession",
      "originRef": "actorSession.actorId",
      "description": "Identidade da loja autenticada obtida da sessão para autorizar o acesso à lista de reservas recebidas"
    }
  ],
  "acceptanceAssertions": [
    "A lista retornada contém apenas reservas existentes no sistema com seus dados completos",
    "Cada reserva na lista exibe seu status atual refletindo corretamente o estágio do ciclo de vida (active, ready, delivered, expired ou cancelled)",
    "Cada reserva na lista inclui seus itens associados com productId e quantidade para a loja saber o que separar",
    "O resultado pode ser filtrado opcionalmente por status da reserva quando o loja informa o parâmetro status",
    "As reservas são retornadas ordenadas pela data de criação mais recente primeiro",
    "Reservas com status draft também aparecem na lista para a loja acompanhar reservas em rascunho"
  ],
  "pageId": "listReservations",
  "commandName": "listReservations",
  "bffName": "petShop.listReservations.listReservations",
  "capability": {
    "capabilityId": "listReservations",
    "title": "Listar reservas recebidas",
    "actor": "loja",
    "priority": "now"
  },
  "statusFrontend": "toCreate",
  "statusBackend": "toCreate"
} as const;

export default operationListReservations;
