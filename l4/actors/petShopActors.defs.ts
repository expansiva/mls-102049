/// <mls fileReference="_102049_/l4/actors/petShopActors.defs.ts" enhancement="_blank"/>

export const petShopActors = {
  "moduleName": "petShop",
  "actors": [
    {
      "actorId": "cliente",
      "title": "Cliente",
      "description": "Usuário final que acessa o site, navega no catálogo de produtos, cria pedidos para retirada na loja, agenda serviços e manifesta interesse em pets para adoção.",
      "roleScope": "petShop:cliente"
    },
    {
      "actorId": "operador",
      "title": "Operador",
      "description": "Funcionário que executa serviços agendados, visualiza sua agenda vinculada ao turno e marca serviços como concluídos após a execução.",
      "roleScope": "petShop:operador"
    },
    {
      "actorId": "admin",
      "title": "Administrador",
      "description": "Responsável por gerenciar operadores, turnos, produtos, serviços oferecidos e pets disponíveis para adoção, controlando destaque, disponibilidade e capacidade de atendimento.",
      "roleScope": "petShop:admin"
    }
  ]
} as const;

export default petShopActors;
