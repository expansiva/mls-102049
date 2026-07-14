/// <mls fileReference="_102049_/l2/petShop/web/contracts/operatorManagement.defs.ts" enhancement="_blank"/>

export const definition = [
  {
    "commandName": "browseOperators",
    "bffName": "petShop.browseOperators.browseOperators",
    "routeKey": "petShop.browseOperators.browseOperators",
    "purpose": "Listar operadores cadastrados",
    "kind": "query",
    "outputShape": "paginated",
    "input": [
      {
        "name": "activeFilter",
        "type": "boolean",
        "required": false,
        "description": "Filtro opcional para listar apenas operadores ativos ou inativos.",
        "source": "userInput",
        "presentation": "form"
      }
    ],
    "output": [
      {
        "name": "operatorId",
        "type": "string",
        "description": "Identificador único do operador."
      },
      {
        "name": "name",
        "type": "string",
        "description": "Nome completo do operador exibido na agenda e nos agendamentos atribuídos."
      },
      {
        "name": "email",
        "type": "string",
        "description": "E-mail de contato do operador para notificações de agenda."
      },
      {
        "name": "phone",
        "type": "string",
        "description": "Telefone de contato do operador."
      },
      {
        "name": "active",
        "type": "boolean",
        "description": "Indica se o operador está ativo e pode ser alocado em turnos e receber agendamentos."
      },
      {
        "name": "createdAt",
        "type": "date",
        "description": "Data e hora de cadastro do operador pelo administrador."
      },
      {
        "name": "updatedAt",
        "type": "date",
        "description": "Data e hora da última atualização dos dados do operador."
      }
    ],
    "origin": {
      "source": "l4/operations",
      "ownerId": "operation:browseOperators",
      "operationId": "browseOperators",
      "defPath": "_102049_/l4/operations/browseOperators.defs.ts",
      "bffName": "petShop.browseOperators.browseOperators"
    }
  },
  {
    "commandName": "createOperator",
    "bffName": "petShop.createOperator.createOperator",
    "routeKey": "petShop.createOperator.createOperator",
    "purpose": "Cadastrar operador",
    "kind": "command",
    "outputShape": "object",
    "input": [
      {
        "name": "name",
        "type": "string",
        "required": true,
        "description": "Nome completo do operador exibido na agenda e nos agendamentos atribuídos.",
        "source": "userInput",
        "presentation": "form"
      },
      {
        "name": "email",
        "type": "string",
        "required": false,
        "description": "E-mail de contato do operador para notificações de agenda.",
        "source": "userInput",
        "presentation": "form"
      },
      {
        "name": "phone",
        "type": "string",
        "required": false,
        "description": "Telefone de contato do operador.",
        "source": "userInput",
        "presentation": "form"
      },
      {
        "name": "active",
        "type": "boolean",
        "required": true,
        "description": "Indica se o operador inicia ativo e pode ser alocado em turnos; o formulário apresenta a opção marcada por padrão.",
        "source": "userInput",
        "presentation": "form"
      }
    ],
    "output": [
      {
        "name": "operatorId",
        "type": "string",
        "description": "Identificador único do operador."
      },
      {
        "name": "name",
        "type": "string",
        "description": "Nome completo do operador exibido na agenda e nos agendamentos atribuídos."
      },
      {
        "name": "email",
        "type": "string",
        "description": "E-mail de contato do operador para notificações de agenda."
      },
      {
        "name": "phone",
        "type": "string",
        "description": "Telefone de contato do operador."
      },
      {
        "name": "active",
        "type": "boolean",
        "description": "Indica se o operador está ativo e pode ser alocado em turnos e receber agendamentos."
      },
      {
        "name": "createdAt",
        "type": "date",
        "description": "Data e hora de cadastro do operador pelo administrador."
      }
    ],
    "origin": {
      "source": "l4/operations",
      "ownerId": "operation:createOperator",
      "operationId": "createOperator",
      "defPath": "_102049_/l4/operations/createOperator.defs.ts",
      "bffName": "petShop.createOperator.createOperator"
    }
  },
  {
    "commandName": "updateOperator",
    "bffName": "petShop.updateOperator.updateOperator",
    "routeKey": "petShop.updateOperator.updateOperator",
    "purpose": "Editar operador",
    "kind": "command",
    "outputShape": "object",
    "input": [
      {
        "name": "operatorId",
        "type": "string",
        "required": true,
        "description": "Identificador do operador a ser editado, obtido da rota de edição.",
        "source": "routeParam",
        "presentation": "route"
      },
      {
        "name": "name",
        "type": "string",
        "required": true,
        "description": "Nome completo do operador editado pelo administrador.",
        "source": "userInput",
        "presentation": "form"
      },
      {
        "name": "email",
        "type": "string",
        "required": false,
        "description": "E-mail de contato do operador, opcional.",
        "source": "userInput",
        "presentation": "form"
      },
      {
        "name": "phone",
        "type": "string",
        "required": false,
        "description": "Telefone de contato do operador, opcional.",
        "source": "userInput",
        "presentation": "form"
      },
      {
        "name": "active",
        "type": "boolean",
        "required": true,
        "description": "Indica se o operador está ativo e pode ser alocado em turnos.",
        "source": "userInput",
        "presentation": "form"
      }
    ],
    "output": [
      {
        "name": "operatorId",
        "type": "string",
        "description": "Identificador único do operador."
      },
      {
        "name": "name",
        "type": "string",
        "description": "Nome completo do operador exibido na agenda e nos agendamentos atribuídos."
      },
      {
        "name": "email",
        "type": "string",
        "description": "E-mail de contato do operador para notificações de agenda."
      },
      {
        "name": "phone",
        "type": "string",
        "description": "Telefone de contato do operador."
      },
      {
        "name": "active",
        "type": "boolean",
        "description": "Indica se o operador está ativo e pode ser alocado em turnos e receber agendamentos."
      },
      {
        "name": "updatedAt",
        "type": "date",
        "description": "Data e hora da última atualização dos dados do operador."
      }
    ],
    "origin": {
      "source": "l4/operations",
      "ownerId": "operation:updateOperator",
      "operationId": "updateOperator",
      "defPath": "_102049_/l4/operations/updateOperator.defs.ts",
      "bffName": "petShop.updateOperator.updateOperator"
    }
  }
];

export const pipeline = [
  {
    "id": "operatorManagement__l2_contract",
    "type": "l2_contract",
    "outputPath": "_102049_/l2/petShop/web/contracts/operatorManagement.ts",
    "defPath": "_102049_/l2/petShop/web/contracts/operatorManagement.defs.ts",
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeContractTs.ts"
    ],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
