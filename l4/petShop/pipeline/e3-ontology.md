# E3 — Ontology: Pet Shop — Catálogo e Reserva de Produtos

- module: `petShop`
- domain: Pet Retail
- entities: 6 / relationships: 5
- generatedAt: 2026-07-19T20:01:08.609Z

## Entities

### Product (mdm, external)

Produto do catálogo do pet shop, mantido por processo administrativo externo, com nome, preço, tipo de pet, categoria e flag de destaque para vitrine.

- `productId` (uuid; required) — Identificador único do produto no catálogo.
- `name` (string; required) — Nome do produto utilizado para exibição e pesquisa no catálogo.
- `price` (money; required) — Preço do produto utilizado no filtro de faixa de valor e no cálculo da reserva.
- `isFeatured` (boolean; required) — Indica se o produto deve ser exibido na vitrine de destaques, definido pelo processo administrativo externo.
- `categoryId` (uuid; required) — Referência à categoria do produto à qual pertence, usada no filtro de categoria.
- `petTypeId` (uuid; required) — Referência ao tipo de pet associado ao produto, usada no filtro de tipo de pet.
- `createdAt` (datetime; required) — Data e hora de cadastro do produto no catálogo.
- `updatedAt` (datetime; required) — Data e hora da última atualização do produto pelo processo administrativo externo.

### ProductCategory (mdm, external)

Categoria de produtos do pet shop, como ração, acessórios, higiene e brinquedos, usada como filtro no catálogo.

- `productCategoryId` (uuid; required) — Identificador único da categoria de produto.
- `name` (string; required) — Nome da categoria usado como filtro no catálogo (ex.: ração, acessórios, higiene, brinquedos).
- `description` (text; optional) — Descrição detalhada da categoria de produto.
- `createdAt` (datetime; required) — Data e hora de criação do registro da categoria.
- `updatedAt` (datetime; required) — Data e hora da última atualização do registro da categoria.

### PetType (mdm, external)

Tipo de pet (cão, gato, pássaro, etc.) associado aos produtos do catálogo, usado como filtro na busca.

- `petTypeId` (uuid; required) — Identificador único do tipo de pet.
- `name` (string; required) — Nome do tipo de pet exibido nos filtros do catálogo (ex.: cão, gato, pássaro).
- `createdAt` (datetime; required) — Data e hora de criação do registro do tipo de pet.
- `updatedAt` (datetime; required) — Data e hora da última atualização do registro do tipo de pet.

### Reservation (core, moduleOwned) — status: pending → confirmed → fulfilled → cancelled

Reserva de produtos feita pelo cliente para retirada presencial na loja, contendo dados de contato (nome e telefone), prazo de validade de 24 horas e status de atendimento controlado pelo atendente.

- `reservationId` (uuid; required) — Identificador único da reserva
- `customerName` (string; required) — Nome do cliente que fez a reserva
- `customerPhone` (string; required) — Telefone de contato do cliente
- `status` (string; required, enum: pending|confirmed|fulfilled|cancelled) — Status de atendimento da reserva controlado pelo atendente
- `expiresAt` (datetime; required) — Data e hora de validade da reserva, 24 horas após o registro
- `confirmedAt` (datetime; optional) — Data e hora em que a reserva foi confirmada pelo atendente
- `fulfilledAt` (datetime; optional) — Data e hora em que a reserva foi atendida com retirada e pagamento confirmado
- `cancelledAt` (datetime; optional) — Data e hora em que a reserva foi cancelada
- `cancellationReason` (text; optional) — Motivo do cancelamento da reserva registrado pelo atendente
- `paymentId` (uuid; optional) — Referência ao pagamento presencial associado quando a reserva é atendida
- `createdAt` (datetime; required) — Data e hora de criação da reserva
- `updatedAt` (datetime; required) — Data e hora da última atualização da reserva

### ReservationItem (supporting, moduleOwned)

Item de linha de uma reserva, contendo a referência ao produto e a quantidade reservada pelo cliente.

- `reservationItemId` (uuid; required) — Identificador único do item de reserva.
- `reservationId` (uuid; required) — Referência à reserva à qual este item pertence.
- `productId` (uuid; required) — Referência ao produto do catálogo que foi reservado.
- `quantity` (number; required) — Quantidade do produto reservada pelo cliente.
- `createdAt` (datetime; required) — Data e hora de criação do item de reserva.
- `updatedAt` (datetime; required) — Data e hora da última atualização do item de reserva.

### Payment (event, moduleOwned) — status: posted → voided

Registro do pagamento recebido presencialmente na loja no momento da retirada da reserva, informando método e valor total.

- `paymentId` (uuid; required) — Identificador único do registro de pagamento.
- `reservationId` (uuid; required) — Referência à reserva associada a este pagamento presencial.
- `amount` (money; required) — Valor total recebido, calculado a partir dos preços dos produtos e quantidades reservadas.
- `method` (string; required, enum: cash|creditCard|debitCard|pix) — Método de pagamento utilizado pelo cliente na loja.
- `status` (string; required, enum: posted|voided) — Situação atual do registro de pagamento.
- `receivedBy` (string; required) — Identificador do atendente que confirmou o recebimento do pagamento.
- `voidedAt` (datetime; optional) — Data e hora em que o pagamento foi cancelado ou estornado.
- `voidReason` (text; optional) — Motivo do cancelamento ou estorno do pagamento.
- `createdAt` (datetime; required) — Data e hora em que o pagamento foi registrado no sistema.

## Relationships

- `productBelongsToCategory`: Product manyToOne ProductCategory — Cada produto pertence a uma categoria de produto.
- `productTargetsPetType`: Product manyToOne PetType — Cada produto é associado a um tipo de pet para filtragem no catálogo.
- `reservationHasItems`: Reservation oneToMany ReservationItem — Uma reserva contém um ou mais itens de reserva com produtos e quantidades.
- `reservationItemRefersToProduct`: ReservationItem manyToOne Product — Cada item de reserva referencia um produto do catálogo.
- `reservationHasPayment`: Reservation oneToOne Payment — Uma reserva atendida possui um registro de pagamento presencial associado.
