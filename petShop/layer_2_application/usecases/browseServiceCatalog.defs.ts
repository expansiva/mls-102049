/// <mls fileReference="_102049_/l1/petShop/layer_2_application/usecases/browseServiceCatalog.defs.ts" enhancement="_blank"/>

export const browseServiceCatalogUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "browseServiceCatalog",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "browseServiceCatalog",
    "ports": [
      "Service"
    ],
    "functions": [
      {
        "functionName": "browseServiceCatalog",
        "inputTypeName": "BrowseServiceCatalogInput",
        "outputTypeName": "BrowseServiceCatalogOutput",
        "input": [
          {
            "name": "page",
            "type": "number",
            "required": false,
            "description": "Page number for pagination (1-based)"
          },
          {
            "name": "pageSize",
            "type": "number",
            "required": false,
            "description": "Number of items per page"
          }
        ],
        "output": [
          {
            "name": "serviceId",
            "type": "string",
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
          }
        ],
        "ports": [
          "Service"
        ],
        "rulesApplied": [
          "activeServicesOnlyListed"
        ],
        "transactional": false,
        "steps": [
          "Load all Service entities from the Service port applying a filter where status equals 'active' (rule activeServicesOnlyListed)",
          "If page and pageSize are provided, apply pagination: skip (page-1)*pageSize and take pageSize items",
          "Project each Service to { serviceId, name, description, estimatedDurationMinutes, price }",
          "Return the projected list of active services"
        ]
      }
    ],
    "mdmRefs": []
  }
} as const;

export default browseServiceCatalogUsecase;

export const pipeline = [
  {
    "id": "browseServiceCatalog__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102049_/l1/petShop/layer_2_application/usecases/browseServiceCatalog.ts",
    "defPath": "_102049_/l1/petShop/layer_2_application/usecases/browseServiceCatalog.defs.ts",
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
