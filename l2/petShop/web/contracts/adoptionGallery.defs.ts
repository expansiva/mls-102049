/// <mls fileReference="_102049_/l2/petShop/web/contracts/adoptionGallery.defs.ts" enhancement="_blank"/>

export const definition = [
  {
    "commandName": "browseAdoptablePets",
    "bffName": "petShop.browseAdoptablePets.browseAdoptablePets",
    "routeKey": "petShop.browseAdoptablePets.browseAdoptablePets",
    "purpose": "Navegar na galeria de adoção",
    "kind": "query",
    "outputShape": "paginated",
    "input": [],
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
      }
    ],
    "origin": {
      "source": "l4/operations",
      "ownerId": "operation:browseAdoptablePets",
      "operationId": "browseAdoptablePets",
      "defPath": "_102049_/l4/operations/browseAdoptablePets.defs.ts",
      "bffName": "petShop.browseAdoptablePets.browseAdoptablePets"
    }
  },
  {
    "commandName": "viewAdoptablePetDetails",
    "bffName": "petShop.viewAdoptablePetDetails.viewAdoptablePetDetails",
    "routeKey": "petShop.viewAdoptablePetDetails.viewAdoptablePetDetails",
    "purpose": "Ver detalhes do pet para adoção",
    "kind": "query",
    "outputShape": "object",
    "input": [
      {
        "name": "adoptablePetId",
        "type": "string",
        "required": true,
        "description": "Identificador do pet selecionado na galeria, passado como parâmetro de rota",
        "source": "routeParam",
        "presentation": "route"
      }
    ],
    "output": [
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
      }
    ],
    "origin": {
      "source": "l4/operations",
      "ownerId": "operation:viewAdoptablePetDetails",
      "operationId": "viewAdoptablePetDetails",
      "defPath": "_102049_/l4/operations/viewAdoptablePetDetails.defs.ts",
      "bffName": "petShop.viewAdoptablePetDetails.viewAdoptablePetDetails"
    }
  },
  {
    "commandName": "expressAdoptionInterest",
    "bffName": "petShop.expressAdoptionInterest.expressAdoptionInterest",
    "routeKey": "petShop.expressAdoptionInterest.expressAdoptionInterest",
    "purpose": "Manifestar interesse em adoção",
    "kind": "command",
    "outputShape": "object",
    "input": [
      {
        "name": "adoptablePetId",
        "type": "string",
        "required": true,
        "description": "Pet disponível para adoção selecionado pelo cliente no site.",
        "source": "selectedEntity",
        "presentation": "selection"
      },
      {
        "name": "customerName",
        "type": "string",
        "required": true,
        "description": "Nome completo do cliente que manifesta interesse em adotar.",
        "source": "userInput",
        "presentation": "form"
      },
      {
        "name": "customerEmail",
        "type": "string",
        "required": true,
        "description": "E-mail de contato do cliente para comunicação sobre a adoção.",
        "source": "userInput",
        "presentation": "form"
      },
      {
        "name": "customerPhone",
        "type": "string",
        "required": false,
        "description": "Telefone de contato do cliente para agendamento da visita presencial.",
        "source": "userInput",
        "presentation": "form"
      }
    ],
    "output": [
      {
        "name": "adoptionInterestId",
        "type": "string",
        "description": "Identificador único da manifestação de interesse em adoção."
      },
      {
        "name": "status",
        "type": "string",
        "enum": [
          "registered",
          "completed",
          "cancelled"
        ],
        "description": "Situação atual da manifestação de interesse: registrada, concluída ou cancelada."
      },
      {
        "name": "adoptablePetId",
        "type": "string",
        "description": "Referência ao pet disponível para adoção que é objeto do interesse."
      },
      {
        "name": "customerName",
        "type": "string",
        "description": "Nome completo do cliente que manifesta interesse em adotar."
      },
      {
        "name": "createdAt",
        "type": "date",
        "description": "Data e hora em que o interesse foi registrado pelo cliente no site."
      }
    ],
    "origin": {
      "source": "l4/operations",
      "ownerId": "operation:expressAdoptionInterest",
      "operationId": "expressAdoptionInterest",
      "defPath": "_102049_/l4/operations/expressAdoptionInterest.defs.ts",
      "bffName": "petShop.expressAdoptionInterest.expressAdoptionInterest"
    }
  }
];

export const pipeline = [
  {
    "id": "adoptionGallery__l2_contract",
    "type": "l2_contract",
    "outputPath": "_102049_/l2/petShop/web/contracts/adoptionGallery.ts",
    "defPath": "_102049_/l2/petShop/web/contracts/adoptionGallery.defs.ts",
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeContractTs.ts"
    ],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
