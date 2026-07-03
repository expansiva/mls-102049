/// <mls fileReference="_102049_/l4/operations/createTable.defs.ts" enhancement="_blank"/>

export const operationCreateTable = {
  "operationId": "createTable",
  "title": "Cadastrar mesa",
  "actor": "manager",
  "entity": "Table",
  "kind": "create",
  "reads": [],
  "writes": [
    "Table"
  ],
  "rulesApplied": [],
  "story": {
    "actor": "manager",
    "goal": "Cadastrar uma nova mesa no sistema",
    "soThat": "O atendente possa selecionar a mesa ao lançar pedidos",
    "steps": [
      "Informar número da mesa",
      "Definir capacidade se aplicável",
      "Salvar a mesa"
    ],
    "outcome": "Nova mesa disponível para associação a pedidos"
  },
  "accessPattern": {
    "kind": "commandInput",
    "description": "Comando para cadastrar uma nova mesa no sistema",
    "filters": [],
    "sort": [],
    "output": []
  },
  "inputs": [
    {
      "inputId": "number",
      "fieldRef": "Table.number",
      "required": true,
      "source": "userInput",
      "description": "Número ou código de identificação visual da mesa (ex: 01, 12, A3)"
    },
    {
      "inputId": "name",
      "fieldRef": "Table.name",
      "required": false,
      "source": "userInput",
      "description": "Nome ou descrição opcional da mesa (ex: 'Mesa da Janela')"
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
      "targetRef": "Table.tableId",
      "source": "systemDefault",
      "originRef": "systemDefault.uuid",
      "description": "Identificador único da mesa gerado pelo sistema"
    },
    {
      "targetRef": "Table.createdAt",
      "source": "systemDefault",
      "originRef": "systemDefault.now",
      "description": "Data e hora de criação do registro definida pelo sistema"
    },
    {
      "targetRef": "Table.updatedAt",
      "source": "systemDefault",
      "originRef": "systemDefault.now",
      "description": "Data e hora da última atualização do registro definida pelo sistema"
    }
  ],
  "acceptanceAssertions": [
    "O cadastro de mesa não exige identificador técnico pré-selecionado",
    "O número da mesa é informado pelo gerente",
    "O sistema gera o tableId automaticamente",
    "Os timestamps de criação e atualização são definidos automaticamente pelo sistema"
  ],
  "capability": {
    "capabilityId": "manageTables",
    "title": "Gerenciar mesas",
    "actor": "manager",
    "priority": "now"
  },
  "pageId": "createTable",
  "commandName": "createTable",
  "bffName": "cafeFlow.createTable.createTable"
} as const;

export default operationCreateTable;
