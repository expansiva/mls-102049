/// <mls fileReference="_102049_/l1/petShop/layer_2_application/usecases/updateAdoptablePet.defs.ts" enhancement="_blank"/>

export const updateAdoptablePetUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "updateAdoptablePet",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "updateAdoptablePet",
    "ports": [
      "AdoptablePet"
    ],
    "functions": [
      {
        "functionName": "updateAdoptablePet",
        "inputTypeName": "UpdateAdoptablePetInput",
        "outputTypeName": "UpdateAdoptablePetOutput",
        "input": [
          {
            "name": "adoptablePetId",
            "type": "string",
            "required": true,
            "ofEntity": "AdoptablePet",
            "description": "Identificador do pet selecionado para edição na lista de gestão"
          },
          {
            "name": "name",
            "type": "string",
            "required": true,
            "ofEntity": "AdoptablePet",
            "description": "Nome do pet editado pelo administrador"
          },
          {
            "name": "age",
            "type": "number",
            "required": true,
            "ofEntity": "AdoptablePet",
            "description": "Idade do pet em anos"
          },
          {
            "name": "description",
            "type": "string",
            "required": true,
            "ofEntity": "AdoptablePet",
            "description": "Descrição do pet"
          },
          {
            "name": "photoUrl",
            "type": "string",
            "required": true,
            "ofEntity": "AdoptablePet",
            "description": "URL da foto do pet no armazenamento de mídia da plataforma"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "AdoptablePet",
            "description": "Disponibilidade do pet: available ou unavailable"
          }
        ],
        "output": [
          {
            "name": "adoptablePetId",
            "type": "string",
            "required": true,
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
            "ofEntity": "AdoptablePet"
          },
          {
            "name": "updatedAt",
            "type": "string",
            "required": true,
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
          "1. Load the AdoptablePet aggregate by adoptablePetId via the AdoptablePet port (getById). If not found, return a validation error.",
          "2. Validate status is one of 'available' or 'unavailable' (rule onlyAvailablePetsShownInGallery — only pets with status 'available' are shown in the public gallery; setting 'unavailable' removes the pet from the gallery).",
          "3. Validate photoUrl is a platform storage URL (rule petImageUsesPlatformStorage — the photo must reference the platform media storage, not an arbitrary external URL or embedded file). Reject if the URL does not match the platform storage domain pattern.",
          "4. Validate required fields: name (non-empty), age (>= 0), description (non-empty).",
          "5. Set updatedAt to ctx.clock.now() (systemDefault — resolved server-side, never from client input).",
          "6. Apply the updated fields (name, age, description, photoUrl, status, updatedAt) to the loaded AdoptablePet aggregate.",
          "7. Save the AdoptablePet aggregate through the AdoptablePet port inside a single transaction (ctx.data transaction wrapper).",
          "8. Return the updated aggregate fields: adoptablePetId, name, age, description, photoUrl, status, updatedAt."
        ]
      }
    ],
    "mdmRefs": []
  }
} as const;

export default updateAdoptablePetUsecase;

export const pipeline = [
  {
    "id": "updateAdoptablePet__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102049_/l1/petShop/layer_2_application/usecases/updateAdoptablePet.ts",
    "defPath": "_102049_/l1/petShop/layer_2_application/usecases/updateAdoptablePet.defs.ts",
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
