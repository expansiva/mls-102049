/// <mls fileReference="_102049_/l1/petShop/layer_2_application/usecases/browseShifts.defs.ts" enhancement="_blank"/>

export const browseShiftsUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "browseShifts",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "browseShifts",
    "ports": [],
    "functions": [
      {
        "functionName": "browseShifts",
        "inputTypeName": "BrowseShiftsInput",
        "outputTypeName": "BrowseShiftsOutput",
        "input": [
          {
            "name": "activeFilter",
            "type": "boolean",
            "required": false,
            "description": "Filtro opcional para exibir apenas turnos ativos (true) ou inativos (false)."
          }
        ],
        "output": [
          {
            "name": "shiftId",
            "type": "string",
            "required": true,
            "ofEntity": "Shift",
            "description": "Identificador único do turno."
          },
          {
            "name": "name",
            "type": "string",
            "required": true,
            "ofEntity": "Shift",
            "description": "Nome do turno."
          },
          {
            "name": "startTime",
            "type": "string",
            "required": true,
            "ofEntity": "Shift",
            "description": "Horário de início do turno."
          },
          {
            "name": "endTime",
            "type": "string",
            "required": true,
            "ofEntity": "Shift",
            "description": "Horário de fim do turno."
          },
          {
            "name": "monday",
            "type": "boolean",
            "required": true,
            "ofEntity": "Shift",
            "description": "Indica se o turno ocorre na segunda-feira."
          },
          {
            "name": "tuesday",
            "type": "boolean",
            "required": true,
            "ofEntity": "Shift",
            "description": "Indica se o turno ocorre na terça-feira."
          },
          {
            "name": "wednesday",
            "type": "boolean",
            "required": true,
            "ofEntity": "Shift",
            "description": "Indica se o turno ocorre na quarta-feira."
          },
          {
            "name": "thursday",
            "type": "boolean",
            "required": true,
            "ofEntity": "Shift",
            "description": "Indica se o turno ocorre na quinta-feira."
          },
          {
            "name": "friday",
            "type": "boolean",
            "required": true,
            "ofEntity": "Shift",
            "description": "Indica se o turno ocorre na sexta-feira."
          },
          {
            "name": "saturday",
            "type": "boolean",
            "required": true,
            "ofEntity": "Shift",
            "description": "Indica se o turno ocorre no sábado."
          },
          {
            "name": "sunday",
            "type": "boolean",
            "required": true,
            "ofEntity": "Shift",
            "description": "Indica se o turno ocorre no domingo."
          },
          {
            "name": "active",
            "type": "boolean",
            "required": true,
            "ofEntity": "Shift",
            "description": "Status ativo do turno."
          },
          {
            "name": "createdAt",
            "type": "string",
            "required": true,
            "ofEntity": "Shift",
            "description": "Data de criação do turno."
          },
          {
            "name": "updatedAt",
            "type": "string",
            "required": true,
            "ofEntity": "Shift",
            "description": "Data de atualização do turno."
          }
        ],
        "ports": [],
        "rulesApplied": [
          "businessHoursForScheduling",
          "operatorMultipleShiftsAllowed"
        ],
        "transactional": false,
        "steps": [
          "1. Resolve actorId from ctx.sessionContext (actorSession) — not a public input.",
          "2. Query MDM for all Shift records via ctx.mdm.collection.listByType({ type: 'Shift' }).",
          "3. If activeFilter is provided, filter results to only those where active === activeFilter.",
          "4. Apply businessHoursForScheduling rule inline: validate that each returned shift's startTime/endTime fall within 09:00–18:00 and operating days are Monday–Saturday; flag any shift that violates this as a configuration warning in the result set (does not exclude, but annotates).",
          "5. Apply operatorMultipleShiftsAllowed rule inline: no filtering needed — multiple shifts are allowed per operator; the rule is satisfied by returning the full list without deduplication.",
          "6. Project each Shift to the declared output fields (shiftId, name, startTime, endTime, monday–sunday, active, createdAt, updatedAt) and return the collection."
        ]
      }
    ],
    "mdmRefs": [
      "Shift"
    ]
  }
} as const;

export default browseShiftsUsecase;

export const pipeline = [
  {
    "id": "browseShifts__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102049_/l1/petShop/layer_2_application/usecases/browseShifts.ts",
    "defPath": "_102049_/l1/petShop/layer_2_application/usecases/browseShifts.defs.ts",
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
