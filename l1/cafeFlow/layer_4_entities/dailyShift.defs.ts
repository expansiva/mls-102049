/// <mls fileReference="_102049_/l1/cafeFlow/layer_4_entities/dailyShift.defs.ts" enhancement="_blank"/>

export const entity = {
  "entityId": "dailyShift",
  "title": "Entidade de Turno Diário",
  "purpose": "Agrupa turnos diários e relatórios de fechamento",
  "layer": "layer_4_entities",
  "fields": [
    {
      "fieldId": "dailyShiftId",
      "type": "uuid",
      "required": true,
      "description": "Identificador único do turno diário."
    },
    {
      "fieldId": "businessDate",
      "type": "date",
      "required": true,
      "description": "Data de referência do turno."
    },
    {
      "fieldId": "status",
      "type": "string",
      "required": true,
      "description": "Estado atual do turno diário.",
      "enum": [
        "aberto",
        "fechado"
      ]
    },
    {
      "fieldId": "openedAt",
      "type": "datetime",
      "required": true,
      "description": "Data e hora de abertura do turno."
    },
    {
      "fieldId": "closedAt",
      "type": "datetime",
      "required": false,
      "description": "Data e hora de fechamento do turno."
    },
    {
      "fieldId": "createdAt",
      "type": "datetime",
      "required": true,
      "description": "Data e hora de criação do registro."
    },
    {
      "fieldId": "updatedAt",
      "type": "datetime",
      "required": true,
      "description": "Data e hora da última atualização do registro."
    }
  ],
  "statusEnum": [
    "aberto",
    "fechado"
  ],
  "lifecycleStates": [
    "aberto",
    "fechado"
  ],
  "ontologyEntities": [
    "DailyShift",
    "ShiftClosureReport"
  ],
  "sourceTables": [
    {
      "tableName": "daily_shifts",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "shift_closure_reports",
      "ownership": "moduleOwned"
    }
  ],
  "storage": [
    {
      "kind": "moduleTable",
      "tableId": "dailyShift",
      "tableName": "daily_shifts",
      "fileRef": "_102049_/l1/cafeFlow/layer_1_external/dailyShift.defs.ts"
    },
    {
      "kind": "moduleTable",
      "tableId": "shiftClosureReport",
      "tableName": "shift_closure_reports",
      "fileRef": "_102049_/l1/cafeFlow/layer_1_external/shiftClosureReport.defs.ts"
    }
  ],
  "allowedOperations": [
    "create",
    "read",
    "update",
    "list",
    "search"
  ],
  "rulesApplied": [
    "shiftClosureRule"
  ],
  "usecaseRefs": [
    "abrirTurno",
    "fecharTurno",
    "listarTurnos",
    "buscarRelatorioFechamento",
    "visualizarDashboard",
    "gerarResumoVendas"
  ],
  "materialization": {
    "fileName": "layer_4_entities/DailyShiftEntity.ts",
    "className": "DailyShiftEntity",
    "contractName": "IDailyShiftEntity"
  }
} as const;

export default entity;
