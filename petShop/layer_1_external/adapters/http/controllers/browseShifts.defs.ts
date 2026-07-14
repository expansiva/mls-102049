/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/http/controllers/browseShifts.defs.ts" enhancement="_blank"/>

export const browseShiftsController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "browseShifts",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "browseShifts",
    "controllerName": "BrowseShiftsController",
    "ownerKind": "operation",
    "outputSource": "usecase",
    "handlers": [
      {
        "handlerName": "petShopBrowseShiftsHandler",
        "command": "browseShifts",
        "usecaseRef": "browseShifts",
        "inputTypeName": "BrowseShiftsInput",
        "kind": "query",
        "inputContract": [
          {
            "inputId": "activeFilter",
            "fieldRef": "Shift.active",
            "required": false,
            "source": "userInput",
            "description": "Filtro opcional para exibir apenas turnos ativos ou inativos."
          },
          {
            "inputId": "actorId",
            "fieldRef": "Shift.shiftId",
            "required": true,
            "source": "actorSession",
            "description": "Identificador do administrador autenticado que solicita a lista de turnos."
          }
        ],
        "contextResolution": [
          {
            "targetRef": "actorId",
            "source": "actorSession",
            "originRef": "actorSession.actorId",
            "description": "O backend resolve o identificador do administrador a partir da sessão ativa do ator autenticado."
          }
        ],
        "accessPattern": {
          "kind": "list",
          "description": "",
          "entity": "Shift",
          "keyField": "Shift.shiftId",
          "pagination": "optional",
          "selection": "none",
          "output": [
            "Shift.shiftId",
            "Shift.name",
            "Shift.startTime",
            "Shift.endTime",
            "Shift.monday",
            "Shift.tuesday",
            "Shift.wednesday",
            "Shift.thursday",
            "Shift.friday",
            "Shift.saturday",
            "Shift.sunday",
            "Shift.active",
            "Shift.createdAt",
            "Shift.updatedAt"
          ]
        }
      }
    ],
    "routes": [
      {
        "key": "petShop.browseShifts.browseShifts",
        "handlerName": "petShopBrowseShiftsHandler"
      }
    ]
  }
} as const;

export default browseShiftsController;

export const pipeline = [
  {
    "id": "browseShifts__httpController",
    "type": "httpController",
    "outputPath": "_102049_/l1/petShop/layer_1_external/adapters/http/controllers/browseShifts.ts",
    "defPath": "_102049_/l1/petShop/layer_1_external/adapters/http/controllers/browseShifts.defs.ts",
    "dependsFiles": [
      "_102049_/l1/petShop/layer_2_application/usecases/browseShifts.d.ts"
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
