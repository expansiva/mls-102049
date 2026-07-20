# E4 — Actors, rules and external refs: petShop

- module: `petShop`
- actors: 2 / rules: 13
- generatedAt: 2026-07-19T20:02:05.410Z

## Actors

| actorId | roleScope | title | description |
| --- | --- | --- | --- |
| `cliente` | `petShop:cliente` | Cliente | Navega no site, pesquisa produtos, faz reservas e retira os itens na loja pagando presencialmente. |
| `atendente` | `petShop:atendente` | Atendente/Loja | Confirma reservas recebidas, prepara os produtos e recebe o pagamento na loja no momento da retirada. |

## Rules

### `featuredProductsOnly` (domain) — Vitrine apenas com produtos em destaque

A vitrine deve exibir exclusivamente produtos marcados como destaque por processo administrativo externo; produtos não destacados nunca aparecem na vitrine.

- appliesTo: `Product`
- absorbs journey rules:
  - "A vitrine exibe apenas produtos marcados como destaque pelo processo administrativo externo."

### `featuredOrderFlexible` (application) — Ordem dos destaques é flexível

A ordem de exibição dos produtos em destaque na vitrine pode variar conforme critérios definidos pela loja, sem ordem fixa obrigatória.

- appliesTo: `Product`
- absorbs journey rules:
  - "A ordem dos produtos em destaque pode variar conforme critérios definidos pela loja."

### `combinedFilters` (application) — Filtros de catálogo combináveis

Os filtros de tipo de pet, categoria, nome e faixa de valor devem funcionar simultaneamente, permitindo combinação de múltiplos critérios na pesquisa do catálogo.

- appliesTo: `Product`
- absorbs journey rules:
  - "Os filtros podem ser combinados: tipo de pet, categoria, nome e faixa de valor funcionam simultaneamente."

### `catalogShowsAll` (domain) — Catálogo lista todos os produtos

A listagem do catálogo deve mostrar todos os produtos cadastrados, independentemente de estarem marcados como destaque ou não.

- appliesTo: `Product`
- absorbs journey rules:
  - "A listagem do catálogo mostra todos os produtos cadastrados, independentemente de estarem em destaque."

### `caseInsensitiveSearch` (application) — Pesquisa por nome insensível a caixa

A pesquisa de produtos por nome deve ser insensível a maiúsculas e minúsculas, retornando resultados correspondentes independente da capitalização informada.

- appliesTo: `Product`
- absorbs journey rules:
  - "A pesquisa por nome é insensível a maiúsculas e minúsculas."

### `reservationRequiresContact` (domain) — Reserva exige nome e telefone

Uma reserva só pode ser registrada se contiver no mínimo o nome e o telefone do cliente; reservas sem esses dados são rejeitadas.

- appliesTo: `Reservation`
- absorbs journey rules:
  - "A reserva exige no mínimo nome e telefone do cliente."

### `reservationValidity24h` (domain) — Validade da reserva de 24 horas

Cada reserva tem validade de 24 horas a partir do registro; após esse prazo o atendente pode cancelá-la, não havendo renovação automática.

- appliesTo: `Reservation`
- absorbs journey rules:
  - "Cada reserva tem validade de 24 horas a partir do registro; após esse prazo pode ser cancelada pelo atendente."
  - "A reserva tem validade de 24 horas; após esse prazo o atendente pode cancelá-la."

### `noAutomaticStockBlock` (domain) — Sem bloqueio automático de estoque

Não há bloqueio automático de estoque no momento da reserva; a disponibilidade real do produto é verificada pelo atendente na preparação ou retirada.

- appliesTo: `ReservationItem`
- absorbs journey rules:
  - "Não há bloqueio automático de estoque no momento da reserva; a disponibilidade é verificada pelo atendente na retirada."
  - "O atendente verifica a disponibilidade real do produto no momento da preparação, pois não há bloqueio automático de estoque."

### `multipleProductsPerReservation` (domain) — Múltiplos produtos por reserva

O cliente pode reservar mais de um produto na mesma reserva, cada um com sua própria quantidade, formando múltiplos itens de reserva.

- appliesTo: `ReservationItem`
- absorbs journey rules:
  - "O cliente pode reservar mais de um produto na mesma reserva."

### `reservationStatuses` (domain) — Status permitidos da reserva

Uma reserva pode assumir apenas os status: pendente, confirmada, atendida (retirada e paga) ou cancelada; nenhum outro status é válido no domínio.

- appliesTo: `Reservation`
- absorbs journey rules:
  - "Uma reserva pode ter os status: pendente, confirmada, atendida (retirada e paga) ou cancelada."

### `inStorePaymentOnly` (domain) — Pagamento exclusivamente presencial

O pagamento é sempre presencial na loja; não existe pagamento online nem qualquer forma de cobrança remota neste módulo.

- appliesTo: `Payment`
- absorbs journey rules:
  - "O pagamento é sempre presencial na loja; não há pagamento online."

### `totalFromPricesAndQuantities` (domain) — Total calculado por preços e quantidades

O valor total do pagamento deve ser calculado a partir dos preços dos produtos e das quantidades reservadas em cada item da reserva.

- appliesTo: `Payment`
- absorbs journey rules:
  - "O valor total é calculado a partir dos preços dos produtos e quantidades reservadas."

### `paymentRequiresReceipt` (application) — Pagamento exige recebimento efetivo

A reserva só pode ser marcada como paga após o recebimento efetivo do pagamento pelo atendente; não é possível marcar como paga sem confirmação do pagamento presencial.

- appliesTo: `Payment`
- absorbs journey rules:
  - "A reserva só pode ser marcada como paga após o recebimento efetivo do pagamento pelo atendente."

## External refs

### mdm

- **Catálogo de Produtos** — Os produtos exibidos no catálogo e na vitrine são gerenciados por processo administrativo externo; o módulo apenas consome os dados de produto, incluindo flag de destaque e preço.
- **Categorias de Produto** — As categorias utilizadas nos filtros de catálogo são dados mestros externos, gerenciados fora do módulo.
- **Tipos de Pet** — Os tipos de pet usados para filtragem no catálogo são dados mestros externos, gerenciados fora do módulo.

### horizontals

(none)

### plugins

(none)

### agents

(none)
