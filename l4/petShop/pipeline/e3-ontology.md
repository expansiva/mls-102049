# E3 — Ontology: Pet Shop — Site de Serviços, Produtos e Adoção

- module: `petShop`
- domain: Pet Shop Retail & Services
- entities: 11 / relationships: 8
- generatedAt: 2026-07-13T19:48:39.582Z

## Entities

### Product (core, moduleOwned) — status: active → inactive

Produto do catálogo do pet shop, com nome, descrição, preço, imagem, categoria e flag de destaque para exibição na página inicial.

- `productId` (uuid; required) — Identificador único do produto no catálogo.
- `name` (string; required) — Nome do produto exibido no catálogo e na página inicial.
- `description` (text; optional) — Descrição detalhada do produto para o cliente.
- `price` (money; required) — Preço do produto cobrado na retirada presencial na loja.
- `imageUrl` (string; optional) — URL da imagem do produto armazenada no armazenamento de mídia da plataforma.
- `productCategoryId` (uuid; required) — Referência à categoria de produto à qual o produto pertence.
- `featured` (boolean; required) — Indica se o produto deve ser exibido em destaque na página inicial.
- `status` (string; required, enum: active|inactive) — Situação do produto no catálogo: ativo ou inativo.
- `createdAt` (datetime; required) — Data e hora de cadastro do produto.
- `updatedAt` (datetime; required) — Data e hora da última atualização do produto.

### ProductCategory (mdm, moduleOwned)

Categoria de classificação de produtos do catálogo, utilizada para filtragem e organização na navegação do cliente.

- `productCategoryId` (uuid; required) — Identificador único da categoria de produto.
- `name` (string; required) — Nome da categoria de produto exibido na navegação do cliente.
- `description` (text; optional) — Descrição detalhada da categoria para uso interno e organização do catálogo.
- `active` (boolean; required) — Indica se a categoria está ativa e disponível para associação a produtos no catálogo.
- `createdAt` (datetime; required) — Data e hora de criação do registro da categoria.
- `updatedAt` (datetime; required) — Data e hora da última atualização do registro da categoria.

### Order (core, moduleOwned) — status: registered → completed → cancelled

Pedido de compra de produtos finalizado pelo cliente para retirada presencial na loja, com pagamento na loja física.

- `orderId` (uuid; required) — Identificador único do pedido de retirada.
- `status` (string; required, enum: registered|completed|cancelled) — Situação atual do pedido: registrado, concluído ou cancelado.
- `customerName` (string; required) — Nome do cliente que realizou o pedido de retirada.
- `customerPhone` (string; optional) — Telefone de contato do cliente para confirmação da retirada.
- `createdAt` (datetime; required) — Data e hora em que o pedido foi registrado.
- `updatedAt` (datetime; required) — Data e hora da última atualização do pedido.
- `completedAt` (datetime; optional) — Data e hora em que o pedido foi concluído na loja (retirada e pagamento realizados).
- `cancelledAt` (datetime; optional) — Data e hora em que o pedido foi cancelado.
- `cancellationReason` (text; optional) — Motivo informado no cancelamento do pedido.

### OrderItem (supporting, moduleOwned)

Linha de item de um pedido de retirada, contendo a referência ao produto e a quantidade solicitada pelo cliente.

- `orderItemId` (uuid; required) — Identificador único do item do pedido
- `orderId` (uuid; required) — Referência ao pedido de retirada ao qual este item pertence
- `productId` (uuid; required) — Referência ao produto do catálogo solicitado pelo cliente
- `quantity` (number; required) — Quantidade do produto solicitada pelo cliente
- `unitPrice` (money; required) — Preço unitário do produto registrado no momento do pedido para cálculo do total a pagar presencialmente
- `createdAt` (datetime; required) — Data e hora de criação do item do pedido
- `updatedAt` (datetime; required) — Data e hora da última atualização do item do pedido

### Service (core, moduleOwned) — status: active → inactive

Serviço oferecido pelo pet shop, como banho e tosa, com descrição, duração estimada, preço e estado de ativação para agendamento.

