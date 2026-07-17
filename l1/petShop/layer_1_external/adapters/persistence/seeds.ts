/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/persistence/seeds.ts" enhancement="_blank"/>

// Deterministic initial data for petShop. Scenario planned by agentCbSeeds; rows and ids compiled locally.
// TableSeedRows exports are discovered by shape and merged by the persistence registry.

/* <agentCbSeedsPlan>
{
  "version": 1,
  "moduleName": "petShop",
  "language": "en",
  "plan": {
    "summary": "Wave 3 seeds 4 Reservation rows covering active (in-progress), delivered, expired, and cancelled lifecycle states, plus 4 Payment rows (one per reservation). The cancelled reservation's payment is voided; all others are posted. All timestamps are within 2026-07-01–2026-07-08 and chronologically coherent. Reservations reference authenticated customer actors. The 24-hour expiry rule is respected (expiresAt = confirmedAt + 24h). The delivered reservation passed through the ready stage (readyAt set by store) before delivery. The cancelled reservation was cancelled while still active (before expiry), satisfying the onlyActiveReservationsCanBeCancelled rule.",
    "localTables": [
      {
        "tableId": "Payment",
        "rows": [
          {
            "key": "pay-001",
            "columns": [
              {
                "name": "payment_id",
                "value": "pay-001"
              },
              {
                "name": "reservation_id",
                "value": {
                  "ref": "local:Reservation.resv-active"
                }
              },
              {
                "name": "payment_method",
                "value": "pix"
              },
              {
                "name": "status",
                "value": "posted"
              },
              {
                "name": "created_at",
                "value": "2026-07-06T10:05:00.000Z"
              }
            ],
            "details": [
              {
                "name": "amount",
                "value": 85.5
              },
              {
                "name": "voidedAt",
                "value": null
              },
              {
                "name": "voidReason",
                "value": null
              }
            ],
            "children": []
          },
          {
            "key": "pay-002",
            "columns": [
              {
                "name": "payment_id",
                "value": "pay-002"
              },
              {
                "name": "reservation_id",
                "value": {
                  "ref": "local:Reservation.resv-delivered"
                }
              },
              {
                "name": "payment_method",
                "value": "creditCard"
              },
              {
                "name": "status",
                "value": "posted"
              },
              {
                "name": "created_at",
                "value": "2026-07-03T09:10:00.000Z"
              }
            ],
            "details": [
              {
                "name": "amount",
                "value": 120
              },
              {
                "name": "voidedAt",
                "value": null
              },
              {
                "name": "voidReason",
                "value": null
              }
            ],
            "children": []
          },
          {
            "key": "pay-003",
            "columns": [
              {
                "name": "payment_id",
                "value": "pay-003"
              },
              {
                "name": "reservation_id",
                "value": {
                  "ref": "local:Reservation.resv-expired"
                }
              },
              {
                "name": "payment_method",
                "value": "cash"
              },
              {
                "name": "status",
                "value": "posted"
              },
              {
                "name": "created_at",
                "value": "2026-07-01T08:15:00.000Z"
              }
            ],
            "details": [
              {
                "name": "amount",
                "value": 45
              },
              {
                "name": "voidedAt",
                "value": null
              },
              {
                "name": "voidReason",
                "value": null
              }
            ],
            "children": []
          },
          {
            "key": "pay-004",
            "columns": [
              {
                "name": "payment_id",
                "value": "pay-004"
              },
              {
                "name": "reservation_id",
                "value": {
                  "ref": "local:Reservation.resv-cancelled"
                }
              },
              {
                "name": "payment_method",
                "value": "debitCard"
              },
              {
                "name": "status",
                "value": "voided"
              },
              {
                "name": "created_at",
                "value": "2026-07-05T11:10:00.000Z"
              }
            ],
            "details": [
              {
                "name": "amount",
                "value": 75
              },
              {
                "name": "voidedAt",
                "value": "2026-07-05T15:00:00.000Z"
              },
              {
                "name": "voidReason",
                "value": "Reserva cancelada pelo cliente"
              }
            ],
            "children": []
          }
        ]
      },
      {
        "tableId": "Product",
        "rows": [
          {
            "key": "prod-dog-food",
            "columns": [
              {
                "name": "product_id",
                "value": "prod-dog-food"
              },
              {
                "name": "pet_type_id",
                "value": {
                  "ref": "mdm:PetType.pt-dog"
                }
              },
              {
                "name": "category_id",
                "value": {
                  "ref": "mdm:Category.cat-food"
                }
              },
              {
                "name": "status",
                "value": "available"
              },
              {
                "name": "created_at",
                "value": "2026-07-01T08:00:00.000Z"
              }
            ],
            "details": [
              {
                "name": "name",
                "value": "Premium Dog Food"
              },
              {
                "name": "description",
                "value": "High-quality dry food for adult dogs, 15kg bag"
              },
              {
                "name": "price",
                "value": 89.9
              },
              {
                "name": "highlighted",
                "value": true
              },
              {
                "name": "updatedAt",
                "value": "2026-07-01T08:00:00.000Z"
              }
            ],
            "children": []
          },
          {
            "key": "prod-cat-toy",
            "columns": [
              {
                "name": "product_id",
                "value": "prod-cat-toy"
              },
              {
                "name": "pet_type_id",
                "value": {
                  "ref": "mdm:PetType.pt-cat"
                }
              },
              {
                "name": "category_id",
                "value": {
                  "ref": "mdm:Category.cat-toys"
                }
              },
              {
                "name": "status",
                "value": "available"
              },
              {
                "name": "created_at",
                "value": "2026-07-02T10:00:00.000Z"
              }
            ],
            "details": [
              {
                "name": "name",
                "value": "Cat Feather Toy"
              },
              {
                "name": "description",
                "value": "Interactive feather wand toy for cats"
              },
              {
                "name": "price",
                "value": 25.5
              },
              {
                "name": "highlighted",
                "value": false
              },
              {
                "name": "updatedAt",
                "value": "2026-07-02T10:00:00.000Z"
              }
            ],
            "children": []
          },
          {
            "key": "prod-bird-perch",
            "columns": [
              {
                "name": "product_id",
                "value": "prod-bird-perch"
              },
              {
                "name": "pet_type_id",
                "value": {
                  "ref": "mdm:PetType.pt-bird"
                }
              },
              {
                "name": "category_id",
                "value": {
                  "ref": "mdm:Category.cat-accessories"
                }
              },
              {
                "name": "status",
                "value": "available"
              },
              {
                "name": "created_at",
                "value": "2026-07-03T09:00:00.000Z"
              }
            ],
            "details": [
              {
                "name": "name",
                "value": "Bird Perch Set"
              },
              {
                "name": "description",
                "value": "Natural wood perch set for small birds"
              },
              {
                "name": "price",
                "value": 42
              },
              {
                "name": "highlighted",
                "value": true
              },
              {
                "name": "updatedAt",
                "value": "2026-07-03T09:00:00.000Z"
              }
            ],
            "children": []
          },
          {
            "key": "prod-fish-conditioner",
            "columns": [
              {
                "name": "product_id",
                "value": "prod-fish-conditioner"
              },
              {
                "name": "pet_type_id",
                "value": {
                  "ref": "mdm:PetType.pt-fish"
                }
              },
              {
                "name": "category_id",
                "value": {
                  "ref": "mdm:Category.cat-hygiene"
                }
              },
              {
                "name": "status",
                "value": "unavailable"
              },
              {
                "name": "created_at",
                "value": "2026-07-04T11:00:00.000Z"
              }
            ],
            "details": [
              {
                "name": "name",
                "value": "Fish Water Conditioner"
              },
              {
                "name": "description",
                "value": "Water conditioner for aquarium maintenance, 250ml"
              },
              {
                "name": "price",
                "value": 18.75
              },
              {
                "name": "highlighted",
                "value": false
              },
              {
                "name": "updatedAt",
                "value": "2026-07-05T14:00:00.000Z"
              }
            ],
            "children": []
          }
        ]
      },
      {
        "tableId": "Reservation",
        "rows": [
          {
            "key": "resv-active",
            "columns": [
              {
                "name": "reservation_id",
                "value": "resv-active"
              },
              {
                "name": "customer_id",
                "value": {
                  "ref": "actor:cliente.u1"
                }
              },
              {
                "name": "status",
                "value": "active"
              },
              {
                "name": "payment_id",
                "value": {
                  "ref": "local:Payment.pay-001"
                }
              },
              {
                "name": "created_at",
                "value": "2026-07-06T10:00:00.000Z"
              }
            ],
            "details": [
              {
                "name": "confirmedAt",
                "value": "2026-07-06T10:05:00.000Z"
              },
              {
                "name": "expiresAt",
                "value": "2026-07-07T10:05:00.000Z"
              },
              {
                "name": "readyAt",
                "value": null
              },
              {
                "name": "deliveredAt",
                "value": null
              },
              {
                "name": "expiredAt",
                "value": null
              },
              {
                "name": "cancelledAt",
                "value": null
              },
              {
                "name": "cancelReason",
                "value": null
              },
              {
                "name": "updatedAt",
                "value": "2026-07-06T10:05:00.000Z"
              }
            ],
            "children": []
          },
          {
            "key": "resv-delivered",
            "columns": [
              {
                "name": "reservation_id",
                "value": "resv-delivered"
              },
              {
                "name": "customer_id",
                "value": {
                  "ref": "actor:cliente.u2"
                }
              },
              {
                "name": "status",
                "value": "delivered"
              },
              {
                "name": "payment_id",
                "value": {
                  "ref": "local:Payment.pay-002"
                }
              },
              {
                "name": "created_at",
                "value": "2026-07-03T09:00:00.000Z"
              }
            ],
            "details": [
              {
                "name": "confirmedAt",
                "value": "2026-07-03T09:10:00.000Z"
              },
              {
                "name": "expiresAt",
                "value": "2026-07-04T09:10:00.000Z"
              },
              {
                "name": "readyAt",
                "value": "2026-07-03T14:00:00.000Z"
              },
              {
                "name": "deliveredAt",
                "value": "2026-07-03T16:00:00.000Z"
              },
              {
                "name": "expiredAt",
                "value": null
              },
              {
                "name": "cancelledAt",
                "value": null
              },
              {
                "name": "cancelReason",
                "value": null
              },
              {
                "name": "updatedAt",
                "value": "2026-07-03T16:00:00.000Z"
              }
            ],
            "children": []
          },
          {
            "key": "resv-expired",
            "columns": [
              {
                "name": "reservation_id",
                "value": "resv-expired"
              },
              {
                "name": "customer_id",
                "value": {
                  "ref": "actor:cliente.u3"
                }
              },
              {
                "name": "status",
                "value": "expired"
              },
              {
                "name": "payment_id",
                "value": {
                  "ref": "local:Payment.pay-003"
                }
              },
              {
                "name": "created_at",
                "value": "2026-07-01T08:00:00.000Z"
              }
            ],
            "details": [
              {
                "name": "confirmedAt",
                "value": "2026-07-01T08:15:00.000Z"
              },
              {
                "name": "expiresAt",
                "value": "2026-07-02T08:15:00.000Z"
              },
              {
                "name": "readyAt",
                "value": null
              },
              {
                "name": "deliveredAt",
                "value": null
              },
              {
                "name": "expiredAt",
                "value": "2026-07-02T08:15:00.000Z"
              },
              {
                "name": "cancelledAt",
                "value": null
              },
              {
                "name": "cancelReason",
                "value": null
              },
              {
                "name": "updatedAt",
                "value": "2026-07-02T08:15:00.000Z"
              }
            ],
            "children": []
          },
          {
            "key": "resv-cancelled",
            "columns": [
              {
                "name": "reservation_id",
                "value": "resv-cancelled"
              },
              {
                "name": "customer_id",
                "value": {
                  "ref": "actor:cliente.u1"
                }
              },
              {
                "name": "status",
                "value": "cancelled"
              },
              {
                "name": "payment_id",
                "value": {
                  "ref": "local:Payment.pay-004"
                }
              },
              {
                "name": "created_at",
                "value": "2026-07-05T11:00:00.000Z"
              }
            ],
            "details": [
              {
                "name": "confirmedAt",
                "value": "2026-07-05T11:10:00.000Z"
              },
              {
                "name": "expiresAt",
                "value": "2026-07-06T11:10:00.000Z"
              },
              {
                "name": "readyAt",
                "value": null
              },
              {
                "name": "deliveredAt",
                "value": null
              },
              {
                "name": "expiredAt",
                "value": null
              },
              {
                "name": "cancelledAt",
                "value": "2026-07-05T15:00:00.000Z"
              },
              {
                "name": "cancelReason",
                "value": "Cliente desistiu da reserva"
              },
              {
                "name": "updatedAt",
                "value": "2026-07-05T15:00:00.000Z"
              }
            ],
            "children": []
          }
        ]
      }
    ],
    "mdmEntities": [
      {
        "entityId": "Category",
        "rows": [
          {
            "key": "cat-food",
            "fields": [
              {
                "name": "categoryId",
                "value": null
              },
              {
                "name": "name",
                "value": "Food"
              },
              {
                "name": "description",
                "value": "Nutritional products for pets including dry food, wet food, and treats."
              },
              {
                "name": "createdAt",
                "value": "2026-07-01T08:00:00.000Z"
              },
              {
                "name": "updatedAt",
                "value": "2026-07-01T08:00:00.000Z"
              }
            ],
            "relationships": []
          },
          {
            "key": "cat-accessories",
            "fields": [
              {
                "name": "categoryId",
                "value": null
              },
              {
                "name": "name",
                "value": "Accessories"
              },
              {
                "name": "description",
                "value": "Collars, leashes, beds, carriers, and other pet accessories."
              },
              {
                "name": "createdAt",
                "value": "2026-07-01T09:00:00.000Z"
              },
              {
                "name": "updatedAt",
                "value": "2026-07-01T09:00:00.000Z"
              }
            ],
            "relationships": []
          },
          {
            "key": "cat-hygiene",
            "fields": [
              {
                "name": "categoryId",
                "value": null
              },
              {
                "name": "name",
                "value": "Hygiene"
              },
              {
                "name": "description",
                "value": "Shampoos, conditioners, grooming tools, and cleaning supplies."
              },
              {
                "name": "createdAt",
                "value": "2026-07-01T10:00:00.000Z"
              },
              {
                "name": "updatedAt",
                "value": "2026-07-01T10:00:00.000Z"
              }
            ],
            "relationships": []
          },
          {
            "key": "cat-toys",
            "fields": [
              {
                "name": "categoryId",
                "value": null
              },
              {
                "name": "name",
                "value": "Toys"
              },
              {
                "name": "description",
                "value": "Interactive and chew toys for entertainment and enrichment."
              },
              {
                "name": "createdAt",
                "value": "2026-07-01T11:00:00.000Z"
              },
              {
                "name": "updatedAt",
                "value": "2026-07-01T11:00:00.000Z"
              }
            ],
            "relationships": []
          }
        ]
      },
      {
        "entityId": "PetType",
        "rows": [
          {
            "key": "pt-dog",
            "fields": [
              {
                "name": "petTypeId",
                "value": null
              },
              {
                "name": "name",
                "value": "Dog"
              },
              {
                "name": "active",
                "value": true
              },
              {
                "name": "createdAt",
                "value": "2026-07-01T08:00:00.000Z"
              },
              {
                "name": "updatedAt",
                "value": "2026-07-01T08:00:00.000Z"
              }
            ],
            "relationships": []
          },
          {
            "key": "pt-cat",
            "fields": [
              {
                "name": "petTypeId",
                "value": null
              },
              {
                "name": "name",
                "value": "Cat"
              },
              {
                "name": "active",
                "value": true
              },
              {
                "name": "createdAt",
                "value": "2026-07-01T08:30:00.000Z"
              },
              {
                "name": "updatedAt",
                "value": "2026-07-01T08:30:00.000Z"
              }
            ],
            "relationships": []
          },
          {
            "key": "pt-bird",
            "fields": [
              {
                "name": "petTypeId",
                "value": null
              },
              {
                "name": "name",
                "value": "Bird"
              },
              {
                "name": "active",
                "value": true
              },
              {
                "name": "createdAt",
                "value": "2026-07-01T09:00:00.000Z"
              },
              {
                "name": "updatedAt",
                "value": "2026-07-01T09:00:00.000Z"
              }
            ],
            "relationships": []
          },
          {
            "key": "pt-fish",
            "fields": [
              {
                "name": "petTypeId",
                "value": null
              },
              {
                "name": "name",
                "value": "Fish"
              },
              {
                "name": "active",
                "value": false
              },
              {
                "name": "createdAt",
                "value": "2026-07-01T09:30:00.000Z"
              },
              {
                "name": "updatedAt",
                "value": "2026-07-02T10:00:00.000Z"
              }
            ],
            "relationships": []
          }
        ]
      }
    ]
  }
}
</agentCbSeedsPlan> */

