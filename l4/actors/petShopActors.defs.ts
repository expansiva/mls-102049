/// <mls fileReference="_102049_/l4/actors/petShopActors.defs.ts" enhancement="_blank"/>

export const petShopActors = {
  "moduleName": "petShop",
  "actors": [
    {
      "actorId": "cliente",
      "title": "Cliente",
      "description": "Pessoa que navega no site, busca produtos, faz reservas e retira os itens na loja pagando presencialmente.",
      "roleScope": "petShop:cliente"
    },
    {
      "actorId": "loja",
      "title": "Loja PetShop",
      "description": "Responsável por cadastrar produtos, definir destaques, gerenciar disponibilidade e atender as reservas na loja física.",
      "roleScope": "petShop:loja"
    }
  ]
} as const;

export default petShopActors;
