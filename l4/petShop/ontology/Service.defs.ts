/// <mls fileReference="_102049_/l4/petShop/ontology/Service.defs.ts" enhancement="_blank"/>

export const petShopEntityService = {
  "entityId": "Service",
  "title": "Serviço Oferecido",
  "description": "Serviço oferecido pelo pet shop, como banho e tosa, com descrição, duração estimada, preço e estado de ativação para agendamento.",
  "kind": "core",
  "ownership": "moduleOwned",
  "fields": [
    {
      "fieldId": "serviceId",
      "type": "uuid",
      "required": true,
      "description": "Identificador único do serviço oferecido."
    },
    {
      "fieldId": "name",
      "type": "string",
      "required": true,
      "description": "Nome do serviço oferecido, como banho e tosa."
    },
    {
      "fieldId": "description",
      "type": "text",
      "required": true,
      "description": "Descrição detalhada do serviço oferecido ao cliente."
    },
    {
      "fieldId": "estimatedDurationMinutes",
      "type": "number",
      "required": true,
      "description": "Duração estimada do serviço em minutos, usada para cálculo de horários disponíveis."
    },
    {
      "fieldId": "price",
      "type": "money",
      "required": true,
      "description": "Preço do serviço, cobrado presencialmente na loja após a execução."
    },
    {
      "fieldId": "status",
      "type": "string",
      "required": true,
      "description": "Estado de ativação do serviço; apenas serviços ativos aparecem na listagem para clientes.",
      "enum": [
        "active",
        "inactive"
      ]
    },
    {
      "fieldId": "deactivatedAt",
      "type": "datetime",
      "required": false,
      "description": "Data e hora em que o serviço foi desativado; desativar não cancela agendamentos já confirmados."
    },
    {
      "fieldId": "createdAt",
      "type": "datetime",
      "required": true,
      "description": "Data e hora de criação do registro do serviço."
    },
    {
      "fieldId": "updatedAt",
      "type": "datetime",
      "required": true,
      "description": "Data e hora da última atualização do registro do serviço."
    }
  ],
  "statusEnum": [
    "active",
    "inactive"
  ],
  "lifecycleStates": [
    "active",
    "inactive"
  ]
} as const;

export default petShopEntityService;
