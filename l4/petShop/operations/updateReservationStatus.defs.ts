/// <mls fileReference="_102049_/l4/petShop/operations/updateReservationStatus.defs.ts" enhancement="_blank"/>

export const operationUpdateReservationStatus = {
  "operationId": "updateReservationStatus",
  "title": "Confirmar ou cancelar reserva",
  "actors": [
    "atendente"
  ],
  "entity": "Reservation",
  "kind": "update",
  "reads": [
    "Reservation",
    "ReservationItem"
  ],
  "writes": [
    "Reservation"
  ],
  "rulesApplied": [
    "reservationStatuses",
    "reservationValidity24h"
  ],
  "story": {
    "actor": "atendente",
    "goal": "Atualizar o status de uma reserva para confirmada, atendida ou cancelada conforme o fluxo de atendimento.",
    "steps": [
      "O atendente localiza a reserva pendente na lista de reservas.",
      "O atendente revisa os itens e dados do cliente da reserva.",
      "O atendente escolhe o novo status (confirmada, atendida ou cancelada).",
      "Se cancelando, o atendente registra o motivo do cancelamento.",
      "Se atendendo, o atendente associa o pagamento presencial realizado.",
      "O sistema valida o status permitido e atualiza a reserva com os timestamps correspondentes."
    ],
    "outcome": "A reserva é atualizada com o novo status, os timestamps apropriados são registrados e a reserva reflete o estado correto no fluxo de atendimento."
  },
  "accessPattern": {
    "kind": "commandInput",
    "entity": "Reservation",
    "keyField": "Reservation.reservationId",
    "pagination": "none",
    "selection": "single",
    "output": [
      "Reservation.reservationId",
      "Reservation.customerName",
      "Reservation.customerPhone",
      "Reservation.status",
      "Reservation.expiresAt",
      "Reservation.confirmedAt",
      "Reservation.fulfilledAt",
      "Reservation.cancelledAt",
      "Reservation.cancellationReason",
      "Reservation.paymentId",
      "Reservation.updatedAt"
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
        "name": "confirmedAt",
        "type": "string",
        "required": false,
        "fieldRef": "Reservation.confirmedAt"
      },
      {
        "name": "fulfilledAt",
        "type": "string",
        "required": false,
        "fieldRef": "Reservation.fulfilledAt"
      },
      {
        "name": "cancelledAt",
        "type": "string",
        "required": false,
        "fieldRef": "Reservation.cancelledAt"
      },
      {
        "name": "cancellationReason",
        "type": "string",
        "required": false,
        "fieldRef": "Reservation.cancellationReason"
      },
      {
        "name": "paymentId",
        "type": "string",
        "required": false,
        "fieldRef": "Reservation.paymentId"
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
      "inputId": "reservationId",
      "fieldRef": "Reservation.reservationId",
      "required": true,
      "source": "routeParam",
      "description": "Identificador da reserva a ser atualizada"
    },
    {
      "inputId": "newStatus",
      "fieldRef": "Reservation.status",
      "required": true,
      "source": "userInput",
      "description": "Novo status da reserva: confirmed, fulfilled ou cancelled"
    },
    {
      "inputId": "cancellationReason",
      "fieldRef": "Reservation.cancellationReason",
      "required": false,
      "source": "userInput",
      "description": "Motivo do cancelamento, obrigatório apenas quando o novo status for cancelled"
    },
    {
      "inputId": "paymentId",
      "fieldRef": "Reservation.paymentId",
      "required": false,
      "source": "userInput",
      "description": "Referência ao pagamento presencial associado, obrigatório apenas quando o novo status for fulfilled"
    }
  ],
  "contextResolution": [
    {
      "targetRef": "Reservation.reservationId",
      "source": "routeParam",
      "originRef": "routeParam.reservationId",
      "description": "O ID da reserva é obtido do parâmetro de rota da tela de detalhe da reserva selecionada."
    },
    {
      "targetRef": "Reservation.confirmedAt",
      "source": "systemDefault",
      "originRef": "systemDefault.now",
      "description": "Ao confirmar, o sistema registra a data e hora atual automaticamente no campo confirmedAt."
    },
    {
      "targetRef": "Reservation.fulfilledAt",
      "source": "systemDefault",
      "originRef": "systemDefault.now",
      "description": "Ao marcar como atendida, o sistema registra a data e hora atual automaticamente no campo fulfilledAt."
    },
    {
      "targetRef": "Reservation.cancelledAt",
      "source": "systemDefault",
      "originRef": "systemDefault.now",
      "description": "Ao cancelar, o sistema registra a data e hora atual automaticamente no campo cancelledAt."
    },
    {
      "targetRef": "Reservation.updatedAt",
      "source": "systemDefault",
      "originRef": "systemDefault.now",
      "description": "O sistema atualiza o campo updatedAt com a data e hora atual a cada modificação da reserva."
    }
  ],
  "acceptanceAssertions": [
    "Ao confirmar, a reserva existe com status 'confirmed' e o campo confirmedAt é preenchido com a data e hora da confirmação.",
    "Ao cancelar, a reserva existe com status 'cancelled', o campo cancelledAt é preenchido e o cancellationReason contém o motivo informado.",
    "Ao marcar como atendida, a reserva existe com status 'fulfilled', o campo fulfilledAt é preenchido e o paymentId referencia o pagamento presencial associado.",
    "O status da reserva após a atualização deve ser um dos valores permitidos: pending, confirmed, fulfilled ou cancelled.",
    "Uma reserva cuja validade de 24 horas expirou pode ser cancelada pelo atendente.",
    "O campo updatedAt é sempre atualizado com a data e hora da última modificação."
  ],
  "pageId": "reservationLifecycle",
  "commandName": "updateReservationStatus",
  "bffName": "petShop.reservationLifecycle.updateReservationStatus",
  "capability": {
    "capabilityId": "reservationLifecycle",
    "title": "Ciclo de vida da reserva",
    "actor": "atendente",
    "priority": "now"
  },
  "statusFrontend": "toCreate",
  "statusBackend": "toCreate"
} as const;

export default operationUpdateReservationStatus;
