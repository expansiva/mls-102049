/// <mls fileReference="_102049_/l4/operations/createOperator.defs.ts" enhancement="_blank"/>

export const operationCreateOperator = {
  "operationId": "createOperator",
  "title": "Cadastrar operador",
  "actor": "admin",
  "entity": "Operator",
  "kind": "create",
  "reads": [
    "Operator"
  ],
  "writes": [
    "Operator"
  ],
  "rulesApplied": [],
  "story": {
    "actor": "admin",
    "goal": "Cadastrar um novo operador informando nome e dados básicos para que ele possa ser alocado em turnos de trabalho.",
    "steps": [
      "O administrador acessa a tela de cadastro de operadores e preenche o nome, e-mail, telefone e indica se o operador inicia ativo.",
      "O sistema gera um identificador único, registra a data de criação e persiste o novo operador.",
      "O operador cadastrado torna-se disponível para alocação em turnos e agendamentos."
    ],
    "outcome": "Um novo operador é criado no sistema com status ativo e pronto para receber alocações em turnos."
  },
  "accessPattern": {
    "kind": "commandInput",
    "entity": "Operator",
    "keyField": "Operator.operatorId",
    "pagination": "none",
    "selection": "none",
    "output": [
      "Operator.operatorId",
      "Operator.name",
      "Operator.email",
      "Operator.phone",
      "Operator.active",
      "Operator.createdAt"
    ]
  },
  "inputs": [
    {
      "inputId": "name",
      "fieldRef": "Operator.name",
      "required": true,
      "source": "userInput",
      "description": "Nome completo do operador exibido na agenda e nos agendamentos atribuídos."
    },
    {
      "inputId": "email",
      "fieldRef": "Operator.email",
      "required": false,
      "source": "userInput",
      "description": "E-mail de contato do operador para notificações de agenda."
    },
    {
      "inputId": "phone",
      "fieldRef": "Operator.phone",
      "required": false,
      "source": "userInput",
      "description": "Telefone de contato do operador."
    },
    {
      "inputId": "active",
      "fieldRef": "Operator.active",
      "required": true,
      "source": "userInput",
      "description": "Indica se o operador inicia ativo e pode ser alocado em turnos; o formulário apresenta a opção marcada por padrão."
    },
    {
      "inputId": "operatorId",
      "fieldRef": "Operator.operatorId",
      "required": true,
      "source": "systemDefault",
      "description": "Identificador único do operador gerado automaticamente pelo sistema."
    },
    {
      "inputId": "createdAt",
      "fieldRef": "Operator.createdAt",
      "required": true,
      "source": "systemDefault",
      "description": "Data e hora de cadastro do operador, definida automaticamente no momento da criação."
    },
    {
      "inputId": "updatedAt",
      "fieldRef": "Operator.updatedAt",
      "required": true,
      "source": "systemDefault",
      "description": "Data e hora da última atualização, inicialmente igual à data de criação."
    }
  ],
  "contextResolution": [
    {
      "targetRef": "Operator.operatorId",
      "source": "systemDefault",
      "originRef": "systemDefault.uuid",
      "description": "O backend gera um UUID v4 automaticamente ao persistir o novo operador."
    },
    {
      "targetRef": "Operator.createdAt",
      "source": "systemDefault",
      "originRef": "systemDefault.now",
      "description": "O backend registra o timestamp atual no momento da criação do operador."
    },
    {
      "targetRef": "Operator.updatedAt",
      "source": "systemDefault",
      "originRef": "systemDefault.now",
      "description": "O backend define o timestamp atual igual ao de criação na primeira persistência."
    }
  ],
  "acceptanceAssertions": [
    "Após a confirmação, o operador existe no sistema com um operatorId único gerado automaticamente.",
    "O operador é persistido com o nome informado pelo administrador.",
    "O operador é criado com o campo active conforme o valor informado no formulário.",
    "Os campos createdAt e updatedAt do operador são preenchidos com o timestamp atual do sistema.",
    "O operador cadastrado pode ser posteriormente alocado em turnos de trabalho."
  ],
  "pageId": "createOperator",
  "commandName": "createOperator",
  "bffName": "petShop.createOperator.createOperator",
  "capability": {
    "capabilityId": "createOperator",
    "title": "Cadastrar operador",
    "actor": "admin",
    "priority": "now"
  },
  "statusFrontend": "toCreate",
  "statusBackend": "toCreate"
} as const;

export default operationCreateOperator;
