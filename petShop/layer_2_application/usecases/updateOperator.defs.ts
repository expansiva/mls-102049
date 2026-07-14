/// <mls fileReference="_102049_/l1/petShop/layer_2_application/usecases/updateOperator.defs.ts" enhancement="_blank"/>

export const updateOperatorUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "updateOperator",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "updateOperator",
    "ports": [
      "Operator"
    ],
    "functions": [
      {
        "functionName": "updateOperator",
        "inputTypeName": "UpdateOperatorInput",
        "outputTypeName": "UpdateOperatorOutput",
        "input": [
          {
            "name": "operatorId",
            "type": "string",
            "required": true,
            "ofEntity": "Operator",
            "description": "Identificador do operador a ser editado, obtido do parâmetro de rota."
          },
          {
            "name": "name",
            "type": "string",
            "required": true,
            "ofEntity": "Operator",
            "description": "Nome completo do operador editado pelo administrador."
          },
          {
            "name": "email",
            "type": "string",
            "required": false,
            "ofEntity": "Operator",
            "description": "E-mail de contato do operador, opcional."
          },
          {
            "name": "phone",
            "type": "string",
            "required": false,
            "ofEntity": "Operator",
            "description": "Telefone de contato do operador, opcional."
          },
          {
            "name": "active",
            "type": "boolean",
            "required": true,
            "ofEntity": "Operator",
            "description": "Indica se o operador está ativo e pode ser alocado em turnos."
          }
        ],
        "output": [
          {
            "name": "operatorId",
            "type": "string",
            "required": true,
            "ofEntity": "Operator",
            "description": "Identificador do operador atualizado."
          },
          {
            "name": "name",
            "type": "string",
            "required": true,
            "ofEntity": "Operator",
            "description": "Nome do operador após a atualização."
          },
          {
            "name": "email",
            "type": "string",
            "required": false,
            "ofEntity": "Operator",
            "description": "E-mail do operador após a atualização."
          },
          {
            "name": "phone",
            "type": "string",
            "required": false,
            "ofEntity": "Operator",
            "description": "Telefone do operador após a atualização."
          },
          {
            "name": "active",
            "type": "boolean",
            "required": true,
            "ofEntity": "Operator",
            "description": "Status ativo do operador após a atualização."
          },
          {
            "name": "updatedAt",
            "type": "string",
            "required": true,
            "ofEntity": "Operator",
            "description": "Data e hora da última modificação."
          }
        ],
        "ports": [
          "Operator"
        ],
        "rulesApplied": [],
        "transactional": true,
        "steps": [
          "1. Extrair operatorId do parâmetro de rota e validar que não é vazio.",
          "2. Resolver updatedAt a partir de ctx.clock.now() e actorId a partir de ctx.sessionContext.actorId (contexto de sessão, não input público).",
          "3. Carregar o operador existente através do port Operator.getById({ operatorId }).",
          "4. Se o operador não for encontrado, retornar erro de validação: 'Operador não encontrado para o operatorId informado.'",
          "5. Aplicar as alterações no agregado: atualizar name, active (sempre), e email/phone apenas quando fornecidos (preservar valores anteriores quando ausentes).",
          "6. Definir updatedAt no agregado com o timestamp resolvido do servidor.",
          "7. Persistir o agregado através do port Operator.save(operator) dentro da mesma transação.",
          "8. Retornar a projeção { operatorId, name, email, phone, active, updatedAt } do operador atualizado."
        ]
      }
    ],
    "mdmRefs": []
  }
} as const;

export default updateOperatorUsecase;

export const pipeline = [
  {
    "id": "updateOperator__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102049_/l1/petShop/layer_2_application/usecases/updateOperator.ts",
    "defPath": "_102049_/l1/petShop/layer_2_application/usecases/updateOperator.defs.ts",
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
