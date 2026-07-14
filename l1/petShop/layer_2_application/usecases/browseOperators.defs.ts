/// <mls fileReference="_102049_/l1/petShop/layer_2_application/usecases/browseOperators.defs.ts" enhancement="_blank"/>

export const browseOperatorsUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "browseOperators",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "browseOperators",
    "ports": [
      "Operator"
    ],
    "functions": [
      {
        "functionName": "browseOperators",
        "inputTypeName": "BrowseOperatorsInput",
        "outputTypeName": "BrowseOperatorsOutput",
        "input": [
          {
            "name": "activeFilter",
            "type": "boolean",
            "required": false,
            "description": "Filtro opcional para listar apenas operadores ativos ou inativos."
          }
        ],
        "output": [
          {
            "name": "operatorId",
            "type": "string",
            "required": true,
            "ofEntity": "Operator"
          },
          {
            "name": "name",
            "type": "string",
            "required": true,
            "ofEntity": "Operator"
          },
          {
            "name": "email",
            "type": "string",
            "required": false,
            "ofEntity": "Operator"
          },
          {
            "name": "phone",
            "type": "string",
            "required": false,
            "ofEntity": "Operator"
          },
          {
            "name": "active",
            "type": "boolean",
            "required": true,
            "ofEntity": "Operator"
          },
          {
            "name": "createdAt",
            "type": "string",
            "required": true,
            "ofEntity": "Operator"
          },
          {
            "name": "updatedAt",
            "type": "string",
            "required": true,
            "ofEntity": "Operator"
          }
        ],
        "ports": [
          "Operator"
        ],
        "rulesApplied": [],
        "transactional": false,
        "steps": [
          "Resolve actorId from ctx.sessionContext (actorSession) to authorize the request — reject if no authenticated actor is present.",
          "Load the Operator port (resolveRepository) and call list with an optional filter on the 'active' field when activeFilter is provided.",
          "Project each Operator to the output fields: operatorId, name, email, phone, active, createdAt, updatedAt.",
          "Return the collection of projected operators."
        ]
      }
    ],
    "mdmRefs": []
  }
} as const;

export default browseOperatorsUsecase;

export const pipeline = [
  {
    "id": "browseOperators__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102049_/l1/petShop/layer_2_application/usecases/browseOperators.ts",
    "defPath": "_102049_/l1/petShop/layer_2_application/usecases/browseOperators.defs.ts",
    "dependsFiles": [
      "_102049_/l1/petShop/layer_2_application/ports/operatorRepository.d.ts",
      "_102049_/l1/petShop/layer_3_domain/entities/operator.d.ts"
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
