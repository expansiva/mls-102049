# E4 — Actors, rules and external refs: petShop

- module: `petShop`
- actors: 2 / rules: 17
- generatedAt: 2026-07-16T21:28:13.888Z

## Actors

| actorId | roleScope | title | description |
| --- | --- | --- | --- |
| `cliente` | `petShop:cliente` | Cliente | Pessoa que navega no site, busca produtos, faz reservas e retira os itens na loja pagando presencialmente. |
| `loja` | `petShop:loja` | Loja PetShop | Responsável por cadastrar produtos, definir destaques, gerenciar disponibilidade e atender as reservas na loja física. |

## Rules

### `highlightRequiresAvailableProduct` (domain) — Destaque exige produto disponível

Apenas produtos marcados como destaque e que estejam disponíveis aparecem na seção de destaques; se um produto em destaque ficar indisponível, ele deixa de aparecer automaticamente e não pode ser marcado como destaque quando indisponível.

- appliesTo: `Product`
- absorbs journey rules:
  - "A seção de destaques exibe apenas produtos marcados como destaque pela loja e que estejam disponíveis."
  - "Se um produto em destaque ficar indisponível, ele deixa de aparecer na seção de destaques automaticamente."
  - "Apenas produtos disponíveis podem ser marcados como destaque."

### `searchIsCaseInsensitiveAndPartial` (application) — Busca por nome é insensível a caixa e parcial

A busca de produtos por nome deve ser insensível a maiúsculas e minúsculas e considerar correspondências parciais do termo informado.

- appliesTo: `Product`
- absorbs journey rules:
  - "A busca por nome é insensível a maiúsculas e minúsculas e considera correspondências parciais."

### `filtersCanBeCombined` (application) — Filtros combináveis simultaneamente

Os filtros de tipo de pet, categoria e faixa de valor podem ser aplicados simultaneamente na filtragem do catálogo, sem exclusão mútua entre eles.

- appliesTo: `Product`, `PetType`, `Category`
- absorbs journey rules:
  - "Os filtros podem ser combinados: tipo de pet, categoria e faixa de valor podem ser aplicados simultaneamente."

### `onlyAvailableProductsVisibleAndReservable` (domain) — Apenas produtos disponíveis são visíveis e reserváveis

Produtos indisponíveis não aparecem na vitrine pública, nos resultados de busca e filtragem, nem podem ser reservados em nenhuma circunstância.

- appliesTo: `Product`
- absorbs journey rules:
  - "Apenas produtos disponíveis aparecem nos resultados de busca e filtragem."
  - "Produtos indisponíveis não aparecem na vitrine pública nem podem ser reservados."

### `reservationRequiresAuthentication` (application) — Reserva exige cliente autenticado

O cliente deve estar autenticado para confirmar uma reserva; a autenticação é fornecida pela plataforma e não é responsabilidade do módulo.

- appliesTo: `Reservation`
- absorbs journey rules:
  - "O cliente deve estar autenticado para confirmar uma reserva (autenticação fornecida pela plataforma)."

### `reservationExpiresIn24Hours` (domain) — Reserva expira em 24 horas

Uma reserva não retirada em 24 horas expira automaticamente, liberando os produtos comprometidos de volta ao catálogo.

- appliesTo: `Reservation`
- absorbs journey rules:
  - "A reserva expira em 24 horas se o cliente não retirar os produtos na loja."
  - "Reservas não retiradas em 24 horas expiram automaticamente e liberam os produtos."

### `noItemLimitPerReservation` (domain) — Sem limite de itens por reserva

Não há limite explícito de quantidade de itens ou produtos distintos por reserva nesta fase do produto.

- appliesTo: `ReservationItem`
- absorbs journey rules:
  - "Não há limite explícito de itens ou produtos distintos por reserva nesta fase."

### `reservationTemporarilyCompromisesAvailability` (domain) — Reserva compromete disponibilidade temporariamente

Ao confirmar uma reserva, a disponibilidade dos produtos reservados é comprometida temporariamente até a retirada, expiração ou cancelamento da reserva.

- appliesTo: `Product`, `ReservationItem`
- absorbs journey rules:
  - "A reserva compromete temporariamente a disponibilidade do produto até a retirada ou expiração."

