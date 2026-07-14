/// <mls fileReference="_102049_/l4/operations/viewAdoptablePetDetails.defs.ts" enhancement="_blank"/>

export const operationViewAdoptablePetDetails = {
  "operationId": "viewAdoptablePetDetails",
  "title": "Ver detalhes do pet para adoção",
  "actor": "cliente",
  "entity": "AdoptablePet",
  "kind": "view",
  "reads": [
    "AdoptablePet"
  ],
  "writes": [],
  "rulesApplied": [
    "onlyAvailablePetsShownInGallery"
  ],
  "story": {
    "actor": "cliente",
    "goal": "Visualizar informações detalhadas de um pet disponível para adoção selecionado na galeria",
    "steps": [
      "O cliente seleciona um pet na galeria de adoção",
      "O sistema recupera os detalhes completos do pet pelo seu identificador",
      "O sistema verifica que o pet está com status available antes de exibir",
      "O cliente visualiza nome, idade, descrição e foto ampliada do pet"
    ],
    "outcome": "O cliente vê a ficha detalhada do pet selecionado, podendo decidir se deseja manifestar interesse na adoção"
  },
  "accessPattern": {
    "kind": "getById",
    "entity": "AdoptablePet",
    "keyField": "AdoptablePet.adoptablePetId",
    "pagination": "none",
    "selection": "single",
    "output": [
      "AdoptablePet.name",
      "AdoptablePet.age",
      "AdoptablePet.description",
      "AdoptablePet.photoUrl",
      "AdoptablePet.status"
    ]
  },
  "inputs": [
    {
      "inputId": "adoptablePetId",
      "fieldRef": "AdoptablePet.adoptablePetId",
      "required": true,
      "source": "routeParam",
      "description": "Identificador do pet selecionado na galeria, passado como parâmetro de rota"
    }
  ],
  "contextResolution": [
    {
      "targetRef": "AdoptablePet.adoptablePetId",
      "source": "routeParam",
      "originRef": "routeParam.adoptablePetId",
      "description": "O backend extrai o identificador do pet do parâmetro de rota da URL para buscar o registro correspondente"
    }
  ],
  "acceptanceAssertions": [
    "O sistema retorna os dados do pet cujo adoptablePetId corresponde ao parâmetro de rota informado",
    "O sistema retorna os campos name, age, description, photoUrl e status do pet",
    "O sistema não retorna detalhes de pets com status unavailable, aplicando a regra de que apenas pets disponíveis são exibidos na galeria",
    "A foto do pet é exibida a partir da URL armazenada em photoUrl no armazenamento de mídia da plataforma"
  ],
  "pageId": "viewAdoptablePetDetails",
  "commandName": "viewAdoptablePetDetails",
  "bffName": "petShop.viewAdoptablePetDetails.viewAdoptablePetDetails",
  "capability": {
    "capabilityId": "viewAdoptablePetDetails",
    "title": "Ver detalhes do pet para adoção",
    "actor": "cliente",
    "priority": "now"
  },
  "statusFrontend": "toCreate",
  "statusBackend": "toCreate"
} as const;

export default operationViewAdoptablePetDetails;
