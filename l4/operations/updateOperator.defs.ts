/// <mls fileReference="_102049_/l4/operations/updateOperator.defs.ts" enhancement="_blank"/>

export const operationUpdateOperator = {
  "operationId": "updateOperator",
  "title": "Editar operador",
  "actor": "admin",
  "entity": "Operator",
  "kind": "update",
  "reads": [
    "Operator"
  ],
  "writes": [
    "Operator"
  ],
  "rulesApplied": [],
  "story": {
    "actor": "admin",
    "goal": "Editar os dados de um operador existente para manter suas informações de contato e status de atividade atualizados.",
    "steps": [
      "O administrador seleciona um operador na lista de operadores cadastrados.",
      "O sistema carrega os dados atuais do operador em um formulário de edição.",
      "O administrador altera nome, e-mail, telefone e/ou status ativo conforme necessário.",
      "O sistema valida os campos informados e persiste as alterações atualizando a data de modificação."
    ],
    "outcome": "Os dados do operador são atualizados e o operador reflete o novo status de atividade para alocação em turnos e agendamentos."
  },
  "accessPattern": {
    "kind": "commandInput",
    "entity": "Operator",
    "keyField": "Operator.operatorId",
    "pagination": "none",
    "selection": "single",
    "output": [
      "Operator.operatorId",
      "Operator.name",
      "Operator.email",
      "Operator.phone",
      "Operator.active",
      "Operator.updatedAt"
    ]
  },
  "inputs": [
    {
      "inputId": "operatorId",
      "fieldRef": "Operator.operatorId",
      "required": true,
      "source": "routeParam",
      "description": "Identificador do operador a ser editado, obtido da rota de edição."
    },
    {
      "inputId": "name",
      "fieldRef": "Operator.name",
      "required": true,
      "source": "userInput",
      "description": "Nome completo do operador editado pelo administrador."
    },
    {
      "inputId": "email",
      "fieldRef": "Operator.email",
      "required": false,
      "source": "userInput",
      "description": "E-mail de contato do operador, opcional."
    },
    {
      "inputId": "phone",
      "fieldRef": "Operator.phone",
      "required": false,
      "source": "userInput",
      "description": "Telefone de contato do operador, opcional."
    },
    {
      "inputId": "active",
      "fieldRef": "Operator.active",
      "required": true,
      "source": "userInput",
      "description": "Indica se o operador está ativo e pode ser alocado em turnos."
    },
    {
      "inputId": "updatedAt",
      "fieldRef": "Operator.updatedAt",
      "required": true,
      "source": "systemDefault",
      "description": "Data e hora da atualização, definida automaticamente pelo servidor."
    },
    {
      "inputId": "actorId",
      "fieldRef": "Operator.operatorId",
      "required": true,
      "source": "actorSession",
      "description": "Identificador do administrador autenticado que realiza a edição, para auditoria."
    }
  ],
  "contextResolution": [
    {
      "targetRef": "Operator.operatorId",
      "source": "routeParam",
      "originRef": "routeParam.operatorId",
      "description": "O backend extrai o operatorId do parâmetro de rota para localizar o operador a ser editado."
    },
    {
      "targetRef": "Operator.updatedAt",
      "source": "systemDefault",
      "originRef": "systemDefault.now",
      "description": "O backend define updatedAt com o timestamp atual no momento da persistência da alteração."
    },
    {
      "targetRef": "Operator.operatorId",
      "source": "actorSession",
      "originRef": "actorSession.actorId",
      "description": "O backend obtém o identificador do administrador autenticado a partir da sessão para auditoria da alteração."
    }
  ],
  "acceptanceAssertions": [
    "Após a confirmação, o operador existe com o nome atualizado conforme informado pelo administrador.",
    "Após a confirmação, o campo updatedAt do operador reflete a data e hora da última modificação.",
    "Se o administrador desativar o operador (active = false), o operador não pode ser alocado em novos turnos nem receber novos agendamentos.",
    "Os campos opcionais email e phone, quando não informados, permanecem com seus valores anteriores ou nulos.",
    "O operador cujo operatorId não existe não pode ser atualizado e a operação retorna erro."
  ],
  "pageId": "updateOperator",
  "commandName": "updateOperator",
  "bffName": "petShop.updateOperator.updateOperator",
  "capability": {
    "capabilityId": "updateOperator",
    "title": "Editar operador",
    "actor": "admin",
    "priority": "now"
  },
  "statusFrontend": "toCreate",
  "statusBackend": "toCreate"
} as const;

export default operationUpdateOperator;
