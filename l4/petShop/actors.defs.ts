/// <mls fileReference="_102049_/l4/petShop/actors.defs.ts" enhancement="_blank"/>

export const petShopActors = {
  "moduleName": "petShop",
  "actors": [
    {
      "actorId": "cliente",
      "title": "Cliente",
      "description": "Navega no site, pesquisa produtos, faz reservas e retira os itens na loja pagando presencialmente.",
      "roleScope": "petShop:cliente"
    },
    {
      "actorId": "atendente",
      "title": "Atendente/Loja",
      "description": "Confirma reservas recebidas, prepara os produtos e recebe o pagamento na loja no momento da retirada.",
      "roleScope": "petShop:atendente"
    }
  ]
} as const;

export default petShopActors;
