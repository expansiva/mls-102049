/// <mls fileReference="_102049_/l1/petShop/layer_2_application/usecases/updateShift.defs.ts" enhancement="_blank"/>

export const updateShiftUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "updateShift",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "updateShift",
    "ports": [],
    "functions": [
      {
        "functionName": "updateShift",
        "inputTypeName": "UpdateShiftInput",
        "outputTypeName": "UpdateShiftOutput",
        "input": [
          {
            "name": "shiftId",
            "type": "string",
            "required": true,
            "ofEntity": "Shift",
            "description": "Identificador do turno selecionado para edição."
          },
          {
            "name": "name",
            "type": "string",
            "required": true,
            "ofEntity": "Shift",
            "description": "Nome do turno informado pelo administrador (ex.: Manhã, Tarde, Dia Inteiro)."
          },
          {
            "name": "startTime",
            "type": "string",
            "required": true,
            "ofEntity": "Shift",
            "description": "Horário de início do turno no formato HH:mm."
          },
          {
            "name": "endTime",
            "type": "string",
            "required": true,
            "ofEntity": "Shift",
            "description": "Horário de fim do turno no formato HH:mm."
          },
          {
            "name": "monday",
            "type": "boolean",
            "required": true,
            "ofEntity": "Shift",
            "description": "Indica se o turno ocorre às segundas-feiras."
          },
          {
            "name": "tuesday",
            "type": "boolean",
            "required": true,
            "ofEntity": "Shift",
            "description": "Indica se o turno ocorre às terças-feiras."
          },
          {
            "name": "wednesday",
            "type": "boolean",
            "required": true,
            "ofEntity": "Shift",
            "description": "Indica se o turno ocorre às quartas-feiras."
          },
          {
            "name": "thursday",
            "type": "boolean",
            "required": true,
            "ofEntity": "Shift",
            "description": "Indica se o turno ocorre às quintas-feiras."
          },
          {
            "name": "friday",
            "type": "boolean",
            "required": true,
            "ofEntity": "Shift",
            "description": "Indica se o turno ocorre às sextas-feiras."
          },
          {
            "name": "saturday",
            "type": "boolean",
            "required": true,
            "ofEntity": "Shift",
            "description": "Indica se o turno ocorre aos sábados."
          },
          {
            "name": "sunday",
            "type": "boolean",
            "required": true,
            "ofEntity": "Shift",
            "description": "Indica se o turno ocorre aos domingos."
          },
          {
            "name": "active",
            "type": "boolean",
            "required": true,
            "ofEntity": "Shift",
            "description": "Indica se o turno está ativo e disponível para alocação."
          }
        ],
        "output": [
          {
            "name": "shiftId",
            "type": "string",
            "required": true,
            "ofEntity": "Shift",
            "description": "Identificador do turno atualizado."
          },
          {
            "name": "name",
            "type": "string",
            "required": true,
            "ofEntity": "Shift",
            "description": "Nome do turno atualizado."
          },
          {
            "name": "startTime",
            "type": "string",
            "required": true,
            "ofEntity": "Shift",
            "description": "Horário de início do turno atualizado."
          },
          {
            "name": "endTime",
            "type": "string",
            "required": true,
            "ofEntity": "Shift",
            "description": "Horário de fim do turno atualizado."
          },
          {
            "name": "monday",
            "type": "boolean",
            "required": true,
            "ofEntity": "Shift",
            "description": "Indica se o turno ocorre às segundas-feiras."
          },
          {
            "name": "tuesday",
            "type": "boolean",
            "required": true,
            "ofEntity": "Shift",
            "description": "Indica se o turno ocorre às terças-feiras."
          },
          {
            "name": "wednesday",
            "type": "boolean",
            "required": true,
            "ofEntity": "Shift",
            "description": "Indica se o turno ocorre às quartas-feiras."
          },
          {
            "name": "thursday",
            "type": "boolean",
            "required": true,
            "ofEntity": "Shift",
            "description": "Indica se o turno ocorre às quintas-feiras."
          },
          {
            "name": "friday",
            "type": "boolean",
            "required": true,
            "ofEntity": "Shift",
            "description": "Indica se o turno ocorre às sextas-feiras."
          },
          {
            "name": "saturday",
            "type": "boolean",
            "required": true,
            "ofEntity": "Shift",
            "description": "Indica se o turno ocorre aos sábados."
          },
          {
            "name": "sunday",
            "type": "boolean",
            "required": true,
            "ofEntity": "Shift",
            "description": "Indica se o turno ocorre aos domingos."
          },
          {
            "name": "active",
            "type": "boolean",
            "required": true,
            "ofEntity": "Shift",
            "description": "Indica se o turno está ativo e disponível para alocação."
          }
        ],
        "ports": [],
        "rulesApplied": [
          "businessHoursForScheduling",
          "operatorMultipleShiftsAllowed"
        ],
        "transactional": true,
        "steps": [
          "1. Resolve shiftId from the public input (selectedEntity).",
          "2. Resolve actorId from ctx.sessionContext (actorSession) and updatedAt from ctx.clock.now() (systemDefault) — neither is a public input.",
          "3. Validate required fields: name is non-empty, startTime and endTime are in HH:mm format, and at least one weekday flag (monday–sunday) is true.",
          "4. Apply businessHoursForScheduling: parse startTime and endTime; if they fall outside the standard 09:00–18:00 window, the update is still accepted as an explicit administrator override (the rule is permissive, not blocking) — no error is raised.",
          "5. Apply operatorMultipleShiftsAllowed: overlapping shifts on the same day are permitted; no conflict check is performed and no error is raised.",
          "6. Load the existing Shift MDM record via ctx.mdm.entity.get({ mdmId: shiftId }) to confirm it exists; throw a not-found validation error if absent.",
          "7. Update the Shift MDM record via ctx.mdm.entity.update({ mdmId: shiftId, details: { name, startTime, endTime, monday, tuesday, wednesday, thursday, friday, saturday, sunday, active, updatedAt } }) inside a single transaction (ctx.data transaction wrapper).",
          "8. Return the updated shift fields: shiftId, name, startTime, endTime, monday–sunday, active."
        ]
      }
    ],
    "mdmRefs": [
      "Shift"
    ]
  }
} as const;

export default updateShiftUsecase;

export const pipeline = [
  {
    "id": "updateShift__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102049_/l1/petShop/layer_2_application/usecases/updateShift.ts",
    "defPath": "_102049_/l1/petShop/layer_2_application/usecases/updateShift.defs.ts",
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/applicationUsecase.md",
      "_102034_.d.ts"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
