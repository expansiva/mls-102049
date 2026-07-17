/// <mls fileReference="_102049_/l1/petShop/layer_2_application/usecases/listReservations.defs.ts" enhancement="_blank"/>

export const listReservationsUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "listReservations",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "listReservations",
    "ports": [
      "Reservation",
      "Payment"
    ],
    "functions": [
      {
        "functionName": "listReservations",
        "inputTypeName": "ListReservationsInput",
        "outputTypeName": "ListReservationsOutput",
        "input": [
          {
            "name": "status",
            "type": "string",
            "required": false,
            "description": "Filtro opcional por status da reserva (draft, active, ready, delivered, expired, cancelled)"
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
            "name": "customerId",
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
            "name": "confirmedAt",
            "type": "string",
            "required": false,
            "ofEntity": "Reservation"
          },
          {
            "name": "expiresAt",
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
            "name": "createdAt",
            "type": "string",
            "required": true,
            "ofEntity": "Reservation"
          },
          {
            "name": "updatedAt",
            "type": "string",
            "required": true,
            "ofEntity": "Reservation"
          },
          {
            "name": "items",
            "type": "array",
            "required": true
          }
        ],
        "ports": [
          "Reservation"
        ],
        "rulesApplied": [
          "reservationStatusReflectsStage"
        ],
        "transactional": false,
        "steps": [
          "1. Resolve actorSession.actorId from ctx.sessionContext for authorization of the store viewing received reservations.",
          "2. Query all reservations via the Reservation port (reservationPort.list). If the optional `status` input is provided, pass it as a filter criterion; otherwise return all statuses including draft.",
          "3. For each loaded Reservation aggregate, extract its embedded ReservationItem collection (items are children of the Reservation aggregate root).",
          "4. Apply rule reservationStatusReflectsStage inline: for each reservation, evaluate whether the persisted status still matches the lifecycle stage implied by its timestamps — if status is 'active' but expiresAt < ctx.clock.now() and readyAt is null, the effective status is 'expired'; if deliveredAt is set, the effective status is 'delivered'; if readyAt is set and deliveredAt is null, the effective status is 'ready'. Use the corrected effective status in the output so the store sees the true current stage.",
          "5. Sort the resulting list by createdAt descending (most recent first).",
          "6. Map each reservation to the output projection: reservationId, customerId, effectiveStatus, confirmedAt, expiresAt, readyAt, deliveredAt, createdAt, updatedAt, and the embedded items array (reservationItemId, productId, quantity).",
          "7. Return the assembled list. No events are emitted — this is a read-only query with no aggregate mutations."
        ],
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
        }
      }
    ],
    "mdmRefs": []
  }
} as const;

export default listReservationsUsecase;

export const pipeline = [
  {
    "id": "listReservations__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102049_/l1/petShop/layer_2_application/usecases/listReservations.ts",
    "defPath": "_102049_/l1/petShop/layer_2_application/usecases/listReservations.defs.ts",
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
    "agent": "agentCbMaterialize"
  }
] as const;
