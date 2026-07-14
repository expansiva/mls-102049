/// <mls fileReference="_102049_/l2/petShop/web/contracts/petManagement.defs.ts" enhancement="_blank"/>

export const definition = [
  {
    "commandName": "browseAdoptablePetsAdmin",
    "bffName": "petShop.browseAdoptablePetsAdmin.browseAdoptablePetsAdmin",
    "routeKey": "petShop.browseAdoptablePetsAdmin.browseAdoptablePetsAdmin",
    "purpose": "Listar pets para adoção cadastrados",
    "kind": "query",
    "outputShape": "paginated",
    "input": [
      {
        "name": "statusFilter",
        "type": "string",
        "required": false,
        "enum": [
          "available",
          "unavailable"
        ],
        "description": "Filtro opcional de status (available ou unavailable) para restringir a lista de pets exibida.",
        "source": "userInput",
        "presentation": "form"
      }
    ],
    "output": [
      {
        "name": "adoptablePetId",
        "type": "string",
        "description": "Identificador único do pet para adoção"
      },
      {
        "name": "name",
        "type": "string",
        "description": "Nome do pet"
      },
      {
        "name": "age",
        "type": "number",
        "description": "Idade do pet em anos"
      },
      {
        "name": "description",
        "type": "string",
        "description": "Descrição do pet exibida na galeria pública"
      },
      {
        "name": "photoUrl",
        "type": "string",
        "description": "URL da foto do pet no armazenamento de mídia da plataforma"
      },
      {
        "name": "status",
        "type": "string",
        "enum": [
          "available",
          "unavailable"
        ],
        "description": "Disponibilidade do pet para adoção, controla exibição na galeria"
      },
      {
        "name": "createdAt",
        "type": "date",
        "description": "Data e hora de cadastro do pet"
      },
      {
        "name": "updatedAt",
        "type": "date",
        "description": "Data e hora da última atualização do pet"
      }
    ],
    "origin": {
      "source": "l4/operations",
      "ownerId": "operation:browseAdoptablePetsAdmin",
      "operationId": "browseAdoptablePetsAdmin",
      "defPath": "_102049_/l4/operations/browseAdoptablePetsAdmin.defs.ts",
      "bffName": "petShop.browseAdoptablePetsAdmin.browseAdoptablePetsAdmin"
    }
  },
  {
    "commandName": "createAdoptablePet",
    "bffName": "petShop.createAdoptablePet.createAdoptablePet",
    "routeKey": "petShop.createAdoptablePet.createAdoptablePet",
    "purpose": "Cadastrar pet para adoção",
    "kind": "command",
    "outputShape": "object",
    "input": [
      {
        "name": "name",
        "type": "string",
        "required": true,
        "description": "Nome do pet informado pelo administrador",
        "source": "userInput",
        "presentation": "form"
      },
      {
        "name": "age",
        "type": "number",
        "required": true,
        "description": "Idade do pet em anos informada pelo administrador",
        "source": "userInput",
        "presentation": "form"
      },
      {
        "name": "description",
        "type": "string",
        "required": true,
        "description": "Descrição do pet exibida na galeria pública",
        "source": "userInput",
        "presentation": "form"
      },
      {
        "name": "photoUrl",
        "type": "string",
        "required": true,
        "description": "URL da foto do pet no armazenamento de mídia da plataforma",
        "source": "userInput",
        "presentation": "form"
      }
    ],
    "output": [
      {
        "name": "adoptablePetId",
        "type": "string",
        "description": "Identificador único do pet para adoção"
      },
      {
        "name": "name",
        "type": "string",
        "description": "Nome do pet"
      },
      {
        "name": "age",
        "type": "number",
        "description": "Idade do pet em anos"
      },
      {
        "name": "description",
        "type": "string",
        "description": "Descrição do pet exibida na galeria pública"
      },
      {
        "name": "photoUrl",
        "type": "string",
        "description": "URL da foto do pet no armazenamento de mídia da plataforma"
      },
      {
        "name": "status",
        "type": "string",
        "enum": [
          "available",
          "unavailable"
        ],
        "description": "Disponibilidade do pet para adoção, controla exibição na galeria"
      },
      {
        "name": "createdAt",
        "type": "date",
        "description": "Data e hora de cadastro do pet"
      }
    ],
    "origin": {
      "source": "l4/operations",
      "ownerId": "operation:createAdoptablePet",
      "operationId": "createAdoptablePet",
      "defPath": "_102049_/l4/operations/createAdoptablePet.defs.ts",
      "bffName": "petShop.createAdoptablePet.createAdoptablePet"
    }
  },
  {
    "commandName": "updateAdoptablePet",
    "bffName": "petShop.updateAdoptablePet.updateAdoptablePet",
    "routeKey": "petShop.updateAdoptablePet.updateAdoptablePet",
    "purpose": "Editar pet e controlar disponibilidade",
    "kind": "command",
    "outputShape": "object",
    "input": [
      {
        "name": "adoptablePetId",
        "type": "string",
        "required": true,
        "description": "Identificador do pet selecionado para edição na lista de gestão",
        "source": "selectedEntity",
        "presentation": "selection"
      },
      {
        "name": "name",
        "type": "string",
        "required": true,
        "description": "Nome do pet editado pelo administrador",
        "source": "userInput",
        "presentation": "form"
      },
      {
        "name": "age",
        "type": "number",
        "required": true,
        "description": "Idade do pet em anos editada pelo administrador",
        "source": "userInput",
        "presentation": "form"
      },
      {
        "name": "description",
        "type": "string",
        "required": true,
        "description": "Descrição do pet editada pelo administrador",
        "source": "userInput",
        "presentation": "form"
      },
      {
        "name": "photoUrl",
        "type": "string",
        "required": true,
        "description": "URL da foto do pet no armazenamento de mídia da plataforma",
        "source": "userInput",
        "presentation": "form"
      },
      {
        "name": "status",
        "type": "string",
        "required": true,
        "enum": [
          "available",
          "unavailable"
        ],
        "description": "Disponibilidade do pet: available ou unavailable",
        "source": "userInput",
        "presentation": "form"
      }
    ],
    "output": [
      {
        "name": "adoptablePetId",
        "type": "string",
        "description": "Identificador único do pet para adoção"
      },
      {
        "name": "name",
        "type": "string",
        "description": "Nome do pet"
      },
      {
        "name": "age",
        "type": "number",
        "description": "Idade do pet em anos"
      },
      {
        "name": "description",
        "type": "string",
        "description": "Descrição do pet exibida na galeria pública"
      },
      {
        "name": "photoUrl",
        "type": "string",
        "description": "URL da foto do pet no armazenamento de mídia da plataforma"
      },
      {
        "name": "status",
        "type": "string",
        "enum": [
          "available",
          "unavailable"
        ],
        "description": "Disponibilidade do pet para adoção, controla exibição na galeria"
      },
      {
        "name": "updatedAt",
        "type": "date",
        "description": "Data e hora da última atualização do pet"
      }
    ],
    "origin": {
      "source": "l4/operations",
      "ownerId": "operation:updateAdoptablePet",
      "operationId": "updateAdoptablePet",
      "defPath": "_102049_/l4/operations/updateAdoptablePet.defs.ts",
      "bffName": "petShop.updateAdoptablePet.updateAdoptablePet"
    }
  }
];

export const pipeline = [
  {
    "id": "petManagement__l2_contract",
    "type": "l2_contract",
    "outputPath": "_102049_/l2/petShop/web/contracts/petManagement.ts",
    "defPath": "_102049_/l2/petShop/web/contracts/petManagement.defs.ts",
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeContractTs.ts"
    ],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
