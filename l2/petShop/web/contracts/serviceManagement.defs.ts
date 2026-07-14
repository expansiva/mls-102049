/// <mls fileReference="_102049_/l2/petShop/web/contracts/serviceManagement.defs.ts" enhancement="_blank"/>

export const definition = [
  {
    "commandName": "browseServices",
    "bffName": "petShop.browseServices.browseServices",
    "routeKey": "petShop.browseServices.browseServices",
    "purpose": "Listar serviços cadastrados",
    "kind": "query",
    "outputShape": "paginated",
    "input": [
      {
        "name": "statusFilter",
        "type": "string",
        "required": false,
        "enum": [
          "active",
          "inactive"
        ],
        "description": "Filtro opcional por status de ativação (active ou inactive) para restringir a listagem.",
        "source": "userInput",
        "presentation": "form"
      }
    ],
    "output": [
      {
        "name": "serviceId",
        "type": "string",
        "description": "Identificador único do serviço oferecido."
      },
      {
        "name": "name",
        "type": "string",
        "description": "Nome do serviço oferecido, como banho e tosa."
      },
      {
        "name": "description",
        "type": "string",
        "description": "Descrição detalhada do serviço oferecido ao cliente."
      },
      {
        "name": "estimatedDurationMinutes",
        "type": "number",
        "description": "Duração estimada do serviço em minutos, usada para cálculo de horários disponíveis."
      },
      {
        "name": "price",
        "type": "number",
        "description": "Preço do serviço, cobrado presencialmente na loja após a execução."
      },
      {
        "name": "status",
        "type": "string",
        "enum": [
          "active",
          "inactive"
        ],
        "description": "Estado de ativação do serviço; apenas serviços ativos aparecem na listagem para clientes."
      },
      {
        "name": "deactivatedAt",
        "type": "date",
        "description": "Data e hora em que o serviço foi desativado; desativar não cancela agendamentos já confirmados."
      },
      {
        "name": "createdAt",
        "type": "date",
        "description": "Data e hora de criação do registro do serviço."
      },
      {
        "name": "updatedAt",
        "type": "date",
        "description": "Data e hora da última atualização do registro do serviço."
      }
    ],
    "origin": {
      "source": "l4/operations",
      "ownerId": "operation:browseServices",
      "operationId": "browseServices",
      "defPath": "_102049_/l4/operations/browseServices.defs.ts",
      "bffName": "petShop.browseServices.browseServices"
    }
  },
  {
    "commandName": "createService",
    "bffName": "petShop.createService.createService",
    "routeKey": "petShop.createService.createService",
    "purpose": "Cadastrar serviço",
    "kind": "command",
    "outputShape": "object",
    "input": [
      {
        "name": "name",
        "type": "string",
        "required": true,
        "description": "Nome do serviço oferecido, como banho e tosa.",
        "source": "userInput",
        "presentation": "form"
      },
      {
        "name": "description",
        "type": "string",
        "required": true,
        "description": "Descrição detalhada do serviço oferecido ao cliente.",
        "source": "userInput",
        "presentation": "form"
      },
      {
        "name": "estimatedDurationMinutes",
        "type": "number",
        "required": true,
        "description": "Duração estimada do serviço em minutos, usada para cálculo de horários disponíveis.",
        "source": "userInput",
        "presentation": "form"
      },
      {
        "name": "price",
        "type": "number",
        "required": true,
        "description": "Preço do serviço, cobrado presencialmente na loja após a execução.",
        "source": "userInput",
        "presentation": "form"
      }
    ],
    "output": [
      {
        "name": "serviceId",
        "type": "string",
        "description": "Identificador único do serviço oferecido."
      },
      {
        "name": "name",
        "type": "string",
        "description": "Nome do serviço oferecido, como banho e tosa."
      },
      {
        "name": "description",
        "type": "string",
        "description": "Descrição detalhada do serviço oferecido ao cliente."
      },
      {
        "name": "estimatedDurationMinutes",
        "type": "number",
        "description": "Duração estimada do serviço em minutos, usada para cálculo de horários disponíveis."
      },
      {
        "name": "price",
        "type": "number",
        "description": "Preço do serviço, cobrado presencialmente na loja após a execução."
      },
      {
        "name": "status",
        "type": "string",
        "enum": [
          "active",
          "inactive"
        ],
        "description": "Estado de ativação do serviço; apenas serviços ativos aparecem na listagem para clientes."
      },
      {
        "name": "createdAt",
        "type": "date",
        "description": "Data e hora de criação do registro do serviço."
      }
    ],
    "origin": {
      "source": "l4/operations",
      "ownerId": "operation:createService",
      "operationId": "createService",
      "defPath": "_102049_/l4/operations/createService.defs.ts",
      "bffName": "petShop.createService.createService"
    }
  },
  {
    "commandName": "updateService",
    "bffName": "petShop.updateService.updateService",
    "routeKey": "petShop.updateService.updateService",
    "purpose": "Editar e ativar/desativar serviço",
    "kind": "command",
    "outputShape": "object",
    "input": [
      {
        "name": "serviceId",
        "type": "string",
        "required": true,
        "description": "Identificador do serviço selecionado para edição.",
        "source": "selectedEntity",
        "presentation": "selection"
      },
      {
        "name": "name",
        "type": "string",
        "required": true,
        "description": "Nome atualizado do serviço, como banho e tosa.",
        "source": "userInput",
        "presentation": "form"
      },
      {
        "name": "description",
        "type": "string",
        "required": true,
        "description": "Descrição detalhada atualizada do serviço oferecido.",
        "source": "userInput",
        "presentation": "form"
      },
      {
        "name": "estimatedDurationMinutes",
        "type": "number",
        "required": true,
        "description": "Duração estimada atualizada do serviço em minutos.",
        "source": "userInput",
        "presentation": "form"
      },
      {
        "name": "price",
        "type": "number",
        "required": true,
        "description": "Preço atualizado do serviço cobrado na loja.",
        "source": "userInput",
        "presentation": "form"
      },
      {
        "name": "status",
        "type": "string",
        "required": true,
        "enum": [
          "active",
          "inactive"
        ],
        "description": "Novo estado de ativação do serviço: active ou inactive.",
        "source": "userInput",
        "presentation": "form"
      }
    ],
    "output": [
      {
        "name": "serviceId",
        "type": "string",
        "description": "Identificador único do serviço oferecido."
      },
      {
        "name": "name",
        "type": "string",
        "description": "Nome do serviço oferecido, como banho e tosa."
      },
      {
        "name": "description",
        "type": "string",
        "description": "Descrição detalhada do serviço oferecido ao cliente."
      },
      {
        "name": "estimatedDurationMinutes",
        "type": "number",
        "description": "Duração estimada do serviço em minutos, usada para cálculo de horários disponíveis."
      },
      {
        "name": "price",
        "type": "number",
        "description": "Preço do serviço, cobrado presencialmente na loja após a execução."
      },
      {
        "name": "status",
        "type": "string",
        "enum": [
          "active",
          "inactive"
        ],
        "description": "Estado de ativação do serviço; apenas serviços ativos aparecem na listagem para clientes."
      },
      {
        "name": "deactivatedAt",
        "type": "date",
        "description": "Data e hora em que o serviço foi desativado; desativar não cancela agendamentos já confirmados."
      },
      {
        "name": "updatedAt",
        "type": "date",
        "description": "Data e hora da última atualização do registro do serviço."
      }
    ],
    "origin": {
      "source": "l4/operations",
      "ownerId": "operation:updateService",
      "operationId": "updateService",
      "defPath": "_102049_/l4/operations/updateService.defs.ts",
      "bffName": "petShop.updateService.updateService"
    }
  }
];

export const pipeline = [
  {
    "id": "serviceManagement__l2_contract",
    "type": "l2_contract",
    "outputPath": "_102049_/l2/petShop/web/contracts/serviceManagement.ts",
    "defPath": "_102049_/l2/petShop/web/contracts/serviceManagement.defs.ts",
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeContractTs.ts"
    ],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
