/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/http/controllers/expireReservations.defs.ts" enhancement="_blank"/>

export const expireReservationsController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "expireReservations",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "reservationLifecycle",
    "controllerName": "ExpireReservationsController",
    "ownerKind": "operation",
    "outputSource": "dto",
    "dtoTypeName": "ExpireReservationsResponseDto",
    "dtoModulePath": "_102049_/l1/petShop/layer_1_external/adapters/http/dto/expireReservations.js",
    "usecaseOutputTypeName": "ExpireReservationsOutput",
    "responseShape": {
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
          "required": true
        },
        {
          "name": "productsReleased",
          "type": "number",
          "required": true
        }
      ]
    },
    "handlers": [
      {
        "handlerName": "petShopExpireReservationsHandler",
        "command": "expireReservations",
        "usecaseRef": "expireReservations",
        "inputTypeName": "ExpireReservationsInput",
        "kind": "update",
        "inputContract": [
          {
            "inputId": "currentTimestamp",
            "fieldRef": "Reservation.expiresAt",
            "required": true,
            "source": "systemDefault",
            "description": "Data e hora atual do sistema usada para comparar com expiresAt e identificar reservas vencidas"
          },
          {
            "inputId": "actorId",
            "fieldRef": "Reservation.reservationId",
            "required": true,
            "source": "actorSession",
            "description": "Identidade da loja autenticada que dispara a expiração em lote das reservas vencidas"
          }
        ],
        "contextResolution": [
          {
            "targetRef": "Reservation.expiresAt",
            "source": "systemDefault",
            "originRef": "systemDefault.now",
            "description": "Obtém o timestamp atual do sistema para comparar com o campo expiresAt de cada reserva ativa ou pronta e determinar quais estão vencidas"
          },
          {
            "targetRef": "Reservation.reservationId",
            "source": "actorSession",
            "originRef": "actorSession.actorId",
            "description": "Identifica a loja autenticada na sessão para autorizar a operação de expiração em lote sobre as reservas"
          }
        ],
        "accessPattern": {
          "kind": "commandInput",
          "description": "",
          "entity": "Reservation",
          "keyField": "Reservation.reservationId",
          "pagination": "none",
          "selection": "multiple",
          "output": [
            "Reservation.reservationId",
            "Reservation.status",
            "Reservation.expiredAt"
          ]
        }
      }
    ],
    "routes": [
      {
        "key": "petShop.reservationLifecycle.expireReservations",
        "handlerName": "petShopExpireReservationsHandler"
      }
    ]
  }
} as const;

export default expireReservationsController;

export const pipeline = [
  {
    "id": "expireReservations__httpController",
    "type": "httpController",
    "outputPath": "_102049_/l1/petShop/layer_1_external/adapters/http/controllers/expireReservations.ts",
    "defPath": "_102049_/l1/petShop/layer_1_external/adapters/http/controllers/expireReservations.defs.ts",
    "dependsFiles": [
      "_102049_/l1/petShop/layer_2_application/usecases/expireReservations.d.ts",
      "_102049_/l1/petShop/layer_1_external/adapters/http/dto/expireReservations.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/httpController.md",
      "_102034_.d.ts"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
