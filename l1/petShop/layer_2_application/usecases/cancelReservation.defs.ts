/// <mls fileReference="_102049_/l1/petShop/layer_2_application/usecases/cancelReservation.defs.ts" enhancement="_blank"/>

export const cancelReservationUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "cancelReservation",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "cancelReservation",
    "ports": [
      "Reservation",
      "Product",
      "Payment"
    ],
    "rulesApplied": [
      "reservationRequiresAuthentication",
      "onlyActiveReservationsCanBeCancelled",
      "cancellationRestoresAvailability",
      "reservationStatusReflectsStage"
    ],
    "functions": [
      {
        "functionName": "cancelReservation",
        "inputTypeName": "CancelReservationInput",
        "outputTypeName": "CancelReservationOutput",
        "input": [
          {
            "name": "reservationId",
            "type": "string",
            "required": true,
            "ofEntity": "Reservation",
            "fieldRef": "Reservation.reservationId"
          },
          {
            "name": "cancelReason",
            "type": "string",
            "required": false,
            "ofEntity": "Reservation",
            "fieldRef": "Reservation.cancelReason"
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
            "name": "cancelledAt",
            "type": "string",
            "required": true,
            "ofEntity": "Reservation"
          },
          {
            "name": "cancelReason",
            "type": "string",
            "required": false,
            "ofEntity": "Reservation"
          },
          {
            "name": "updatedAt",
            "type": "string",
            "required": true,
            "ofEntity": "Reservation"
          },
          {
            "name": "restoredProducts",
            "type": "array",
            "required": true
          }
        ],
        "ports": [
          "Reservation",
          "Product"
        ],
        "rulesApplied": [
          "reservationRequiresAuthentication",
          "onlyActiveReservationsCanBeCancelled",
          "cancellationRestoresAvailability",
          "reservationStatusReflectsStage"
        ],
        "transactional": true,
        "steps": [
          "Load Reservation by reservationId via Reservation port.",
          "Validate reservationRequiresAuthentication: ctx.sessionContext.actorId must equal Reservation.customerId; on failure return validation error with rule id.",
          "Validate onlyActiveReservationsCanBeCancelled: Reservation.status must be 'active' or 'ready'; otherwise reject with rule id.",
          "Set Reservation.status='cancelled', Reservation.cancelledAt=ctx.clock.now(), Reservation.cancelReason=input.cancelReason (if provided), Reservation.updatedAt=ctx.clock.now().",
          "Determine reserved productIds to restore availability (modeling gap if Reservation does not embed ReservationItems).",
          "Load Products by productIds via Product port; set Product.status='available' (or mapped availability) and updatedAt=ctx.clock.now().",
          "Persist Reservation and Products in a single transaction wrapper (ctx.data).",
          "Build restoredProducts array from updated Products (productId + availability flag).",
          "Return outputShape fields."
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
              "name": "cancelledAt",
              "type": "string",
              "required": true,
              "fieldRef": "Reservation.cancelledAt"
            },
            {
              "name": "cancelReason",
              "type": "string",
              "required": false,
              "fieldRef": "Reservation.cancelReason"
            },
            {
              "name": "updatedAt",
              "type": "string",
              "required": true,
              "fieldRef": "Reservation.updatedAt"
            },
            {
              "name": "restoredProducts",
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
                    "name": "available",
                    "type": "boolean",
                    "required": true,
                    "fieldRef": "Product.available"
                  }
                ]
              }
            }
          ]
        }
      }
    ],
    "mdmRefs": []
  }
} as const;

export default cancelReservationUsecase;

export const pipeline = [
  {
    "id": "cancelReservation__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102049_/l1/petShop/layer_2_application/usecases/cancelReservation.ts",
    "defPath": "_102049_/l1/petShop/layer_2_application/usecases/cancelReservation.defs.ts",
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
      "reservationRequiresAuthentication",
      "onlyActiveReservationsCanBeCancelled",
      "cancellationRestoresAvailability",
      "reservationStatusReflectsStage"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