- `serviceId` (uuid; required) — Identificador único do serviço oferecido.
- `name` (string; required) — Nome do serviço oferecido, como banho e tosa.
- `description` (text; required) — Descrição detalhada do serviço oferecido ao cliente.
- `estimatedDurationMinutes` (number; required) — Duração estimada do serviço em minutos, usada para cálculo de horários disponíveis.
- `price` (money; required) — Preço do serviço, cobrado presencialmente na loja após a execução.
- `status` (string; required, enum: active|inactive) — Estado de ativação do serviço; apenas serviços ativos aparecem na listagem para clientes.
- `deactivatedAt` (datetime; optional) — Data e hora em que o serviço foi desativado; desativar não cancela agendamentos já confirmados.
- `createdAt` (datetime; required) — Data e hora de criação do registro do serviço.
- `updatedAt` (datetime; required) — Data e hora da última atualização do registro do serviço.

### ServiceBooking (core, moduleOwned) — status: confirmed → inProgress → completed → cancelled

Agendamento de um serviço feito pelo cliente para uma data e horário, atribuído a um operador disponível no turno correspondente, com ciclo de execução pelo operador.

- `serviceBookingId` (uuid; required) — Identificador único do agendamento de serviço.
- `serviceId` (uuid; required) — Referência ao serviço agendado pelo cliente.
- `operatorId` (uuid; required) — Referência ao operador atribuído ao agendamento, disponível no turno correspondente.
- `shiftId` (uuid; required) — Referência ao turno em que o agendamento foi alocado, determinado pela disponibilidade de operadores.
- `customerName` (string; required) — Nome do cliente que realizou o agendamento.
- `customerPhone` (string; required) — Telefone de contato do cliente para o agendamento.
- `bookingDate` (date; required) — Data do agendamento do serviço, dentro do horário de funcionamento (segunda a sábado, 09:00 às 18:00).
- `bookingTime` (string; required) — Horário do agendamento, dentro do intervalo de funcionamento da loja.
- `status` (string; required, enum: confirmed|inProgress|completed|cancelled) — Situação atual do agendamento no ciclo de execução.
- `notes` (text; optional) — Observações adicionais sobre o agendamento informadas pelo cliente ou operador.
- `completedAt` (datetime; optional) — Data e hora em que o operador atribuído marcou o serviço como concluído.
- `cancelledAt` (datetime; optional) — Data e hora em que o agendamento foi cancelado.
- `cancelReason` (text; optional) — Motivo do cancelamento do agendamento.
- `createdAt` (datetime; required) — Data e hora de criação do agendamento.
- `updatedAt` (datetime; required) — Data e hora da última atualização do agendamento.

### Operator (core, moduleOwned)

Funcionário do pet shop responsável por executar serviços agendados, cadastrado pelo administrador e alocável em um ou mais turnos de trabalho.

- `operatorId` (uuid; required) — Identificador único do operador.
- `name` (string; required) — Nome completo do operador exibido na agenda e nos agendamentos atribuídos.
- `email` (string; optional) — E-mail de contato do operador para notificações de agenda.
- `phone` (string; optional) — Telefone de contato do operador.
- `active` (boolean; required) — Indica se o operador está ativo e pode ser alocado em turnos e receber agendamentos.
- `createdAt` (datetime; required) — Data e hora de cadastro do operador pelo administrador.
- `updatedAt` (datetime; required) — Data e hora da última atualização dos dados do operador.

### Shift (mdm, moduleOwned)

Turno de trabalho recorrente definido pelo administrador com horário de início, fim e dias da semana, base para o cálculo de capacidade de agendamento.

- `shiftId` (uuid; required) — Identificador único do turno de trabalho.
- `name` (string; required) — Nome do turno para identificação pelo administrador (ex.: Manhã, Tarde, Dia Inteiro).
- `startTime` (string; required) — Horário de início do turno no formato HH:mm (ex.: 09:00).
- `endTime` (string; required) — Horário de fim do turno no formato HH:mm (ex.: 18:00).
- `monday` (boolean; required) — Indica se o turno ocorre às segundas-feiras.
- `tuesday` (boolean; required) — Indica se o turno ocorre às terças-feiras.
- `wednesday` (boolean; required) — Indica se o turno ocorre às quartas-feiras.
- `thursday` (boolean; required) — Indica se o turno ocorre às quintas-feiras.
- `friday` (boolean; required) — Indica se o turno ocorre às sextas-feiras.
- `saturday` (boolean; required) — Indica se o turno ocorre aos sábados.
- `sunday` (boolean; required) — Indica se o turno ocorre aos domingos.
- `active` (boolean; required) — Indica se o turno está ativo e disponível para alocação de operadores e agendamentos.
- `createdAt` (datetime; required) — Data e hora de criação do turno.
- `updatedAt` (datetime; required) — Data e hora da última atualização do turno.

