# Pet Shop — Site de Serviços, Produtos e Adoção

Module: `petShop`
Language: pt-BR

## Problem
O pet shop precisa de um site em português e com visual agradável para divulgar produtos e serviços, permitir que clientes agendem serviços (como banho e tosa), visualizem pets disponíveis para adoção com fotos, comprem produtos para retirada na loja com pagamento presencial, e para que a administração organize a alocação de operadores por turno de trabalho.

## Presumed Actors
- Cliente (`cliente`): Usuário final que acessa o site, navega no catálogo, compra produtos para retirada, agenda serviços e consulta pets para adoção.
- Operador (`operador`): Funcionário que executa serviços agendados e está vinculado a um ou mais turnos de trabalho.
- Administrador (`admin`): Responsável por gerenciar operadores, turnos, produtos, serviços oferecidos e pets disponíveis para adoção.

## Scope In
- Catálogo de produtos com listagem e produtos em destaque na página inicial
- Serviços oferecidos com listagem e agendamento por cliente
- Pets para adoção com fotos e informações
- Carrinho de compras para retirada na loja física
- Agendamento de serviços vinculado a operadores por turno
- Gestão de operadores e definição de turnos de trabalho

## Scope Out
- Pagamento online (processado apenas na loja física)
- Entrega em domicílio / frete
- Processo completo de adoção com documentação digital e assinatura
- Gestão financeira, contabilidade e fechamento de caixa
- Controle de estoque detalhado e compras de mercadoria
- Recursos já fornecidos pela plataforma (autenticação, autorização, upload de mídia, i18n)

## Open Questions
- [assumed] Qual o horário de funcionamento da loja para disponibilização de agendamentos? Default: Segunda a sábado, das 09:00 às 18:00.
- [assumed] O pagamento dos serviços agendados também é realizado na loja? Default: Sim, o pagamento dos serviços é feito na loja, após a execução ou no momento da retirada.

## Assumptions
- O pagamento de produtos e serviços é realizado presencialmente na loja física.
- A retirada de produtos comprados é feita exclusivamente na loja física, sem entrega.
- A adoção de pets é iniciada no site (visualização e manifestação de interesse), mas é finalizada presencialmente na loja.
- A alocação de operadores em turnos define a capacidade de atendimento para serviços agendados.
- Imagens de pets e produtos utilizam a capacidade de armazenamento de mídia da plataforma.

