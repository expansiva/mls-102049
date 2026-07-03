/// <mls fileReference="_102049_/l4/operations/queryTables.defs.ts" enhancement="_blank"/>

export const operationQueryTables = {
  "operationId": "queryTables",
  "title": "Consultar mesas",
  "actor": "manager",
  "entity": "Table",
  "kind": "query",
  "reads": [
    "Table",
    "Table.tableId",
    "Table.number",
    "Table.name",
    "Table.status",
    "Table.createdAt",
    "Table.updatedAt"
  ],
  "writes": [],
  "rulesApplied": [],
  "story": {
    "actor": "manager",
    "goal": "Listar e buscar mesas cadastradas",
    "soThat": "O gerente tenha visão das mesas disponíveis",
    "steps": [
      "Acessar a tela de gerenciamento de mesas",
      "Visualizar mesas cadastradas"
    ],
    "outcome": "Lista de mesas exibida"
  },
  "accessPattern": {
    "kind": "list",
    "description": "Lista paginada de mesas cadastradas, com filtros opcionais por situação e número, ordenação e seleção individual para ações subsequentes.",
    "entity": "Table",
    "keyField": "Table.tableId",
    "filters": [
      "Table.status",
      "Table.number"
    ],
    "sort": [
      "Table.number",
      "Table.createdAt"
    ],
    "pagination": "optional",
    "selection": "single",
    "output": [
      "Table.tableId",
      "Table.number",
      "Table.name",
      "Table.status",
      "Table.createdAt",
      "Table.updatedAt"
    ]
  },
  "inputs": [
    {
      "inputId": "statusFilter",
      "fieldRef": "Table.status",
      "required": false,
      "source": "userInput",
      "description": "Filtro opcional por situação da mesa (active ou inactive)"
    },
    {
      "inputId": "numberFilter",
      "fieldRef": "Table.number",
      "required": false,
      "source": "userInput",
      "description": "Filtro opcional pelo número ou código visual da mesa"
    }
  ],
  "contextResolution": [
    {
      "targetRef": "filter.workspaceId",
      "source": "currentWorkspace",
      "originRef": "currentWorkspace.workspaceId",
      "description": "Workspace atual aplicado como filtro de escopo e segurança na listagem de mesas"
    }
  ],
  "acceptanceAssertions": [
    "Abrir a lista de mesas não exige digitar identificador técnico (UUID)",
    "A operação é somente leitura e não altera o estado das mesas",
    "O gerente pode filtrar por situação e número sem informar o tableId",
    "A seleção de uma mesa na lista utiliza o campo Table.tableId como chave primária"
  ],
  "capability": {
    "capabilityId": "manageTables",
    "title": "Gerenciar mesas",
    "actor": "manager",
    "priority": "now"
  },
  "pageId": "queryTables",
  "commandName": "queryTables",
  "bffName": "cafeFlow.queryTables.queryTables"
} as const;

export default operationQueryTables;