// <agentCbSeedAssetUrls>
const seedAssetUrls: Record<string, string> = {};
const seedAssetWarnings: string[] = [];
// </agentCbSeedAssetUrls>

function seedAssetUrl(assetId: string): string | null { return seedAssetUrls[assetId] ?? null; }

import type { TableSeedRows } from '/_102034_/l1/server/layer_1_external/persistence/contracts.js';

export const paymentSeeds: TableSeedRows = {
  "seedFor": "petShopPayment",
  "rows": [
    {
      "payment_id": "61881eff-6088-4d6c-8388-222562882092",
      "reservation_id": "3135112a-3235-42bd-8f35-0e0430350f97",
      "payment_method": "pix",
      "status": "posted",
      "created_at": "2026-07-06T10:05:00.000Z",
      "details": {
        "amount": 85.5,
        "voidedAt": null,
        "voidReason": null
      }
    },
    {
      "payment_id": "24ac2c2e-25ac-4dc1-82ac-290823ac2a9b",
      "reservation_id": "5c753990-5d75-4b23-8e75-3cb65f753e49",
      "payment_method": "creditCard",
      "status": "posted",
      "created_at": "2026-07-03T09:10:00.000Z",
      "details": {
        "amount": 120,
        "voidedAt": null,
        "voidReason": null
      }
    },
    {
      "payment_id": "0b39a8b5-0a39-4722-8939-a58f0839a3fc",
      "reservation_id": "fbd71335-fad7-41a2-89d7-100ff8d70e7c",
      "payment_method": "cash",
      "status": "posted",
      "created_at": "2026-07-01T08:15:00.000Z",
      "details": {
        "amount": 45,
        "voidedAt": null,
        "voidReason": null
      }
    },
    {
      "payment_id": "ce5db5e4-cf5d-4777-805d-b90ad15dba9d",
      "reservation_id": "5b0a05f3-5a0a-4460-8d0a-09195c0a0786",
      "payment_method": "debitCard",
      "status": "voided",
      "created_at": "2026-07-05T11:10:00.000Z",
      "details": {
        "amount": 75,
        "voidedAt": "2026-07-05T15:00:00.000Z",
        "voidReason": "Reserva cancelada pelo cliente"
      }
    }
  ]
};

