/// <mls fileReference="_102049_/l1/petShop/layer_2_application/usecases/createOperator.defs.ts" enhancement="_blank"/>

export const createOperatorUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "createOperator",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "createOperator",
    "ports": [
      "Operator"
    ],
    "functions": [
      {
        "functionName": "createOperator",
        "inputTypeName": "CreateOperatorInput",
        "outputTypeName": "CreateOperatorOutput",
        "input": [
          {
            "name": "name",
            "type": "string",
            "required": true,
            "ofEntity": "Operator",
            "description": "Nome completo do operador exibido na agenda e nos agendamentos atribuídos."
          },
          {
            "name": "email",
            "type": "string",
            "required": false,
            "ofEntity": "Operator",
            "description": "E-mail de contato do operador para notificações de agenda."
          },
          {
            "name": "phone",
            "type": "string",
            "required": false,
            "ofEntity": "Operator",
            "description": "Telefone de contato do operador."
          },
          {
            "name": "active",
            "type": "boolean",
            "required": true,
            "ofEntity": "Operator",
            "description": "Indica se o operador inicia ativo e pode ser alocado em turnos."
          }
        ],
        "output": [
          {
            "name": "operatorId",
            "type": "string",
            "required": true,
            "ofEntity": "Operator",
            "description": "Identificador único do operador gerado automaticamente."
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
          }
        ],
        "ports": [
          "Operator"
        ],
        "rulesApplied": [],
        "transactional": true,
        "steps": [
          "1. Validate that name is non-empty (required field).",
          "2. Generate operatorId via ctx.idGenerator (UUID v4).",
          "3. Set createdAt and updatedAt to ctx.clock.now().",
          "4. Build the Operator aggregate with the provided name, email, phone, active and the generated id/timestamps.",
          "5. Persist the Operator through its port inside a single transaction (ctx.data transaction wrapper).",
          "6. Return the created operator projection: operatorId, name, email, phone, active, createdAt."
        ]
      }
    ],
    "mdmRefs": []
  }
} as const;

export default createOperatorUsecase;

export const pipeline = [
  {
    "id": "createOperator__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102049_/l1/petShop/layer_2_application/usecases/createOperator.ts",
    "defPath": "_102049_/l1/petShop/layer_2_application/usecases/createOperator.defs.ts",
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
