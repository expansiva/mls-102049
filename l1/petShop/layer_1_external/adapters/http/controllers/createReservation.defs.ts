/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/http/controllers/createReservation.defs.ts" enhancement="_blank"/>

export const createReservationController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "createReservation",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "reservationLifecycle",
    "controllerName": "CreateReservationController",
    "ownerKind": "operation",
    "outputSource": "dto",
    "dtoTypeName": "CreateReservationResponseDto",
    "dtoModulePath": "_102049_/l1/petShop/layer_1_external/adapters/http/dto/createReservation.js",
    "usecaseOutputTypeName": "CreateReservationOutput",
    "responseShape": {
      "kind": "object",
      "fields": [
        {
          "name": "reservationId",
          "type": "string",
          "required": true
        },
        {
          "name": "customerId",
          "type": "string",
          "required": true
        },
        {
          "name": "status",
          "type": "string",
          "required": true
        },
        {
          "name": "confirmedAt",
          "type": "string",
          "required": true
        },
        {
          "name": "expiresAt",
          "type": "string",
          "required": true
        },
        {
          "name": "createdAt",
          "type": "string",
          "required": true
        },
        {
          "name": "updatedAt",
          "type": "string",
          "required": true
        },
        {
          "name": "items",
          "type": "array",
          "required": true
        }
      ]
    },
    "handlers": [
      {
        "handlerName": "petShopCreateReservationHandler",
        "command": "createReservation",
        "usecaseRef": "createReservation",
        "inputTypeName": "CreateReservationInput",
        "kind": "create",
        "inputContract": [
          {
            "inputId": "items",
            "fieldRef": "ReservationItem.productId",
            "required": true,
            "source": "userInput",
            "description": "Lista de produtos e quantidades que o cliente deseja reservar para retirada na loja"
          }
        ],
        "contextResolution": [
          {
            "targetRef": "Reservation.customerId",
            "source": "actorSession",
            "originRef": "actorSession.actorId",
            "description": "O identificador do cliente autenticado é obtido da sessão ativa do actor"
          },
          {
            "targetRef": "Reservation.reservationId",
            "source": "systemDefault",
            "originRef": "systemDefault.uuid",
            "description": "Um novo UUID é gerado pelo sistema para o identificador da reserva"
          },
          {
            "targetRef": "Reservation.status",
            "source": "systemDefault",
            "originRef": "systemDefault.now",
            "description": "O status é definido como 'active' pois a reserva é confirmada no momento da criação"
          },
          {
            "targetRef": "Reservation.confirmedAt",
            "source": "systemDefault",
            "originRef": "systemDefault.now",
            "description": "O momento de confirmação é definido como o timestamp atual do sistema"
          },
          {
            "targetRef": "Reservation.expiresAt",
            "source": "systemDefault",
            "originRef": "systemDefault.now",
            "description": "O prazo de expiração é calculado como o timestamp atual mais 24 horas, conforme a regra de expiração"
          },
          {
            "targetRef": "Reservation.createdAt",
            "source": "systemDefault",
            "originRef": "systemDefault.now",
            "description": "O momento de criação é definido como o timestamp atual do sistema"
          },
          {
            "targetRef": "Reservation.updatedAt",
            "source": "systemDefault",
            "originRef": "systemDefault.now",
            "description": "O momento da última atualização é definido como o timestamp atual do sistema"
          }
        ],
        "accessPattern": {
          "kind": "commandInput",
          "description": "",
          "entity": "Reservation",
          "keyField": "Reservation.reservationId",
          "pagination": "none",
          "selection": "none",
          "output": [
            "Reservation.reservationId",
            "Reservation.customerId",
            "Reservation.status",
            "Reservation.expiresAt",
            "Reservation.createdAt",
            "Reservation.updatedAt",
            "ReservationItem.productId",
            "ReservationItem.quantity"
          ]
        }
      }
    ],
    "routes": [
      {
        "key": "petShop.reservationLifecycle.createReservation",
        "handlerName": "petShopCreateReservationHandler"
      }
    ]
  }
} as const;

export default createReservationController;

export const pipeline = [
  {
    "id": "createReservation__httpController",
    "type": "httpController",
    "outputPath": "_102049_/l1/petShop/layer_1_external/adapters/http/controllers/createReservation.ts",
    "defPath": "_102049_/l1/petShop/layer_1_external/adapters/http/controllers/createReservation.defs.ts",
    "dependsFiles": [
      "_102049_/l1/petShop/layer_2_application/usecases/createReservation.d.ts",
      "_102049_/l1/petShop/layer_1_external/adapters/http/dto/createReservation.d.ts"
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
