/// <mls fileReference="_102049_/l1/petShop/layer_2_application/usecases/viewAdoptablePetDetails.defs.ts" enhancement="_blank"/>

export const viewAdoptablePetDetailsUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "viewAdoptablePetDetails",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "viewAdoptablePetDetails",
    "ports": [
      "AdoptablePet"
    ],
    "functions": [
      {
        "functionName": "viewAdoptablePetDetails",
        "inputTypeName": "ViewAdoptablePetDetailsInput",
        "outputTypeName": "ViewAdoptablePetDetailsOutput",
        "input": [
          {
            "name": "adoptablePetId",
            "type": "string",
            "required": true,
            "ofEntity": "AdoptablePet",
            "description": "Identificador do pet selecionado na galeria, passado como parâmetro de rota"
          }
        ],
        "output": [
          {
            "name": "adoptablePetId",
            "type": "string",
            "required": true,
            "ofEntity": "AdoptablePet",
            "description": "Identificador do pet retornado"
          },
          {
            "name": "name",
            "type": "string",
            "required": true,
            "ofEntity": "AdoptablePet",
            "description": "Nome do pet"
          },
          {
            "name": "age",
            "type": "number",
            "required": true,
            "ofEntity": "AdoptablePet",
            "description": "Idade do pet"
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
            "description": "URL da foto do pet no armazenamento de mídia"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "AdoptablePet",
            "description": "Status de disponibilidade do pet (available | unavailable)"
          }
        ],
        "ports": [
          "AdoptablePet"
        ],
        "rulesApplied": [
          "onlyAvailablePetsShownInGallery"
        ],
        "transactional": false,
        "steps": [
          "1. Load the AdoptablePet aggregate by adoptablePetId via the AdoptablePet port (getById).",
          "2. If no aggregate is found for the given id, return an empty result (not-found).",
          "3. Apply rule 'onlyAvailablePetsShownInGallery': if the loaded pet has status 'unavailable', return an empty result — details of unavailable pets are never exposed.",
          "4. If status is 'available', project the fields name, age, description, photoUrl, status and adoptablePetId into the output.",
          "5. Return the projected viewAdoptablePetDetails output."
        ]
      }
    ],
    "mdmRefs": []
  }
} as const;

export default viewAdoptablePetDetailsUsecase;

export const pipeline = [
  {
    "id": "viewAdoptablePetDetails__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102049_/l1/petShop/layer_2_application/usecases/viewAdoptablePetDetails.ts",
    "defPath": "_102049_/l1/petShop/layer_2_application/usecases/viewAdoptablePetDetails.defs.ts",
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
