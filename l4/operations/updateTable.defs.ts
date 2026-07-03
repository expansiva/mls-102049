/// <mls fileReference="_102049_/l4/operations/updateTable.defs.ts" enhancement="_blank"/>

export const operationUpdateTable = {
  "operationId": "updateTable",
  "title": "Editar mesa",
  "actor": "manager",
  "entity": "Table",
  "kind": "update",
  "reads": [
    "Table"
  ],
  "writes": [
    "Table.number",
    "Table.name",
    "Table.status",
    "Table.updatedAt"
  ],
  "rulesApplied": [],
  "story": {
    "actor": "manager",
    "goal": "Atualizar dados de uma mesa",
    "soThat": "As mesas reflitam o layout físico do café",
    "steps": [
      "Localizar a mesa",
      "Alterar número ou capacidade",
      "Salvar alterações"
    ],
    "outcome": "Mesa atualizada no cadastro"
  },
  "accessPattern": {
    "kind": "commandInput",
    "description": "Comando para atualizar os dados cadastrais de uma mesa existente selecionada previamente",
    "entity": "Table",
    "filters": [],
    "sort": [],
    "output": []
  },
  "inputs": [
    {
      "inputId": "tableId",
      "fieldRef": "Table.tableId",
      "required": true,
      "source": "selectedEntity",
      "description": "Identificador único da mesa a ser editada"
    },
    {
      "inputId": "number",
      "fieldRef": "Table.number",
      "required": true,
      "source": "userInput",
      "description": "Número ou código de identificação visual da mesa"
    },
    {
      "inputId": "name",
      "fieldRef": "Table.name",
      "required": false,
      "source": "userInput",
      "description": "Nome ou descrição opcional da mesa"
    },
    {
      "inputId": "status",
      "fieldRef": "Table.status",
      "required": true,
      "source": "userInput",
      "description": "Situação da mesa no sistema (active ou inactive)"
    }
  ],
  "contextResolution": [
    {
      "targetRef": "input.tableId",
      "source": "selectedEntity",
      "originRef": "Table.tableId",
      "description": "Identificador da mesa selecionada na lista para edição"
    }
  ],
  "acceptanceAssertions": [
    "A operação utiliza o identificador da mesa previamente selecionada na jornada",
    "O identificador técnico da mesa não é digitado manualmente pelo gerente",
    "O gerente informa número, nome e status como dados de entrada da atualização",
    "A mesa é persistida no cadastro com os novos dados e timestamp de atualização ajustado pelo sistema"
  ],
  "capability": {
    "capabilityId": "manageTables",
    "title": "Gerenciar mesas",
    "actor": "manager",
    "priority": "now"
  },
  "pageId": "updateTable",
  "commandName": "updateTable",
  "bffName": "cafeFlow.updateTable.updateTable"
} as const;

export default operationUpdateTable;
