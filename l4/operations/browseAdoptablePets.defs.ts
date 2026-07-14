/// <mls fileReference="_102049_/l4/operations/browseAdoptablePets.defs.ts" enhancement="_blank"/>

export const operationBrowseAdoptablePets = {
  "operationId": "browseAdoptablePets",
  "title": "Navegar na galeria de adoção",
  "actor": "cliente",
  "entity": "AdoptablePet",
  "kind": "query",
  "reads": [
    "AdoptablePet"
  ],
  "writes": [],
  "rulesApplied": [
    "onlyAvailablePetsShownInGallery",
    "petImageUsesPlatformStorage"
  ],
  "story": {
    "actor": "cliente",
    "goal": "Visualizar a galeria de pets disponíveis para adoção com fotos e informações básicas de cada animal.",
    "steps": [
      "O cliente acessa a galeria de adoção a partir da página inicial.",
      "O sistema retorna a lista paginada de pets marcados como disponíveis pelo administrador.",
      "O cliente visualiza nome, idade, descrição e foto de cada pet disponível."
    ],
    "outcome": "O cliente vê a galeria de pets disponíveis para adoção e pode selecionar um para ver detalhes."
  },
  "accessPattern": {
    "kind": "list",
    "entity": "AdoptablePet",
    "keyField": "AdoptablePet.adoptablePetId",
    "pagination": "required",
    "selection": "none",
    "output": [
      "AdoptablePet.adoptablePetId",
      "AdoptablePet.name",
      "AdoptablePet.age",
      "AdoptablePet.description",
      "AdoptablePet.photoUrl"
    ]
  },
  "inputs": [],
  "contextResolution": [
    {
      "targetRef": "AdoptablePet.status",
      "source": "systemDefault",
      "originRef": "systemDefault.now",
      "description": "O backend aplica automaticamente o filtro status='available' a todas as consultas da galeria, garantindo que apenas pets disponíveis sejam retornados conforme a regra de domínio."
    }
  ],
  "acceptanceAssertions": [
    "A galeria retorna apenas pets com status 'available'; pets com status 'unavailable' não aparecem na listagem.",
    "Cada item da galeria exibe nome, idade, descrição e photoUrl do pet.",
    "A listagem é paginada e ordenada por data de cadastro (createdAt) dos pets disponíveis.",
    "O cliente consegue navegar entre as páginas da galeria sem precisar fornecer filtros manuais."
  ],
  "pageId": "browseAdoptablePets",
  "commandName": "browseAdoptablePets",
  "bffName": "petShop.browseAdoptablePets.browseAdoptablePets",
  "capability": {
    "capabilityId": "browseAdoptablePets",
    "title": "Navegar na galeria de adoção",
    "actor": "cliente",
    "priority": "now"
  },
  "statusFrontend": "toCreate",
  "statusBackend": "toCreate"
} as const;

export default operationBrowseAdoptablePets;
