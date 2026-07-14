/// <mls fileReference="_102049_/l1/petShop/layer_2_application/usecases/createService.defs.ts" enhancement="_blank"/>

export const createServiceUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "createService",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "createService",
    "ports": [
      "Service"
    ],
    "functions": [
      {
        "functionName": "createService",
        "inputTypeName": "CreateServiceInput",
        "outputTypeName": "CreateServiceOutput",
        "input": [
          {
            "name": "name",
            "type": "string",
            "required": true,
            "ofEntity": "Service",
            "description": "Nome do serviço oferecido, como banho e tosa."
          },
          {
            "name": "description",
            "type": "string",
            "required": true,
            "ofEntity": "Service",
            "description": "Descrição detalhada do serviço oferecido ao cliente."
          },
          {
            "name": "estimatedDurationMinutes",
            "type": "number",
            "required": true,
            "ofEntity": "Service",
            "description": "Duração estimada do serviço em minutos, usada para cálculo de horários disponíveis."
          },
          {
            "name": "price",
            "type": "number",
            "required": true,
            "ofEntity": "Service",
            "description": "Preço do serviço, cobrado presencialmente na loja após a execução."
          }
        ],
        "output": [
          {
            "name": "serviceId",
            "type": "string",
            "required": true,
            "ofEntity": "Service",
            "description": "Identificador único do serviço gerado automaticamente."
          },
          {
            "name": "name",
            "type": "string",
            "required": true,
            "ofEntity": "Service"
          },
          {
            "name": "description",
            "type": "string",
            "required": true,
            "ofEntity": "Service"
          },
          {
            "name": "estimatedDurationMinutes",
            "type": "number",
            "required": true,
            "ofEntity": "Service"
          },
          {
            "name": "price",
            "type": "number",
            "required": true,
            "ofEntity": "Service"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "Service"
          },
          {
            "name": "createdAt",
            "type": "string",
            "required": true,
            "ofEntity": "Service"
          }
        ],
        "ports": [
          "Service"
        ],
        "rulesApplied": [
          "activeServicesOnlyListed"
        ],
        "transactional": true,
        "steps": [
          "1. Validate that name is a non-empty string, description is a non-empty string, estimatedDurationMinutes is a positive integer, and price is a non-negative number.",
          "2. Generate serviceId via ctx.idGenerator.uuid().",
          "3. Set status to 'active' (systemDefault) so the new service is immediately visible in client listings per rule activeServicesOnlyListed.",
          "4. Set createdAt and updatedAt to ctx.clock.now() (systemDefault).",
          "5. Leave deactivatedAt as null (not set on creation).",
          "6. Persist the Service aggregate through the Service port inside a single transaction (ctx.data transaction wrapper).",
          "7. Return the created service projection: serviceId, name, description, estimatedDurationMinutes, price, status, createdAt."
        ]
      }
    ],
    "mdmRefs": []
  }
} as const;

export default createServiceUsecase;

export const pipeline = [
  {
    "id": "createService__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102049_/l1/petShop/layer_2_application/usecases/createService.ts",
    "defPath": "_102049_/l1/petShop/layer_2_application/usecases/createService.defs.ts",
    "dependsFiles": [
      "_102049_/l1/petShop/layer_2_application/ports/serviceRepository.d.ts",
      "_102049_/l1/petShop/layer_3_domain/entities/service.d.ts"
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
