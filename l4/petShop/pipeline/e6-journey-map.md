# E6 — Journey map: petShop

- module: `petShop`
- workspaces: 12 / landings: 3 / edges: 7
- generatedAt: 2026-07-13T19:58:14.222Z
- Consolidated navigation map derived from workflows/operations stories (view, not source).

## Workspaces by actor

### cliente

- `homePage` (operation, Product): Página inicial — O cliente visualiza produtos em destaque, serviços oferecidos e a seção de adoção ao acessar o site
  - operations: `browseHomePage`
- `productCatalog` (operation, Product): Catálogo de produtos e pedido para retirada — O cliente navega no catálogo, vê detalhes dos produtos e finaliza o pedido para retirada na loja
  - operations: `browseProductCatalog`, `viewProductDetails`, `placeStorePickupOrder`
- `serviceBooking` (workflow, ServiceBooking) — workflow `serviceBookingLifecycle`: Agendamento de serviço — O cliente consulta os serviços oferecidos e agenda um horário disponível para o seu pet
  - operations: `browseServiceCatalog`, `createServiceBooking`
- `adoptionGallery` (operation, AdoptablePet): Galeria de adoção — O cliente navega na galeria de pets, vê detalhes e manifesta interesse em adoção
  - operations: `browseAdoptablePets`, `viewAdoptablePetDetails`, `expressAdoptionInterest`

### operador

- `operatorSchedule` (operation, ServiceBooking): Agenda de serviços do turno — O operador consulta os agendamentos do seu turno e revisa os detalhes de cada atendimento
  - operations: `viewOperatorSchedule`, `viewServiceBookingDetails`
- `serviceExecution` (workflow, ServiceBooking) — workflow `serviceBookingLifecycle`: Execução de serviço agendado — O operador inicia e conclui o atendimento do serviço agendado
  - operations: `startServiceExecution`, `completeServiceExecution`

### admin

- `productManagement` (entityManagement, Product): Gestão de produtos — O administrador cadastra, edita produtos e define produtos em destaque no catálogo
  - operations: `browseProducts`, `createProduct`, `updateProduct`
- `serviceManagement` (entityManagement, Service): Gestão de serviços — O administrador cadastra, edita e ativa/desativa serviços oferecidos pelo pet shop
  - operations: `browseServices`, `createService`, `updateService`
- `petManagement` (entityManagement, AdoptablePet): Gestão de pets para adoção — O administrador cadastra, edita pets e controla a disponibilidade para adoção
  - operations: `browseAdoptablePetsAdmin`, `createAdoptablePet`, `updateAdoptablePet`
- `operatorManagement` (entityManagement, Operator): Gestão de operadores — O administrador cadastra e edita operadores disponíveis para alocação em turnos
  - operations: `browseOperators`, `createOperator`, `updateOperator`
- `shiftManagement` (entityManagement, Shift): Gestão de turnos — O administrador cria e edita turnos de trabalho com horários e dias da semana
  - operations: `browseShifts`, `createShift`, `updateShift`
- `schedulingCapacity` (operation, ShiftAssignment): Alocação e capacidade de atendimento — O administrador aloca operadores em turnos e revisa a capacidade de agendamento disponível
  - operations: `assignOperatorToShift`, `reviewSchedulingCapacity`

## Landings

- cliente → `homePage` — O cliente inicia sua jornada acessando a página inicial para ver produtos em destaque, serviços e pets para adoção
- operador → `operatorSchedule` — O operador começa o dia consultando sua agenda de serviços do turno
- admin → `operatorManagement` — O administrador inicia gerenciando operadores antes de definir turnos e alocar capacidade

## Navigation edges (advisory)

- `homePage` → `productCatalog` via `browseHomePage` — Cliente decide explorar o catálogo de produtos a partir da página inicial
- `homePage` → `serviceBooking` via `browseHomePage` — Cliente decide agendar um serviço a partir da página inicial
- `homePage` → `adoptionGallery` via `browseHomePage` — Cliente decide ver pets disponíveis para adoção a partir da página inicial
- `serviceBooking` → `operatorSchedule` via `createServiceBooking` — Agendamento criado pelo cliente aparece na agenda do operador do turno correspondente
- `operatorSchedule` → `serviceExecution` via `viewServiceBookingDetails` — Operador revisa os detalhes do atendimento e inicia a execução do serviço
- `operatorManagement` → `shiftManagement` via `createOperator` — Após cadastrar operadores, o administrador define os turnos de trabalho
- `shiftManagement` → `schedulingCapacity` via `updateShift` — Após definir turnos, o administrador aloca operadores e revisa a capacidade de atendimento