export const productSeeds: TableSeedRows = {
  "seedFor": "petShopProduct",
  "rows": [
    {
      "product_id": "d72ebfd3-d62e-4e40-892e-c2f9d82ec166",
      "pet_type_id": "27f5bf92-28f5-4125-85f5-bc6c26f5bdff",
      "category_id": "92fdb6a9-91fd-4516-80fd-b3838ffdb1f0",
      "status": "available",
      "created_at": "2026-07-01T08:00:00.000Z",
      "details": {
        "name": "Premium Dog Food",
        "description": "High-quality dry food for adult dogs, 15kg bag",
        "price": 89.9,
        "highlighted": true,
        "updatedAt": "2026-07-01T08:00:00.000Z"
      }
    },
    {
      "product_id": "f5cd20d7-f4cd-4f44-87cd-23fdf6cd226a",
      "pet_type_id": "ff1fb814-001f-49a7-811f-bb3a021fbccd",
      "category_id": "5fc1e658-60c1-47eb-81c1-e97e62c1eb11",
      "status": "available",
      "created_at": "2026-07-02T10:00:00.000Z",
      "details": {
        "name": "Cat Feather Toy",
        "description": "Interactive feather wand toy for cats",
        "price": 25.5,
        "highlighted": false,
        "updatedAt": "2026-07-02T10:00:00.000Z"
      }
    },
    {
      "product_id": "4662bfd8-4762-416b-8862-c2fe4962c491",
      "pet_type_id": "02d7fae7-01d7-4954-84d7-fe0d03d7fc7a",
      "category_id": "e5241c69-e424-4ad6-8324-1943e22417b0",
      "status": "available",
      "created_at": "2026-07-03T09:00:00.000Z",
      "details": {
        "name": "Bird Perch Set",
        "description": "Natural wood perch set for small birds",
        "price": 42,
        "highlighted": true,
        "updatedAt": "2026-07-03T09:00:00.000Z"
      }
    },
    {
      "product_id": "77d20343-76d2-41b0-89d2-066978d204d6",
      "pet_type_id": "9fca7d36-a0ca-4ec9-8dca-7a109eca7ba3",
      "category_id": "ecbd22e4-edbd-4477-8ebd-260aefbd279d",
      "status": "unavailable",
      "created_at": "2026-07-04T11:00:00.000Z",
      "details": {
        "name": "Fish Water Conditioner",
        "description": "Water conditioner for aquarium maintenance, 250ml",
        "price": 18.75,
        "highlighted": false,
        "updatedAt": "2026-07-05T14:00:00.000Z"
      }
    }
  ]
};

