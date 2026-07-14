/// <mls fileReference="_102049_/l4/operations/browseOperators.defs.ts" enhancement="_blank"/>

export const operationBrowseOperators = {
  "operationId": "browseOperators",
  "title": "Listar operadores cadastrados",
  "actor": "admin",
  "entity": "Operator",
  "kind": "query",
  "reads": [
    "Operator"
  ],
  "writes": [],
  "rulesApplied": [],
  "story": {
    "actor": "admin",
    "goal": "Visualizar todos os operadores cadastrados no pet shop para gerenciar sua alocação em turnos e acompanhar seu status ativo.",
    "steps": [
      "O administrador acessa a tela de gestão de operadores",
      "O sistema retorna a lista de todos os operadores cadastrados com nome, e-mail, telefone, status ativo e datas de cadastro/atualização",
      "O administrador pode filtrar por status ativo e ordenar por nome"
    ],
    "outcome": "O administrador visualiza a lista completa de operadores cadastrados, podendo identificar quais estão ativos e disponíveis para alocação em turnos."
  },
  "accessPattern": {
    "kind": "list",
    "entity": "Operator",
    "keyField": "Operator.operatorId",
    "pagination": "optional",
    "selection": "none",
    "output": [
      "Operator.operatorId",
      "Operator.name",
      "Operator.email",
      "Operator.phone",
      "Operator.active",
      "Operator.createdAt",
      "Operator.updatedAt"
    ]
  },
  "inputs": [
    {
      "inputId": "activeFilter",
      "fieldRef": "Operator.active",
      "required": false,
      "source": "userInput",
      "description": "Filtro opcional para listar apenas operadores ativos ou inativos."
    },
    {
      "inputId": "actorId",
      "fieldRef": "Operator.operatorId",
      "required": true,
      "source": "actorSession",
      "description": "Identificador do administrador autenticado que solicita a lista de operadores."
    }
  ],
  "contextResolution": [
    {
      "targetRef": "Operator.operatorId",
      "source": "actorSession",
      "originRef": "actorSession.actorId",
      "description": "O backend resolve o identificador do administrador a partir da sessão autenticada para autorizar o acesso à lista de operadores."
    }
  ],
  "acceptanceAssertions": [
    "A lista retornada contém todos os operadores cadastrados no sistema com os campos operatorId, name, email, phone, active, createdAt e updatedAt.",
    "Quando o filtro active é informado como true, a lista contém apenas operadores com active igual a true.",
    "Quando o filtro active é informado como false, a lista contém apenas operadores com active igual a false.",
    "Cada operador na lista possui um operatorId único do tipo uuid.",
    "A operação é executada apenas por um administrador autenticado, rejeitando acessos de outros perfis."
  ],
  "pageId": "browseOperators",
  "commandName": "browseOperators",
  "bffName": "petShop.browseOperators.browseOperators",
  "capability": {
    "capabilityId": "browseOperators",
    "title": "Listar operadores cadastrados",
    "actor": "admin",
    "priority": "now"
  },
  "statusFrontend": "toCreate",
  "statusBackend": "toCreate"
} as const;

export default operationBrowseOperators;
