/// <mls fileReference="_102049_/l4/operations/updateService.defs.ts" enhancement="_blank"/>

export const operationUpdateService = {
  "operationId": "updateService",
  "title": "Editar e ativar/desativar serviço",
  "actor": "admin",
  "entity": "Service",
  "kind": "update",
  "reads": [
    "Service",
    "ServiceBooking"
  ],
  "writes": [
    "Service"
  ],
  "rulesApplied": [
    "activeServicesOnlyListed",
    "deactivatingServiceDoesNotCancelBookings"
  ],
  "story": {
    "actor": "admin",
    "goal": "Atualizar as informações de um serviço existente (nome, descrição, duração estimada, preço) e controlar se ele fica ativo ou inativo para agendamento pelos clientes.",
    "steps": [
      "O administrador seleciona um serviço existente na lista de serviços cadastrados.",
      "O sistema carrega os dados atuais do serviço para edição.",
      "O administrador edita os campos desejados (nome, descrição, duração estimada, preço) e define o status como ativo ou inativo.",
      "O administrador confirma a atualização.",
      "O sistema persiste as alterações, atualiza updatedAt e, se desativado, registra deactivatedAt, sem cancelar agendamentos já confirmados."
    ],
    "outcome": "O serviço é atualizado com os novos dados e status; serviços inativos deixam de aparecer na listagem para clientes, mas agendamentos confirmados permanecem válidos."
  },
  "accessPattern": {
    "kind": "commandInput",
    "entity": "Service",
    "keyField": "Service.serviceId",
    "pagination": "none",
    "selection": "single",
    "output": [
      "Service.serviceId",
      "Service.name",
      "Service.description",
      "Service.estimatedDurationMinutes",
      "Service.price",
      "Service.status",
      "Service.deactivatedAt",
      "Service.updatedAt"
    ]
  },
  "inputs": [
    {
      "inputId": "serviceId",
      "fieldRef": "Service.serviceId",
      "required": true,
      "source": "selectedEntity",
      "description": "Identificador do serviço selecionado para edição."
    },
    {
      "inputId": "name",
      "fieldRef": "Service.name",
      "required": true,
      "source": "userInput",
      "description": "Nome atualizado do serviço, como banho e tosa."
    },
    {
      "inputId": "description",
      "fieldRef": "Service.description",
      "required": true,
      "source": "userInput",
      "description": "Descrição detalhada atualizada do serviço oferecido."
    },
    {
      "inputId": "estimatedDurationMinutes",
      "fieldRef": "Service.estimatedDurationMinutes",
      "required": true,
      "source": "userInput",
      "description": "Duração estimada atualizada do serviço em minutos."
    },
    {
      "inputId": "price",
      "fieldRef": "Service.price",
      "required": true,
      "source": "userInput",
      "description": "Preço atualizado do serviço cobrado na loja."
    },
    {
      "inputId": "status",
      "fieldRef": "Service.status",
      "required": true,
      "source": "userInput",
      "description": "Novo estado de ativação do serviço: active ou inactive."
    },
    {
      "inputId": "updatedAt",
      "fieldRef": "Service.updatedAt",
      "required": true,
      "source": "systemDefault",
      "description": "Data e hora da última atualização, definida automaticamente pelo sistema."
    },
    {
      "inputId": "deactivatedAt",
      "fieldRef": "Service.deactivatedAt",
      "required": false,
      "source": "systemDefault",
      "description": "Data e hora de desativação, definida automaticamente quando o status passa a inactive."
    }
  ],
  "contextResolution": [
    {
      "targetRef": "Service.serviceId",
      "source": "selectedEntity",
      "originRef": "Service.serviceId",
      "description": "O backend resolve o serviceId a partir do serviço atualmente selecionado pelo administrador na lista de serviços."
    },
    {
      "targetRef": "Service.updatedAt",
      "source": "systemDefault",
      "originRef": "systemDefault.now",
      "description": "O backend define updatedAt com o timestamp atual no momento da persistência da atualização."
    },
    {
      "targetRef": "Service.deactivatedAt",
      "source": "systemDefault",
      "originRef": "systemDefault.now",
      "description": "O backend define deactivatedAt com o timestamp atual quando o status do serviço passa a inactive; permanece nulo quando o status é active."
    }
  ],
  "acceptanceAssertions": [
    "Após a confirmação, o serviço existe com os campos name, description, estimatedDurationMinutes e price atualizados conforme os valores informados pelo administrador.",
    "Após a confirmação, o campo status do serviço reflete a escolha do administrador (active ou inactive).",
    "Quando o serviço é desativado (status = inactive), o campo deactivatedAt é preenchido com a data e hora atuais.",
    "Quando o serviço é ativado (status = active), o campo deactivatedAt permanece nulo.",
    "O campo updatedAt é atualizado para o timestamp atual após a confirmação da edição.",
    "Desativar um serviço não cancela nem altera agendamentos já confirmados em ServiceBooking.",
    "Após a atualização, apenas serviços com status active aparecem na listagem de serviços para clientes."
  ],
  "pageId": "updateService",
  "commandName": "updateService",
  "bffName": "petShop.updateService.updateService",
  "capability": {
    "capabilityId": "updateService",
    "title": "Editar e ativar/desativar serviço",
    "actor": "admin",
    "priority": "now"
  },
  "statusFrontend": "toCreate",
  "statusBackend": "toCreate"
} as const;

export default operationUpdateService;
