/// <mls fileReference="_102049_/l1/cafeFlow/layer_2_application/usecases/updateMenuItem.defs.ts" enhancement="_blank"/>

export const updateMenuItemUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "updateMenuItem",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "updateMenuItem",
    "ports": [],
    "functions": [
      {
        "functionName": "updateMenuItem",
        "inputTypeName": "UpdateMenuItemInput",
        "outputTypeName": "UpdateMenuItemOutput",
        "input": [
          {
            "name": "menuItemId",
            "type": "string",
            "required": true,
            "ofEntity": "MenuItem",
            "description": "Identificador único do item a ser editado, resolvido a partir da seleção prévia no fluxo"
          },
          {
            "name": "name",
            "type": "string",
            "required": true,
            "ofEntity": "MenuItem",
            "description": "Nome do item do cardápio"
          },
          {
            "name": "category",
            "type": "string",
            "required": true,
            "ofEntity": "MenuItem",
            "description": "Categoria do item (entradas, pratos principais, bebidas, sobremesas)"
          },
          {
            "name": "price",
            "type": "number",
            "required": true,
            "ofEntity": "MenuItem",
            "description": "Preço de venda do item"
          },
          {
            "name": "description",
            "type": "string",
            "required": false,
            "ofEntity": "MenuItem",
            "description": "Descrição detalhada do item"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "MenuItem",
            "description": "Status do ciclo de vida do item (active/inactive)"
          }
        ],
        "output": [
          {
            "name": "menuItemId",
            "type": "string",
            "required": true,
            "ofEntity": "MenuItem",
            "description": "Identificador do item atualizado"
          },
          {
            "name": "name",
            "type": "string",
            "required": true,
            "ofEntity": "MenuItem",
            "description": "Nome atualizado do item"
          },
          {
            "name": "category",
            "type": "string",
            "required": true,
            "ofEntity": "MenuItem",
            "description": "Categoria atualizada do item"
          },
          {
            "name": "price",
            "type": "number",
            "required": true,
            "ofEntity": "MenuItem",
            "description": "Preço atualizado do item"
          },
          {
            "name": "description",
            "type": "string",
            "required": false,
            "ofEntity": "MenuItem",
            "description": "Descrição atualizada do item"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "MenuItem",
            "description": "Status atualizado do item"
          },
          {
            "name": "updatedAt",
            "type": "string",
            "required": true,
            "ofEntity": "MenuItem",
            "description": "Data e hora da última atualização definida automaticamente pelo sistema"
          }
        ],
        "ports": [],
        "rulesApplied": [
          "comboPriceDifference"
        ],
        "transactional": true,
        "steps": [
          "1. Carregar o MenuItem existente pelo menuItemId fornecido (resolvido da seleção prévia) através do port MenuItem",
          "2. Validar que o item existe; se não existir, lançar erro de entidade não encontrada",
          "3. Aplicar a regra comboPriceDifference: se o item pertence a um combo, verificar se a alteração de preço não viola a diferença mínima/máxima permitida em relação ao preço do combo pai",
          "4. Atualizar os campos name, category, price, description e status com os valores recebidos na entrada",
          "5. Definir updatedAt automaticamente com ctx.clock.now() — nunca aceitar updatedAt do usuário",
          "6. Preservar menuItemId e createdAt originais (campos de controle não fornecidos pelo usuário)",
          "7. Salvar o MenuItem atualizado através do port MenuItem dentro da mesma transação",
          "8. Retornar o MenuItem atualizado com todos os campos persistidos"
        ]
      }
    ],
    "mdmRefs": [
      "MenuItem"
    ]
  }
} as const;

export default updateMenuItemUsecase;

export const pipeline = [
  {
    "id": "updateMenuItem__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102049_/l1/cafeFlow/layer_2_application/usecases/updateMenuItem.ts",
    "defPath": "_102049_/l1/cafeFlow/layer_2_application/usecases/updateMenuItem.defs.ts",
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/applicationUsecase.md",
      "_102034_.d.ts"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
