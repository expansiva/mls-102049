/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/http/controllers/createServiceBooking.defs.ts" enhancement="_blank"/>

export const createServiceBookingController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "createServiceBooking",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "serviceBookingLifecycle",
    "controllerName": "CreateServiceBookingController",
    "ownerKind": "operation",
    "outputSource": "usecase",
    "handlers": [
      {
        "handlerName": "petShopCreateServiceBookingHandler",
        "command": "createServiceBooking",
        "usecaseRef": "createServiceBooking",
        "inputTypeName": "CreateServiceBookingInput",
        "kind": "create",
        "inputContract": [
          {
            "inputId": "serviceId",
            "fieldRef": "Service.serviceId",
            "required": true,
            "source": "userInput",
            "description": "Serviço selecionado pelo cliente para agendamento."
          },
          {
            "inputId": "customerName",
            "fieldRef": "ServiceBooking.customerName",
            "required": true,
            "source": "userInput",
            "description": "Nome do cliente que realiza o agendamento."
          },
          {
            "inputId": "customerPhone",
            "fieldRef": "ServiceBooking.customerPhone",
            "required": true,
            "source": "userInput",
            "description": "Telefone de contato do cliente."
          },
          {
            "inputId": "bookingDate",
            "fieldRef": "ServiceBooking.bookingDate",
            "required": true,
            "source": "userInput",
            "description": "Data do agendamento escolhida pelo cliente, dentro do horário de funcionamento."
          },
          {
            "inputId": "bookingTime",
            "fieldRef": "ServiceBooking.bookingTime",
            "required": true,
            "source": "userInput",
            "description": "Horário do agendamento escolhido pelo cliente, dentro do intervalo de funcionamento."
          },
          {
            "inputId": "notes",
            "fieldRef": "ServiceBooking.notes",
            "required": false,
            "source": "userInput",
            "description": "Observações adicionais opcionais informadas pelo cliente."
          },
          {
            "inputId": "serviceBookingId",
            "fieldRef": "ServiceBooking.serviceBookingId",
            "required": true,
            "source": "systemDefault",
            "description": "Identificador único gerado pelo sistema para o novo agendamento."
          },
          {
            "inputId": "shiftId",
            "fieldRef": "ServiceBooking.shiftId",
            "required": true,
            "source": "previousStepOutput",
            "description": "Turno correspondente à data e horário escolhidos, determinado pela disponibilidade de operadores."
          },
          {
            "inputId": "operatorId",
            "fieldRef": "ServiceBooking.operatorId",
            "required": true,
            "source": "previousStepOutput",
            "description": "Operador disponível selecionado pelo sistema entre os alocados no turno correspondente."
          },
          {
            "inputId": "status",
            "fieldRef": "ServiceBooking.status",
            "required": true,
            "source": "workflowState",
            "description": "Status inicial do agendamento definido pelo ciclo de vida como confirmed."
          },
          {
            "inputId": "createdAt",
            "fieldRef": "ServiceBooking.createdAt",
            "required": true,
            "source": "systemDefault",
            "description": "Data e hora de criação do agendamento gerada pelo sistema."
          },
          {
            "inputId": "updatedAt",
            "fieldRef": "ServiceBooking.updatedAt",
            "required": true,
            "source": "systemDefault",
            "description": "Data e hora da última atualização do agendamento gerada pelo sistema."
          }
        ],
        "contextResolution": [
          {
            "targetRef": "ServiceBooking.serviceBookingId",
            "source": "systemDefault",
            "originRef": "systemDefault.uuid",
            "description": "O backend gera um novo UUID para o identificador do agendamento no momento da criação."
          },
          {
            "targetRef": "ServiceBooking.shiftId",
            "source": "previousStepOutput",
            "originRef": "Shift.shiftId",
            "description": "O backend consulta as entidades Shift que cobrem a bookingDate e bookingTime informadas pelo cliente e seleciona o turno correspondente."
          },
          {
            "targetRef": "ServiceBooking.operatorId",
            "source": "previousStepOutput",
            "originRef": "Operator.operatorId",
            "description": "O backend consulta ShiftAssignment para o turno resolvido, verifica operadores com capacidade disponível (número de agendamentos existentes menor que o número de operadores alocados) e seleciona um operador disponível."
          },
          {
            "targetRef": "ServiceBooking.status",
            "source": "workflowState",
            "originRef": "ServiceBooking.status",
            "description": "O workflow serviceBookingLifecycle define o estado inicial do agendamento como confirmed ao criar a instância."
          },
          {
            "targetRef": "ServiceBooking.createdAt",
            "source": "systemDefault",
            "originRef": "systemDefault.now",
            "description": "O backend registra o timestamp atual do sistema no momento da criação do agendamento."
          },
          {
            "targetRef": "ServiceBooking.updatedAt",
            "source": "systemDefault",
            "originRef": "systemDefault.now",
            "description": "O backend registra o timestamp atual do sistema como data da última atualização ao criar o agendamento."
          }
        ],
        "accessPattern": {
          "kind": "commandInput",
          "description": "",
          "entity": "ServiceBooking",
          "keyField": "ServiceBooking.serviceBookingId",
          "pagination": "none",
          "selection": "single",
          "output": [
            "ServiceBooking.serviceBookingId",
            "ServiceBooking.serviceId",
            "ServiceBooking.operatorId",
            "ServiceBooking.shiftId",
            "ServiceBooking.bookingDate",
            "ServiceBooking.bookingTime",
            "ServiceBooking.status",
            "ServiceBooking.customerName"
          ]
        }
      }
    ],
    "routes": [
      {
        "key": "petShop.serviceBookingLifecycle.createServiceBooking",
        "handlerName": "petShopCreateServiceBookingHandler"
      }
    ]
  }
} as const;

export default createServiceBookingController;

export const pipeline = [
  {
    "id": "createServiceBooking__httpController",
    "type": "httpController",
    "outputPath": "_102049_/l1/petShop/layer_1_external/adapters/http/controllers/createServiceBooking.ts",
    "defPath": "_102049_/l1/petShop/layer_1_external/adapters/http/controllers/createServiceBooking.defs.ts",
    "dependsFiles": [
      "_102049_/l1/petShop/layer_2_application/usecases/createServiceBooking.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/httpController.md",
      "_102034_.d.ts"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