export const reservationSeeds: TableSeedRows = {
  "seedFor": "petShopReservation",
  "rows": [
    {
      "reservation_id": "3135112a-3235-42bd-8f35-0e0430350f97",
      "customer_id": "4d78baa9-4c78-4916-8b78-b7834a78b5f0",
      "status": "active",
      "payment_id": "61881eff-6088-4d6c-8388-222562882092",
      "created_at": "2026-07-06T10:00:00.000Z",
      "details": {
        "confirmedAt": "2026-07-06T10:05:00.000Z",
        "expiresAt": "2026-07-07T10:05:00.000Z",
        "readyAt": null,
        "deliveredAt": null,
        "expiredAt": null,
        "cancelledAt": null,
        "cancelReason": null,
        "updatedAt": "2026-07-06T10:05:00.000Z"
      }
    },
    {
      "reservation_id": "5c753990-5d75-4b23-8e75-3cb65f753e49",
      "customer_id": "cc1020d4-cd10-4267-8e10-23facf10258d",
      "status": "delivered",
      "payment_id": "24ac2c2e-25ac-4dc1-82ac-290823ac2a9b",
      "created_at": "2026-07-03T09:00:00.000Z",
      "details": {
        "confirmedAt": "2026-07-03T09:10:00.000Z",
        "expiresAt": "2026-07-04T09:10:00.000Z",
        "readyAt": "2026-07-03T14:00:00.000Z",
        "deliveredAt": "2026-07-03T16:00:00.000Z",
        "expiredAt": null,
        "cancelledAt": null,
        "cancelReason": null,
        "updatedAt": "2026-07-03T16:00:00.000Z"
      }
    },
    {
      "reservation_id": "fbd71335-fad7-41a2-89d7-100ff8d70e7c",
      "customer_id": "a289fc73-a189-4ae0-8489-ff99a389fe06",
      "status": "expired",
      "payment_id": "0b39a8b5-0a39-4722-8939-a58f0839a3fc",
      "created_at": "2026-07-01T08:00:00.000Z",
      "details": {
        "confirmedAt": "2026-07-01T08:15:00.000Z",
        "expiresAt": "2026-07-02T08:15:00.000Z",
        "readyAt": null,
        "deliveredAt": null,
        "expiredAt": "2026-07-02T08:15:00.000Z",
        "cancelledAt": null,
        "cancelReason": null,
        "updatedAt": "2026-07-02T08:15:00.000Z"
      }
    },
    {
      "reservation_id": "5b0a05f3-5a0a-4460-8d0a-09195c0a0786",
      "customer_id": "4d78baa9-4c78-4916-8b78-b7834a78b5f0",
      "status": "cancelled",
      "payment_id": "ce5db5e4-cf5d-4777-805d-b90ad15dba9d",
      "created_at": "2026-07-05T11:00:00.000Z",
      "details": {
        "confirmedAt": "2026-07-05T11:10:00.000Z",
        "expiresAt": "2026-07-06T11:10:00.000Z",
        "readyAt": null,
        "deliveredAt": null,
        "expiredAt": null,
        "cancelledAt": "2026-07-05T15:00:00.000Z",
        "cancelReason": "Cliente desistiu da reserva",
        "updatedAt": "2026-07-05T15:00:00.000Z"
      }
    }
  ]
};

