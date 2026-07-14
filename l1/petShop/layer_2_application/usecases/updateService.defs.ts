/// <mls fileReference="_102049_/l1/petShop/layer_2_application/usecases/updateService.defs.ts" enhancement="_blank"/>

export const updateServiceUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "updateService",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "updateService",
    "ports": [
      "Service",
      "ServiceBooking"
    ],
    "functions": [
      {
        "functionName": "updateService",
        "inputTypeName": "UpdateServiceInput",
        "outputTypeName": "UpdateServiceOutput",
        "input": [
          {
            "name": "serviceId",
            "type": "uuid",
            "required": true,
            "ofEntity": "Service",
            "description": "Identificador do serviço selecionado para edição."
          },
          {
            "name": "name",
            "type": "string",
            "required": true,
            "ofEntity": "Service",
            "description": "Nome atualizado do serviço."
          },
          {
            "name": "description",
            "type": "string",
            "required": true,
            "ofEntity": "Service",
            "description": "Descrição detalhada atualizada do serviço oferecido."
          },
          {
            "name": "estimatedDurationMinutes",
            "type": "number",
            "required": true,
            "ofEntity": "Service",
            "description": "Duração estimada atualizada do serviço em minutos."
          },
          {
            "name": "price",
            "type": "number",
            "required": true,
            "ofEntity": "Service",
            "description": "Preço atualizado do serviço."
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "Service",
            "description": "Novo estado de ativação do serviço: active ou inactive."
          }
        ],
        "output": [
          {
            "name": "serviceId",
            "type": "uuid",
            "required": true,
            "ofEntity": "Service"
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
            "name": "deactivatedAt",
            "type": "string",
            "required": false,
            "ofEntity": "Service"
          },
          {
            "name": "updatedAt",
            "type": "string",
            "required": true,
            "ofEntity": "Service"
          }
        ],
        "ports": [
          "Service",
          "ServiceBooking"
        ],
        "rulesApplied": [
          "activeServicesOnlyListed",
          "deactivatingServiceDoesNotCancelBookings"
        ],
        "transactional": true,
        "steps": [
          "1. Load the Service aggregate by serviceId via the Service port (getById). If not found, return a validation error.",
          "2. Validate that status is one of 'active' or 'inactive' (enum constraint on Service.status).",
          "3. Apply field updates to the loaded Service: name, description, estimatedDurationMinutes, price, and status from the public input.",
          "4. Set updatedAt to ctx.clock.now() (systemDefault resolution — never accepted from the client).",
          "5. If the new status is 'inactive' AND the previous status was 'active' (or deactivatedAt is null), set deactivatedAt to ctx.clock.now(). If the new status is 'active', set deactivatedAt to null. This implements the deactivatedAt systemDefault resolution.",
          "6. Rule deactivatingServiceDoesNotCancelBookings: when status transitions to 'inactive', do NOT query, modify, or cancel any ServiceBooking records. The ServiceBooking port is available for read-only verification if needed, but no booking mutations occur. Bookings with status 'confirmed' remain untouched.",
          "7. Rule activeServicesOnlyListed: this rule is enforced on the listing/read path, not on update. However, as a guard, if the service is being reactivated (status 'active'), ensure it will appear in client listings. No additional mutation needed — the status field itself drives the listing filter.",
          "8. Save the updated Service aggregate through the Service port inside the transaction.",
          "9. Return the projected output fields: serviceId, name, description, estimatedDurationMinutes, price, status, deactivatedAt, updatedAt."
        ]
      }
    ],
    "mdmRefs": []
  }
} as const;

export default updateServiceUsecase;

export const pipeline = [
  {
    "id": "updateService__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102049_/l1/petShop/layer_2_application/usecases/updateService.ts",
    "defPath": "_102049_/l1/petShop/layer_2_application/usecases/updateService.defs.ts",
    "dependsFiles": [
      "_102049_/l1/petShop/layer_2_application/ports/serviceRepository.d.ts",
      "_102049_/l1/petShop/layer_2_application/ports/serviceBookingRepository.d.ts",
      "_102049_/l1/petShop/layer_3_domain/entities/service.d.ts",
      "_102049_/l1/petShop/layer_3_domain/entities/serviceBooking.d.ts"
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
