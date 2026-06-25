/// <mls fileReference="_102049_/l1/cafeFlow/layer_3_usecases/listarResumosVendas.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "listarResumosVendas",
  "title": "Listar resumos de vendas",
  "purpose": "Lista resumos de vendas gerados",
  "actor": "manager",
  "layer": "layer_3_usecases",
  "inputEntities": [
    "salesAIEntity"
  ],
  "outputEntities": [
    "salesAIEntity"
  ],
  "readsTables": [
    {
      "tableName": "sales_summaries",
      "ownership": "moduleOwned"
    }
  ],
  "writesTables": [],
  "rulesApplied": [],
  "entityRefs": [
    "salesSummary"
  ],
  "commands": [
    {
      "commandId": "listarResumosVendas",
      "input": [],
      "output": [
        {
          "name": "resumosVendas",
          "type": "salesAIEntity[]"
        }
      ]
    }
  ]
} as const;

export default useCase;
