/// <mls fileReference="_102049_/l4/operations/browseServiceCatalog.defs.ts" enhancement="_blank"/>

export const operationBrowseServiceCatalog = {
  "operationId": "browseServiceCatalog",
  "title": "Ver serviços oferecidos",
  "actor": "cliente",
  "entity": "Service",
  "kind": "query",
  "reads": [
    "Service"
  ],
  "writes": [],
  "rulesApplied": [
    "activeServicesOnlyListed"
  ],
  "story": {
    "actor": "cliente",
    "goal": "Visualizar a lista de serviços oferecidos pelo pet shop com descrição, duração estimada e preço para considerar agendar um.",
    "steps": [
      "O cliente acessa a página de serviços oferecidos.",
      "O sistema lista todos os serviços com status active, exibindo nome, descrição, duração estimada e preço.",
      "O cliente revisa as opções disponíveis para decidir qual serviço agendar."
    ],
    "outcome": "O cliente visualiza a lista de serviços ativos com suas informações detalhadas, pronto para iniciar um agendamento."
  },
  "accessPattern": {
    "kind": "list",
    "entity": "Service",
    "keyField": "Service.serviceId",
    "pagination": "optional",
    "selection": "none",
    "output": [
      "Service.serviceId",
      "Service.name",
      "Service.description",
      "Service.estimatedDurationMinutes",
      "Service.price"
    ]
  },
  "inputs": [],
  "contextResolution": [],
  "acceptanceAssertions": [
    "A listagem retorna apenas serviços com status igual a active",
    "Cada serviço listado exibe nome, descrição, duração estimada em minutos e preço",
    "Serviços com status inactive não aparecem na listagem retornada",
    "A listagem pode ser paginada quando o número de serviços ativos excede o limite de página"
  ],
  "pageId": "browseServiceCatalog",
  "commandName": "browseServiceCatalog",
  "bffName": "petShop.browseServiceCatalog.browseServiceCatalog",
  "capability": {
    "capabilityId": "browseServiceCatalog",
    "title": "Ver serviços oferecidos",
    "actor": "cliente",
    "priority": "now"
  },
  "statusFrontend": "toCreate",
  "statusBackend": "toCreate"
} as const;

export default operationBrowseServiceCatalog;
