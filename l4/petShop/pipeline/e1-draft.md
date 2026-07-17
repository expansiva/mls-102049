# Site PetShop

Module: `petShop`
Language: pt-BR

## Problem
A loja PetShop precisa de um site para divulgar e vender produtos para pets. O cliente deve conseguir navegar por um catálogo com produtos em destaque, buscar e filtrar itens por tipo de pet, categoria, nome e faixa de valor, reservar os produtos desejados para retirada e efetuar o pagamento diretamente na loja física. O objetivo é aumentar a visibilidade dos produtos e facilitar a jornada de compra sem exigir pagamento online.

## Presumed Actors
- Cliente (`cliente`): Pessoa que navega no site, busca produtos, faz reservas e retira os itens na loja pagando presencialmente.
- Loja PetShop (`loja`): Responsável por cadastrar produtos, definir destaques, gerenciar disponibilidade e atender as reservas na loja física.

## Scope In
- Catálogo público de produtos com seção de destaques
- Busca textual por nome e filtros por tipo de pet, categoria e faixa de valor
- Reserva de produtos para retirada na loja
- Pagamento presencial na loja física ao buscar a reserva

## Scope Out
- Pagamento online e gateways de pagamento
- Entrega/delivery de produtos
- Agendamento de serviços (banho, tosa, consultas veterinárias)
- Gestão de estoque avançada e controle de compras/fornecedores
- Autenticação, autorização e RBAC (fornecido pela plataforma)

## Open Questions
- [assumed] Qual o prazo de expiração de uma reserva antes que o produto seja liberado? Default: 24 horas a partir da reserva.
- [assumed] O cliente precisa estar autenticado para reservar produtos? Default: Sim, o cliente deve estar autenticado, pois a plataforma já fornece autenticação.
- [assumed] Existe limite de quantidade de itens ou de produtos distintos por reserva? Default: Não há limite explícito nesta fase; a loja avalia disponibilidade no atendimento.

## Assumptions
- O pagamento é realizado exclusivamente na loja física; não há integração com gateways de pagamento online.
- A plataforma já fornece autenticação, autorização, armazenamento de arquivos e suporte a i18n; esses recursos não serão recriados.
- A reserva implica em comprometimento temporário do produto até a retirada ou expiração.
- Produtos em destaque são definidos manualmente pela Loja PetShop.