### `paymentOnlyInStore` (application) — Pagamento exclusivamente presencial

O pagamento é realizado exclusivamente na loja física; não existe pagamento online em nenhuma etapa do fluxo de reserva.

- appliesTo: `Payment`
- absorbs journey rules:
  - "O pagamento é realizado exclusivamente na loja física; não há pagamento online."

### `pickupRequiresValidReservation` (application) — Retirada exige reserva dentro do prazo

A retirada de produtos só é permitida quando a reserva está dentro do prazo de validade de 24 horas; reservas expiradas não permitem retirada.

- appliesTo: `Reservation`
- absorbs journey rules:
  - "A reserva deve estar dentro do prazo de validade (24 horas) para permitir a retirada."

### `expiredReservationRestoresAvailability` (domain) — Expiração restaura disponibilidade dos produtos

Quando uma reserva expira, os produtos associados voltam a ficar disponíveis no catálogo e o cliente precisa fazer uma nova reserva para retirá-los.

- appliesTo: `Reservation`, `Product`
- absorbs journey rules:
  - "Se a reserva expirou, os produtos voltam a ficar disponíveis e o cliente precisa fazer uma nova reserva."

### `onlyActiveReservationsCanBeCancelled` (application) — Apenas reservas ativas podem ser canceladas

Somente reservas ativas — não expiradas, não entregues e não canceladas — podem ser canceladas pelo cliente ou pela loja.

- appliesTo: `Reservation`
- absorbs journey rules:
  - "Apenas reservas ativas (não expiradas, não entregues, não canceladas) podem ser canceladas."

### `cancellationRestoresAvailability` (domain) — Cancelamento restaura disponibilidade imediatamente

Ao cancelar uma reserva, os produtos associados voltam imediatamente a ficar disponíveis no catálogo para outros clientes.

- appliesTo: `Reservation`, `Product`
- absorbs journey rules:
  - "Ao cancelar, os produtos da reserva voltam imediatamente a ficar disponíveis no catálogo."

### `productRequiresMinimumFields` (domain) — Produto exige campos mínimos obrigatórios

Todo produto cadastrado deve ter pelo menos nome, preço, tipo de pet e categoria definidos; não é permitido cadastrar produto incompleto.

- appliesTo: `Product`, `PetType`, `Category`
- absorbs journey rules:
  - "Todo produto deve ter pelo menos nome, preço, tipo de pet e categoria definidos."

### `highlightsAreManualOnly` (application) — Destaques definidos manualmente

Os destaques de produtos são definidos manualmente pela loja, sem qualquer automatização ou regra automática de seleção.

- appliesTo: `Product`
- absorbs journey rules:
  - "Os destaques são definidos manualmente pela loja, sem automatização."

### `storeCanMarkReservationReady` (application) — Loja marca reserva como pronta para retirada

A loja pode marcar uma reserva como pronta para retirada após separar fisicamente os produtos reservados pelo cliente.

- appliesTo: `Reservation`
- absorbs journey rules:
  - "A loja pode marcar uma reserva como pronta para retirada após separar os produtos."

### `reservationStatusReflectsStage` (domain) — Status da reserva reflete estágio atual

O status da reserva deve refletir sempre o estágio atual do processo: ativa, pronta, entregue, expirada ou cancelada, sem estados intermediários não previstos.

- appliesTo: `Reservation`
- absorbs journey rules:
  - "O status da reserva deve refletir o estágio atual: ativa, pronta, entregue, expirada ou cancelada."

## External refs

### mdm

- **Tipos de Pet e Categorias** — Tipos de pet e categorias são dados de referência estáveis que poderiam ser gerenciados pelo MDM da plataforma, embora nesta fase sejam entidades do módulo.

### horizontals

- **Pagamento presencial** — O pagamento é realizado exclusivamente na loja física, exigindo capacidade de processamento de pagamento presencial (dinheiro, cartão, etc.).

### plugins

(none)

### agents

- **Autenticação de usuário (plataforma)** — A confirmação de reservas exige cliente autenticado — capacidade fornecida pela plataforma de auth/RBAC, não pelo módulo.
