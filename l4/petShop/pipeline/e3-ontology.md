# E3 — Ontology: Site PetShop

- module: `petShop`
- domain: Pet retail
- entities: 6 / relationships: 5
- generatedAt: 2026-07-16T21:27:04.782Z

## Entities

### Product (core, moduleOwned) — status: available → unavailable

Item do catálogo da loja com nome, descrição, preço, tipo de pet indicado, categoria, flag de destaque e disponibilidade. É o núcleo da vitrine pública e das reservas.

- `productId` (uuid; required) — Identificador único do produto no catálogo.
- `name` (string; required) — Nome do produto usado na busca insensível a maiúsculas e minúsculas com correspondência parcial.
- `description` (text; optional) — Descrição detalhada do produto exibida na página de detalhes.
- `price` (money; required) — Preço do produto utilizado na filtragem por faixa de valor.
- `petTypeId` (uuid; required) — Referência ao tipo de pet indicado para o produto, usado como filtro de catálogo.
- `categoryId` (uuid; required) — Referência à categoria do catálogo à qual o produto pertence, usada como filtro.
- `highlighted` (boolean; required) — Indica se o produto foi manualmente marcado como destaque pela loja; só pode ser verdadeiro quando o produto está disponível.
- `status` (string; required, enum: available|unavailable) — Disponibilidade do produto na vitrine; produtos indisponíveis não aparecem na vitrine nem podem ser reservados.
- `createdAt` (datetime; required) — Data e hora de criação do produto no catálogo.
- `updatedAt` (datetime; required) — Data e hora da última atualização dos dados do produto.

### PetType (mdm, moduleOwned)

Classificação do produto por tipo de pet indicado (cão, gato, etc.), usada como filtro no catálogo e atributo obrigatório do produto.

- `petTypeId` (uuid; required) — Identificador único do tipo de pet.
- `name` (string; required) — Nome do tipo de pet (ex.: cão, gato, ave).
- `active` (boolean; required) — Indica se o tipo de pet está ativo e disponível para seleção no catálogo.
- `createdAt` (datetime; required) — Data e hora de criação do registro.
- `updatedAt` (datetime; required) — Data e hora da última atualização do registro.

### Category (mdm, moduleOwned)

Categoria do produto (racao, brinquedo, etc.), usada como filtro no catálogo e atributo obrigatório do produto.

- `categoryId` (uuid; required) — Identificador único da categoria no catálogo.
- `name` (string; required) — Nome da categoria (ex.: ração, brinquedo, acessório), exibido como filtro na vitrine.
- `description` (text; optional) — Descrição opcional da categoria para uso administrativo interno.
- `createdAt` (datetime; required) — Data e hora de criação do registro da categoria.
- `updatedAt` (datetime; required) — Data e hora da última atualização do registro da categoria.

### Reservation (core, moduleOwned) — status: draft → active → ready → delivered → expired → cancelled

Reserva de produtos criada pelo cliente para retirada na loja física. Possui ciclo de vida desde o rascunho até a entrega, expiração ou cancelamento, com prazo de validade de 24 horas.

- `reservationId` (uuid; required) — Identificador único da reserva
- `customerId` (uuid; required) — Cliente autenticado que criou a reserva
- `status` (string; required, enum: draft|active|ready|delivered|expired|cancelled) — Estágio atual da reserva no ciclo de vida
- `confirmedAt` (datetime; optional) — Momento em que a reserva saiu de rascunho e foi confirmada como ativa
- `expiresAt` (datetime; required) — Data e hora limite para retirada, 24 horas após a confirmação
- `readyAt` (datetime; optional) — Momento em que a loja marcou a reserva como pronta para retirada após separar os produtos
- `deliveredAt` (datetime; optional) — Momento em que o cliente retirou os produtos na loja física
- `expiredAt` (datetime; optional) — Momento em que a reserva expirou automaticamente por não retirada em 24 horas
- `cancelledAt` (datetime; optional) — Momento em que a reserva foi cancelada pelo cliente ou pela loja
- `cancelReason` (text; optional) — Motivo informado no cancelamento da reserva
- `paymentId` (uuid; optional) — Referência ao pagamento presencial associado quando a reserva é entregue
- `createdAt` (datetime; required) — Momento de criação da reserva
- `updatedAt` (datetime; required) — Momento da última atualização da reserva

### ReservationItem (supporting, moduleOwned)

Linha de detalhe da reserva que vincula um produto a uma quantidade reservada pelo cliente.

- `reservationItemId` (uuid; required) — Identificador único do item da reserva.
- `reservationId` (uuid; required) — Referência à reserva à qual este item pertence.
- `productId` (uuid; required) — Referência ao produto do catálogo que está sendo reservado.
- `quantity` (number; required) — Quantidade do produto reservada pelo cliente neste item.
- `createdAt` (datetime; required) — Data e hora em que o item da reserva foi criado.
- `updatedAt` (datetime; required) — Data e hora da última atualização do item da reserva.

### Payment (event, moduleOwned) — status: posted → voided

Registro do pagamento realizado presencialmente na loja física no momento da retirada da reserva. É um fato imutável que pode ser anulado por um evento compensatório.

- `paymentId` (uuid; required) — Identificador único do registro de pagamento.
- `reservationId` (uuid; required) — Referência à reserva cuja retirada gerou este pagamento.
- `amount` (money; required) — Valor total pago presencialmente na retirada da reserva.
- `paymentMethod` (string; required, enum: cash|creditCard|debitCard|pix) — Meio utilizado para o pagamento na loja física.
- `status` (string; required, enum: posted|voided) — Situação atual do pagamento: registrado ou anulado.
- `voidedAt` (datetime; optional) — Data e hora em que o pagamento foi anulado por evento compensatório.
- `voidReason` (text; optional) — Motivo da anulação do pagamento, registrado quando há estorno ou cancelamento.
- `createdAt` (datetime; required) — Data e hora em que o pagamento foi registrado na loja.

## Relationships

- `productHasPetType`: Product manyToOne PetType — Cada produto é classificado por um tipo de pet indicado.
- `productHasCategory`: Product manyToOne Category — Cada produto pertence a uma categoria do catálogo.
- `reservationHasReservationItems`: Reservation oneToMany ReservationItem — Uma reserva contém múltiplos itens, um para cada produto reservado com sua quantidade.
- `reservationItemHasProduct`: ReservationItem manyToOne Product — Cada item da reserva referencia um produto do catálogo.
- `reservationHasPayment`: Reservation oneToOne Payment — Uma reserva entregue possui um registro de pagamento presencial associado.
