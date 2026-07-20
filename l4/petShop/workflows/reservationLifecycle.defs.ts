/// <mls fileReference="_102049_/l4/petShop/workflows/reservationLifecycle.defs.ts" enhancement="_blank"/>

export const workflowReservationLifecycle = {
  "workflowId": "reservationLifecycle",
  "title": "Ciclo de vida da reserva",
  "executionMode": "sequential",
  "trigger": "Cliente cria uma reserva de produtos para retirada presencial na loja, gerando uma reserva com status pendente.",
  "actors": [
    "atendente",
    "cliente"
  ],
  "states": [
    "pending",
    "confirmed",
    "fulfilled",
    "cancelled"
  ],
  "transitions": [
    {
      "from": "pending",
      "to": "confirmed",
      "on": "updateReservationStatus",
      "by": "atendente",
      "guard": "Reserva contém nome e telefone do cliente e está dentro do prazo de 24h"
    },
    {
      "from": "pending",
      "to": "cancelled",
      "on": "updateReservationStatus",
      "by": "atendente",
      "guard": "Reserva expirada após 24h ou cancelada pelo atendente"
    },
    {
      "from": "confirmed",
      "to": "cancelled",
      "on": "updateReservationStatus",
      "by": "atendente",
      "guard": "Reserva não retirada dentro do prazo ou cancelada pelo atendente"
    },
    {
      "from": "confirmed",
      "to": "fulfilled",
      "on": "processPayment",
      "by": "atendente",
      "guard": "Pagamento presencial recebido efetivamente pelo atendente"
    }
  ],
  "operationIds": [
    "createReservation",
    "updateReservationStatus",
    "processPayment"
  ],
  "entities": [
    "Reservation",
    "ReservationItem",
    "Product",
    "Payment"
  ],
  "rulesApplied": [
    "reservationRequiresContact",
    "reservationValidity24h",
    "reservationStatuses",
    "inStorePaymentOnly",
    "totalFromPricesAndQuantities",
    "paymentRequiresReceipt"
  ],
  "story": {
    "actor": "atendente",
    "goal": "Confirmar, preparar e entregar a reserva ao cliente na retirada presencial, processando o pagamento na loja.",
    "steps": [
      "O atendente visualiza as reservas pendentes recebidas dos clientes para saber quais precisam ser confirmadas.",
      "O atendente revisa os itens e os dados de contato do cliente e confirma a reserva, sinalizando que a loja aceitou e vai preparar os produtos.",
      "O atendente separa fisicamente os produtos reservados e verifica a disponibilidade real no estoque.",
      "O cliente chega à loja para retirada e o atendente localiza a reserva pelo número ou pelo nome e telefone do cliente.",
      "O atendente revisa os itens com o cliente, calcula o valor total e processa o pagamento presencial, marcando a reserva como paga e entregue."
    ],
    "outcome": "A reserva é marcada como atendida com o pagamento presencial confirmado e os produtos entregues ao cliente, encerrando o ciclo de vida da reserva."
  },
  "pageId": "reservationLifecycle",
  "capabilities": [
    {
      "capabilityId": "reservationLifecycle",
      "title": "Ciclo de vida da reserva",
      "actor": "atendente",
      "priority": "now"
    }
  ],
  "statusFrontend": "toCreate",
  "statusBackend": "toCreate"
} as const;

export default workflowReservationLifecycle;
