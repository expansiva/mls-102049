/// <mls fileReference="_102049_/l4/operations/browseServices.defs.ts" enhancement="_blank"/>

export const operationBrowseServices = {
  "operationId": "browseServices",
  "title": "Listar serviços cadastrados",
  "actor": "admin",
  "entity": "Service",
  "kind": "query",
  "reads": [
    "Service"
  ],
  "writes": [],
  "rulesApplied": [],
  "story": {
    "actor": "admin",
    "goal": "Visualizar todos os serviços cadastrados no pet shop para gerenciar sua oferta, incluindo ativos e inativos.",
    "steps": [
      "O administrador acessa a tela de gestão de serviços",
      "O sistema retorna a lista de todos os serviços cadastrados com nome, descrição, duração estimada, preço e status de ativação",
      "O administrador pode filtrar e ordenar a listagem para localizar serviços específicos"
    ],
    "outcome": "O administrador visualiza a lista completa de serviços cadastrados, podendo identificar quais estão ativos ou inativos para decisão de gestão."
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
      "Service.price",
      "Service.status",
      "Service.deactivatedAt",
      "Service.createdAt",
      "Service.updatedAt"
    ]
  },
  "inputs": [
    {
      "inputId": "statusFilter",
      "fieldRef": "Service.status",
      "required": false,
      "source": "userInput",
      "description": "Filtro opcional por status de ativação (active ou inactive) para restringir a listagem."
    },
    {
      "inputId": "actorId",
      "fieldRef": "Operator.operatorId",
      "required": true,
      "source": "actorSession",
      "description": "Identificador do administrador autenticado que solicita a listagem."
    }
  ],
  "contextResolution": [
    {
      "targetRef": "Operator.operatorId",
      "source": "actorSession",
      "originRef": "actorSession.actorId",
      "description": "O backend resolve o identificador do administrador a partir da sessão ativa do ator autenticado."
    }
  ],
  "acceptanceAssertions": [
    "A listagem retorna todos os serviços cadastrados, incluindo tanto serviços ativos quanto inativos",
    "Cada serviço exibido contém nome, descrição, duração estimada em minutos, preço e status de ativação",
    "O administrador pode filtrar a listagem por status (active ou inactive) opcionalmente",
    "A listagem suporta paginação opcional para lidar com grande volume de serviços cadastrados"
  ],
  "pageId": "browseServices",
  "commandName": "browseServices",
  "bffName": "petShop.browseServices.browseServices",
  "capability": {
    "capabilityId": "browseServices",
    "title": "Listar serviços cadastrados",
    "actor": "admin",
    "priority": "now"
  },
  "statusFrontend": "toCreate",
  "statusBackend": "toCreate"
} as const;

export default operationBrowseServices;
