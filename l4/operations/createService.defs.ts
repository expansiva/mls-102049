/// <mls fileReference="_102049_/l4/operations/createService.defs.ts" enhancement="_blank"/>

export const operationCreateService = {
  "operationId": "createService",
  "title": "Cadastrar serviço",
  "actor": "admin",
  "entity": "Service",
  "kind": "create",
  "reads": [
    "Service"
  ],
  "writes": [
    "Service"
  ],
  "rulesApplied": [
    "activeServicesOnlyListed"
  ],
  "story": {
    "actor": "admin",
    "goal": "Cadastrar um novo serviço (como banho, tosa) com nome, descrição, duração estimada e preço para que os clientes possam agendá-lo.",
    "steps": [
      "O administrador acessa a tela de cadastro de serviços.",
      "Preenche nome, descrição, duração estimada em minutos e preço do serviço.",
      "O sistema gera um identificador único, define o status como ativo e registra as datas de criação e atualização.",
      "O serviço é persistido e passa a aparecer na listagem para clientes."
    ],
    "outcome": "O novo serviço é criado com status ativo e fica disponível para agendamento pelos clientes."
  },
  "accessPattern": {
    "kind": "commandInput",
    "entity": "Service",
    "keyField": "Service.serviceId",
    "pagination": "none",
    "selection": "none",
    "output": [
      "Service.serviceId",
      "Service.name",
      "Service.description",
      "Service.estimatedDurationMinutes",
      "Service.price",
      "Service.status",
      "Service.createdAt"
    ]
  },
  "inputs": [
    {
      "inputId": "name",
      "fieldRef": "Service.name",
      "required": true,
      "source": "userInput",
      "description": "Nome do serviço oferecido, como banho e tosa."
    },
    {
      "inputId": "description",
      "fieldRef": "Service.description",
      "required": true,
      "source": "userInput",
      "description": "Descrição detalhada do serviço oferecido ao cliente."
    },
    {
      "inputId": "estimatedDurationMinutes",
      "fieldRef": "Service.estimatedDurationMinutes",
      "required": true,
      "source": "userInput",
      "description": "Duração estimada do serviço em minutos, usada para cálculo de horários disponíveis."
    },
    {
      "inputId": "price",
      "fieldRef": "Service.price",
      "required": true,
      "source": "userInput",
      "description": "Preço do serviço, cobrado presencialmente na loja após a execução."
    },
    {
      "inputId": "serviceId",
      "fieldRef": "Service.serviceId",
      "required": true,
      "source": "systemDefault",
      "description": "Identificador único do serviço, gerado automaticamente pelo sistema."
    },
    {
      "inputId": "status",
      "fieldRef": "Service.status",
      "required": true,
      "source": "systemDefault",
      "description": "Estado de ativação do serviço; ao cadastrar, o sistema define automaticamente como ativo."
    },
    {
      "inputId": "createdAt",
      "fieldRef": "Service.createdAt",
      "required": true,
      "source": "systemDefault",
      "description": "Data e hora de criação do registro, definida automaticamente pelo sistema."
    },
    {
      "inputId": "updatedAt",
      "fieldRef": "Service.updatedAt",
      "required": true,
      "source": "systemDefault",
      "description": "Data e hora da última atualização do registro, definida automaticamente pelo sistema."
    }
  ],
  "contextResolution": [
    {
      "targetRef": "Service.serviceId",
      "source": "systemDefault",
      "originRef": "systemDefault.uuid",
      "description": "O backend gera um UUID para o novo serviço no momento da persistência."
    },
    {
      "targetRef": "Service.status",
      "source": "systemDefault",
      "originRef": "systemDefault.now",
      "description": "O backend define o status inicial como 'active' para que o serviço recém-criado apareça na listagem para clientes."
    },
    {
      "targetRef": "Service.createdAt",
      "source": "systemDefault",
      "originRef": "systemDefault.now",
      "description": "O backend registra a data e hora atuais no momento da criação do registro."
    },
    {
      "targetRef": "Service.updatedAt",
      "source": "systemDefault",
      "originRef": "systemDefault.now",
      "description": "O backend registra a data e hora atuais no momento da criação do registro, coincidindo com createdAt."
    }
  ],
  "acceptanceAssertions": [
    "Após a confirmação, o serviço existe no sistema com o nome, descrição, duração estimada e preço fornecidos pelo administrador.",
    "O serviço recém-criado possui status igual a 'active'.",
    "O serviço recém-criado possui serviceId, createdAt e updatedAt preenchidos automaticamente pelo sistema.",
    "O serviço recém-criado aparece na listagem de serviços para clientes por estar ativo, conforme a regra activeServicesOnlyListed.",
    "O campo deactivatedAt permanece nulo após a criação do serviço."
  ],
  "pageId": "createService",
  "commandName": "createService",
  "bffName": "petShop.createService.createService",
  "capability": {
    "capabilityId": "createService",
    "title": "Cadastrar serviço",
    "actor": "admin",
    "priority": "now"
  },
  "statusFrontend": "toCreate",
  "statusBackend": "toCreate"
} as const;

export default operationCreateService;
