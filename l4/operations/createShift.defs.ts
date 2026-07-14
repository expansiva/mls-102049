/// <mls fileReference="_102049_/l4/operations/createShift.defs.ts" enhancement="_blank"/>

export const operationCreateShift = {
  "operationId": "createShift",
  "title": "Criar turno de trabalho",
  "actor": "admin",
  "entity": "Shift",
  "kind": "create",
  "reads": [
    "Shift"
  ],
  "writes": [
    "Shift"
  ],
  "rulesApplied": [
    "businessHoursForScheduling"
  ],
  "story": {
    "actor": "admin",
    "goal": "Criar um turno de trabalho recorrente especificando nome, horário de início e fim e os dias da semana em que ele se repete.",
    "steps": [
      "O administrador acessa a tela de gestão de turnos e solicita a criação de um novo turno.",
      "O administrador informa o nome do turno, horário de início (HH:mm), horário de fim (HH:mm) e marca os dias da semana em que o turno ocorre.",
      "O administrador confirma a criação e o sistema gera um identificador único, registra as datas de criação e atualização e persiste o turno.",
      "O turno criado fica disponível para alocação de operadores e cálculo de capacidade de agendamento."
    ],
    "outcome": "Um novo turno de trabalho é criado com os horários e dias da semana definidos, pronto para receber alocações de operadores."
  },
  "accessPattern": {
    "kind": "commandInput",
    "entity": "Shift",
    "keyField": "Shift.shiftId",
    "pagination": "none",
    "selection": "single",
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
      "Shift.createdAt"
    ]
  },
  "inputs": [
    {
      "inputId": "name",
      "fieldRef": "Shift.name",
      "required": true,
      "source": "userInput",
      "description": "Nome do turno para identificação (ex.: Manhã, Tarde, Dia Inteiro)."
    },
    {
      "inputId": "startTime",
      "fieldRef": "Shift.startTime",
      "required": true,
      "source": "userInput",
      "description": "Horário de início do turno no formato HH:mm (ex.: 09:00)."
    },
    {
      "inputId": "endTime",
      "fieldRef": "Shift.endTime",
      "required": true,
      "source": "userInput",
      "description": "Horário de fim do turno no formato HH:mm (ex.: 18:00)."
    },
    {
      "inputId": "monday",
      "fieldRef": "Shift.monday",
      "required": true,
      "source": "userInput",
      "description": "Indica se o turno ocorre às segundas-feiras."
    },
    {
      "inputId": "tuesday",
      "fieldRef": "Shift.tuesday",
      "required": true,
      "source": "userInput",
      "description": "Indica se o turno ocorre às terças-feiras."
    },
    {
      "inputId": "wednesday",
      "fieldRef": "Shift.wednesday",
      "required": true,
      "source": "userInput",
      "description": "Indica se o turno ocorre às quartas-feiras."
    },
    {
      "inputId": "thursday",
      "fieldRef": "Shift.thursday",
      "required": true,
      "source": "userInput",
      "description": "Indica se o turno ocorre às quintas-feiras."
    },
    {
      "inputId": "friday",
      "fieldRef": "Shift.friday",
      "required": true,
      "source": "userInput",
      "description": "Indica se o turno ocorre às sextas-feiras."
    },
    {
      "inputId": "saturday",
      "fieldRef": "Shift.saturday",
      "required": true,
      "source": "userInput",
      "description": "Indica se o turno ocorre aos sábados."
    },
    {
      "inputId": "sunday",
      "fieldRef": "Shift.sunday",
      "required": true,
      "source": "userInput",
      "description": "Indica se o turno ocorre aos domingos."
    },
    {
      "inputId": "active",
      "fieldRef": "Shift.active",
      "required": true,
      "source": "userInput",
      "description": "Indica se o turno está ativo e disponível para alocação de operadores e agendamentos."
    },
    {
      "inputId": "shiftId",
      "fieldRef": "Shift.shiftId",
      "required": true,
      "source": "systemDefault",
      "description": "Identificador único do turno gerado automaticamente pelo sistema."
    },
    {
      "inputId": "createdAt",
      "fieldRef": "Shift.createdAt",
      "required": true,
      "source": "systemDefault",
      "description": "Data e hora de criação do turno, definida automaticamente pelo sistema."
    },
    {
      "inputId": "updatedAt",
      "fieldRef": "Shift.updatedAt",
      "required": true,
      "source": "systemDefault",
      "description": "Data e hora da última atualização do turno, definida automaticamente como a data de criação."
    }
  ],
  "contextResolution": [
    {
      "targetRef": "Shift.shiftId",
      "source": "systemDefault",
      "originRef": "systemDefault.uuid",
      "description": "O backend gera um UUID v4 para o identificador único do turno no momento da criação."
    },
    {
      "targetRef": "Shift.createdAt",
      "source": "systemDefault",
      "originRef": "systemDefault.now",
      "description": "O backend registra o timestamp atual do servidor como data de criação do turno."
    },
    {
      "targetRef": "Shift.updatedAt",
      "source": "systemDefault",
      "originRef": "systemDefault.now",
      "description": "O backend registra o timestamp atual do servidor como data de atualização do turno, igual à data de criação na criação."
    }
  ],
  "acceptanceAssertions": [
    "Após a confirmação, o turno existe com o nome, startTime e endTime informados pelo administrador.",
    "O turno criado possui os flags de dias da semana (monday a sunday) com os valores informados pelo administrador.",
    "O turno criado possui um shiftId único gerado automaticamente pelo sistema.",
    "O turno criado possui createdAt e updatedAt preenchidos com o timestamp atual do servidor.",
    "O turno criado está disponível para alocação de operadores quando o campo active é verdadeiro.",
    "O horário de funcionamento definido pelo turno (startTime e endTime) passa a ser considerado para agendamentos conforme a regra businessHoursForScheduling."
  ],
  "pageId": "createShift",
  "commandName": "createShift",
  "bffName": "petShop.createShift.createShift",
  "capability": {
    "capabilityId": "createShift",
    "title": "Criar turno de trabalho",
    "actor": "admin",
    "priority": "now"
  },
  "statusFrontend": "toCreate",
  "statusBackend": "toCreate"
} as const;

export default operationCreateShift;
