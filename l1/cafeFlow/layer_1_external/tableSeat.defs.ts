/// <mls fileReference="_102049_/l1/cafeFlow/layer_1_external/tableSeat.defs.ts" enhancement="_blank"/>

export const tableSeatTableDefinition = {
  "schemaVersion": "2026-06-06",
  "artifactType": "table",
  "artifactId": "tableSeat",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentPlanTableDefinition",
    "stepId": 48,
    "planId": ""
  },
  "data": {
    "tableDefinition": {
      "tableId": "tableSeat",
      "tableName": "table_seats",
      "moduleId": "cafeFlow",
      "title": "Mesas/Comandas",
      "purpose": "Controlar identificação de mesas/comandas ativas.",
      "ownership": "moduleOwned",
      "rootEntity": "TableSeat",
      "layer": "layer_1_external",
      "tableKind": "transactional",
      "columns": [
        {
          "name": "table_seat_id",
          "type": "uuid",
          "nullable": false,
          "primaryKey": true,
          "description": "Identificador único da mesa/comanda."
        },
        {
          "name": "label",
          "type": "string",
          "nullable": false,
          "description": "Nome curto ou código exibido da mesa/comanda."
        },
        {
          "name": "seat_type",
          "type": "string",
          "nullable": false,
          "description": "Tipo de referência usada no salão."
        },
        {
          "name": "capacity",
          "type": "number",
          "nullable": true,
          "description": "Quantidade máxima de pessoas associadas à mesa."
        },
        {
          "name": "is_active",
          "type": "boolean",
          "nullable": false,
          "default": true,
          "description": "Indica se a mesa/comanda está ativa para uso."
        },
        {
          "name": "created_at",
          "type": "datetime",
          "nullable": false,
          "description": "Data e hora de criação do registro."
        },
        {
          "name": "updated_at",
          "type": "datetime",
          "nullable": false,
          "description": "Data e hora da última atualização do registro."
        }
      ],
      "primaryKey": [
        "table_seat_id"
      ],
      "indexes": [
        {
          "indexName": "idx_table_seats_label",
          "columns": [
            "label"
          ],
          "unique": false,
          "reason": "Busca rápida por código exibido no POS."
        },
        {
          "indexName": "idx_table_seats_seat_type",
          "columns": [
            "seat_type"
          ],
          "unique": false,
          "reason": "Filtrar mesas vs. comandas."
        },
        {
          "indexName": "idx_table_seats_is_active",
          "columns": [
            "is_active"
          ],
          "unique": false,
          "reason": "Listar apenas mesas/comandas ativas."
        }
      ],
      "detailsColumn": {
        "enabled": false
      },
      "metricUpdatePolicy": {
        "feedsMetrics": false,
        "updatedByLayer": "layer_3_usecases"
      },
      "accessPolicy": {
        "directAccessAllowedFor": [
          "layer_3_usecases"
        ],
        "forbiddenFor": [
          "pages",
          "layer_2_controllers",
          "agents"
        ]
      },
      "rulesApplied": []
    },
    "defsPlan": {
      "fileName": "tables/tableSeat.defs.ts",
      "exportName": "tableSeatTableDefinition",
      "saveAsDefs": true
    }
  }
} as const;

export default tableSeatTableDefinition;
