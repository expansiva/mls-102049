/// <mls fileReference="_102049_/l4/operations/expressAdoptionInterest.defs.ts" enhancement="_blank"/>

export const operationExpressAdoptionInterest = {
  "operationId": "expressAdoptionInterest",
  "title": "Manifestar interesse em adoção",
  "actor": "cliente",
  "entity": "AdoptionInterest",
  "kind": "create",
  "reads": [
    "AdoptablePet"
  ],
  "writes": [
    "AdoptionInterest"
  ],
  "rulesApplied": [
    "adoptionStartedOnlineFinishedInStore"
  ],
  "story": {
    "actor": "cliente",
    "goal": "Manifestar interesse em adotar um pet disponível, iniciando o processo de adoção que será finalizado presencialmente na loja.",
    "steps": [
      "O cliente visualiza um pet disponível para adoção no site",
      "O cliente preenche seu nome, e-mail e telefone (opcional) no formulário de manifestação de interesse",
      "O sistema cria o registro de AdoptionInterest com status 'registered' vinculado ao pet selecionado",
      "O cliente é informado de que a finalização da adoção acontece presencialmente na loja com verificação e documentação"
    ],
    "outcome": "Um registro de AdoptionInterest é criado com status 'registered', vinculado ao pet e ao cliente, aguardando finalização presencial na loja."
  },
  "accessPattern": {
    "kind": "commandInput",
    "entity": "AdoptionInterest",
    "keyField": "AdoptionInterest.adoptionInterestId",
    "pagination": "none",
    "selection": "single",
    "output": [
      "AdoptionInterest.adoptionInterestId",
      "AdoptionInterest.status",
      "AdoptionInterest.adoptablePetId",
      "AdoptionInterest.customerName",
      "AdoptionInterest.createdAt"
    ]
  },
  "inputs": [
    {
      "inputId": "adoptablePetId",
      "fieldRef": "AdoptionInterest.adoptablePetId",
      "required": true,
      "source": "selectedEntity",
      "description": "Pet disponível para adoção selecionado pelo cliente no site."
    },
    {
      "inputId": "customerName",
      "fieldRef": "AdoptionInterest.customerName",
      "required": true,
      "source": "userInput",
      "description": "Nome completo do cliente que manifesta interesse em adotar."
    },
    {
      "inputId": "customerEmail",
      "fieldRef": "AdoptionInterest.customerEmail",
      "required": true,
      "source": "userInput",
      "description": "E-mail de contato do cliente para comunicação sobre a adoção."
    },
    {
      "inputId": "customerPhone",
      "fieldRef": "AdoptionInterest.customerPhone",
      "required": false,
      "source": "userInput",
      "description": "Telefone de contato do cliente para agendamento da visita presencial."
    },
    {
      "inputId": "adoptionInterestId",
      "fieldRef": "AdoptionInterest.adoptionInterestId",
      "required": true,
      "source": "systemDefault",
      "description": "Identificador único gerado automaticamente para o registro de interesse."
    },
    {
      "inputId": "status",
      "fieldRef": "AdoptionInterest.status",
      "required": true,
      "source": "systemDefault",
      "description": "Status inicial do registro, definido como 'registered'."
    },
    {
      "inputId": "createdAt",
      "fieldRef": "AdoptionInterest.createdAt",
      "required": true,
      "source": "systemDefault",
      "description": "Data e hora do registro do interesse, gerada automaticamente."
    },
    {
      "inputId": "updatedAt",
      "fieldRef": "AdoptionInterest.updatedAt",
      "required": true,
      "source": "systemDefault",
      "description": "Data e hora da última atualização, definida igual ao createdAt na criação."
    }
  ],
  "contextResolution": [
    {
      "targetRef": "AdoptionInterest.adoptablePetId",
      "source": "selectedEntity",
      "originRef": "AdoptablePet.adoptablePetId",
      "description": "O backend obtém o ID do pet atualmente selecionado pelo cliente na tela de visualização de pets disponíveis para adoção."
    },
    {
      "targetRef": "AdoptionInterest.adoptionInterestId",
      "source": "systemDefault",
      "originRef": "systemDefault.uuid",
      "description": "O backend gera um UUID automaticamente para o novo registro de interesse."
    },
    {
      "targetRef": "AdoptionInterest.status",
      "source": "systemDefault",
      "originRef": "systemDefault.now",
      "description": "O backend define o status inicial como 'registered', pois a adoção é apenas iniciada online conforme regra de negócio."
    },
    {
      "targetRef": "AdoptionInterest.createdAt",
      "source": "systemDefault",
      "originRef": "systemDefault.now",
      "description": "O backend registra a data e hora atuais no momento da criação do interesse."
    },
    {
      "targetRef": "AdoptionInterest.updatedAt",
      "source": "systemDefault",
      "originRef": "systemDefault.now",
      "description": "O backend define a data e hora da última atualização igual ao momento da criação."
    }
  ],
  "acceptanceAssertions": [
    "Após a confirmação, existe um registro de AdoptionInterest com status 'registered'.",
    "O AdoptionInterest criado referencia o AdoptablePet selecionado pelo cliente.",
    "O AdoptionInterest criado contém o customerName e customerEmail informados pelo cliente.",
    "O AdoptionInterest criado possui operatorId, verificationNotes e completedAt nulos, pois a finalização é presencial na loja.",
    "O AdoptionInterest criado possui createdAt e updatedAt preenchidos com a data e hora da criação."
  ],
  "pageId": "expressAdoptionInterest",
  "commandName": "expressAdoptionInterest",
  "bffName": "petShop.expressAdoptionInterest.expressAdoptionInterest",
  "capability": {
    "capabilityId": "expressAdoptionInterest",
    "title": "Manifestar interesse em adoção",
    "actor": "cliente",
    "priority": "now"
  },
  "statusFrontend": "toCreate",
  "statusBackend": "toCreate"
} as const;

export default operationExpressAdoptionInterest;
