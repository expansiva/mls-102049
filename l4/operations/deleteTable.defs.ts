/// <mls fileReference="_102049_/l4/operations/deleteTable.defs.ts" enhancement="_blank"/>

export const operationDeleteTable = {
  "operationId": "deleteTable",
  "title": "Remover mesa",
  "actor": "manager",
  "entity": "Table",
  "kind": "delete",
  "reads": [
    "Table"
  ],
  "writes": [
    "Table"
  ],
  "rulesApplied": [],
  "story": {
    "actor": "manager",
    "goal": "Remover uma mesa do cadastro",
    "soThat": "Mesas fora de uso não apareçam no POS",
    "steps": [
      "Localizar a mesa",
      "Confirmar exclusão"
    ],
    "outcome": "Mesa removida do cadastro"
  },
  "accessPattern": {
    "kind": "commandInput",
    "description": "Comando de exclusão de uma mesa previamente selecionada no fluxo",
    "entity": "Table",
    "filters": [],
    "sort": [],
    "pagination": "none",
    "selection": "single",
    "output": [
      "Table.tableId"
    ]
  },
  "inputs": [
    {
      "inputId": "tableId",
      "fieldRef": "Table.tableId",
      "required": true,
      "source": "selectedEntity",
      "description": "Identificador único da mesa a ser removida"
    }
  ],
  "contextResolution": [
    {
      "targetRef": "input.tableId",
      "source": "selectedEntity",
      "originRef": "Table.tableId",
      "description": "Identificador da mesa obtido da seleção prévia no fluxo"
    }
  ],
  "acceptanceAssertions": [
    "A mesa a ser excluída é obtida da seleção prévia no fluxo, sem necessidade de digitar ID técnico",
    "A operação executa a remoção do registro da mesa no cadastro",
    "O gerente confirma a exclusão antes da remoção definitiva"
  ],
  "capability": {
    "capabilityId": "manageTables",
    "title": "Gerenciar mesas",
    "actor": "manager",
    "priority": "now"
  },
  "pageId": "deleteTable",
  "commandName": "deleteTable",
  "bffName": "cafeFlow.deleteTable.deleteTable"
} as const;

export default operationDeleteTable;
