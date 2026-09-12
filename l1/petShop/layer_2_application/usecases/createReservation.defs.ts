/// <mls fileReference="_102049_/l1/petShop/layer_2_application/usecases/createReservation.defs.ts" enhancement="_blank"/>

export const createReservationUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "createReservation",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "createReservation",
    "ports": [
      "Reservation",
      "Payment"
    ],
    "functions": [
      {
        "functionName": "createReservation",
        "inputTypeName": "CreateReservationInput",
        "outputTypeName": "CreateReservationOutput",
        "input": [
          {
            "name": "customerName",
            "type": "string",
            "required": true,
            "ofEntity": "Reservation",
            "fieldRef": "Reservation.customerName"
          },
          {
            "name": "customerPhone",
            "type": "string",
            "required": true,
            "ofEntity": "Reservation",
            "fieldRef": "Reservation.customerPhone"
          },
          {
            "name": "productId",
            "type": "string",
            "required": true,
            "ofEntity": "Product",
            "fieldRef": "Product.productId"
          },
          {
            "name": "quantity",
            "type": "number",
            "required": true
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
            "name": "createdAt",
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
          "Reservation",
          "Payment"
        ],
        "rulesApplied": [
          "reservationRequiresContact",
          "reservationValidity24h",
          "reservationStatuses"
        ],
        "transactional": true,
        "steps": [
          "Validate reservationRequiresContact: customerName and customerPhone are non-empty after trim; reject with rule id if missing",
          "Validate quantity is a positive number; reject if invalid",
          "Load Product by productId via ctx.mdm.entity.get({ mdmId: productId }); reject if not found",
          "Generate reservationId via ctx.idGenerator and now via ctx.clock",
          "Apply reservationValidity24h: set expiresAt = now + 24 hours; set createdAt and updatedAt = now",
          "Apply reservationStatuses: set initial status to 'pending'",
          "Build Reservation aggregate with customerName, customerPhone, status pending, expiresAt, timestamps, and embedded ReservationItem (reservationItemId from ctx.idGenerator, productId, quantity, timestamps)",
          "Inside ctx.data.transaction: save Reservation via Reservation port; build and append audit Payment event record via Payment port (append-only, same tx)",
          "Return reservationId, customerName, customerPhone, status, expiresAt, createdAt, and items [{ productId, productName from MDM Product.name, quantity }]"
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
              "name": "createdAt",
              "type": "string",
              "required": true,
              "fieldRef": "Reservation.createdAt"
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
                    "fieldRef": "Product.productId"
                  },
                  {
                    "name": "productName",
                    "type": "string",
                    "required": true,
                    "fieldRef": "Product.name"
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
    "rulesApplied": [
      "reservationRequiresContact",
      "reservationValidity24h",
      "reservationStatuses"
    ],
    "mdmRefs": [
      "Product"
    ]
  }
} as const;

export default createReservationUsecase;

export const pipeline = [
  {
    "id": "createReservation__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102049_/l1/petShop/layer_2_application/usecases/createReservation.ts",
    "defPath": "_102049_/l1/petShop/layer_2_application/usecases/createReservation.defs.ts",
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
      "reservationRequiresContact",
      "reservationValidity24h",
      "reservationStatuses"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
