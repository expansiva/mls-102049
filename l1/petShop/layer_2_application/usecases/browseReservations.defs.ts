/// <mls fileReference="_102049_/l1/petShop/layer_2_application/usecases/browseReservations.defs.ts" enhancement="_blank"/>

export const browseReservationsUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "browseReservations",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "browseReservations",
    "ports": [
      "Reservation",
      "Payment"
    ],
    "functions": [
      {
        "functionName": "browseReservations",
        "inputTypeName": "BrowseReservationsInput",
        "outputTypeName": "BrowseReservationsOutput",
        "input": [
          {
            "name": "searchTerm",
            "type": "string",
            "required": false
          },
          {
            "name": "statusFilter",
            "type": "string",
            "required": false,
            "fieldRef": "Reservation.status"
          },
          {
            "name": "page",
            "type": "number",
            "required": false
          },
          {
            "name": "pageSize",
            "type": "number",
            "required": false
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
          "reservationStatuses",
          "reservationValidity24h"
        ],
        "transactional": false,
        "steps": [
          "Resolve actorId from ctx.sessionContext (actorSession) for audit context only; do not require it as input",
          "Load reservations via Reservation port (resolveRepository)",
          "Inline reservationStatuses: keep only items whose status is one of pending|confirmed|fulfilled|cancelled; if statusFilter is provided, validate it is one of those values (else validation error with rule id reservationStatuses) and retain only matching status",
          "When searchTerm is provided, filter where customerName, customerPhone or reservationId contains the term (case-insensitive)",
          "Inline reservationValidity24h: for each pending reservation, ensure expiresAt reflects createdAt + 24h (surface the stored expiresAt; do not invent a different validity window)",
          "Sort by createdAt descending",
          "Apply optional page/pageSize pagination",
          "Project each item to reservationId, customerName, customerPhone, status, expiresAt, createdAt, updatedAt and return the list"
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

export default browseReservationsUsecase;

export const pipeline = [
  {
    "id": "browseReservations__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102049_/l1/petShop/layer_2_application/usecases/browseReservations.ts",
    "defPath": "_102049_/l1/petShop/layer_2_application/usecases/browseReservations.defs.ts",
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
