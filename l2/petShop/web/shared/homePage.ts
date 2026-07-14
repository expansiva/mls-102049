/// <mls fileReference="_102049_/l2/petShop/web/shared/homePage.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { getState, setState } from '/_102029_/l2/collabState.js';
import type {
  PetShopBrowseHomePageInput,
  PetShopBrowseHomePageOutput,
} from '/_102049_/l2/petShop/web/contracts/homePage.js';

/// **collab_i18n_start**
const message_pt = {
  "homePage.title": "Página Inicial",
  "homePage.section.featuredProducts": "Produtos em Destaque",
  "homePage.section.services": "Serviços Oferecidos",
  "homePage.section.adoptablePets": "Pets para Adoção",
  "homePage.productList.title": "Produtos em Destaque",
  "homePage.productList.empty": "Nenhum produto em destaque disponível no momento. Volte mais tarde.",
  "homePage.productDetail.title": "Detalhes do Produto",
  "homePage.productDetail.empty": "Selecione um produto na lista para ver seus detalhes.",
  "homePage.productDetail.imageUrl": "Imagem",
  "homePage.productDetail.name": "Nome",
  "homePage.productDetail.description": "Descrição",
  "homePage.productDetail.price": "Preço",
  "homePage.product.productId": "ID do Produto",
  "homePage.product.name": "Nome",
  "homePage.product.description": "Descrição",
  "homePage.product.price": "Preço",
  "homePage.product.imageUrl": "Imagem",
  "homePage.product.featured": "Destaque",
  "homePage.product.status": "Situação",
  "homePage.servicesList.title": "Serviços Oferecidos",
  "homePage.servicesList.empty": "Nenhum serviço disponível no momento.",
  "homePage.service.serviceId": "ID do Serviço",
  "homePage.service.name": "Nome",
  "homePage.service.description": "Descrição",
  "homePage.service.estimatedDurationMinutes": "Duração Estimada (min)",
  "homePage.service.price": "Preço",
  "homePage.service.status": "Situação",
  "homePage.petsGallery.title": "Pets para Adoção",
  "homePage.petsGallery.empty": "Nenhum pet disponível para adoção no momento. Volte em breve!",
  "homePage.pet.adoptablePetId": "ID do Pet",
  "homePage.pet.name": "Nome",
  "homePage.pet.age": "Idade (anos)",
  "homePage.pet.description": "Descrição",
  "homePage.pet.photoUrl": "Foto",
  "homePage.pet.status": "Disponibilidade",
  "homePage.action.browseHomePage": "Explorar Página Inicial",
  "homePage.action.browseHomePage.success": "Página inicial carregada com sucesso.",
  "homePage.action.browseHomePage.error": "Não foi possível carregar a página inicial. Tente novamente.",
  "org.featured.products.title": "Explorar página inicial",
  "org.services.title": "Visualizar serviços oferecidos",
  "org.adoptable.pets.title": "Visualizar pets disponíveis para adoção"
};
type MessageType = typeof message_pt;
const messages: { [key: string]: MessageType } = { pt: message_pt };
/// **collab_i18n_end**

export class PetShopHomePageBase extends CollabLitElement {
  @property({ type: String })
  status: string = '';

  @property({ type: String })
  browseHomePageState: "idle" | "loading" | "success" | "error" = "idle";

  @property({ type: Object })
  browseHomePageData: PetShopBrowseHomePageOutput = { items: [], total: 0 };

  protected get msg(): MessageType {
    const lang: string = this.getMessageKey(messages);
    return messages[lang] || message_pt;
  }

  async loadBrowseHomePage(): Promise<void> {
    this.browseHomePageState = "loading";
    setState("ui.homePage.action.browseHomePage.status", "loading");
    this.requestUpdate();

    const params: PetShopBrowseHomePageInput = {};
    const options: BffClientOptions = { mode: "silent" };

    const response = await execBff<PetShopBrowseHomePageOutput>(
      "petShop.browseHomePage.browseHomePage",
      params,
      options
    );

    if (response.ok) {
      const data: PetShopBrowseHomePageOutput = response.data ?? { items: [], total: 0 };
      this.browseHomePageData = data;
      setState("ui.homePage.data.browseHomePage", data);
      this.browseHomePageState = "success";
      setState("ui.homePage.action.browseHomePage.status", "success");
    } else {
      this.browseHomePageData = { items: [], total: 0 };
      setState("ui.homePage.data.browseHomePage", { items: [], total: 0 });
      this.browseHomePageState = "error";
      setState("ui.homePage.action.browseHomePage.status", "error");
      if (response.error) {
        console.error("[PetShopHomePageBase] browseHomePage error:", response.error.message);
      }
    }
    this.requestUpdate();
  }

  handleBrowseHomePageClick(_event: Event): void {
    this.loadBrowseHomePage();
  }

  connectedCallback(): void {
    super.connectedCallback();

    const savedStatus = getState("ui.homePage.status");
    if (typeof savedStatus === "string") {
      this.status = savedStatus;
    }

    const savedActionStatus = getState("ui.homePage.action.browseHomePage.status");
    if (typeof savedActionStatus === "string") {
      this.browseHomePageState = savedActionStatus as "idle" | "loading" | "success" | "error";
    }

    const savedData = getState("ui.homePage.data.browseHomePage");
    if (savedData && typeof savedData === "object") {
      this.browseHomePageData = savedData as PetShopBrowseHomePageOutput;
    }

    this.loadBrowseHomePage();
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
  }
}
