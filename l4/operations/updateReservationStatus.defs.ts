/// <mls fileReference="_102049_/l4/operations/updateReservationStatus.defs.ts" enhancement="_blank"/>

export const operationUpdateReservationStatus = {
  "operationId": "updateReservationStatus",
  "title": "Atualizar status da reserva",
  "actor": "loja",
  "entity": "Reservation",
  "kind": "update",
  "reads": [
    "Reservation",
    "ReservationItem",
    "Product"
  ],
  "writes": [
    "Reservation",
    "Product"
  ],
  "rulesApplied": [
    "storeCanMarkReservationReady",
    "reservationStatusReflectsStage",
    "onlyActiveReservationsCanBeCancelled",
    "pickupRequiresValidReservation",
    "cancellationRestoresAvailability"
  ],
  "story": {
    "actor": "loja",
    "goal": "Atualizar o status de uma reserva conforme o andamento do atendimento na loja física — marcar como pronta para retirada, confirmar entrega ou cancelar.",
    "steps": [
      "A loja seleciona uma reserva ativa ou pronta no sistema",
      "A loja escolhe o novo status desejado (ready, delivered ou cancelled)",
      "O sistema valida se a transição de status é permitida conforme o ciclo de vida da reserva",
      "Para cancelamento, o sistema verifica se a reserva está ativa e restaura a disponibilidade dos produtos",
      "Para entrega, o sistema valida se a reserva está dentro do prazo de validade",
      "O sistema atualiza o status, registra os timestamps correspondentes e retorna a reserva atualizada"
    ],
    "outcome": "A reserva tem seu status atualizado refletindo o estágio atual do processo, com os timestamps apropriados registrados e a disponibilidade de produtos ajustada quando aplicável."
  },
  "accessPattern": {
    "kind": "commandInput",
    "entity": "Reservation",
    "keyField": "Reservation.reservationId",
    "pagination": "none",
    "selection": "single",
    "output": [
      "Reservation.reservationId",
      "Reservation.status",
      "Reservation.readyAt",
      "Reservation.deliveredAt",
      "Reservation.cancelledAt",
      "Reservation.cancelReason",
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
        "name": "status",
        "type": "string",
        "required": true,
        "fieldRef": "Reservation.status"
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
        "name": "cancelledAt",
        "type": "string",
        "required": false,
        "fieldRef": "Reservation.cancelledAt"
      },
      {
        "name": "cancelReason",
        "type": "string",
        "required": false,
        "fieldRef": "Reservation.cancelReason"
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
      "source": "selectedEntity",
      "description": "Identificador da reserva cujo status será atualizado"
    },
    {
      "inputId": "status",
      "fieldRef": "Reservation.status",
      "required": true,
      "source": "userInput",
      "description": "Novo status da reserva: ready, delivered ou cancelled"
    },
    {
      "inputId": "cancelReason",
      "fieldRef": "Reservation.cancelReason",
      "required": false,
      "source": "userInput",
      "description": "Motivo do cancelamento, obrigatório apenas quando o status for cancelled"
    },
    {
      "inputId": "paymentId",
      "fieldRef": "Reservation.paymentId",
      "required": false,
      "source": "userInput",
      "description": "Referência ao pagamento presencial, informado apenas quando o status for delivered"
    }
  ],
  "contextResolution": [
    {
      "targetRef": "Reservation.reservationId",
      "source": "selectedEntity",
      "originRef": "Reservation.reservationId",
      "description": "A reserva atualmente selecionada pela loja na tela de gestão de reservas"
    },
    {
      "targetRef": "Reservation.updatedAt",
      "source": "systemDefault",
      "originRef": "systemDefault.now",
      "description": "O timestamp atual do sistema é gravado no campo updatedAt ao persistir a alteração de status"
    },
    {
      "targetRef": "Reservation.readyAt",
      "source": "systemDefault",
      "originRef": "systemDefault.now",
      "description": "Quando o status muda para ready, o sistema registra o timestamp atual no campo readyAt"
    },
    {
      "targetRef": "Reservation.deliveredAt",
      "source": "systemDefault",
      "originRef": "systemDefault.now",
      "description": "Quando o status muda para delivered, o sistema registra o timestamp atual no campo deliveredAt"
    },
    {
      "targetRef": "Reservation.cancelledAt",
      "source": "systemDefault",
      "originRef": "systemDefault.now",
      "description": "Quando o status muda para cancelled, o sistema registra o timestamp atual no campo cancelledAt"
    }
  ],
  "acceptanceAssertions": [
    "Ao marcar como pronta (ready), a reserva que estava ativa passa a ter status ready e o campo readyAt é preenchido com o timestamp atual",
    "Ao confirmar retirada (delivered), a reserva que estava pronta passa a ter status delivered, o campo deliveredAt é preenchido e o paymentId é associado",
    "A retirada (delivered) só é permitida quando a reserva está dentro do prazo de validade de 24 horas — reservas expiradas não permitem retirada",
    "Ao cancelar (cancelled), apenas reservas ativas podem ser canceladas; reservas expiradas, entregues ou já canceladas são rejeitadas",
    "Ao cancelar uma reserva ativa, os produtos associados voltam imediatamente a ficar disponíveis no catálogo",
    "O status da reserva após a atualização reflete sempre um estágio válido do ciclo de vida: ready, delivered ou cancelled",
    "O campo updatedAt é sempre atualizado com o timestamp da operação",
    "O cancelamento sem motivo informado (cancelReason) é rejeitado quando o status alvo é cancelled"
  ],
  "pageId": "reservationLifecycle",
  "commandName": "updateReservationStatus",
  "bffName": "petShop.reservationLifecycle.updateReservationStatus",
  "capability": {
    "capabilityId": "reservationLifecycle",
    "title": "Ciclo de vida da reserva",
    "actor": "loja",
    "priority": "now"
  },
  "statusFrontend": "toCreate",
  "statusBackend": "toCreate"
} as const;

export default operationUpdateReservationStatus;
