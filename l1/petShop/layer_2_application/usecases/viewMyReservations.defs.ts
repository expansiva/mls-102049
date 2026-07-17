/// <mls fileReference="_102049_/l1/petShop/layer_2_application/usecases/viewMyReservations.defs.ts" enhancement="_blank"/>

export const viewMyReservationsUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "viewMyReservations",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "viewMyReservations",
    "ports": [
      "Reservation",
      "Payment"
    ],
    "functions": [
      {
        "functionName": "viewMyReservations",
        "inputTypeName": "ViewMyReservationsInput",
        "outputTypeName": "ViewMyReservationsOutput",
        "input": [],
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
            "name": "expiresAt",
            "type": "string",
            "required": true,
            "ofEntity": "Reservation"
          },
          {
            "name": "createdAt",
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
            "name": "readyAt",
            "type": "string",
            "required": false,
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
          "reservationRequiresAuthentication",
          "reservationStatusReflectsStage"
        ],
        "transactional": false,
        "steps": [
          "1. Resolve the authenticated actor id from ctx.sessionContext.actorId — this becomes the customerId filter (rule reservationRequiresAuthentication: if no actorId is present in session context, throw a 401 authentication error with detail 'reservationRequiresAuthentication').",
          "2. Load all Reservation aggregates owned by this customer via the Reservation port: reservationPort.list({ filter: { customerId: actorId }, sort: { createdAt: 'desc' } }). The customerId filter is applied on the Reservation.customerId field which exists in the entity model.",
          "3. For each loaded Reservation, validate that status is one of the allowed enum values [draft, active, ready, delivered, expired, cancelled] (rule reservationStatusReflectsStage: if any reservation has an unknown status, skip it and log a warning — the invariant guarantees only valid stages are persisted).",
          "4. For each Reservation, extract its embedded ReservationItem collection (items are children of the Reservation aggregate root, loaded together via the port). Map each item to { productId, quantity }.",
          "5. Assemble the output list: for each reservation produce { reservationId, status, expiresAt, createdAt, confirmedAt?, readyAt?, items[] } sorted by createdAt descending (already sorted by the port query).",
          "6. Return the assembled list. No mutations occur, so no event writes are emitted."
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
              "name": "confirmedAt",
              "type": "string",
              "required": false,
              "fieldRef": "Reservation.confirmedAt"
            },
            {
              "name": "readyAt",
              "type": "string",
              "required": false,
              "fieldRef": "Reservation.readyAt"
            },
            {
              "name": "items",
              "type": "array",
              "required": true,
              "item": {
                "fields": [
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

export default viewMyReservationsUsecase;

export const pipeline = [
  {
    "id": "viewMyReservations__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102049_/l1/petShop/layer_2_application/usecases/viewMyReservations.ts",
    "defPath": "_102049_/l1/petShop/layer_2_application/usecases/viewMyReservations.defs.ts",
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
