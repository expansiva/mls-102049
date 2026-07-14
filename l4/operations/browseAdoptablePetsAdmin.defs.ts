/// <mls fileReference="_102049_/l4/operations/browseAdoptablePetsAdmin.defs.ts" enhancement="_blank"/>

export const operationBrowseAdoptablePetsAdmin = {
  "operationId": "browseAdoptablePetsAdmin",
  "title": "Listar pets para adoção cadastrados",
  "actor": "admin",
  "entity": "AdoptablePet",
  "kind": "query",
  "reads": [
    "AdoptablePet"
  ],
  "writes": [],
  "rulesApplied": [
    "onlyAvailablePetsShownInGallery"
  ],
  "story": {
    "actor": "admin",
    "goal": "Visualizar todos os pets para adoção cadastrados para gerenciar suas informações e disponibilidade na galeria pública.",
    "steps": [
      "O administrador acessa a tela de gestão de pets para adoção.",
      "O sistema lista todos os pets cadastrados com nome, idade, descrição, foto e status de disponibilidade.",
      "O administrador pode filtrar por status (disponível ou indisponível) para localizar pets específicos."
    ],
    "outcome": "O administrador visualiza a lista completa de pets cadastrados e seus respectivos status de disponibilidade, podendo identificar quais aparecem na galeria pública."
  },
  "accessPattern": {
    "kind": "list",
    "entity": "AdoptablePet",
    "keyField": "AdoptablePet.adoptablePetId",
    "pagination": "optional",
    "selection": "none",
    "output": [
      "AdoptablePet.adoptablePetId",
      "AdoptablePet.name",
      "AdoptablePet.age",
      "AdoptablePet.description",
      "AdoptablePet.photoUrl",
      "AdoptablePet.status",
      "AdoptablePet.createdAt",
      "AdoptablePet.updatedAt"
    ]
  },
  "inputs": [
    {
      "inputId": "statusFilter",
      "fieldRef": "AdoptablePet.status",
      "required": false,
      "source": "userInput",
      "description": "Filtro opcional de status (available ou unavailable) para restringir a lista de pets exibida."
    }
  ],
  "contextResolution": [
    {
      "targetRef": "AdoptablePet.adoptablePetId",
      "source": "actorSession",
      "originRef": "actorSession.actorId",
      "description": "O backend identifica o administrador autenticado via sessão para autorizar o acesso à lista de pets cadastrados."
    }
  ],
  "acceptanceAssertions": [
    "A lista retornada contém todos os pets cadastrados no sistema com seus respectivos campos name, age, description, photoUrl e status.",
    "Cada pet na lista exibe o status de disponibilidade (available ou unavailable) permitindo ao administrador identificar quais aparecem na galeria pública.",
    "Quando o filtro de status é aplicado, apenas os pets cujo status corresponde ao valor informado são retornados.",
    "A lista é ordenada pelos pets cadastrados mais recentemente primeiro, com base no campo createdAt."
  ],
  "pageId": "browseAdoptablePetsAdmin",
  "commandName": "browseAdoptablePetsAdmin",
  "bffName": "petShop.browseAdoptablePetsAdmin.browseAdoptablePetsAdmin",
  "capability": {
    "capabilityId": "browseAdoptablePetsAdmin",
    "title": "Listar pets para adoção cadastrados",
    "actor": "admin",
    "priority": "now"
  },
  "statusFrontend": "toCreate",
  "statusBackend": "toCreate"
} as const;

export default operationBrowseAdoptablePetsAdmin;
