# E4 — Actors, rules and external refs: petShop

- module: `petShop`
- actors: 3 / rules: 17
- generatedAt: 2026-07-13T19:50:04.892Z

## Actors

| actorId | roleScope | title | description |
| --- | --- | --- | --- |
| `cliente` | `petShop:cliente` | Cliente | Usuário final que acessa o site, navega no catálogo de produtos, cria pedidos para retirada na loja, agenda serviços e manifesta interesse em pets para adoção. |
| `operador` | `petShop:operador` | Operador | Funcionário que executa serviços agendados, visualiza sua agenda vinculada ao turno e marca serviços como concluídos após a execução. |
| `admin` | `petShop:admin` | Administrador | Responsável por gerenciar operadores, turnos, produtos, serviços oferecidos e pets disponíveis para adoção, controlando destaque, disponibilidade e capacidade de atendimento. |

## Rules

### `featuredProductRequiresActive` (domain) — Destaque exige produto ativo

Apenas produtos cadastrados e ativos podem ser marcados como destaque; a página inicial deve sempre exibir pelo menos um produto em destaque quando houver produtos cadastrados.

- appliesTo: `Product`
- absorbs journey rules:
  - "A página inicial deve sempre exibir pelo menos um produto em destaque quando houver produtos cadastrados."
  - "Apenas produtos cadastrados e ativos podem ser marcados como destaque."

### `activeServicesOnlyListed` (domain) — Apenas serviços ativos são listados

A listagem de serviços para clientes, inclusive na página inicial, reflete apenas serviços ativos cadastrados pelo administrador; serviços inativos não aparecem.

- appliesTo: `Service`
- absorbs journey rules:
  - "A lista de serviços na página inicial reflete apenas serviços ativos cadastrados pelo administrador."
  - "Apenas serviços ativos aparecem na listagem para clientes."

### `paymentInStoreOnly` (application) — Pagamento exclusivamente presencial

Todo pagamento — de pedidos de retirada e de serviços — é realizado apenas presencialmente na loja física; não existe pagamento online em nenhuma etapa do fluxo.

- appliesTo: `Order`, `ServiceBooking`
- absorbs journey rules:
  - "O pagamento é realizado apenas presencialmente na loja física; não há pagamento online."
  - "O pagamento do serviço é realizado presencialmente na loja, após a execução ou no momento do atendimento."
  - "O pagamento é feito presencialmente na loja após a execução do serviço."

### `pickupInStoreOnly` (application) — Retirada exclusivamente na loja

A retirada de produtos é feita exclusivamente na loja física; não há opção de entrega para pedidos de retirada.

- appliesTo: `Order`
- absorbs journey rules:
  - "A retirada de produtos é feita exclusivamente na loja, sem opção de entrega."

### `orderRequiresAtLeastOneItem` (domain) — Pedido exige ao menos um item

Um pedido de retirada deve conter pelo menos um item para ser finalizado; pedidos sem itens não podem ser concluídos.

- appliesTo: `Order`, `OrderItem`
- absorbs journey rules:
  - "O pedido deve conter pelo menos um item para ser finalizado."

### `schedulingCapacityByOperators` (domain) — Capacidade de agendamento por operadores alocados

A disponibilidade de horários e a capacidade de agendamento em cada horário são determinadas pelo número de operadores alocados no turno correspondente.

- appliesTo: `ServiceBooking`, `ShiftAssignment`
- absorbs journey rules:
  - "A disponibilidade de horários depende da quantidade de operadores alocados em cada turno."
  - "A capacidade de agendamento em cada horário é determinada pelo número de operadores alocados no turno correspondente."

### `noBookingWithoutAvailableOperator` (domain) — Agendamento exige operador disponível

Um cliente não pode agendar um serviço em horário em que não há operador disponível alocado no turno correspondente.

- appliesTo: `ServiceBooking`, `Operator`
- absorbs journey rules:
  - "Um cliente não pode agendar um serviço em horário sem operador disponível."

### `businessHoursForScheduling` (application) — Horário de funcionamento para agendamentos

O horário de funcionamento considerado para agendamentos é segunda a sábado, das 09:00 às 18:00, salvo configuração diferente definida pelo administrador.

- appliesTo: `ServiceBooking`, `Shift`
- absorbs journey rules:
  - "O horário de funcionamento considerado para agendamentos é segunda a sábado, das 09:00 às 18:00, salvo configuração diferente pelo administrador."

### `adoptionStartedOnlineFinishedInStore` (application) — Adoção iniciada online e finalizada na loja

