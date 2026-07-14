/// <mls fileReference="_102049_/l4/operations/createAdoptablePet.defs.ts" enhancement="_blank"/>

export const operationCreateAdoptablePet = {
  "operationId": "createAdoptablePet",
  "title": "Cadastrar pet para adoção",
  "actor": "admin",
  "entity": "AdoptablePet",
  "kind": "create",
  "reads": [],
  "writes": [
    "AdoptablePet"
  ],
  "rulesApplied": [
    "onlyAvailablePetsShownInGallery",
    "petImageUsesPlatformStorage"
  ],
  "story": {
    "actor": "admin",
    "goal": "Cadastrar um novo pet disponível para adoção informando nome, idade, descrição e foto para que ele apareça na galeria pública do site.",
    "steps": [
      "O administrador acessa a tela de cadastro de pets para adoção.",
      "O administrador informa nome, idade, descrição e a URL da foto do pet no armazenamento de mídia da plataforma.",
      "O sistema gera um identificador único, define o status como disponível e registra as datas de criação e atualização.",
      "O sistema persiste o pet e o exibe na galeria pública por estar marcado como disponível."
    ],
    "outcome": "O pet é cadastrado com status disponível e aparece na galeria de adoção para os clientes."
  },
  "accessPattern": {
    "kind": "commandInput",
    "entity": "AdoptablePet",
    "keyField": "AdoptablePet.adoptablePetId",
    "pagination": "none",
    "selection": "none",
    "output": [
      "AdoptablePet.adoptablePetId",
      "AdoptablePet.name",
      "AdoptablePet.age",
      "AdoptablePet.description",
      "AdoptablePet.photoUrl",
      "AdoptablePet.status",
      "AdoptablePet.createdAt"
    ]
  },
  "inputs": [
    {
      "inputId": "name",
      "fieldRef": "AdoptablePet.name",
      "required": true,
      "source": "userInput",
      "description": "Nome do pet informado pelo administrador"
    },
    {
      "inputId": "age",
      "fieldRef": "AdoptablePet.age",
      "required": true,
      "source": "userInput",
      "description": "Idade do pet em anos informada pelo administrador"
    },
    {
      "inputId": "description",
      "fieldRef": "AdoptablePet.description",
      "required": true,
      "source": "userInput",
      "description": "Descrição do pet exibida na galeria pública"
    },
    {
      "inputId": "photoUrl",
      "fieldRef": "AdoptablePet.photoUrl",
      "required": true,
      "source": "userInput",
      "description": "URL da foto do pet no armazenamento de mídia da plataforma"
    },
    {
      "inputId": "adoptablePetId",
      "fieldRef": "AdoptablePet.adoptablePetId",
      "required": true,
      "source": "systemDefault",
      "description": "Identificador único gerado automaticamente pelo sistema"
    },
    {
      "inputId": "status",
      "fieldRef": "AdoptablePet.status",
      "required": true,
      "source": "systemDefault",
      "description": "Status de disponibilidade definido como disponível no cadastro"
    },
    {
      "inputId": "createdAt",
      "fieldRef": "AdoptablePet.createdAt",
      "required": true,
      "source": "systemDefault",
      "description": "Data e hora de cadastro gerada automaticamente"
    },
    {
      "inputId": "updatedAt",
      "fieldRef": "AdoptablePet.updatedAt",
      "required": true,
      "source": "systemDefault",
      "description": "Data e hora da última atualização gerada automaticamente"
    }
  ],
  "contextResolution": [
    {
      "targetRef": "AdoptablePet.adoptablePetId",
      "source": "systemDefault",
      "originRef": "systemDefault.uuid",
      "description": "O backend gera um UUID v4 automaticamente ao persistir o novo pet"
    },
    {
      "targetRef": "AdoptablePet.status",
      "source": "systemDefault",
      "originRef": "systemDefault.now",
      "description": "O backend define o status inicial como 'available' para que o pet apareça na galeria pública conforme a regra de domínio"
    },
    {
      "targetRef": "AdoptablePet.createdAt",
      "source": "systemDefault",
      "originRef": "systemDefault.now",
      "description": "O backend registra a data e hora atual do servidor no momento da criação"
    },
    {
      "targetRef": "AdoptablePet.updatedAt",
      "source": "systemDefault",
      "originRef": "systemDefault.now",
      "description": "O backend registra a data e hora atual do servidor no momento da criação, igual a createdAt"
    }
  ],
  "acceptanceAssertions": [
    "Após a confirmação, o pet existe na entidade AdoptablePet com o nome, idade, descrição e photoUrl informados pelo administrador",
    "O pet cadastrado possui status igual a 'available'",
    "O pet cadastrado possui adoptablePetId, createdAt e updatedAt preenchidos automaticamente pelo sistema",
    "O pet cadastrado aparece na galeria pública por estar marcado como disponível conforme a regra onlyAvailablePetsShownInGallery",
    "A foto do pet utiliza uma URL do armazenamento de mídia da plataforma conforme a regra petImageUsesPlatformStorage"
  ],
  "pageId": "createAdoptablePet",
  "commandName": "createAdoptablePet",
  "bffName": "petShop.createAdoptablePet.createAdoptablePet",
  "capability": {
    "capabilityId": "createAdoptablePet",
    "title": "Cadastrar pet para adoção",
    "actor": "admin",
    "priority": "now"
  },
  "statusFrontend": "toCreate",
  "statusBackend": "toCreate"
} as const;

export default operationCreateAdoptablePet;
