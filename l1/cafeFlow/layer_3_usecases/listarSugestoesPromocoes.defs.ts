/// <mls fileReference="_102049_/l1/cafeFlow/layer_3_usecases/listarSugestoesPromocoes.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "listarSugestoesPromocoes",
  "title": "Listar sugestões de promoção",
  "purpose": "Lista sugestões de promoção geradas",
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
      "tableName": "promotion_suggestions",
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
      "commandId": "listarSugestoesPromocoes",
      "input": [],
      "output": [
        {
          "name": "sugestoesPromocoes",
          "type": "salesAIEntity[]"
        }
      ]
    }
  ]
} as const;

export default useCase;