export const mdmEntityIndexSeeds: TableSeedRows = {
  "seedFor": "mdmEntityIndex",
  "rows": [
    {
      "mdmId": "92fdb6a9-91fd-4516-80fd-b3838ffdb1f0",
      "subtype": "Product",
      "name": "Food",
      "status": "Active",
      "docType": null,
      "docId": null,
      "countryCode": "US",
      "tags": [
        "petShop.Category",
        "petShop",
        "Category"
      ],
      "searchVector": "food category petshop",
      "mergedInto": null,
      "dynamoPk": "92fdb6a9-91fd-4516-80fd-b3838ffdb1f0",
      "createdAt": "2026-07-01T08:00:00.000Z",
      "updatedAt": "2026-07-01T08:00:00.000Z"
    },
    {
      "mdmId": "e5241c69-e424-4ad6-8324-1943e22417b0",
      "subtype": "Product",
      "name": "Accessories",
      "status": "Active",
      "docType": null,
      "docId": null,
      "countryCode": "US",
      "tags": [
        "petShop.Category",
        "petShop",
        "Category"
      ],
      "searchVector": "accessories category petshop",
      "mergedInto": null,
      "dynamoPk": "e5241c69-e424-4ad6-8324-1943e22417b0",
      "createdAt": "2026-07-01T09:00:00.000Z",
      "updatedAt": "2026-07-01T09:00:00.000Z"
    },
    {
      "mdmId": "ecbd22e4-edbd-4477-8ebd-260aefbd279d",
      "subtype": "Product",
      "name": "Hygiene",
      "status": "Active",
      "docType": null,
      "docId": null,
      "countryCode": "US",
      "tags": [
        "petShop.Category",
        "petShop",
        "Category"
      ],
      "searchVector": "hygiene category petshop",
      "mergedInto": null,
      "dynamoPk": "ecbd22e4-edbd-4477-8ebd-260aefbd279d",
      "createdAt": "2026-07-01T10:00:00.000Z",
      "updatedAt": "2026-07-01T10:00:00.000Z"
    },
    {
      "mdmId": "5fc1e658-60c1-47eb-81c1-e97e62c1eb11",
      "subtype": "Product",
      "name": "Toys",
      "status": "Active",
      "docType": null,
      "docId": null,
      "countryCode": "US",
      "tags": [
        "petShop.Category",
        "petShop",
        "Category"
      ],
      "searchVector": "toys category petshop",
      "mergedInto": null,
      "dynamoPk": "5fc1e658-60c1-47eb-81c1-e97e62c1eb11",
      "createdAt": "2026-07-01T11:00:00.000Z",
      "updatedAt": "2026-07-01T11:00:00.000Z"
    },
    {
      "mdmId": "27f5bf92-28f5-4125-85f5-bc6c26f5bdff",
      "subtype": "Product",
      "name": "Dog",
      "status": "Active",
      "docType": null,
      "docId": null,
      "countryCode": "US",
      "tags": [
        "petShop.PetType",
        "petShop",
        "PetType"
      ],
      "searchVector": "dog pettype petshop",
      "mergedInto": null,
      "dynamoPk": "27f5bf92-28f5-4125-85f5-bc6c26f5bdff",
      "createdAt": "2026-07-01T08:00:00.000Z",
      "updatedAt": "2026-07-01T08:00:00.000Z"
    },
    {
      "mdmId": "ff1fb814-001f-49a7-811f-bb3a021fbccd",
      "subtype": "Product",
      "name": "Cat",
      "status": "Active",
      "docType": null,
      "docId": null,
      "countryCode": "US",
      "tags": [
        "petShop.PetType",
        "petShop",
        "PetType"
      ],
      "searchVector": "cat pettype petshop",
      "mergedInto": null,
      "dynamoPk": "ff1fb814-001f-49a7-811f-bb3a021fbccd",
      "createdAt": "2026-07-01T08:30:00.000Z",
      "updatedAt": "2026-07-01T08:30:00.000Z"
    },
    {
      "mdmId": "02d7fae7-01d7-4954-84d7-fe0d03d7fc7a",
      "subtype": "Product",
      "name": "Bird",
      "status": "Active",
      "docType": null,
      "docId": null,
      "countryCode": "US",
      "tags": [
        "petShop.PetType",
        "petShop",
        "PetType"
      ],
      "searchVector": "bird pettype petshop",
      "mergedInto": null,
      "dynamoPk": "02d7fae7-01d7-4954-84d7-fe0d03d7fc7a",
      "createdAt": "2026-07-01T09:00:00.000Z",
      "updatedAt": "2026-07-01T09:00:00.000Z"
    },
    {
      "mdmId": "9fca7d36-a0ca-4ec9-8dca-7a109eca7ba3",
      "subtype": "Product",
      "name": "Fish",
      "status": "Active",
      "docType": null,
      "docId": null,
      "countryCode": "US",
      "tags": [
        "petShop.PetType",
        "petShop",
        "PetType"
      ],
      "searchVector": "fish pettype petshop",
      "mergedInto": null,
      "dynamoPk": "9fca7d36-a0ca-4ec9-8dca-7a109eca7ba3",
      "createdAt": "2026-07-01T09:30:00.000Z",
      "updatedAt": "2026-07-02T10:00:00.000Z"
    },
    {
      "mdmId": "4d78baa9-4c78-4916-8b78-b7834a78b5f0",
      "subtype": "Person",
      "name": "Cliente 1",
      "status": "Active",
      "docType": null,
      "docId": null,
      "countryCode": "US",
      "tags": [
        "petShop.Person",
        "petShop",
        "actor",
        "cliente"
      ],
      "searchVector": "cliente 1 cliente petshop",
      "mergedInto": null,
      "dynamoPk": "4d78baa9-4c78-4916-8b78-b7834a78b5f0",
      "createdAt": "2026-07-01T00:00:00.000Z",
      "updatedAt": "2026-07-01T00:00:00.000Z"
    },
    {
      "mdmId": "cc1020d4-cd10-4267-8e10-23facf10258d",
      "subtype": "Person",
      "name": "Cliente 2",
      "status": "Active",
      "docType": null,
      "docId": null,
      "countryCode": "US",
      "tags": [
        "petShop.Person",
        "petShop",
        "actor",
        "cliente"
      ],
      "searchVector": "cliente 2 cliente petshop",
      "mergedInto": null,
      "dynamoPk": "cc1020d4-cd10-4267-8e10-23facf10258d",
      "createdAt": "2026-07-01T00:00:00.000Z",
      "updatedAt": "2026-07-01T00:00:00.000Z"
    },
    {
      "mdmId": "a289fc73-a189-4ae0-8489-ff99a389fe06",
      "subtype": "Person",
      "name": "Cliente 3",
      "status": "Active",
      "docType": null,
      "docId": null,
      "countryCode": "US",
      "tags": [
        "petShop.Person",
        "petShop",
        "actor",
        "cliente"
      ],
      "searchVector": "cliente 3 cliente petshop",
      "mergedInto": null,
      "dynamoPk": "a289fc73-a189-4ae0-8489-ff99a389fe06",
      "createdAt": "2026-07-01T00:00:00.000Z",
      "updatedAt": "2026-07-01T00:00:00.000Z"
    },
    {
      "mdmId": "c41335b1-c313-441e-8213-328bc11330f8",
      "subtype": "Person",
      "name": "Loja PetShop 1",
      "status": "Active",
      "docType": null,
      "docId": null,
      "countryCode": "US",
      "tags": [
        "petShop.Person",
        "petShop",
        "actor",
        "loja"
      ],
      "searchVector": "loja petshop 1 loja petshop",
      "mergedInto": null,
      "dynamoPk": "c41335b1-c313-441e-8213-328bc11330f8",
      "createdAt": "2026-07-01T00:00:00.000Z",
      "updatedAt": "2026-07-01T00:00:00.000Z"
    },
    {
      "mdmId": "22aa697c-23aa-4b0f-84aa-6ca225aa6e35",
      "subtype": "Person",
      "name": "Loja PetShop 2",
      "status": "Active",
      "docType": null,
      "docId": null,
      "countryCode": "US",
      "tags": [
        "petShop.Person",
        "petShop",
        "actor",
        "loja"
      ],
      "searchVector": "loja petshop 2 loja petshop",
      "mergedInto": null,
      "dynamoPk": "22aa697c-23aa-4b0f-84aa-6ca225aa6e35",
      "createdAt": "2026-07-01T00:00:00.000Z",
      "updatedAt": "2026-07-01T00:00:00.000Z"
    },
    {
      "mdmId": "1a61abfb-1961-4a68-8c61-af211b61ad8e",
      "subtype": "Person",
      "name": "Loja PetShop 3",
      "status": "Active",
      "docType": null,
      "docId": null,
      "countryCode": "US",
      "tags": [
        "petShop.Person",
        "petShop",
        "actor",
        "loja"
      ],
      "searchVector": "loja petshop 3 loja petshop",
      "mergedInto": null,
      "dynamoPk": "1a61abfb-1961-4a68-8c61-af211b61ad8e",
      "createdAt": "2026-07-01T00:00:00.000Z",
      "updatedAt": "2026-07-01T00:00:00.000Z"
    }
  ]
};

