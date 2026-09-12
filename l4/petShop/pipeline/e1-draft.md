# Pet Shop — Catálogo e Reserva de Produtos

Module: `petShop`
Language: pt-BR

## Problem
O pet shop precisa de uma vitrine digital para exibir produtos em destaque e um catálogo completo, permitindo que clientes pesquisem e filtrem itens por tipo de pet, categoria, nome e faixa de valor. O cliente deve poder reservar produtos para retirada presencial e pagamento na loja, enquanto o atendente gerencia a confirmação e o recebimento do pagamento no ponto físico.

## Presumed Actors
- Cliente (`cliente`): Navega no site, pesquisa produtos, faz reservas e retira os itens na loja pagando presencialmente.
- Atendente/Loja (`atendente`): Confirma reservas recebidas, prepara os produtos e recebe o pagamento na loja no momento da retirada.

## Scope In
- Vitrine com produtos em destaque
- Catálogo completo de produtos com listagem e detalhes
- Pesquisa por tipo de pet, categoria e nome do produto
- Filtro por faixa de valor
- Reserva de produtos para retirada na loja
- Registro de reserva com dados do cliente
- Confirmação e atendimento da reserva pelo atendente
- Pagamento presencial na loja no momento da retirada

## Scope Out
- Pagamento online e integração com gateways
- Entrega delivery ou logística de envio
- Gestão avançada de estoque, ERP ou compras
- Administração do catálogo de produtos (cadastro/edição de itens)
- Autenticação, autorização e controle de sessão (capacidades da plataforma)
- Armazenamento de arquivos e mídia (capacidade da plataforma)

## Open Questions
- [assumed] Como o cliente se identifica para fazer uma reserva? Default: O cliente informa nome e telefone no momento da reserva; login opcional via plataforma.
- [assumed] Qual o prazo de validade para retirada de uma reserva? Default: A reserva tem validade de 24 horas, podendo ser cancelada pelo atendente se não for retirada.
- [assumed] A reserva deve bloquear ou reduzir a quantidade disponível no estoque? Default: Não há bloqueio automático de estoque; o atendente verifica a disponibilidade no momento da retirada.

## Assumptions
- O catálogo de produtos já é mantido por processo administrativo externo a este módulo.
- O pagamento é processado presencialmente na loja; não há integração financeira online.
- A plataforma fornece autenticação, autorização, armazenamento de mídia e internacionalização quando necessário.
- O cliente pode fazer a reserva sem necessidade de cadastro prévio, bastando informar dados de contato.

