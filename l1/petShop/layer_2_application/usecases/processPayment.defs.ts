/// <mls fileReference="_102049_/l1/petShop/layer_2_application/usecases/processPayment.defs.ts" enhancement="_blank"/>

export const processPaymentUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "processPayment",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "processPayment",
    "ports": [
      "Reservation",
      "Payment"
    ],
    "functions": [
      {
        "functionName": "processPayment",
        "inputTypeName": "ProcessPaymentInput",
        "outputTypeName": "ProcessPaymentOutput",
        "input": [
          {
            "name": "reservationId",
            "type": "string",
            "required": true,
            "ofEntity": "Payment",
            "fieldRef": "Payment.reservationId"
          },
          {
            "name": "method",
            "type": "string",
            "required": true,
            "ofEntity": "Payment",
            "fieldRef": "Payment.method"
          }
        ],
        "output": [
          {
            "name": "paymentId",
            "type": "string",
            "required": true,
            "ofEntity": "Payment"
          },
          {
            "name": "reservationId",
            "type": "string",
            "required": true,
            "ofEntity": "Payment"
          },
          {
            "name": "amount",
            "type": "number",
            "required": true,
            "ofEntity": "Payment"
          },
          {
            "name": "method",
            "type": "string",
            "required": true,
            "ofEntity": "Payment"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "Payment"
          },
          {
            "name": "receivedBy",
            "type": "string",
            "required": true,
            "ofEntity": "Payment"
          },
          {
            "name": "createdAt",
            "type": "string",
            "required": true,
            "ofEntity": "Payment"
          },
          {
            "name": "reservationStatus",
            "type": "string",
            "required": true
          }
        ],
        "ports": [
          "Reservation",
          "Payment"
        ],
        "rulesApplied": [
          "inStorePaymentOnly",
          "totalFromPricesAndQuantities",
          "paymentRequiresReceipt"
        ],
        "transactional": true,
        "steps": [
          "Validate method is one of cash|creditCard|debitCard|pix (inStorePaymentOnly); reject otherwise with rule id in error details",
          "Resolve receivedBy from ctx.sessionContext.actorId (actorSession); reject if missing (paymentRequiresReceipt — presencial confirmation by logged attendant)",
          "Load Reservation by input.reservationId via Reservation port; reject if not found",
          "Validate reservation.status is confirmed (eligible for in-store payment/fulfillment); reject if already fulfilled/cancelled/pending",
          "Read embedded ReservationItem collection from the loaded reservation (parent aggregate); collect productIds",
          "Bulk-load Product MDM records via ctx.mdm.collection.getMany({ mdmIds: productIds })",
          "Compute amount = sum(item.quantity * product.price) for all items (totalFromPricesAndQuantities); reject if no items or any product missing price",
          "Generate paymentId via ctx.idGenerator and createdAt via ctx.clock; set status to posted",
          "Inside ctx.data transaction: append Payment audit event { paymentId, reservationId, amount, method, status: posted, receivedBy, createdAt } via Payment port; mutate reservation status to fulfilled, set paymentId, fulfilledAt=now, updatedAt=now; save Reservation via Reservation port",
          "Return paymentId, reservationId, amount, method, status, receivedBy, createdAt, reservationStatus (fulfilled)"
        ],
        "outputShape": {
          "kind": "object",
          "fields": [
            {
              "name": "paymentId",
              "type": "string",
              "required": true,
              "fieldRef": "Payment.paymentId"
            },
            {
              "name": "reservationId",
              "type": "string",
              "required": true,
              "fieldRef": "Payment.reservationId"
            },
            {
              "name": "amount",
              "type": "number",
              "required": true,
              "fieldRef": "Payment.amount"
            },
            {
              "name": "method",
              "type": "string",
              "required": true,
              "fieldRef": "Payment.method"
            },
            {
              "name": "status",
              "type": "string",
              "required": true,
              "fieldRef": "Payment.status"
            },
            {
              "name": "receivedBy",
              "type": "string",
              "required": true,
              "fieldRef": "Payment.receivedBy"
            },
            {
              "name": "createdAt",
              "type": "string",
              "required": true,
              "fieldRef": "Payment.createdAt"
            },
            {
              "name": "reservationStatus",
              "type": "string",
              "required": true
            }
          ]
        }
      }
    ],
    "rulesApplied": [
      "inStorePaymentOnly",
      "totalFromPricesAndQuantities",
      "paymentRequiresReceipt"
    ],
    "mdmRefs": [
      "Product"
    ]
  }
} as const;

export default processPaymentUsecase;

export const pipeline = [
  {
    "id": "processPayment__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102049_/l1/petShop/layer_2_application/usecases/processPayment.ts",
    "defPath": "_102049_/l1/petShop/layer_2_application/usecases/processPayment.defs.ts",
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
      "inStorePaymentOnly",
      "totalFromPricesAndQuantities",
      "paymentRequiresReceipt"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
