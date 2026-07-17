/// <mls fileReference="_102049_/l1/petShop/layer_2_application/usecases/expireReservations.defs.ts" enhancement="_blank"/>

export const expireReservationsUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "expireReservations",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "expireReservations",
    "ports": [
      "Reservation",
      "Product",
      "Payment"
    ],
    "functions": [
      {
        "functionName": "expireReservations",
        "inputTypeName": "ExpireReservationsInput",
        "outputTypeName": "ExpireReservationsOutput",
        "input": [],
        "output": [
          {
            "name": "expiredCount",
            "type": "number",
            "required": true
          },
          {
            "name": "expiredReservations",
            "type": "array",
            "required": true
          },
          {
            "name": "productsReleased",
            "type": "number",
            "required": true
          }
        ],
        "ports": [
          "Reservation",
          "Product",
          "Payment"
        ],
        "rulesApplied": [
          "reservationExpiresIn24Hours",
          "expiredReservationRestoresAvailability",
          "reservationStatusReflectsStage"
        ],
        "transactional": true,
        "steps": [
          "1. Resolve currentTimestamp from ctx.clock.now() and actorId from ctx.sessionContext.actorId — neither is public input (systemDefault / actorSession sources)",
          "2. Load all reservations with status 'active' or 'ready' via Reservation port (listByStatus or equivalent query); reservations with status draft, delivered, expired or cancelled are excluded",
          "3. Filter the loaded reservations where expiresAt < currentTimestamp — this applies rule reservationExpiresIn24Hours: any active/ready reservation whose expiresAt is in the past is eligible for expiration",
          "4. If no reservations match, return { expiredCount: 0, expiredReservations: [], productsReleased: 0 }",
          "5. For each eligible reservation: set status to 'expired', set expiredAt to currentTimestamp, set updatedAt to currentTimestamp — this applies rule reservationStatusReflectsStage: the status must directly reflect the expired stage with no intermediate states",
          "6. Collect all reservationIds of the expired reservations",
          "7. Load ReservationItems for all expired reservations via the Reservation port (ReservationItem is a child collection embedded in the Reservation aggregate); collect productId and quantity from each item",
          "8. Deduplicate productIds across all expired reservation items; load affected Products via Product port (getMany by productIds)",
          "9. For each affected product: check whether any OTHER reservation with status 'active' or 'ready' (not among the ones being expired) still references that product via its ReservationItems; if no other active/ready reservation holds it, set product status to 'available' and update updatedAt to currentTimestamp — this applies rule expiredReservationRestoresAvailability",
          "10. Count products whose status was actually changed to 'available' as productsReleased",
          "11. Save all updated reservations (with their embedded ReservationItems unchanged) via Reservation port inside a single transaction (ctx.data transaction wrapper)",
          "12. Save all updated products via Product port inside the same transaction",
          "13. For each expired reservation that has a paymentId, build a Payment audit event record capturing { reservationId, paymentId, previousStatus, newStatus: 'expired', expiredAt, actorId, timestamp } and append it via the Payment port inside the same transaction — event is append-only, never updated or deleted",
          "14. Assemble the result: expiredCount = count of expired reservations, expiredReservations = array of { reservationId, status: 'expired', expiredAt } for each, productsReleased = count of products restored to available",
          "15. Return the assembled result object"
        ],
        "outputShape": {
          "kind": "object",
          "fields": [
            {
              "name": "expiredCount",
              "type": "number",
              "required": true
            },
            {
              "name": "expiredReservations",
              "type": "array",
              "required": true,
              "item": {
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
                    "name": "expiredAt",
                    "type": "string",
                    "required": true,
                    "fieldRef": "Reservation.expiredAt"
                  }
                ]
              }
            },
            {
              "name": "productsReleased",
              "type": "number",
              "required": true
            }
          ]
        }
      }
    ],
    "mdmRefs": []
  }
} as const;

export default expireReservationsUsecase;

export const pipeline = [
  {
    "id": "expireReservations__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102049_/l1/petShop/layer_2_application/usecases/expireReservations.ts",
    "defPath": "_102049_/l1/petShop/layer_2_application/usecases/expireReservations.defs.ts",
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
    "agent": "agentCbMaterialize"
  }
] as const;
