/// <mls fileReference="_102049_/l1/petShop/layer_2_application/usecases/placeStorePickupOrder.defs.ts" enhancement="_blank"/>

export const placeStorePickupOrderUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "placeStorePickupOrder",
  "moduleName": "petShop",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "placeStorePickupOrder",
    "ports": [
      "Order",
      "Product"
    ],
    "functions": [
      {
        "functionName": "placeStorePickupOrder",
        "inputTypeName": "PlaceStorePickupOrderInput",
        "outputTypeName": "PlaceStorePickupOrderOutput",
        "input": [
          {
            "name": "customerName",
            "type": "string",
            "required": true,
            "description": "Nome do cliente que está finalizando o pedido de retirada",
            "ofEntity": "Order"
          },
          {
            "name": "customerPhone",
            "type": "string",
            "required": false,
            "description": "Telefone de contato opcional do cliente para confirmação da retirada",
            "ofEntity": "Order"
          }
        ],
        "output": [
          {
            "name": "orderId",
            "type": "string",
            "required": true,
            "description": "Identificador único do pedido criado",
            "ofEntity": "Order"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "description": "Status do pedido após criação (registered)",
            "ofEntity": "Order"
          },
          {
            "name": "customerName",
            "type": "string",
            "required": true,
            "description": "Nome do cliente confirmado no pedido",
            "ofEntity": "Order"
          },
          {
            "name": "customerPhone",
            "type": "string",
            "required": false,
            "description": "Telefone de contato do cliente, se informado",
            "ofEntity": "Order"
          },
          {
            "name": "createdAt",
            "type": "string",
            "required": true,
            "description": "Data e hora de registro do pedido",
            "ofEntity": "Order"
          }
        ],
        "ports": [
          "Order",
          "Product"
        ],
        "rulesApplied": [
          "paymentInStoreOnly",
          "pickupInStoreOnly",
          "orderRequiresAtLeastOneItem"
        ],
        "transactional": true,
        "steps": [
          "1. Resolve cartItems from workflow state context (previous navigation/review steps) — these are NOT client inputs but server-side resolved state containing { productId, quantity } pairs.",
          "2. Apply rule 'orderRequiresAtLeastOneItem': validate that cartItems is not empty and contains at least one item; if empty, throw validation error with ruleId 'orderRequiresAtLeastOneItem'.",
          "3. Generate orderId via ctx.idGenerator (systemDefault UUID).",
          "4. Resolve current timestamp via ctx.clock for createdAt and updatedAt (systemDefault).",
          "5. Collect all productIds from cartItems and batch-read them through the Product port (plural-first) to validate existence and retrieve current price for each product.",
          "6. Validate every productId in cartItems corresponds to an active Product; if any product is missing or inactive, throw validation error listing the invalid productIds.",
          "7. Apply rule 'pickupInStoreOnly': the order is created with no delivery option — pickup is exclusively in the physical store; this is enforced by the order creation flow having no delivery/shipping fields.",
          "8. Apply rule 'paymentInStoreOnly': no online payment is processed — the order is created with status 'registered' and payment is expected to be completed in person at the store during pickup; no payment processing step is invoked.",
          "9. Build OrderItem collection from cartItems: for each item, generate orderItemId via ctx.idGenerator, set orderId to the new order's id, copy productId and quantity from cart item, set unitPrice from the Product's current price, and set createdAt/updatedAt to the current timestamp.",
          "10. Create the Order aggregate through the Order port with: orderId, status='registered', customerName, customerPhone (if provided), createdAt, updatedAt, and the embedded OrderItem collection.",
          "11. Save the Order (with embedded OrderItems) through the Order port inside a single transaction (ctx.data transaction wrapper).",
          "12. Return { orderId, status, customerName, customerPhone, createdAt }."
        ]
      }
    ],
    "mdmRefs": []
  }
} as const;

export default placeStorePickupOrderUsecase;

export const pipeline = [
  {
    "id": "placeStorePickupOrder__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102049_/l1/petShop/layer_2_application/usecases/placeStorePickupOrder.ts",
    "defPath": "_102049_/l1/petShop/layer_2_application/usecases/placeStorePickupOrder.defs.ts",
    "dependsFiles": [
      "_102049_/l1/petShop/layer_2_application/ports/orderRepository.d.ts",
      "_102049_/l1/petShop/layer_2_application/ports/productRepository.d.ts",
      "_102049_/l1/petShop/layer_3_domain/entities/order.d.ts",
      "_102049_/l1/petShop/layer_3_domain/entities/product.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/applicationUsecase.md",
      "_102034_.d.ts"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
