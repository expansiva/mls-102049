/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/http/controllers/updateReservationStatus.defs.ts" enhancement="_blank"/>

export const updateReservationStatusController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "updateReservationStatus",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "reservationLifecycle",
    "controllerName": "UpdateReservationStatusController",
    "ownerKind": "operation",
    "outputSource": "dto",
    "dtoTypeName": "UpdateReservationStatusResponseDto",
    "dtoModulePath": "_102049_/l1/petShop/layer_1_external/adapters/http/dto/updateReservationStatus.js",
    "usecaseOutputTypeName": "UpdateReservationStatusOutput",
    "responseShape": {
      "kind": "object",
      "fields": [
        {
          "name": "reservationId",
          "type": "string",
          "required": true
        },
        {
          "name": "status",
          "type": "string",
          "required": true
        },
        {
          "name": "readyAt",
          "type": "string",
          "required": false
        },
        {
          "name": "deliveredAt",
          "type": "string",
          "required": false
        },
        {
          "name": "cancelledAt",
          "type": "string",
          "required": false
        },
        {
          "name": "cancelReason",
          "type": "string",
          "required": false
        },
        {
          "name": "paymentId",
          "type": "string",
          "required": false
        },
        {
          "name": "updatedAt",
          "type": "string",
          "required": true
        }
      ]
    },
    "handlers": [
      {
        "handlerName": "petShopUpdateReservationStatusHandler",
        "command": "updateReservationStatus",
        "usecaseRef": "updateReservationStatus",
        "inputTypeName": "UpdateReservationStatusInput",
        "kind": "update",
        "inputContract": [
          {
            "inputId": "reservationId",
            "fieldRef": "Reservation.reservationId",
            "required": true,
            "source": "selectedEntity",
            "description": "Identificador da reserva cujo status será atualizado"
          },
          {
            "inputId": "status",
            "fieldRef": "Reservation.status",
            "required": true,
            "source": "userInput",
            "description": "Novo status da reserva: ready, delivered ou cancelled"
          },
          {
            "inputId": "cancelReason",
            "fieldRef": "Reservation.cancelReason",
            "required": false,
            "source": "userInput",
            "description": "Motivo do cancelamento, obrigatório apenas quando o status for cancelled"
          },
          {
            "inputId": "paymentId",
            "fieldRef": "Reservation.paymentId",
            "required": false,
            "source": "userInput",
            "description": "Referência ao pagamento presencial, informado apenas quando o status for delivered"
          }
        ],
        "contextResolution": [
          {
            "targetRef": "Reservation.reservationId",
            "source": "selectedEntity",
            "originRef": "Reservation.reservationId",
            "description": "A reserva atualmente selecionada pela loja na tela de gestão de reservas"
          },
          {
            "targetRef": "Reservation.updatedAt",
            "source": "systemDefault",
            "originRef": "systemDefault.now",
            "description": "O timestamp atual do sistema é gravado no campo updatedAt ao persistir a alteração de status"
          },
          {
            "targetRef": "Reservation.readyAt",
            "source": "systemDefault",
            "originRef": "systemDefault.now",
            "description": "Quando o status muda para ready, o sistema registra o timestamp atual no campo readyAt"
          },
          {
            "targetRef": "Reservation.deliveredAt",
            "source": "systemDefault",
            "originRef": "systemDefault.now",
            "description": "Quando o status muda para delivered, o sistema registra o timestamp atual no campo deliveredAt"
          },
          {
            "targetRef": "Reservation.cancelledAt",
            "source": "systemDefault",
            "originRef": "systemDefault.now",
            "description": "Quando o status muda para cancelled, o sistema registra o timestamp atual no campo cancelledAt"
          }
        ],
        "accessPattern": {
          "kind": "commandInput",
          "description": "",
          "entity": "Reservation",
          "keyField": "Reservation.reservationId",
          "pagination": "none",
          "selection": "single",
          "output": [
            "Reservation.reservationId",
            "Reservation.status",
            "Reservation.readyAt",
            "Reservation.deliveredAt",
            "Reservation.cancelledAt",
            "Reservation.cancelReason",
            "Reservation.paymentId",
            "Reservation.updatedAt"
          ]
        }
      }
    ],
    "routes": [
      {
        "key": "petShop.reservationLifecycle.updateReservationStatus",
        "handlerName": "petShopUpdateReservationStatusHandler"
      }
    ]
  }
} as const;

export default updateReservationStatusController;

export const pipeline = [
  {
    "id": "updateReservationStatus__httpController",
    "type": "httpController",
    "outputPath": "_102049_/l1/petShop/layer_1_external/adapters/http/controllers/updateReservationStatus.ts",
    "defPath": "_102049_/l1/petShop/layer_1_external/adapters/http/controllers/updateReservationStatus.defs.ts",
    "dependsFiles": [
      "_102049_/l1/petShop/layer_2_application/usecases/updateReservationStatus.d.ts",
      "_102049_/l1/petShop/layer_1_external/adapters/http/dto/updateReservationStatus.d.ts"
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
