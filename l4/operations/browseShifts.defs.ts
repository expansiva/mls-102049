/// <mls fileReference="_102049_/l4/operations/browseShifts.defs.ts" enhancement="_blank"/>

export const operationBrowseShifts = {
  "operationId": "browseShifts",
  "title": "Listar turnos de trabalho",
  "actor": "admin",
  "entity": "Shift",
  "kind": "query",
  "reads": [
    "Shift"
  ],
  "writes": [],
  "rulesApplied": [
    "businessHoursForScheduling",
    "operatorMultipleShiftsAllowed"
  ],
  "story": {
    "actor": "admin",
    "goal": "Visualizar todos os turnos de trabalho cadastrados para gerenciar horários e alocações de operadores.",
    "steps": [
      "O administrador acessa a tela de gestão de turnos.",
      "O sistema retorna a lista de todos os turnos cadastrados com nome, horário de início e fim, dias da semana e status ativo.",
      "O administrador pode filtrar por turnos ativos e ordenar os resultados."
    ],
    "outcome": "O administrador vê a lista completa de turnos de trabalho, podendo identificar cada turno por nome, horários e dias de funcionamento."
  },
  "accessPattern": {
    "kind": "list",
    "entity": "Shift",
    "keyField": "Shift.shiftId",
    "pagination": "optional",
    "selection": "none",
    "output": [
      "Shift.shiftId",
      "Shift.name",
      "Shift.startTime",
      "Shift.endTime",
      "Shift.monday",
      "Shift.tuesday",
      "Shift.wednesday",
      "Shift.thursday",
      "Shift.friday",
      "Shift.saturday",
      "Shift.sunday",
      "Shift.active",
      "Shift.createdAt",
      "Shift.updatedAt"
    ]
  },
  "inputs": [
    {
      "inputId": "activeFilter",
      "fieldRef": "Shift.active",
      "required": false,
      "source": "userInput",
      "description": "Filtro opcional para exibir apenas turnos ativos ou inativos."
    },
    {
      "inputId": "actorId",
      "fieldRef": "Shift.shiftId",
      "required": true,
      "source": "actorSession",
      "description": "Identificador do administrador autenticado que solicita a lista de turnos."
    }
  ],
  "contextResolution": [
    {
      "targetRef": "actorId",
      "source": "actorSession",
      "originRef": "actorSession.actorId",
      "description": "O backend resolve o identificador do administrador a partir da sessão ativa do ator autenticado."
    }
  ],
  "acceptanceAssertions": [
    "A lista retornada contém todos os turnos de trabalho cadastrados no sistema.",
    "Cada turno na lista exibe nome, horário de início, horário de fim, os dias da semana em que ocorre e o status ativo.",
    "O filtro por turno ativo, quando aplicado, retorna apenas turnos com active = true.",
    "A lista pode ser paginada quando o número de turnos excede o limite de resultados por página.",
    "Os turnos retornados respeitam a regra de horário de funcionamento para agendamentos (segunda a sábado, 09:00 às 18:00) como configuração base."
  ],
  "pageId": "browseShifts",
  "commandName": "browseShifts",
  "bffName": "petShop.browseShifts.browseShifts",
  "capability": {
    "capabilityId": "browseShifts",
    "title": "Listar turnos de trabalho",
    "actor": "admin",
    "priority": "now"
  },
  "statusFrontend": "toCreate",
  "statusBackend": "toCreate"
} as const;

export default operationBrowseShifts;
