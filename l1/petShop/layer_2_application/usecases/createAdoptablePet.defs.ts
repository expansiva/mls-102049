/// <mls fileReference="_102049_/l1/petShop/layer_2_application/usecases/createAdoptablePet.defs.ts" enhancement="_blank"/>

export const createAdoptablePetUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "createAdoptablePet",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "createAdoptablePet",
    "ports": [
      "AdoptablePet"
    ],
    "functions": [
      {
        "functionName": "createAdoptablePet",
        "inputTypeName": "CreateAdoptablePetInput",
        "outputTypeName": "CreateAdoptablePetOutput",
        "input": [
          {
            "name": "name",
            "type": "string",
            "required": true,
            "description": "Nome do pet informado pelo administrador",
            "ofEntity": "AdoptablePet"
          },
          {
            "name": "age",
            "type": "number",
            "required": true,
            "description": "Idade do pet em anos informada pelo administrador",
            "ofEntity": "AdoptablePet"
          },
          {
            "name": "description",
            "type": "string",
            "required": true,
            "description": "Descrição do pet exibida na galeria pública",
            "ofEntity": "AdoptablePet"
          },
          {
            "name": "photoUrl",
            "type": "string",
            "required": true,
            "description": "URL da foto do pet no armazenamento de mídia da plataforma",
            "ofEntity": "AdoptablePet"
          }
        ],
        "output": [
          {
            "name": "adoptablePetId",
            "type": "string",
            "required": true,
            "description": "Identificador único gerado automaticamente",
            "ofEntity": "AdoptablePet"
          },
          {
            "name": "name",
            "type": "string",
            "required": true,
            "ofEntity": "AdoptablePet"
          },
          {
            "name": "age",
            "type": "number",
            "required": true,
            "ofEntity": "AdoptablePet"
          },
          {
            "name": "description",
            "type": "string",
            "required": true,
            "ofEntity": "AdoptablePet"
          },
          {
            "name": "photoUrl",
            "type": "string",
            "required": true,
            "ofEntity": "AdoptablePet"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "description": "Status de disponibilidade definido como 'available'",
            "ofEntity": "AdoptablePet"
          },
          {
            "name": "createdAt",
            "type": "string",
            "required": true,
            "description": "Data e hora de cadastro gerada automaticamente",
            "ofEntity": "AdoptablePet"
          }
        ],
        "ports": [
          "AdoptablePet"
        ],
        "rulesApplied": [
          "onlyAvailablePetsShownInGallery",
          "petImageUsesPlatformStorage"
        ],
        "transactional": true,
        "steps": [
          "1. Validate required user inputs: name (non-empty string), age (positive number), description (non-empty text), photoUrl (non-empty string).",
          "2. Apply rule petImageUsesPlatformStorage: validate that photoUrl starts with the platform media storage base URL (e.g. https://media.<platform-domain>/). If it does not, reject with validation error including rule id 'petImageUsesPlatformStorage'.",
          "3. Resolve system defaults: generate adoptablePetId via ctx.idGenerator.uuid(), set status to 'available' (so the pet appears in the public gallery per rule onlyAvailablePetsShownInGallery), set createdAt and updatedAt to ctx.clock.now().",
          "4. Build the AdoptablePet aggregate with all fields: adoptablePetId, name, age, description, photoUrl, status='available', createdAt, updatedAt.",
          "5. Persist the new AdoptablePet through its port (AdoptablePet.save) inside a single transaction via ctx.data transaction wrapper.",
          "6. Return the projected output fields: adoptablePetId, name, age, description, photoUrl, status, createdAt."
        ]
      }
    ],
    "mdmRefs": []
  }
} as const;

export default createAdoptablePetUsecase;

export const pipeline = [
  {
    "id": "createAdoptablePet__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102049_/l1/petShop/layer_2_application/usecases/createAdoptablePet.ts",
    "defPath": "_102049_/l1/petShop/layer_2_application/usecases/createAdoptablePet.defs.ts",
    "dependsFiles": [
      "_102049_/l1/petShop/layer_2_application/ports/adoptablePetRepository.d.ts",
      "_102049_/l1/petShop/layer_3_domain/entities/adoptablePet.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/applicationUsecase.md",
      "_102034_.d.ts"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
