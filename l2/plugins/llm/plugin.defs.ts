/// <mls fileReference="_102049_/l2/plugins/llm/plugin.defs.ts" enhancement="_blank"/>

export const llmPluginPlan = {
  "schemaVersion": "2026-06-06",
  "artifactType": "pluginDraft",
  "artifactId": "llm",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentPlanPlugins",
    "stepId": 16,
    "planId": "plan-plugins"
  },
  "data": {
    "plugin": {
      "pluginId": "llm",
      "provider": "LLM.",
      "priority": "soon",
      "reason": "Habilitar o assistente IA de vendas e o resumo diário com sugestões, conforme artefatos aprovados de IA.",
      "events": [
        "Geração de resumo diário",
        "Sugestões de promoção"
      ],
      "requiredCredentials": [],
      "inputData": [
        "Resumo de vendas do dia",
        "Histórico de vendas dos últimos 7 dias"
      ],
      "outputData": [
        "Resumo de vendas com insights",
        "Sugestões de promoção"
      ],
      "webhooks": [],
      "risks": [
        "Dependência de LLM pode introduzir variação na qualidade das sugestões."
      ],
      "questions": [],
      "resolution": "create_draft",
      "pluginDefsFileRef": "_102049_/l2/plugins/llm/plugin.defs.ts",
      "moduleConnectionDefsFileRef": "_102049_/l2/cafeFlow/plugins/llm.defs.ts"
    }
  }
} as const;

export default llmPluginPlan;
