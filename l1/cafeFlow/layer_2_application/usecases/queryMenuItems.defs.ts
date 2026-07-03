/// <mls fileReference="_102049_/l1/cafeFlow/layer_2_application/usecases/queryMenuItems.defs.ts" enhancement="_blank"/>

export const queryMenuItemsUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "queryMenuItems",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "queryMenuItems",
    "ports": [],
    "functions": [
      {
        "functionName": "queryMenuItems",
        "inputTypeName": "QueryMenuItemsInput",
        "outputTypeName": "QueryMenuItemsOutput",
        "input": [
          {
            "name": "categoryFilter",
            "type": "string",
            "required": false,
            "ofEntity": "MenuItem",
            "description": "Categoria do item para filtrar a lista"
          },
          {
            "name": "nameFilter",
            "type": "string",
            "required": false,
            "ofEntity": "MenuItem",
            "description": "Termo de busca pelo nome do item"
          },
          {
            "name": "workspaceId",
            "type": "string",
            "required": false,
            "description": "Escopo do workspace atual, resolvido do RequestContext (currentWorkspace)"
          },
          {
            "name": "page",
            "type": "number",
            "required": false,
            "description": "Número da página para paginação opcional"
          },
          {
            "name": "pageSize",
            "type": "number",
            "required": false,
            "description": "Tamanho da página para paginação opcional"
          }
        ],
        "output": [
          {
            "name": "items",
            "type": "MenuItem[]",
            "required": true,
            "ofEntity": "MenuItem",
            "description": "Lista paginada de itens do cardápio projetados"
          },
          {
            "name": "total",
            "type": "number",
            "required": true,
            "description": "Total de itens encontrados conforme os filtros aplicados"
          }
        ],
        "ports": [],
        "rulesApplied": [
          "comboPriceDifference"
        ],
        "transactional": false,
        "steps": [
          "Resolver workspaceId a partir do RequestContext (currentWorkspace.workspaceId)",
          "Consultar MenuItem no mdm store via ctx.data.mdmDocument aplicando filtro opcional por category (categoryFilter) e por name (nameFilter, busca parcial) dentro do escopo do workspaceId",
          "Aplicar regra comboPriceDifference para calcular diferenças de preço em itens de combo durante a projeção",
          "Ordenar resultados por MenuItem.name em ordem ascendente",
          "Aplicar paginação opcional (page/pageSize) quando fornecida",
          "Projetar campos: menuItemId, name, category, price, description, status, createdAt, updatedAt",
          "Retornar lista projetada e total de itens encontrados"
        ]
      }
    ],
    "mdmRefs": [
      "MenuItem"
    ]
  }
} as const;

export default queryMenuItemsUsecase;

export const pipeline = [
  {
    "id": "queryMenuItems__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102049_/l1/cafeFlow/layer_2_application/usecases/queryMenuItems.ts",
    "defPath": "_102049_/l1/cafeFlow/layer_2_application/usecases/queryMenuItems.defs.ts",
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
