/// <mls fileReference="_102049_/l4/workflows/menuManagement.defs.ts" enhancement="_blank"/>

export const menuManagementDef = {
  "schemaVersion": "2026-06-06",
  "artifactType": "workflow",
  "artifactId": "menuManagement",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentPlanWorkflowDefinition",
    "stepId": 29,
    "planId": "plan-validate-solution-coverage"
  },
  "data": {
    "workflowDefinition": {
      "workflowId": "menuManagement",
      "title": "Fluxo de gestão de cardápio",
      "purpose": "Gerenciar o ciclo de vida dos itens do cardápio, permitindo cadastro, edição, desativação e vínculo com insumos de estoque.",
      "executionMode": "entityLifecycle",
      "createsTask": false,
      "taskConfig": {
        "taskTitleTemplate": "",
        "assigneeRules": [],
        "slaRules": [],
        "taskRoomRequired": false
      },
      "actors": [
        "manager"
      ],
      "states": [
        {
          "stateId": "draft",
          "description": "Item do cardápio em preparação para cadastro."
        },
        {
          "stateId": "active",
          "description": "Item do cardápio ativo e disponível para venda."
        },
        {
          "stateId": "inactive",
          "description": "Item do cardápio desativado e indisponível."
        }
      ],
      "transitions": [
        {
          "from": "draft",
          "to": "active",
          "trigger": "createMenuItem",
          "actor": "manager",
          "conditions": [],
          "actions": [
            "write MenuItem.name",
            "write MenuItem.description",
            "write MenuItem.price",
            "write MenuItem.menuCategoryId",
            "write MenuItem.isActive=true",
            "write MenuItem.createdAt",
            "write MenuItem.updatedAt"
          ],
          "rulesApplied": []
        },
        {
          "from": "active",
          "to": "active",
          "trigger": "updateMenuItem",
          "actor": "manager",
          "conditions": [],
          "actions": [
            "write MenuItem.name",
            "write MenuItem.description",
            "write MenuItem.price",
            "write MenuItem.menuCategoryId",
            "write MenuItem.updatedAt"
          ],
          "rulesApplied": []
        },
        {
          "from": "active",
          "to": "inactive",
          "trigger": "deactivateMenuItem",
          "actor": "manager",
          "conditions": [],
          "actions": [
            "write MenuItem.isActive=false",
            "write MenuItem.updatedAt"
          ],
          "rulesApplied": []
        },
        {
          "from": "inactive",
          "to": "active",
          "trigger": "reactivateMenuItem",
          "actor": "manager",
          "conditions": [],
          "actions": [
            "write MenuItem.isActive=true",
            "write MenuItem.updatedAt"
          ],
          "rulesApplied": []
        },
        {
          "from": "active",
          "to": "active",
          "trigger": "listMenuItems",
          "actor": "manager",
          "conditions": [],
          "actions": [],
          "rulesApplied": []
        }
      ],
      "requiredEntities": [
        "MenuItem"
      ],
      "persistenceRefs": [],
      "usecaseRefs": [
        "criarItemCardapio",
        "atualizarItemCardapio",
        "listarItensCardapio"
      ],
      "metricRefs": [],
      "userActions": [
        "criar item do cardápio",
        "editar item do cardápio",
        "desativar item do cardápio",
        "reativar item do cardápio",
        "listar itens do cardápio"
      ],
      "relatedPages": [
        "cardapioEstoque"
      ],
      "relatedAgents": [],
      "relatedPlugins": [],
      "rulesApplied": [],
      "implementationSuggestions": [
        {
          "suggestionId": "linkInventoryItem",
          "title": "Vincular item do cardápio a item de estoque",
          "priority": "now",
          "description": "Adicionar vínculo opcional do MenuItem com item de estoque para controle de custo e baixa automática de insumos na venda.",
          "tradeoff": "Requer modelagem de relacionamento e ajustes de UI/UX para seleção de insumos."
        },
        {
          "suggestionId": "approvalForPriceChange",
          "title": "Solicitar aprovação para alteração de preço",
          "priority": "soon",
          "description": "Criar fluxo de aprovação para mudanças de preço antes de aplicar no item do cardápio.",
          "tradeoff": "Aumenta tempo de atualização e exige gestão de permissões."
        },
        {
          "suggestionId": "noTaskCreation",
          "title": "Sem criação de tarefas",
          "priority": "now",
          "description": "O fluxo é simples e operado pelo gerente, sem necessidade de tarefas de acompanhamento.",
          "tradeoff": "Sem histórico formal de pendências; auditoria depende de logs de uso."
        }
      ],
      "workflowScope": "singleModule",
      "moduleRefs": [
        "cafeFlow"
      ],
      "pageRefsByModule": [],
      "entityRefsByModule": [
        {
          "moduleId": "cafeFlow",
          "entity": "MenuItem"
        }
      ],
      "writesArtifacts": [
        {
          "moduleId": "cafeFlow",
          "artifactType": "workflow",
          "artifactId": "menuManagement"
        }
      ]
    },
    "defsPlan": {
      "fileName": "workflows/menuManagement.defs.ts",
      "exportName": "menuManagementDef",
      "saveAsDefs": true
    }
  }
} as const;

export default menuManagementDef;
