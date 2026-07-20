/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/persistence/seeds.ts" enhancement="_blank"/>

// Deterministic initial data for petShop. Scenario planned by agentCbSeeds; rows and ids compiled locally.
// TableSeedRows exports are discovered by shape and merged by the persistence registry.

/* <agentCbSeedsPlan>
{
  "version": 1,
  "moduleName": "petShop",
  "language": "en",
  "plan": {
    "summary": "Wave 2 seeds a compact Product catalog spanning featured and non-featured items across pet types, categories, and price bands for catalog filters and vitrine rules.",
    "localTables": [],
    "mdmEntities": [
      {
        "entityId": "PetType",
        "rows": [
          {
            "key": "dog",
            "fields": [
              {
                "name": "name",
                "value": "Dog"
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
            "key": "cat",
            "fields": [
              {
                "name": "name",
                "value": "Cat"
              },
              {
                "name": "createdAt",
                "value": "2026-07-01T10:05:00.000Z"
              },
              {
                "name": "updatedAt",
                "value": "2026-07-01T10:05:00.000Z"
              }
            ],
            "relationships": []
          },
          {
            "key": "bird",
            "fields": [
              {
                "name": "name",
                "value": "Bird"
              },
              {
                "name": "createdAt",
                "value": "2026-07-01T10:10:00.000Z"
              },
              {
                "name": "updatedAt",
                "value": "2026-07-01T10:10:00.000Z"
              }
            ],
            "relationships": []
          },
          {
            "key": "fish",
            "fields": [
              {
                "name": "name",
                "value": "Fish"
              },
              {
                "name": "createdAt",
                "value": "2026-07-01T10:15:00.000Z"
              },
              {
                "name": "updatedAt",
                "value": "2026-07-01T10:15:00.000Z"
              }
            ],
            "relationships": []
          }
        ]
      },
      {
        "entityId": "Product",
        "rows": [
          {
            "key": "dogFoodPremium",
            "fields": [
              {
                "name": "name",
                "value": "Premium Dog Kibble"
              },
              {
                "name": "price",
                "value": 89.9
              },
              {
                "name": "isFeatured",
                "value": true
              },
              {
                "name": "categoryId",
                "value": {
                  "ref": "mdm:ProductCategory.food"
                }
              },
              {
                "name": "petTypeId",
                "value": {
                  "ref": "mdm:PetType.dog"
                }
              },
              {
                "name": "createdAt",
                "value": "2026-07-01T10:00:00.000Z"
              },
              {
                "name": "updatedAt",
                "value": "2026-07-02T14:30:00.000Z"
              }
            ],
            "relationships": []
          },
          {
            "key": "catToyMouse",
            "fields": [
              {
                "name": "name",
                "value": "Catnip Mouse Toy"
              },
              {
                "name": "price",
                "value": 19.5
              },
              {
                "name": "isFeatured",
                "value": true
              },
              {
                "name": "categoryId",
                "value": {
                  "ref": "mdm:ProductCategory.toys"
                }
              },
              {
                "name": "petTypeId",
                "value": {
                  "ref": "mdm:PetType.cat"
                }
              },
              {
                "name": "createdAt",
                "value": "2026-07-01T11:15:00.000Z"
              },
              {
                "name": "updatedAt",
                "value": "2026-07-03T09:00:00.000Z"
              }
            ],
            "relationships": []
          },
          {
            "key": "birdSwing",
            "fields": [
              {
                "name": "name",
                "value": "Bird Cage Swing"
              },
              {
                "name": "price",
                "value": 24
              },
              {
                "name": "isFeatured",
                "value": false
              },
              {
                "name": "categoryId",
                "value": {
                  "ref": "mdm:ProductCategory.accessories"
                }
              },
              {
                "name": "petTypeId",
                "value": {
                  "ref": "mdm:PetType.bird"
                }
              },
              {
                "name": "createdAt",
                "value": "2026-07-02T08:45:00.000Z"
              },
              {
                "name": "updatedAt",
                "value": "2026-07-02T08:45:00.000Z"
              }
            ],
            "relationships": []
          },
          {
            "key": "fishFlakes",
            "fields": [
              {
                "name": "name",
                "value": "Tropical Fish Flakes"
              },
              {
                "name": "price",
                "value": 12.75
              },
              {
                "name": "isFeatured",
                "value": false
              },
              {
                "name": "categoryId",
                "value": {
                  "ref": "mdm:ProductCategory.food"
                }
              },
              {
                "name": "petTypeId",
                "value": {
                  "ref": "mdm:PetType.fish"
                }
              },
              {
                "name": "createdAt",
                "value": "2026-07-03T16:20:00.000Z"
              },
              {
                "name": "updatedAt",
                "value": "2026-07-04T10:10:00.000Z"
              }
            ],
            "relationships": []
          },
          {
            "key": "dogShampoo",
            "fields": [
              {
                "name": "name",
                "value": "Gentle Dog Shampoo"
              },
              {
                "name": "price",
                "value": 34.9
              },
              {
                "name": "isFeatured",
                "value": true
              },
              {
                "name": "categoryId",
                "value": {
                  "ref": "mdm:ProductCategory.grooming"
                }
              },
              {
                "name": "petTypeId",
                "value": {
                  "ref": "mdm:PetType.dog"
                }
              },
              {
                "name": "createdAt",
                "value": "2026-07-04T12:00:00.000Z"
              },
              {
                "name": "updatedAt",
                "value": "2026-07-05T11:00:00.000Z"
              }
            ],
            "relationships": []
          }
        ]
      },
      {
        "entityId": "ProductCategory",
        "rows": [
          {
            "key": "food",
            "fields": [
              {
                "name": "name",
                "value": "Food"
              },
              {
                "name": "description",
                "value": "Dry and wet pet food"
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
          },
          {
            "key": "toys",
            "fields": [
              {
                "name": "name",
                "value": "Toys"
              },
              {
                "name": "description",
                "value": "Chew toys and play items"
              },
              {
                "name": "createdAt",
                "value": "2026-07-01T11:05:00.000Z"
              },
              {
                "name": "updatedAt",
                "value": "2026-07-01T11:05:00.000Z"
              }
            ],
            "relationships": []
          },
          {
            "key": "grooming",
            "fields": [
              {
                "name": "name",
                "value": "Grooming"
              },
              {
                "name": "description",
                "value": "Shampoos, brushes, and care"
              },
              {
                "name": "createdAt",
                "value": "2026-07-01T11:10:00.000Z"
              },
              {
                "name": "updatedAt",
                "value": "2026-07-01T11:10:00.000Z"
              }
            ],
            "relationships": []
          },
          {
            "key": "accessories",
            "fields": [
              {
                "name": "name",
                "value": "Accessories"
              },
              {
                "name": "description",
                "value": "Collars, leashes, and beds"
              },
              {
                "name": "createdAt",
                "value": "2026-07-01T11:15:00.000Z"
              },
              {
                "name": "updatedAt",
                "value": "2026-07-01T11:15:00.000Z"
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

export const mdmEntityIndexSeeds: TableSeedRows = {
  "seedFor": "mdmEntityIndex",
  "rows": [
    {
      "mdmId": "a925ff8d-a825-4dfa-8725-fc67a625fad4",
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
      "dynamoPk": "a925ff8d-a825-4dfa-8725-fc67a625fad4",
      "createdAt": "2026-07-01T10:00:00.000Z",
      "updatedAt": "2026-07-01T10:00:00.000Z"
    },
    {
      "mdmId": "f15f861b-f05f-4488-835f-8941f25f87ae",
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
      "dynamoPk": "f15f861b-f05f-4488-835f-8941f25f87ae",
      "createdAt": "2026-07-01T10:05:00.000Z",
      "updatedAt": "2026-07-01T10:05:00.000Z"
    },
    {
      "mdmId": "fe581fb6-ff58-4149-8c58-1c90fd581e23",
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
      "dynamoPk": "fe581fb6-ff58-4149-8c58-1c90fd581e23",
      "createdAt": "2026-07-01T10:10:00.000Z",
      "updatedAt": "2026-07-01T10:10:00.000Z"
    },
    {
      "mdmId": "48a5881f-47a5-468c-8aa5-8b4549a589b2",
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
      "dynamoPk": "48a5881f-47a5-468c-8aa5-8b4549a589b2",
      "createdAt": "2026-07-01T10:15:00.000Z",
      "updatedAt": "2026-07-01T10:15:00.000Z"
    },
    {
      "mdmId": "1fe81d83-1ee8-4bf0-81e8-20a920e81f16",
      "subtype": "Product",
      "name": "Food",
      "status": "Active",
      "docType": null,
      "docId": null,
      "countryCode": "US",
      "tags": [
        "petShop.ProductCategory",
        "petShop",
        "ProductCategory"
      ],
      "searchVector": "food productcategory petshop",
      "mergedInto": null,
      "dynamoPk": "1fe81d83-1ee8-4bf0-81e8-20a920e81f16",
      "createdAt": "2026-07-01T11:00:00.000Z",
      "updatedAt": "2026-07-01T11:00:00.000Z"
    },
    {
      "mdmId": "74e7e8ce-75e7-4a61-82e7-e5a873e7e73b",
      "subtype": "Product",
      "name": "Toys",
      "status": "Active",
      "docType": null,
      "docId": null,
      "countryCode": "US",
      "tags": [
        "petShop.ProductCategory",
        "petShop",
        "ProductCategory"
      ],
      "searchVector": "toys productcategory petshop",
      "mergedInto": null,
      "dynamoPk": "74e7e8ce-75e7-4a61-82e7-e5a873e7e73b",
      "createdAt": "2026-07-01T11:05:00.000Z",
      "updatedAt": "2026-07-01T11:05:00.000Z"
    },
    {
      "mdmId": "05b18bd9-04b1-4a46-83b1-88b302b18720",
      "subtype": "Product",
      "name": "Grooming",
      "status": "Active",
      "docType": null,
      "docId": null,
      "countryCode": "US",
      "tags": [
        "petShop.ProductCategory",
        "petShop",
        "ProductCategory"
      ],
      "searchVector": "grooming productcategory petshop",
      "mergedInto": null,
      "dynamoPk": "05b18bd9-04b1-4a46-83b1-88b302b18720",
      "createdAt": "2026-07-01T11:10:00.000Z",
      "updatedAt": "2026-07-01T11:10:00.000Z"
    },
    {
      "mdmId": "60bd05af-5fbd-441c-82bd-08d561bd0742",
      "subtype": "Product",
      "name": "Accessories",
      "status": "Active",
      "docType": null,
      "docId": null,
      "countryCode": "US",
      "tags": [
        "petShop.ProductCategory",
        "petShop",
        "ProductCategory"
      ],
      "searchVector": "accessories productcategory petshop",
      "mergedInto": null,
      "dynamoPk": "60bd05af-5fbd-441c-82bd-08d561bd0742",
      "createdAt": "2026-07-01T11:15:00.000Z",
      "updatedAt": "2026-07-01T11:15:00.000Z"
    },
    {
      "mdmId": "b0ceeb38-b1ce-4ccb-82ce-ee5eb3ceeff1",
      "subtype": "Product",
      "name": "Premium Dog Kibble",
      "status": "Active",
      "docType": null,
      "docId": null,
      "countryCode": "US",
      "tags": [
        "petShop.Product",
        "petShop",
        "Product"
      ],
      "searchVector": "premium dog kibble product petshop",
      "mergedInto": null,
      "dynamoPk": "b0ceeb38-b1ce-4ccb-82ce-ee5eb3ceeff1",
      "createdAt": "2026-07-01T10:00:00.000Z",
      "updatedAt": "2026-07-02T14:30:00.000Z"
    },
    {
      "mdmId": "05f2e346-06f2-44d9-83f2-e02004f2e1b3",
      "subtype": "Product",
      "name": "Catnip Mouse Toy",
      "status": "Active",
      "docType": null,
      "docId": null,
      "countryCode": "US",
      "tags": [
        "petShop.Product",
        "petShop",
        "Product"
      ],
      "searchVector": "catnip mouse toy product petshop",
      "mergedInto": null,
      "dynamoPk": "05f2e346-06f2-44d9-83f2-e02004f2e1b3",
      "createdAt": "2026-07-01T11:15:00.000Z",
      "updatedAt": "2026-07-03T09:00:00.000Z"
    },
    {
      "mdmId": "11e70162-12e7-42f5-8fe6-fe3c10e6ffcf",
      "subtype": "Product",
      "name": "Bird Cage Swing",
      "status": "Active",
      "docType": null,
      "docId": null,
      "countryCode": "US",
      "tags": [
        "petShop.Product",
        "petShop",
        "Product"
      ],
      "searchVector": "bird cage swing product petshop",
      "mergedInto": null,
      "dynamoPk": "11e70162-12e7-42f5-8fe6-fe3c10e6ffcf",
      "createdAt": "2026-07-02T08:45:00.000Z",
      "updatedAt": "2026-07-02T08:45:00.000Z"
    },
    {
      "mdmId": "e537792b-e437-4798-8737-7c51e6377abe",
      "subtype": "Product",
      "name": "Tropical Fish Flakes",
      "status": "Active",
      "docType": null,
      "docId": null,
      "countryCode": "US",
      "tags": [
        "petShop.Product",
        "petShop",
        "Product"
      ],
      "searchVector": "tropical fish flakes product petshop",
      "mergedInto": null,
      "dynamoPk": "e537792b-e437-4798-8737-7c51e6377abe",
      "createdAt": "2026-07-03T16:20:00.000Z",
      "updatedAt": "2026-07-04T10:10:00.000Z"
    },
    {
      "mdmId": "891c9494-8a1c-4627-8b1c-97ba8c1c994d",
      "subtype": "Product",
      "name": "Gentle Dog Shampoo",
      "status": "Active",
      "docType": null,
      "docId": null,
      "countryCode": "US",
      "tags": [
        "petShop.Product",
        "petShop",
        "Product"
      ],
      "searchVector": "gentle dog shampoo product petshop",
      "mergedInto": null,
      "dynamoPk": "891c9494-8a1c-4627-8b1c-97ba8c1c994d",
      "createdAt": "2026-07-04T12:00:00.000Z",
      "updatedAt": "2026-07-05T11:00:00.000Z"
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
      "mdmId": "87b11905-86b1-4772-85b1-15df84b1144c",
      "subtype": "Person",
      "name": "Atendente/Loja 1",
      "status": "Active",
      "docType": null,
      "docId": null,
      "countryCode": "US",
      "tags": [
        "petShop.Person",
        "petShop",
        "actor",
        "atendente"
      ],
      "searchVector": "atendente/loja 1 atendente petshop",
      "mergedInto": null,
      "dynamoPk": "87b11905-86b1-4772-85b1-15df84b1144c",
      "createdAt": "2026-07-01T00:00:00.000Z",
      "updatedAt": "2026-07-01T00:00:00.000Z"
    },
    {
      "mdmId": "e75e71e0-e85e-4373-895e-7506ea5e7699",
      "subtype": "Person",
      "name": "Atendente/Loja 2",
      "status": "Active",
      "docType": null,
      "docId": null,
      "countryCode": "US",
      "tags": [
        "petShop.Person",
        "petShop",
        "actor",
        "atendente"
      ],
      "searchVector": "atendente/loja 2 atendente petshop",
      "mergedInto": null,
      "dynamoPk": "e75e71e0-e85e-4373-895e-7506ea5e7699",
      "createdAt": "2026-07-01T00:00:00.000Z",
      "updatedAt": "2026-07-01T00:00:00.000Z"
    },
    {
      "mdmId": "ddff8f4f-dcff-4dbc-8fff-9275deff90e2",
      "subtype": "Person",
      "name": "Atendente/Loja 3",
      "status": "Active",
      "docType": null,
      "docId": null,
      "countryCode": "US",
      "tags": [
        "petShop.Person",
        "petShop",
        "actor",
        "atendente"
      ],
      "searchVector": "atendente/loja 3 atendente petshop",
      "mergedInto": null,
      "dynamoPk": "ddff8f4f-dcff-4dbc-8fff-9275deff90e2",
      "createdAt": "2026-07-01T00:00:00.000Z",
      "updatedAt": "2026-07-01T00:00:00.000Z"
    }
  ]
};

export const mdmDocumentSeeds: TableSeedRows = {
  "seedFor": "mdmDocumentCache",
  "rows": [
    {
      "mdmId": "a925ff8d-a825-4dfa-8725-fc67a625fad4",
      "version": 1,
      "details": {
        "mdmId": "a925ff8d-a825-4dfa-8725-fc67a625fad4",
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
        "createdAt": "2026-07-01T10:00:00.000Z",
        "updatedAt": "2026-07-01T10:00:00.000Z",
        "petShop": {
          "name": "Dog",
          "createdAt": "2026-07-01T10:00:00.000Z",
          "updatedAt": "2026-07-01T10:00:00.000Z",
          "petTypeId": "a925ff8d-a825-4dfa-8725-fc67a625fad4"
        }
      }
    },
    {
      "mdmId": "f15f861b-f05f-4488-835f-8941f25f87ae",
      "version": 1,
      "details": {
        "mdmId": "f15f861b-f05f-4488-835f-8941f25f87ae",
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
        "createdAt": "2026-07-01T10:05:00.000Z",
        "updatedAt": "2026-07-01T10:05:00.000Z",
        "petShop": {
          "name": "Cat",
          "createdAt": "2026-07-01T10:05:00.000Z",
          "updatedAt": "2026-07-01T10:05:00.000Z",
          "petTypeId": "f15f861b-f05f-4488-835f-8941f25f87ae"
        }
      }
    },
    {
      "mdmId": "fe581fb6-ff58-4149-8c58-1c90fd581e23",
      "version": 1,
      "details": {
        "mdmId": "fe581fb6-ff58-4149-8c58-1c90fd581e23",
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
        "createdAt": "2026-07-01T10:10:00.000Z",
        "updatedAt": "2026-07-01T10:10:00.000Z",
        "petShop": {
          "name": "Bird",
          "createdAt": "2026-07-01T10:10:00.000Z",
          "updatedAt": "2026-07-01T10:10:00.000Z",
          "petTypeId": "fe581fb6-ff58-4149-8c58-1c90fd581e23"
        }
      }
    },
    {
      "mdmId": "48a5881f-47a5-468c-8aa5-8b4549a589b2",
      "version": 1,
      "details": {
        "mdmId": "48a5881f-47a5-468c-8aa5-8b4549a589b2",
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
        "createdAt": "2026-07-01T10:15:00.000Z",
        "updatedAt": "2026-07-01T10:15:00.000Z",
        "petShop": {
          "name": "Fish",
          "createdAt": "2026-07-01T10:15:00.000Z",
          "updatedAt": "2026-07-01T10:15:00.000Z",
          "petTypeId": "48a5881f-47a5-468c-8aa5-8b4549a589b2"
        }
      }
    },
    {
      "mdmId": "1fe81d83-1ee8-4bf0-81e8-20a920e81f16",
      "version": 1,
      "details": {
        "mdmId": "1fe81d83-1ee8-4bf0-81e8-20a920e81f16",
        "subtype": "Product",
        "name": "Food",
        "status": "Active",
        "docType": null,
        "docId": null,
        "countryCode": "US",
        "tags": [
          "petShop.ProductCategory",
          "petShop",
          "ProductCategory"
        ],
        "aliases": [],
        "contacts": [],
        "relationshipRefs": {},
        "addresses": [],
        "mergedInto": null,
        "createdAt": "2026-07-01T11:00:00.000Z",
        "updatedAt": "2026-07-01T11:00:00.000Z",
        "petShop": {
          "name": "Food",
          "description": "Dry and wet pet food",
          "createdAt": "2026-07-01T11:00:00.000Z",
          "updatedAt": "2026-07-01T11:00:00.000Z",
          "productCategoryId": "1fe81d83-1ee8-4bf0-81e8-20a920e81f16"
        }
      }
    },
    {
      "mdmId": "74e7e8ce-75e7-4a61-82e7-e5a873e7e73b",
      "version": 1,
      "details": {
        "mdmId": "74e7e8ce-75e7-4a61-82e7-e5a873e7e73b",
        "subtype": "Product",
        "name": "Toys",
        "status": "Active",
        "docType": null,
        "docId": null,
        "countryCode": "US",
        "tags": [
          "petShop.ProductCategory",
          "petShop",
          "ProductCategory"
        ],
        "aliases": [],
        "contacts": [],
        "relationshipRefs": {},
        "addresses": [],
        "mergedInto": null,
        "createdAt": "2026-07-01T11:05:00.000Z",
        "updatedAt": "2026-07-01T11:05:00.000Z",
        "petShop": {
          "name": "Toys",
          "description": "Chew toys and play items",
          "createdAt": "2026-07-01T11:05:00.000Z",
          "updatedAt": "2026-07-01T11:05:00.000Z",
          "productCategoryId": "74e7e8ce-75e7-4a61-82e7-e5a873e7e73b"
        }
      }
    },
    {
      "mdmId": "05b18bd9-04b1-4a46-83b1-88b302b18720",
      "version": 1,
      "details": {
        "mdmId": "05b18bd9-04b1-4a46-83b1-88b302b18720",
        "subtype": "Product",
        "name": "Grooming",
        "status": "Active",
        "docType": null,
        "docId": null,
        "countryCode": "US",
        "tags": [
          "petShop.ProductCategory",
          "petShop",
          "ProductCategory"
        ],
        "aliases": [],
        "contacts": [],
        "relationshipRefs": {},
        "addresses": [],
        "mergedInto": null,
        "createdAt": "2026-07-01T11:10:00.000Z",
        "updatedAt": "2026-07-01T11:10:00.000Z",
        "petShop": {
          "name": "Grooming",
          "description": "Shampoos, brushes, and care",
          "createdAt": "2026-07-01T11:10:00.000Z",
          "updatedAt": "2026-07-01T11:10:00.000Z",
          "productCategoryId": "05b18bd9-04b1-4a46-83b1-88b302b18720"
        }
      }
    },
    {
      "mdmId": "60bd05af-5fbd-441c-82bd-08d561bd0742",
      "version": 1,
      "details": {
        "mdmId": "60bd05af-5fbd-441c-82bd-08d561bd0742",
        "subtype": "Product",
        "name": "Accessories",
        "status": "Active",
        "docType": null,
        "docId": null,
        "countryCode": "US",
        "tags": [
          "petShop.ProductCategory",
          "petShop",
          "ProductCategory"
        ],
        "aliases": [],
        "contacts": [],
        "relationshipRefs": {},
        "addresses": [],
        "mergedInto": null,
        "createdAt": "2026-07-01T11:15:00.000Z",
        "updatedAt": "2026-07-01T11:15:00.000Z",
        "petShop": {
          "name": "Accessories",
          "description": "Collars, leashes, and beds",
          "createdAt": "2026-07-01T11:15:00.000Z",
          "updatedAt": "2026-07-01T11:15:00.000Z",
          "productCategoryId": "60bd05af-5fbd-441c-82bd-08d561bd0742"
        }
      }
    },
    {
      "mdmId": "b0ceeb38-b1ce-4ccb-82ce-ee5eb3ceeff1",
      "version": 1,
      "details": {
        "mdmId": "b0ceeb38-b1ce-4ccb-82ce-ee5eb3ceeff1",
        "subtype": "Product",
        "name": "Premium Dog Kibble",
        "status": "Active",
        "docType": null,
        "docId": null,
        "countryCode": "US",
        "tags": [
          "petShop.Product",
          "petShop",
          "Product"
        ],
        "aliases": [],
        "contacts": [],
        "relationshipRefs": {},
        "addresses": [],
        "mergedInto": null,
        "createdAt": "2026-07-01T10:00:00.000Z",
        "updatedAt": "2026-07-02T14:30:00.000Z",
        "petShop": {
          "name": "Premium Dog Kibble",
          "price": 89.9,
          "isFeatured": true,
          "categoryId": "1fe81d83-1ee8-4bf0-81e8-20a920e81f16",
          "petTypeId": "a925ff8d-a825-4dfa-8725-fc67a625fad4",
          "createdAt": "2026-07-01T10:00:00.000Z",
          "updatedAt": "2026-07-02T14:30:00.000Z",
          "productId": "b0ceeb38-b1ce-4ccb-82ce-ee5eb3ceeff1"
        }
      }
    },
    {
      "mdmId": "05f2e346-06f2-44d9-83f2-e02004f2e1b3",
      "version": 1,
      "details": {
        "mdmId": "05f2e346-06f2-44d9-83f2-e02004f2e1b3",
        "subtype": "Product",
        "name": "Catnip Mouse Toy",
        "status": "Active",
        "docType": null,
        "docId": null,
        "countryCode": "US",
        "tags": [
          "petShop.Product",
          "petShop",
          "Product"
        ],
        "aliases": [],
        "contacts": [],
        "relationshipRefs": {},
        "addresses": [],
        "mergedInto": null,
        "createdAt": "2026-07-01T11:15:00.000Z",
        "updatedAt": "2026-07-03T09:00:00.000Z",
        "petShop": {
          "name": "Catnip Mouse Toy",
          "price": 19.5,
          "isFeatured": true,
          "categoryId": "74e7e8ce-75e7-4a61-82e7-e5a873e7e73b",
          "petTypeId": "f15f861b-f05f-4488-835f-8941f25f87ae",
          "createdAt": "2026-07-01T11:15:00.000Z",
          "updatedAt": "2026-07-03T09:00:00.000Z",
          "productId": "05f2e346-06f2-44d9-83f2-e02004f2e1b3"
        }
      }
    },
    {
      "mdmId": "11e70162-12e7-42f5-8fe6-fe3c10e6ffcf",
      "version": 1,
      "details": {
        "mdmId": "11e70162-12e7-42f5-8fe6-fe3c10e6ffcf",
        "subtype": "Product",
        "name": "Bird Cage Swing",
        "status": "Active",
        "docType": null,
        "docId": null,
        "countryCode": "US",
        "tags": [
          "petShop.Product",
          "petShop",
          "Product"
        ],
        "aliases": [],
        "contacts": [],
        "relationshipRefs": {},
        "addresses": [],
        "mergedInto": null,
        "createdAt": "2026-07-02T08:45:00.000Z",
        "updatedAt": "2026-07-02T08:45:00.000Z",
        "petShop": {
          "name": "Bird Cage Swing",
          "price": 24,
          "isFeatured": false,
          "categoryId": "60bd05af-5fbd-441c-82bd-08d561bd0742",
          "petTypeId": "fe581fb6-ff58-4149-8c58-1c90fd581e23",
          "createdAt": "2026-07-02T08:45:00.000Z",
          "updatedAt": "2026-07-02T08:45:00.000Z",
          "productId": "11e70162-12e7-42f5-8fe6-fe3c10e6ffcf"
        }
      }
    },
    {
      "mdmId": "e537792b-e437-4798-8737-7c51e6377abe",
      "version": 1,
      "details": {
        "mdmId": "e537792b-e437-4798-8737-7c51e6377abe",
        "subtype": "Product",
        "name": "Tropical Fish Flakes",
        "status": "Active",
        "docType": null,
        "docId": null,
        "countryCode": "US",
        "tags": [
          "petShop.Product",
          "petShop",
          "Product"
        ],
        "aliases": [],
        "contacts": [],
        "relationshipRefs": {},
        "addresses": [],
        "mergedInto": null,
        "createdAt": "2026-07-03T16:20:00.000Z",
        "updatedAt": "2026-07-04T10:10:00.000Z",
        "petShop": {
          "name": "Tropical Fish Flakes",
          "price": 12.75,
          "isFeatured": false,
          "categoryId": "1fe81d83-1ee8-4bf0-81e8-20a920e81f16",
          "petTypeId": "48a5881f-47a5-468c-8aa5-8b4549a589b2",
          "createdAt": "2026-07-03T16:20:00.000Z",
          "updatedAt": "2026-07-04T10:10:00.000Z",
          "productId": "e537792b-e437-4798-8737-7c51e6377abe"
        }
      }
    },
    {
      "mdmId": "891c9494-8a1c-4627-8b1c-97ba8c1c994d",
      "version": 1,
      "details": {
        "mdmId": "891c9494-8a1c-4627-8b1c-97ba8c1c994d",
        "subtype": "Product",
        "name": "Gentle Dog Shampoo",
        "status": "Active",
        "docType": null,
        "docId": null,
        "countryCode": "US",
        "tags": [
          "petShop.Product",
          "petShop",
          "Product"
        ],
        "aliases": [],
        "contacts": [],
        "relationshipRefs": {},
        "addresses": [],
        "mergedInto": null,
        "createdAt": "2026-07-04T12:00:00.000Z",
        "updatedAt": "2026-07-05T11:00:00.000Z",
        "petShop": {
          "name": "Gentle Dog Shampoo",
          "price": 34.9,
          "isFeatured": true,
          "categoryId": "05b18bd9-04b1-4a46-83b1-88b302b18720",
          "petTypeId": "a925ff8d-a825-4dfa-8725-fc67a625fad4",
          "createdAt": "2026-07-04T12:00:00.000Z",
          "updatedAt": "2026-07-05T11:00:00.000Z",
          "productId": "891c9494-8a1c-4627-8b1c-97ba8c1c994d"
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
      "mdmId": "87b11905-86b1-4772-85b1-15df84b1144c",
      "version": 1,
      "details": {
        "mdmId": "87b11905-86b1-4772-85b1-15df84b1144c",
        "subtype": "Person",
        "name": "Atendente/Loja 1",
        "status": "Active",
        "docType": null,
        "docId": null,
        "countryCode": "US",
        "tags": [
          "petShop.Person",
          "petShop",
          "actor",
          "atendente"
        ],
        "aliases": [],
        "contacts": [],
        "relationshipRefs": {},
        "addresses": [],
        "mergedInto": null,
        "createdAt": "2026-07-01T00:00:00.000Z",
        "updatedAt": "2026-07-01T00:00:00.000Z",
        "actorId": "atendente"
      }
    },
    {
      "mdmId": "e75e71e0-e85e-4373-895e-7506ea5e7699",
      "version": 1,
      "details": {
        "mdmId": "e75e71e0-e85e-4373-895e-7506ea5e7699",
        "subtype": "Person",
        "name": "Atendente/Loja 2",
        "status": "Active",
        "docType": null,
        "docId": null,
        "countryCode": "US",
        "tags": [
          "petShop.Person",
          "petShop",
          "actor",
          "atendente"
        ],
        "aliases": [],
        "contacts": [],
        "relationshipRefs": {},
        "addresses": [],
        "mergedInto": null,
        "createdAt": "2026-07-01T00:00:00.000Z",
        "updatedAt": "2026-07-01T00:00:00.000Z",
        "actorId": "atendente"
      }
    },
    {
      "mdmId": "ddff8f4f-dcff-4dbc-8fff-9275deff90e2",
      "version": 1,
      "details": {
        "mdmId": "ddff8f4f-dcff-4dbc-8fff-9275deff90e2",
        "subtype": "Person",
        "name": "Atendente/Loja 3",
        "status": "Active",
        "docType": null,
        "docId": null,
        "countryCode": "US",
        "tags": [
          "petShop.Person",
          "petShop",
          "actor",
          "atendente"
        ],
        "aliases": [],
        "contacts": [],
        "relationshipRefs": {},
        "addresses": [],
        "mergedInto": null,
        "createdAt": "2026-07-01T00:00:00.000Z",
        "updatedAt": "2026-07-01T00:00:00.000Z",
        "actorId": "atendente"
      }
    }
  ]
};