A adoção é apenas iniciada no site mediante manifestação de interesse; a finalização acontece presencialmente na loja com verificação e documentação.

- appliesTo: `AdoptionInterest`
- absorbs journey rules:
  - "A adoção é apenas iniciada no site; a finalização acontece presencialmente na loja com verificação e documentação."

### `onlyAvailablePetsShownInGallery` (domain) — Galeria exibe apenas pets disponíveis

Apenas pets marcados como disponíveis para adoção pelo administrador aparecem na galeria de adoção exibida aos clientes.

- appliesTo: `AdoptablePet`
- absorbs journey rules:
  - "Apenas pets marcados como disponíveis para adoção pelo administrador aparecem na galeria."
  - "Apenas pets marcados como disponíveis aparecem na galeria de adoção."

### `operatorSeesOnlyAssignedShiftBookings` (application) — Operador vê apenas agendamentos do seu turno

O operador visualiza apenas os agendamentos atribuídos ao turno ao qual está alocado; agendamentos de outros turnos não são visíveis.

- appliesTo: `ServiceBooking`, `Operator`
- absorbs journey rules:
  - "O operador vê apenas os agendamentos atribuídos ao seu turno."

### `operatorScheduleShowsConfirmedOnly` (domain) — Agenda do operador mostra apenas confirmados

A agenda do operador reflete apenas serviços com status confirmado; agendamentos não confirmados não aparecem na agenda.

- appliesTo: `ServiceBooking`
- absorbs journey rules:
  - "A agenda do operador reflete apenas serviços confirmados."

### `onlyAssignedOperatorCanComplete` (application) — Apenas operador atribuído conclui serviço

Apenas o operador atribuído ao agendamento pode marcá-lo como concluído; outros operadores não podem finalizar agendamentos que não lhes foram atribuídos.

- appliesTo: `ServiceBooking`, `Operator`
- absorbs journey rules:
  - "Apenas o operador atribuído ao agendamento pode marcá-lo como concluído."

### `operatorMultipleShiftsAllowed` (domain) — Operador pode ter múltiplos turnos sobrepostos

Um operador pode ser alocado em mais de um turno, e turnos sobrepostos no mesmo dia são permitidos para aumentar a capacidade de atendimento.

- appliesTo: `ShiftAssignment`, `Shift`
- absorbs journey rules:
  - "Um operador pode ser alocado em mais de um turno."
  - "Turnos sobrepostos no mesmo dia são permitidos para aumentar a capacidade de atendimento."

### `productImageUsesPlatformStorage` (application) — Imagem de produto usa armazenamento da plataforma

A imagem do produto utiliza o armazenamento de mídia da plataforma; o módulo não implementa armazenamento próprio de arquivos.

- appliesTo: `Product`
- absorbs journey rules:
  - "A imagem do produto utiliza o armazenamento de mídia da plataforma."

### `deactivatingServiceDoesNotCancelBookings` (domain) — Desativar serviço não cancela agendamentos confirmados

Desativar um serviço não cancela agendamentos já confirmados; agendamentos existentes permanecem válidos mesmo após o serviço ser desativado.

- appliesTo: `Service`, `ServiceBooking`
- absorbs journey rules:
  - "Desativar um serviço não cancela agendamentos já confirmados."

### `petImageUsesPlatformStorage` (application) — Imagem de pet usa armazenamento da plataforma

A imagem do pet utiliza o armazenamento de mídia da plataforma; o módulo não implementa armazenamento próprio de arquivos.

- appliesTo: `AdoptablePet`
- absorbs journey rules:
  - "A imagem do pet utiliza o armazenamento de mídia da plataforma."

## External refs

### mdm

- **Categoria de Produto** — Catálogo de categorias de produto com identidade estável e mudanças raras, gerenciado pelo administrador para classificação de produtos no catálogo.
- **Turno de Trabalho** — Definição de turnos com identidade estável usada para cálculo de capacidade de agendamento, raramente alterada após configuração inicial pelo administrador.

### horizontals

- **Pagamento Presencial** — Todas as transações — pedidos de retirada e serviços agendados — exigem pagamento presencial na loja física, demandando uma capacidade de pagamento não online.

### plugins

- **Documento Fiscal** — Vendas presenciais na loja física podem exigir emissão de documentos fiscais (NF-e/SAT) conforme legislação tributária local.
- **TEF / Terminal de Cartão** — O pagamento presencial na loja pode utilizar terminais de captura de cartão (TEF) para processar pagamentos de pedidos e serviços.

### agents

(none)
