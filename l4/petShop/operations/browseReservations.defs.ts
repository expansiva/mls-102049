/// <mls fileReference="_102049_/l4/petShop/operations/browseReservations.defs.ts" enhancement="_blank"/>

export const operationBrowseReservations = {
  "operationId": "browseReservations",
  "title": "Visualizar reservas pendentes e localizar cliente",
  "actors": [
    "atendente"
  ],
  "entity": "Reservation",
  "kind": "query",
  "reads": [
    "Reservation"
  ],
  "writes": [],
  "rulesApplied": [
    "reservationStatuses",
    "reservationValidity24h"
  ],
  "story": {
    "actor": "atendente",
    "goal": "Visualizar a lista de reservas recebidas para saber quais precisam ser confirmadas e localizar um cliente pelo nome, telefone ou número da reserva quando ele chega à loja.",
    "steps": [
      "O atendente abre a tela de reservas e visualiza a lista de reservas pendentes ordenadas pela data de criação",
      "O atendente pode filtrar por status (pendente, confirmada, atendida, cancelada) para focar em um grupo específico",
      "O atendente digita um termo de busca (nome, telefone ou número da reserva) para localizar rapidamente um cliente que chegou à loja",
      "O sistema retorna as reservas correspondentes com dados do cliente, status e prazo de validade"
    ],
    "outcome": "O atendente tem uma visão clara das reservas pendentes e consegue localizar rapidamente a reserva de um cliente que chegou para retirada."
  },
  "accessPattern": {
    "kind": "list",
    "entity": "Reservation",
    "keyField": "Reservation.reservationId",
    "pagination": "optional",
    "selection": "single",
    "output": [
      "Reservation.reservationId",
      "Reservation.customerName",
      "Reservation.customerPhone",
      "Reservation.status",
      "Reservation.expiresAt",
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
        "name": "updatedAt",
        "type": "string",
        "required": true,
        "fieldRef": "Reservation.updatedAt"
      }
    ]
  },
  "inputs": [
    {
      "inputId": "searchTerm",
      "required": false,
      "source": "userInput",
      "description": "Termo de busca para localizar reserva por nome do cliente, telefone ou número da reserva",
      "type": "string"
    },
    {
      "inputId": "statusFilter",
      "fieldRef": "Reservation.status",
      "required": false,
      "source": "userInput",
      "description": "Filtro de status da reserva (pendente, confirmada, atendida ou cancelada)"
    },
    {
      "inputId": "page",
      "type": "number",
      "required": false,
      "source": "userInput",
      "description": "Número da página para paginação dos resultados"
    },
    {
      "inputId": "pageSize",
      "type": "number",
      "required": false,
      "source": "userInput",
      "description": "Quantidade de reservas por página"
    }
  ],
  "contextResolution": [
    {
      "targetRef": "atendente.actorId",
      "source": "actorSession",
      "originRef": "actorSession.actorId",
      "description": "Identifica o atendente autenticado que está navegando as reservas, para registro de auditoria"
    }
  ],
  "acceptanceAssertions": [
    "A lista de reservas retorna apenas reservas com status válido (pending, confirmed, fulfilled ou cancelled)",
    "Quando o atendente filtra por status pending, apenas reservas com status pending aparecem na lista",
    "Quando o atendente busca por um nome de cliente, apenas reservas cujo customerName contém o termo aparecem na lista",
    "Quando o atendente busca por um telefone, apenas reservas cujo customerPhone contém o termo aparecem na lista",
    "Cada reserva na lista exibe reservationId, customerName, customerPhone, status, expiresAt e createdAt",
    "As reservas são ordenadas pela data de criação (createdAt) em ordem decrescente",
    "O prazo de validade (expiresAt) de cada reserva pendente reflete a regra de 24 horas após o registro"
  ],
  "pageId": "browseReservations",
  "commandName": "browseReservations",
  "bffName": "petShop.browseReservations.browseReservations",
  "capability": {
    "capabilityId": "browseReservations",
    "title": "Visualizar reservas pendentes e localizar cliente",
    "actor": "atendente",
    "priority": "now"
  },
  "statusFrontend": "toCreate",
  "statusBackend": "toCreate"
} as const;

export default operationBrowseReservations;