export const mdmDocumentSeeds: TableSeedRows = {
  "seedFor": "mdmDocumentCache",
  "rows": [
    {
      "mdmId": "92fdb6a9-91fd-4516-80fd-b3838ffdb1f0",
      "version": 1,
      "details": {
        "mdmId": "92fdb6a9-91fd-4516-80fd-b3838ffdb1f0",
        "subtype": "Product",
        "name": "Food",
        "status": "Active",
        "docType": null,
        "docId": null,
        "countryCode": "US",
        "tags": [
          "petShop.Category",
          "petShop",
          "Category"
        ],
        "aliases": [],
        "contacts": [],
        "relationshipRefs": {},
        "addresses": [],
        "mergedInto": null,
        "createdAt": "2026-07-01T08:00:00.000Z",
        "updatedAt": "2026-07-01T08:00:00.000Z",
        "petShop": {
          "categoryId": "92fdb6a9-91fd-4516-80fd-b3838ffdb1f0",
          "name": "Food",
          "description": "Nutritional products for pets including dry food, wet food, and treats.",
          "createdAt": "2026-07-01T08:00:00.000Z",
          "updatedAt": "2026-07-01T08:00:00.000Z"
        }
      }
    },
    {
      "mdmId": "e5241c69-e424-4ad6-8324-1943e22417b0",
      "version": 1,
      "details": {
        "mdmId": "e5241c69-e424-4ad6-8324-1943e22417b0",
        "subtype": "Product",
        "name": "Accessories",
        "status": "Active",
        "docType": null,
        "docId": null,
        "countryCode": "US",
        "tags": [
          "petShop.Category",
          "petShop",
          "Category"
        ],
        "aliases": [],
        "contacts": [],
        "relationshipRefs": {},
        "addresses": [],
        "mergedInto": null,
        "createdAt": "2026-07-01T09:00:00.000Z",
        "updatedAt": "2026-07-01T09:00:00.000Z",
        "petShop": {
          "categoryId": "e5241c69-e424-4ad6-8324-1943e22417b0",
          "name": "Accessories",
          "description": "Collars, leashes, beds, carriers, and other pet accessories.",
          "createdAt": "2026-07-01T09:00:00.000Z",
          "updatedAt": "2026-07-01T09:00:00.000Z"
        }
      }
    },
    {
      "mdmId": "ecbd22e4-edbd-4477-8ebd-260aefbd279d",
      "version": 1,
      "details": {
        "mdmId": "ecbd22e4-edbd-4477-8ebd-260aefbd279d",
        "subtype": "Product",
        "name": "Hygiene",
        "status": "Active",
        "docType": null,
        "docId": null,
        "countryCode": "US",
        "tags": [
          "petShop.Category",
          "petShop",
          "Category"
        ],
        "aliases": [],
        "contacts": [],
        "relationshipRefs": {},
        "addresses": [],
        "mergedInto": null,
        "createdAt": "2026-07-01T10:00:00.000Z",
        "updatedAt": "2026-07-01T10:00:00.000Z",
        "petShop": {
          "categoryId": "ecbd22e4-edbd-4477-8ebd-260aefbd279d",
          "name": "Hygiene",
          "description": "Shampoos, conditioners, grooming tools, and cleaning supplies.",
          "createdAt": "2026-07-01T10:00:00.000Z",
          "updatedAt": "2026-07-01T10:00:00.000Z"
        }
      }
    },
    {
      "mdmId": "5fc1e658-60c1-47eb-81c1-e97e62c1eb11",
      "version": 1,
      "details": {
        "mdmId": "5fc1e658-60c1-47eb-81c1-e97e62c1eb11",
        "subtype": "Product",
        "name": "Toys",
        "status": "Active",
        "docType": null,
        "docId": null,
        "countryCode": "US",
        "tags": [
          "petShop.Category",
          "petShop",
          "Category"
        ],
        "aliases": [],
        "contacts": [],
        "relationshipRefs": {},
        "addresses": [],
        "mergedInto": null,
        "createdAt": "2026-07-01T11:00:00.000Z",
        "updatedAt": "2026-07-01T11:00:00.000Z",
        "petShop": {
          "categoryId": "5fc1e658-60c1-47eb-81c1-e97e62c1eb11",
          "name": "Toys",
          "description": "Interactive and chew toys for entertainment and enrichment.",
          "createdAt": "2026-07-01T11:00:00.000Z",
          "updatedAt": "2026-07-01T11:00:00.000Z"
        }
      }
    },
    {
      "mdmId": "27f5bf92-28f5-4125-85f5-bc6c26f5bdff",
      "version": 1,
      "details": {
        "mdmId": "27f5bf92-28f5-4125-85f5-bc6c26f5bdff",
        "subtype": "Product",
        "name": "Dog",
        "status": "Active",
        "docType": null,
        "docId": null,
        "countryCode": "US",
        "tags": [
          "petShop.PetType",
          "petShop",
          "PetType"
        ],
        "aliases": [],
        "contacts": [],
        "relationshipRefs": {},
        "addresses": [],
        "mergedInto": null,
        "createdAt": "2026-07-01T08:00:00.000Z",
        "updatedAt": "2026-07-01T08:00:00.000Z",
        "petShop": {
          "petTypeId": "27f5bf92-28f5-4125-85f5-bc6c26f5bdff",
          "name": "Dog",
          "active": true,
          "createdAt": "2026-07-01T08:00:00.000Z",
          "updatedAt": "2026-07-01T08:00:00.000Z"
        }
      }
    },
    {
      "mdmId": "ff1fb814-001f-49a7-811f-bb3a021fbccd",
      "version": 1,
      "details": {
        "mdmId": "ff1fb814-001f-49a7-811f-bb3a021fbccd",
        "subtype": "Product",
        "name": "Cat",
        "status": "Active",
        "docType": null,
        "docId": null,
        "countryCode": "US",
        "tags": [
          "petShop.PetType",
          "petShop",
          "PetType"
        ],
        "aliases": [],
        "contacts": [],
        "relationshipRefs": {},
        "addresses": [],
        "mergedInto": null,
        "createdAt": "2026-07-01T08:30:00.000Z",
        "updatedAt": "2026-07-01T08:30:00.000Z",
        "petShop": {
          "petTypeId": "ff1fb814-001f-49a7-811f-bb3a021fbccd",
          "name": "Cat",
          "active": true,
          "createdAt": "2026-07-01T08:30:00.000Z",
          "updatedAt": "2026-07-01T08:30:00.000Z"
        }
      }
    },
    {
      "mdmId": "02d7fae7-01d7-4954-84d7-fe0d03d7fc7a",
      "version": 1,
      "details": {
        "mdmId": "02d7fae7-01d7-4954-84d7-fe0d03d7fc7a",
        "subtype": "Product",
        "name": "Bird",
        "status": "Active",
        "docType": null,
        "docId": null,
        "countryCode": "US",
        "tags": [
          "petShop.PetType",
          "petShop",
          "PetType"
        ],
        "aliases": [],
        "contacts": [],
        "relationshipRefs": {},
        "addresses": [],
        "mergedInto": null,
        "createdAt": "2026-07-01T09:00:00.000Z",
        "updatedAt": "2026-07-01T09:00:00.000Z",
        "petShop": {
          "petTypeId": "02d7fae7-01d7-4954-84d7-fe0d03d7fc7a",
          "name": "Bird",
          "active": true,
          "createdAt": "2026-07-01T09:00:00.000Z",
          "updatedAt": "2026-07-01T09:00:00.000Z"
        }
      }
    },
    {
      "mdmId": "9fca7d36-a0ca-4ec9-8dca-7a109eca7ba3",
      "version": 1,
      "details": {
        "mdmId": "9fca7d36-a0ca-4ec9-8dca-7a109eca7ba3",
        "subtype": "Product",
        "name": "Fish",
        "status": "Active",
        "docType": null,
        "docId": null,
        "countryCode": "US",
        "tags": [
          "petShop.PetType",
          "petShop",
          "PetType"
        ],
        "aliases": [],
        "contacts": [],
        "relationshipRefs": {},
        "addresses": [],
        "mergedInto": null,
        "createdAt": "2026-07-01T09:30:00.000Z",
        "updatedAt": "2026-07-02T10:00:00.000Z",
        "petShop": {
          "petTypeId": "9fca7d36-a0ca-4ec9-8dca-7a109eca7ba3",
          "name": "Fish",
          "active": false,
          "createdAt": "2026-07-01T09:30:00.000Z",
          "updatedAt": "2026-07-02T10:00:00.000Z"
        }
      }
    },
    {
      "mdmId": "4d78baa9-4c78-4916-8b78-b7834a78b5f0",
      "version": 1,
      "details": {
        "mdmId": "4d78baa9-4c78-4916-8b78-b7834a78b5f0",
        "subtype": "Person",
        "name": "Cliente 1",
        "status": "Active",
        "docType": null,
        "docId": null,
        "countryCode": "US",
        "tags": [
          "petShop.Person",
          "petShop",
          "actor",
          "cliente"
        ],
        "aliases": [],
        "contacts": [],
        "relationshipRefs": {},
        "addresses": [],
        "mergedInto": null,
        "createdAt": "2026-07-01T00:00:00.000Z",
        "updatedAt": "2026-07-01T00:00:00.000Z",
        "actorId": "cliente"
      }
    },
    {
      "mdmId": "cc1020d4-cd10-4267-8e10-23facf10258d",
      "version": 1,
      "details": {
        "mdmId": "cc1020d4-cd10-4267-8e10-23facf10258d",
        "subtype": "Person",
        "name": "Cliente 2",
        "status": "Active",
        "docType": null,
        "docId": null,
        "countryCode": "US",
        "tags": [
          "petShop.Person",
          "petShop",
          "actor",
          "cliente"
        ],
        "aliases": [],
        "contacts": [],
        "relationshipRefs": {},
        "addresses": [],
        "mergedInto": null,
        "createdAt": "2026-07-01T00:00:00.000Z",
        "updatedAt": "2026-07-01T00:00:00.000Z",
        "actorId": "cliente"
      }
    },
    {
      "mdmId": "a289fc73-a189-4ae0-8489-ff99a389fe06",
      "version": 1,
      "details": {
        "mdmId": "a289fc73-a189-4ae0-8489-ff99a389fe06",
        "subtype": "Person",
        "name": "Cliente 3",
        "status": "Active",
        "docType": null,
        "docId": null,
        "countryCode": "US",
        "tags": [
          "petShop.Person",
          "petShop",
          "actor",
          "cliente"
        ],
        "aliases": [],
        "contacts": [],
        "relationshipRefs": {},
        "addresses": [],
        "mergedInto": null,
        "createdAt": "2026-07-01T00:00:00.000Z",
        "updatedAt": "2026-07-01T00:00:00.000Z",
        "actorId": "cliente"
      }
    },
    {
      "mdmId": "c41335b1-c313-441e-8213-328bc11330f8",
      "version": 1,
      "details": {
        "mdmId": "c41335b1-c313-441e-8213-328bc11330f8",
        "subtype": "Person",
        "name": "Loja PetShop 1",
        "status": "Active",
        "docType": null,
        "docId": null,
        "countryCode": "US",
        "tags": [
          "petShop.Person",
          "petShop",
          "actor",
          "loja"
        ],
        "aliases": [],
        "contacts": [],
        "relationshipRefs": {},
        "addresses": [],
        "mergedInto": null,
        "createdAt": "2026-07-01T00:00:00.000Z",
        "updatedAt": "2026-07-01T00:00:00.000Z",
        "actorId": "loja"
      }
    },
    {
      "mdmId": "22aa697c-23aa-4b0f-84aa-6ca225aa6e35",
      "version": 1,
      "details": {
        "mdmId": "22aa697c-23aa-4b0f-84aa-6ca225aa6e35",
        "subtype": "Person",
        "name": "Loja PetShop 2",
        "status": "Active",
        "docType": null,
        "docId": null,
        "countryCode": "US",
        "tags": [
          "petShop.Person",
          "petShop",
          "actor",
          "loja"
        ],
        "aliases": [],
        "contacts": [],
        "relationshipRefs": {},
        "addresses": [],
        "mergedInto": null,
        "createdAt": "2026-07-01T00:00:00.000Z",
        "updatedAt": "2026-07-01T00:00:00.000Z",
        "actorId": "loja"
      }
    },
    {
      "mdmId": "1a61abfb-1961-4a68-8c61-af211b61ad8e",
      "version": 1,
      "details": {
        "mdmId": "1a61abfb-1961-4a68-8c61-af211b61ad8e",
        "subtype": "Person",
        "name": "Loja PetShop 3",
        "status": "Active",
        "docType": null,
        "docId": null,
        "countryCode": "US",
        "tags": [
          "petShop.Person",
          "petShop",
          "actor",
          "loja"
        ],
        "aliases": [],
        "contacts": [],
        "relationshipRefs": {},
        "addresses": [],
        "mergedInto": null,
        "createdAt": "2026-07-01T00:00:00.000Z",
        "updatedAt": "2026-07-01T00:00:00.000Z",
        "actorId": "loja"
      }
    }
  ]
};
