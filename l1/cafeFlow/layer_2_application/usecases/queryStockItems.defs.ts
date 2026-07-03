/// <mls fileReference="_102049_/l1/cafeFlow/layer_2_application/usecases/queryStockItems.defs.ts" enhancement="_blank"/>

export const queryStockItemsUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "queryStockItems",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "queryStockItems",
    "ports": [],
    "functions": [
      {
        "functionName": "queryStockItems",
        "inputTypeName": "QueryStockItemsInput",
        "outputTypeName": "QueryStockItemsOutput",
        "input": [
          {
            "name": "nameFilter",
            "type": "string",
            "required": false,
            "description": "Termo para filtrar pelo nome do insumo"
          },
          {
            "name": "statusFilter",
            "type": "string",
            "required": false,
            "description": "Status para filtrar os itens de estoque (active | inactive)"
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
            "name": "stockItemId",
            "type": "string",
            "required": true,
            "ofEntity": "StockItem",
            "description": "Identificador do item de estoque"
          },
          {
            "name": "name",
            "type": "string",
            "required": true,
            "ofEntity": "StockItem",
            "description": "Nome do insumo"
          },
          {
            "name": "unitOfMeasure",
            "type": "string",
            "required": true,
            "ofEntity": "StockItem",
            "description": "Unidade de medida do insumo"
          },
          {
            "name": "minimumQuantity",
            "type": "number",
            "required": true,
            "ofEntity": "StockItem",
            "description": "Quantidade mínima de estoque"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "StockItem",
            "description": "Status do item (active | inactive)"
          },
          {
            "name": "createdAt",
            "type": "string",
            "required": true,
            "ofEntity": "StockItem",
            "description": "Data de criação do item"
          },
          {
            "name": "updatedAt",
            "type": "string",
            "required": true,
            "ofEntity": "StockItem",
            "description": "Data de atualização do item"
          },
          {
            "name": "lowStockAlert",
            "type": "boolean",
            "required": true,
            "description": "Indicador computado pela regra lowStockAlert sinalizando itens em nível crítico"
          },
          {
            "name": "total",
            "type": "number",
            "required": true,
            "description": "Total de itens correspondentes aos filtros"
          },
          {
            "name": "page",
            "type": "number",
            "required": false,
            "description": "Página atual retornada"
          },
          {
            "name": "pageSize",
            "type": "number",
            "required": false,
            "description": "Tamanho da página retornada"
          }
        ],
        "ports": [],
        "rulesApplied": [
          "lowStockAlert"
        ],
        "transactional": false,
        "steps": [
          "1. Receber filtros opcionais nameFilter e statusFilter do gerente",
          "2. Consultar documentos MDM de StockItem via ctx.data.mdmDocument aplicando filtros de nome (contains) e status (equals) quando informados",
          "3. Aplicar paginação opcional quando page e pageSize forem fornecidos; caso contrário retornar todos os resultados",
          "4. Aplicar regra lowStockAlert: marcar lowStockAlert=true para itens cuja quantidade atual esteja abaixo de minimumQuantity",
          "5. Ordenar resultados por name (asc) como ordenação padrão",
          "6. Projetar campos stockItemId, name, unitOfMeasure, minimumQuantity, status, createdAt, updatedAt e o flag computado lowStockAlert",
          "7. Retornar lista paginada com metadados total, page e pageSize"
        ]
      }
    ],
    "mdmRefs": [
      "StockItem"
    ]
  }
} as const;

export default queryStockItemsUsecase;

export const pipeline = [
  {
    "id": "queryStockItems__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102049_/l1/cafeFlow/layer_2_application/usecases/queryStockItems.ts",
    "defPath": "_102049_/l1/cafeFlow/layer_2_application/usecases/queryStockItems.defs.ts",
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
