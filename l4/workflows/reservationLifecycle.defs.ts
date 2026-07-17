/// <mls fileReference="_102049_/l4/workflows/reservationLifecycle.defs.ts" enhancement="_blank"/>

export const workflowReservationLifecycle = {
  "workflowId": "reservationLifecycle",
  "title": "Ciclo de vida da reserva",
  "executionMode": "sequential",
  "trigger": "Cliente confirma uma reserva de produtos para retirada na loja física",
  "actors": [
    "cliente",
    "loja"
  ],
  "states": [
    "draft",
    "active",
    "ready",
    "delivered",
    "expired",
    "cancelled"
  ],
  "transitions": [
    {
      "from": "draft",
      "to": "active",
      "on": "createReservation",
      "by": "cliente",
      "guard": "Cliente autenticado confirma a reserva"
    },
    {
      "from": "active",
      "to": "ready",
      "on": "updateReservationStatus",
      "by": "loja",
      "guard": "Loja separou fisicamente os produtos reservados"
    },
    {
      "from": "ready",
      "to": "delivered",
      "on": "payInStore",
      "by": "cliente",
      "guard": "Reserva dentro do prazo de validade de 24 horas"
    },
    {
      "from": "active",
      "to": "cancelled",
      "on": "cancelReservation",
      "by": "cliente",
      "guard": "Reserva não expirada, não entregue e não cancelada"
    },
    {
      "from": "ready",
      "to": "cancelled",
      "on": "cancelReservation",
      "by": "cliente",
      "guard": "Reserva não expirada, não entregue e não cancelada"
    },
    {
      "from": "active",
      "to": "expired",
      "on": "expireReservations",
      "by": "loja",
      "guard": "Prazo de 24 horas esgotado sem retirada"
    },
    {
      "from": "ready",
      "to": "expired",
      "on": "expireReservations",
      "by": "loja",
      "guard": "Prazo de 24 horas esgotado sem retirada"
    }
  ],
  "operationIds": [
    "createReservation",
    "cancelReservation",
    "updateReservationStatus",
    "payInStore",
    "expireReservations"
  ],
  "entities": [
    "Reservation",
    "ReservationItem",
    "Product",
    "Payment"
  ],
  "rulesApplied": [
    "reservationRequiresAuthentication",
    "reservationExpiresIn24Hours",
    "pickupRequiresValidReservation",
    "expiredReservationRestoresAvailability",
    "onlyActiveReservationsCanBeCancelled",
    "cancellationRestoresAvailability",
    "storeCanMarkReservationReady",
    "reservationStatusReflectsStage"
  ],
  "story": {
    "actor": "cliente",
    "goal": "Reservar produtos para retirada na loja física e concluir o ciclo da reserva",
    "steps": [
      "O cliente seleciona produtos e confirma a reserva, que sai de rascunho e fica ativa com prazo de retirada de 24 horas.",
      "A loja separa os produtos físicos e marca a reserva como pronta para retirada.",
      "O cliente comparece à loja física dentro do prazo de validade para retirar os produtos.",
      "O cliente realiza o pagamento presencial no balcão da loja.",
      "A reserva é marcada como entregue e o cliente recebe os produtos, concluindo o ciclo."
    ],
    "outcome": "A reserva percorre o ciclo completo desde a criação até a entrega na loja física, podendo também ser cancelada pelo cliente ou expirada automaticamente se não for retirada em 24 horas."
  },
  "pageId": "reservationLifecycle",
  "capabilities": [
    {
      "capabilityId": "reservationLifecycle",
      "title": "Ciclo de vida da reserva",
      "actor": "cliente",
      "priority": "now"
    }
  ],
  "statusFrontend": "toCreate",
  "statusBackend": "toCreate"
} as const;

export default workflowReservationLifecycle;
