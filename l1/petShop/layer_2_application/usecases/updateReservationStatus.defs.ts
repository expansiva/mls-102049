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
      "Product",
      "Payment"
    ],
    "rulesApplied": [
      "storeCanMarkReservationReady",
      "reservationStatusReflectsStage",
      "onlyActiveReservationsCanBeCancelled",
      "pickupRequiresValidReservation",
      "cancellationRestoresAvailability"
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
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "Reservation",
            "fieldRef": "Reservation.status"
          },
          {
            "name": "cancelReason",
            "type": "string",
            "required": false,
            "ofEntity": "Reservation",
            "fieldRef": "Reservation.cancelReason"
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
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "Reservation"
          },
          {
            "name": "readyAt",
            "type": "string",
            "required": false,
            "ofEntity": "Reservation"
          },
          {
            "name": "deliveredAt",
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
            "name": "cancelReason",
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
          "Product"
        ],
        "rulesApplied": [
          "storeCanMarkReservationReady",
          "reservationStatusReflectsStage",
          "onlyActiveReservationsCanBeCancelled",
          "pickupRequiresValidReservation",
          "cancellationRestoresAvailability"
        ],
        "transactional": true,
        "steps": [
          "Load Reservation by reservationId via Reservation port.",
          "Validate status is one of ready/delivered/cancelled (rule reservationStatusReflectsStage).",
          "If status=ready: ensure store can mark reservation ready (rule storeCanMarkReservationReady) and current reservation.status is active; set readyAt=ctx.clock.now().",
          "If status=delivered: ensure reservation.status is ready and ctx.clock.now() <= reservation.expiresAt (rule pickupRequiresValidReservation); require paymentId input; set deliveredAt=ctx.clock.now() and paymentId.",
          "If status=cancelled: ensure reservation.status is active (rule onlyActiveReservationsCanBeCancelled); require cancelReason input; set cancelledAt=ctx.clock.now() and cancelReason.",
          "Always set updatedAt=ctx.clock.now().",
          "If status=cancelled: collect productIds from reservation items (embedded on Reservation); load Products via Product port; set each Product.status to available (rule cancellationRestoresAvailability); persist Product updates.",
          "Persist Reservation changes via Reservation port inside a single transaction with Product updates.",
          "Return fields per outputShape from the updated Reservation."
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
        }
      }
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
      "_102049_/l1/petShop/layer_2_application/ports/productRepository.d.ts",
      "_102049_/l1/petShop/layer_2_application/ports/paymentRepository.d.ts",
      "_102049_/l1/petShop/layer_3_domain/entities/reservation.d.ts",
      "_102049_/l1/petShop/layer_3_domain/entities/product.d.ts",
      "_102049_/l1/petShop/layer_3_domain/entities/payment.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/applicationUsecase.md",
      "_102034_.d.ts"
    ],
    "rulesApplied": [
      "storeCanMarkReservationReady",
      "reservationStatusReflectsStage",
      "onlyActiveReservationsCanBeCancelled",
      "pickupRequiresValidReservation",
      "cancellationRestoresAvailability"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