### ShiftAssignment (core, moduleOwned)

Vínculo operacional entre um operador e um turno, definindo a capacidade de atendimentos simultâneos disponíveis naquele horário.

- `shiftAssignmentId` (uuid; required) — Identificador único da alocação de operador em turno.
- `operatorId` (uuid; required) — Referência ao operador alocado neste turno.
- `shiftId` (uuid; required) — Referência ao turno de trabalho ao qual o operador está alocado.
- `createdAt` (datetime; required) — Data e hora em que a alocação foi criada.
- `updatedAt` (datetime; required) — Data e hora da última atualização da alocação.

### AdoptablePet (core, moduleOwned) — status: available → unavailable

Pet cadastrado pelo administrador para adoção, com nome, idade, descrição e foto, cuja disponibilidade controla a exibição na galeria pública.

- `adoptablePetId` (uuid; required) — Identificador único do pet para adoção
- `name` (string; required) — Nome do pet
- `age` (number; required) — Idade do pet em anos
- `description` (text; required) — Descrição do pet exibida na galeria pública
- `photoUrl` (string; required) — URL da foto do pet no armazenamento de mídia da plataforma
- `status` (string; required, enum: available|unavailable) — Disponibilidade do pet para adoção, controla exibição na galeria
- `createdAt` (datetime; required) — Data e hora de cadastro do pet
- `updatedAt` (datetime; required) — Data e hora da última atualização do pet

### AdoptionInterest (core, moduleOwned) — status: registered → completed → cancelled

Registro do interesse de um cliente em adotar um pet, iniciado no site e finalizado presencialmente na loja com verificação e documentação.

- `adoptionInterestId` (uuid; required) — Identificador único da manifestação de interesse em adoção.
- `adoptablePetId` (uuid; required) — Referência ao pet disponível para adoção que é objeto do interesse.
- `customerName` (string; required) — Nome completo do cliente que manifesta interesse em adotar.
- `customerEmail` (string; required) — E-mail de contato do cliente para comunicação sobre a adoção.
- `customerPhone` (string; optional) — Telefone de contato do cliente para agendamento da visita presencial.
- `status` (string; required, enum: registered|completed|cancelled) — Situação atual da manifestação de interesse: registrada, concluída ou cancelada.
- `operatorId` (uuid; optional) — Identificador do operador que realizou a verificação e finalização presencial na loja.
- `verificationNotes` (text; optional) — Anotações da verificação presencial e documentação apresentada pelo cliente na loja.
- `completedAt` (datetime; optional) — Data e hora em que a adoção foi finalizada presencialmente na loja.
- `cancelledAt` (datetime; optional) — Data e hora em que a manifestação de interesse foi cancelada.
- `cancellationReason` (text; optional) — Motivo do cancelamento da manifestação de interesse.
- `createdAt` (datetime; required) — Data e hora em que o interesse foi registrado pelo cliente no site.
- `updatedAt` (datetime; required) — Data e hora da última atualização do registro de interesse.

## Relationships

- `productHasCategory`: Product manyToOne ProductCategory — Cada produto pertence a uma categoria de produto do catálogo.
- `orderHasOrderItems`: Order oneToMany OrderItem — Um pedido de retirada contém um ou mais itens de pedido.
- `orderItemReferencesProduct`: OrderItem manyToOne Product — Cada item do pedido referencia um produto do catálogo.
- `bookingForService`: ServiceBooking manyToOne Service — Cada agendamento é para um serviço oferecido pelo pet shop.
- `bookingAssignedToOperator`: ServiceBooking manyToOne Operator — Cada agendamento é atribuído a um operador disponível no turno correspondente.
- `shiftAssignmentToOperator`: ShiftAssignment manyToOne Operator — Cada alocação vincula um operador a um turno de trabalho.
- `shiftAssignmentToShift`: ShiftAssignment manyToOne Shift — Cada alocação refere-se a um turno de trabalho definido pelo administrador.
- `adoptionInterestForPet`: AdoptionInterest manyToOne AdoptablePet — Cada manifestação de interesse refere-se a um pet disponível para adoção.
