/// <mls fileReference="_102049_/l4/actors/cafeFlowActors.defs.ts" enhancement="_blank"/>

export const cafeFlowActors = {
  "moduleName": "cafeFlow",
  "actors": [
    {
      "actorId": "attendant",
      "title": "Atendente / Caixa",
      "description": "Opera o POS para lançar pedidos (mesa ou takeout, com combos e substituições) e acompanha status de cozinha para entrega ao cliente.",
      "roleScope": "cafeFlow:attendant"
    },
    {
      "actorId": "cook",
      "title": "Cozinheiro",
      "description": "Acompanha a fila de tickets de cozinha, atualiza status de preparo (pendente → preparando → pronto) e dispara a baixa de estoque ao preparar itens.",
      "roleScope": "cafeFlow:cook"
    },
    {
      "actorId": "manager",
      "title": "Gerente",
      "description": "Gerencia cardápio, mesas, regras de combo e estoque, abre e fecha turnos, visualiza o dashboard de vendas, ajusta estoque manualmente e aciona o relatório de fechamento e o assistente de IA.",
      "roleScope": "cafeFlow:manager"
    }
  ]
} as const;

export default cafeFlowActors;
