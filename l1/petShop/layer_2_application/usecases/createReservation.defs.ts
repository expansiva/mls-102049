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
      "Product",
      "Payment"
    ],
    "rulesApplied": [
      "reservationRequiresAuthentication",
      "reservationExpiresIn24Hours",
      "reservationStatusReflectsStage"
    ],
    "functions": [
      {
        "functionName": "createReservation",
        "inputTypeName": "CreateReservationInput",
        "outputTypeName": "CreateReservationOutput",
        "input": [
          {
            "name": "items",
            "type": "array",
            "required": true,
            "description": "Lista de produtos e quantidades que o cliente deseja reservar para retirada na loja",
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
          "Reservation",
          "Product"
        ],
        "rulesApplied": [
          "reservationRequiresAuthentication",
          "reservationExpiresIn24Hours",
          "reservationStatusReflectsStage"
        ],
        "transactional": true,
        "steps": [
          "Validate rule reservationRequiresAuthentication: require ctx.sessionContext.actorId; if missing, throw validation error with rule id.",
          "Collect unique productIds from items; load products via Product port bulk-get; if any missing or status != 'available', throw validation error.",
          "Generate reservationId and reservationItemId values with ctx.idGenerator.",
          "Set now = ctx.clock.now(); set status='active' and confirmedAt=now per reservationStatusReflectsStage.",
          "Set expiresAt = now + 24h per reservationExpiresIn24Hours.",
          "Assemble Reservation aggregate with customerId from ctx.sessionContext.actorId, timestamps createdAt/updatedAt=now, items with createdAt/updatedAt=now.",
          "Within a transaction via ctx.data, save Reservation aggregate via Reservation port.",
          "Append Payment audit event within same transaction via Payment port (modeling gap: port not provided in ports list).",
          "Return output shape from saved aggregate."
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
              "required": true,
              "fieldRef": "Reservation.confirmedAt"
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

export default createReservationUsecase;

export const pipeline = [
  {
    "id": "createReservation__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102049_/l1/petShop/layer_2_application/usecases/createReservation.ts",
    "defPath": "_102049_/l1/petShop/layer_2_application/usecases/createReservation.defs.ts",
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
      "reservationExpiresIn24Hours",
      "reservationStatusReflectsStage"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
