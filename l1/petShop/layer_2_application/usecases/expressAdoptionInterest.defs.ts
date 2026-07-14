/// <mls fileReference="_102049_/l1/petShop/layer_2_application/usecases/expressAdoptionInterest.defs.ts" enhancement="_blank"/>

export const expressAdoptionInterestUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "expressAdoptionInterest",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "expressAdoptionInterest",
    "ports": [
      "AdoptionInterest",
      "AdoptablePet"
    ],
    "functions": [
      {
        "functionName": "expressAdoptionInterest",
        "inputTypeName": "ExpressAdoptionInterestInput",
        "outputTypeName": "ExpressAdoptionInterestOutput",
        "input": [
          {
            "name": "adoptablePetId",
            "type": "uuid",
            "required": true,
            "ofEntity": "AdoptablePet",
            "description": "Pet disponível para adoção selecionado pelo cliente no site."
          },
          {
            "name": "customerName",
            "type": "string",
            "required": true,
            "ofEntity": "AdoptionInterest",
            "description": "Nome completo do cliente que manifesta interesse em adotar."
          },
          {
            "name": "customerEmail",
            "type": "string",
            "required": true,
            "ofEntity": "AdoptionInterest",
            "description": "E-mail de contato do cliente para comunicação sobre a adoção."
          },
          {
            "name": "customerPhone",
            "type": "string",
            "required": false,
            "ofEntity": "AdoptionInterest",
            "description": "Telefone de contato do cliente para agendamento da visita presencial."
          }
        ],
        "output": [
          {
            "name": "adoptionInterestId",
            "type": "uuid",
            "required": true,
            "ofEntity": "AdoptionInterest",
            "description": "Identificador único do registro de interesse criado."
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "AdoptionInterest",
            "description": "Status inicial do registro, sempre 'registered'."
          },
          {
            "name": "adoptablePetId",
            "type": "uuid",
            "required": true,
            "ofEntity": "AdoptablePet",
            "description": "ID do pet adotável referenciado pelo interesse."
          },
          {
            "name": "customerName",
            "type": "string",
            "required": true,
            "ofEntity": "AdoptionInterest",
            "description": "Nome do cliente informado."
          },
          {
            "name": "createdAt",
            "type": "datetime",
            "required": true,
            "ofEntity": "AdoptionInterest",
            "description": "Data e hora da criação do registro."
          }
        ],
        "ports": [
          "AdoptionInterest",
          "AdoptablePet"
        ],
        "rulesApplied": [
          "adoptionStartedOnlineFinishedInStore"
        ],
        "transactional": true,
        "steps": [
          "1. Load the selected AdoptablePet by adoptablePetId through the AdoptablePet port (getById).",
          "2. Validate the AdoptablePet exists and its status is 'available'; if not, reject with a validation error referencing rule adoptionStartedOnlineFinishedInStore.",
          "3. Validate customerName is non-empty and customerEmail is a non-empty string.",
          "4. Generate adoptionInterestId via ctx.idGenerator.",
          "5. Set status to 'registered' (rule adoptionStartedOnlineFinishedInStore: adoption starts online, finishes in store).",
          "6. Set createdAt and updatedAt to ctx.clock.now().",
          "7. Set operatorId, verificationNotes, completedAt, cancelledAt, cancellationReason to null (in-store finalization fields are not populated at online registration).",
          "8. Save the AdoptionInterest aggregate through the AdoptionInterest port inside a single transaction (ctx.data transaction wrapper).",
          "9. Return adoptionInterestId, status, adoptablePetId, customerName, createdAt."
        ]
      }
    ],
    "mdmRefs": []
  }
} as const;

export default expressAdoptionInterestUsecase;

export const pipeline = [
  {
    "id": "expressAdoptionInterest__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102049_/l1/petShop/layer_2_application/usecases/expressAdoptionInterest.ts",
    "defPath": "_102049_/l1/petShop/layer_2_application/usecases/expressAdoptionInterest.defs.ts",
    "dependsFiles": [
      "_102049_/l1/petShop/layer_2_application/ports/adoptionInterestRepository.d.ts",
      "_102049_/l1/petShop/layer_2_application/ports/adoptablePetRepository.d.ts",
      "_102049_/l1/petShop/layer_3_domain/entities/adoptionInterest.d.ts",
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
