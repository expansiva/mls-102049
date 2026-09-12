/// <mls fileReference="_102049_/l1/petShop/layer_2_application/usecases/updateReservationStatus.defs.ts" enhancement="_blank"/>

export const updateReservationStatusUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "updateReservationStatus",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "updateReservationStatus",
    "ports": [
      "Reservation",
      "Payment"
    ],
    "functions": [
      {
        "functionName": "updateReservationStatus",
        "inputTypeName": "UpdateReservationStatusInput",
        "outputTypeName": "UpdateReservationStatusOutput",
        "input": [
          {
            "name": "reservationId",
            "type": "string",
            "required": true,
            "ofEntity": "Reservation",
            "fieldRef": "Reservation.reservationId"
          },
          {
            "name": "newStatus",
            "type": "string",
            "required": true,
            "fieldRef": "Reservation.status"
          },
          {
            "name": "cancellationReason",
            "type": "string",
            "required": false,
            "ofEntity": "Reservation",
            "fieldRef": "Reservation.cancellationReason"
          },
          {
            "name": "paymentId",
            "type": "string",
            "required": false,
            "ofEntity": "Reservation",
            "fieldRef": "Reservation.paymentId"
          }
        ],
        "output": [
          {
            "name": "reservationId",
            "type": "string",
            "required": true,
            "ofEntity": "Reservation"
          },
          {
            "name": "customerName",
            "type": "string",
            "required": true,
            "ofEntity": "Reservation"
          },
          {
            "name": "customerPhone",
            "type": "string",
            "required": true,
            "ofEntity": "Reservation"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "Reservation"
          },
          {
            "name": "expiresAt",
            "type": "string",
            "required": true,
            "ofEntity": "Reservation"
          },
          {
            "name": "confirmedAt",
            "type": "string",
            "required": false,
            "ofEntity": "Reservation"
          },
          {
            "name": "fulfilledAt",
            "type": "string",
            "required": false,
            "ofEntity": "Reservation"
          },
          {
            "name": "cancelledAt",
            "type": "string",
            "required": false,
            "ofEntity": "Reservation"
          },
          {
            "name": "cancellationReason",
            "type": "string",
            "required": false,
            "ofEntity": "Reservation"
          },
          {
            "name": "paymentId",
            "type": "string",
            "required": false,
            "ofEntity": "Reservation"
          },
          {
            "name": "updatedAt",
            "type": "string",
            "required": true,
            "ofEntity": "Reservation"
          }
        ],
        "ports": [
          "Reservation",
          "Payment"
        ],
        "rulesApplied": [
          "reservationStatuses",
          "reservationValidity24h"
        ],
        "transactional": true,
        "steps": [
          "resolve Reservation port and load reservation by input.reservationId; fail if not found",
          "apply reservationStatuses inline: newStatus must be one of pending|confirmed|fulfilled|cancelled; allow only valid transitions from current status (pending->confirmed|cancelled, confirmed->fulfilled|cancelled); include rule id in validation error details when blocked",
          "when newStatus is cancelled, require cancellationReason; when newStatus is fulfilled, require paymentId; otherwise reject with rule-aware validation error",
          "apply reservationValidity24h inline: if reservation.expiresAt is before ctx.clock.now(), only cancellation is allowed (attendant may cancel expired reservations); block confirm/fulfill of expired reservations with rule id in error details",
          "inside ctx.data transaction: set status to newStatus; set confirmedAt/fulfilledAt/cancelledAt from ctx.clock.now() according to the target status; set cancellationReason when cancelling; set paymentId when fulfilling; always set updatedAt to ctx.clock.now()",
          "save Reservation aggregate via Reservation port",
          "when transitioning to fulfilled with paymentId, build append-only Payment audit event record and append via Payment port in the same transaction (never update/delete)",
          "return outputShape fields from the updated Reservation"
        ],
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
        }
      }
    ],
    "rulesApplied": [
      "reservationStatuses",
      "reservationValidity24h"
    ],
    "mdmRefs": []
  }
} as const;

export default updateReservationStatusUsecase;

export const pipeline = [
  {
    "id": "updateReservationStatus__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102049_/l1/petShop/layer_2_application/usecases/updateReservationStatus.ts",
    "defPath": "_102049_/l1/petShop/layer_2_application/usecases/updateReservationStatus.defs.ts",
    "dependsFiles": [
      "_102049_/l1/petShop/layer_2_application/ports/reservationRepository.d.ts",
      "_102049_/l1/petShop/layer_2_application/ports/paymentRepository.d.ts",
      "_102049_/l1/petShop/layer_3_domain/entities/reservation.d.ts",
      "_102049_/l1/petShop/layer_3_domain/entities/payment.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/applicationUsecase.md",
      "_102034_.d.ts"
    ],
    "rulesApplied": [
      "reservationStatuses",
      "reservationValidity24h"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
