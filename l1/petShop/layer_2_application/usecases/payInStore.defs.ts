/// <mls fileReference="_102049_/l1/petShop/layer_2_application/usecases/payInStore.defs.ts" enhancement="_blank"/>

export const payInStoreUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "payInStore",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "payInStore",
    "ports": [
      "Reservation",
      "Payment"
    ],
    "rulesApplied": [
      "pickupRequiresValidReservation",
      "reservationStatusReflectsStage",
      "reservationExpiresIn24Hours"
    ],
    "functions": [
      {
        "functionName": "payInStore",
        "inputTypeName": "PayInStoreInput",
        "outputTypeName": "PayInStoreOutput",
        "input": [
          {
            "name": "reservationId",
            "type": "string",
            "required": true,
            "ofEntity": "Reservation",
            "fieldRef": "Reservation.reservationId"
          },
          {
            "name": "paymentMethod",
            "type": "string",
            "required": true,
            "ofEntity": "Payment",
            "fieldRef": "Payment.paymentMethod"
          },
          {
            "name": "paymentAmount",
            "type": "number",
            "required": true,
            "fieldRef": "Payment.amount"
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
            "name": "deliveredAt",
            "type": "string",
            "required": true,
            "ofEntity": "Reservation"
          },
          {
            "name": "paymentId",
            "type": "string",
            "required": true,
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
          "Reservation"
        ],
        "rulesApplied": [
          "pickupRequiresValidReservation",
          "reservationStatusReflectsStage",
          "reservationExpiresIn24Hours"
        ],
        "transactional": true,
        "steps": [
          "load Reservation by reservationId via Reservation port",
          "validate pickupRequiresValidReservation: reservation exists and status in ['ready'] and not cancelled/expired/delivered; if invalid return error with rule id",
          "validate reservationExpiresIn24Hours: now <= expiresAt and within 24h window; otherwise error with rule id",
          "create Payment record with paymentId from ctx.idGenerator, reservationId, amount, paymentMethod, status 'posted', createdAt now; persist via Payment eventWrites port (audit) in same transaction",
          "set Reservation.paymentId, deliveredAt=now, status='delivered', updatedAt=now",
          "apply reservationStatusReflectsStage invariant and save Reservation via Reservation port",
          "return outputShape fields"
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
              "name": "deliveredAt",
              "type": "string",
              "required": true,
              "fieldRef": "Reservation.deliveredAt"
            },
            {
              "name": "paymentId",
              "type": "string",
              "required": true,
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

export default payInStoreUsecase;

export const pipeline = [
  {
    "id": "payInStore__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102049_/l1/petShop/layer_2_application/usecases/payInStore.ts",
    "defPath": "_102049_/l1/petShop/layer_2_application/usecases/payInStore.defs.ts",
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
      "pickupRequiresValidReservation",
      "reservationStatusReflectsStage",
      "reservationExpiresIn24Hours"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
