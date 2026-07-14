/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/persistence/seeds.ts" enhancement="_blank"/>

// Deterministic initial data for petShop. Scenario planned by agentCbSeeds; rows and ids compiled locally.
// TableSeedRows exports are discovered by shape and merged by the persistence registry.

/* <agentCbSeedsPlan>
{
  "version": 1,
  "moduleName": "petShop",
  "language": "en",
  "plan": {
    "summary": "Wave 3 seeds three core local tables: AdoptionInterest (3 rows: registered, completed, cancelled), ServiceBooking (4 rows: confirmed for deactivated service, inProgress, completed, cancelled), and ShiftAssignment (4 rows covering 3 operators with Ana assigned to two shifts to demonstrate multiple-shift allowance). All bookings reference operators assigned to the corresponding shift. The confirmed booking for the deactivated vaccination service demonstrates that deactivation does not cancel existing bookings. Adoption completion includes in-store verification notes. All booking times fall within 09:00–18:00 business hours. Payment-in-store-only rule is reflected via notes, not as an unknown field.",
    "localTables": [
      {
        "tableId": "AdoptablePet",
        "rows": [
          {
            "key": "pet_rex",
            "columns": [
              {
                "name": "adoptable_pet_id",
                "value": "pet_rex"
              },
              {
                "name": "status",
                "value": "available"
              },
              {
                "name": "created_at",
                "value": "2026-07-01T10:00:00.000Z"
              }
            ],
            "details": [
              {
                "name": "name",
                "value": "Rex"
              },
              {
                "name": "age",
                "value": 3
              },
              {
                "name": "description",
                "value": "Cão macho, porte médio, muito brincalhão e sociável. Vacinado e castrado."
              },
              {
                "name": "photoUrl",
                "value": "platform://media/petshop/pets/rex.jpg"
              },
              {
                "name": "updatedAt",
                "value": "2026-07-01T10:00:00.000Z"
              }
            ],
            "children": []
          },
          {
            "key": "pet_mia",
            "columns": [
              {
                "name": "adoptable_pet_id",
                "value": "pet_mia"
              },
              {
                "name": "status",
                "value": "available"
              },
              {
                "name": "created_at",
                "value": "2026-07-02T11:30:00.000Z"
              }
            ],
            "details": [
              {
                "name": "name",
                "value": "Mia"
              },
              {
                "name": "age",
                "value": 1
              },
              {
                "name": "description",
                "value": "Gata fêmea, pelagem cinza, carinhosa e tranquila. Primeira vacina em dia."
              },
              {
                "name": "photoUrl",
                "value": "platform://media/petshop/pets/mia.jpg"
              },
              {
                "name": "updatedAt",
                "value": "2026-07-02T11:30:00.000Z"
              }
            ],
            "children": []
          },
          {
            "key": "pet_bob",
            "columns": [
              {
                "name": "adoptable_pet_id",
                "value": "pet_bob"
              },
              {
                "name": "status",
                "value": "unavailable"
              },
              {
                "name": "created_at",
                "value": "2026-07-03T09:00:00.000Z"
              }
            ],
            "details": [
              {
                "name": "name",
                "value": "Bob"
              },
              {
                "name": "age",
                "value": 5
              },
              {
                "name": "description",
                "value": "Cão macho, porte grande, dócil com crianças. Em processo de adoção."
              },
              {
                "name": "photoUrl",
                "value": "platform://media/petshop/pets/bob.jpg"
              },
              {
                "name": "updatedAt",
                "value": "2026-07-04T14:00:00.000Z"
              }
            ],
            "children": []
          }
        ]
      },
      {
        "tableId": "AdoptionInterest",
        "rows": [
          {
            "key": "ai_01",
            "columns": [
              {
                "name": "adoption_interest_id",
                "value": "ai_01"
              },
              {
                "name": "adoptable_pet_id",
                "value": {
                  "ref": "local:AdoptablePet.pet_bob"
                }
              },
              {
                "name": "status",
                "value": "registered"
              },
              {
                "name": "operator_id",
                "value": {
                  "ref": "local:Operator.op_ana"
                }
              },
              {
                "name": "created_at",
                "value": "2026-07-02T10:00:00.000Z"
              }
            ],
            "details": [
              {
                "name": "customerName",
                "value": "João Pereira"
              },
              {
                "name": "customerEmail",
                "value": "joao.pereira@email.com"
              },
              {
                "name": "customerPhone",
                "value": "+55 11 98765-4321"
              },
              {
                "name": "verificationNotes",
                "value": null
              },
              {
                "name": "completedAt",
                "value": null
              },
              {
                "name": "cancelledAt",
                "value": null
              },
              {
                "name": "cancellationReason",
                "value": null
              },
              {
                "name": "updatedAt",
                "value": "2026-07-02T10:00:00.000Z"
              }
            ],
            "children": []
          },
          {
            "key": "ai_02",
            "columns": [
              {
                "name": "adoption_interest_id",
                "value": "ai_02"
              },
              {
                "name": "adoptable_pet_id",
                "value": {
                  "ref": "local:AdoptablePet.pet_mia"
                }
              },
              {
                "name": "status",
                "value": "completed"
              },
              {
                "name": "operator_id",
                "value": {
                  "ref": "local:Operator.op_carlos"
                }
              },
              {
                "name": "created_at",
                "value": "2026-07-01T09:30:00.000Z"
              }
            ],
            "details": [
              {
                "name": "customerName",
                "value": "Maria Santos"
              },
              {
                "name": "customerEmail",
                "value": "maria.santos@email.com"
              },
              {
                "name": "customerPhone",
                "value": "+55 11 91234-5678"
              },
              {
                "name": "verificationNotes",
                "value": "Documentação verificada presencialmente na loja. RG e comprovante de residência conferidos. Adoção finalizada."
              },
              {
                "name": "completedAt",
                "value": "2026-07-03T14:00:00.000Z"
              },
              {
                "name": "cancelledAt",
                "value": null
              },
              {
                "name": "cancellationReason",
                "value": null
              },
              {
                "name": "updatedAt",
                "value": "2026-07-03T14:00:00.000Z"
              }
            ],
            "children": []
          },
          {
            "key": "ai_03",
            "columns": [
              {
                "name": "adoption_interest_id",
                "value": "ai_03"
              },
              {
                "name": "adoptable_pet_id",
                "value": {
                  "ref": "local:AdoptablePet.pet_rex"
                }
              },
              {
                "name": "status",
                "value": "cancelled"
              },
              {
                "name": "operator_id",
                "value": {
                  "ref": "local:Operator.op_marina"
                }
              },
              {
                "name": "created_at",
                "value": "2026-07-02T11:00:00.000Z"
              }
            ],
            "details": [
              {
                "name": "customerName",
                "value": "Pedro Costa"
              },
              {
                "name": "customerEmail",
                "value": "pedro.costa@email.com"
              },
              {
                "name": "customerPhone",
                "value": "+55 11 99876-5432"
              },
              {
                "name": "verificationNotes",
                "value": null
              },
              {
                "name": "completedAt",
                "value": null
              },
              {
                "name": "cancelledAt",
                "value": "2026-07-04T09:00:00.000Z"
              },
              {
                "name": "cancellationReason",
                "value": "Cliente desistiu da adoção por incompatibilidade de moradia para o porte do pet."
              },
              {
                "name": "updatedAt",
                "value": "2026-07-04T09:00:00.000Z"
              }
            ],
            "children": []
          }
        ]
      },
      {
        "tableId": "Operator",
        "rows": [
          {
            "key": "op_ana",
            "columns": [
              {
                "name": "operator_id",
                "value": "op_ana"
              },
              {
                "name": "created_at",
                "value": "2026-07-01T08:00:00.000Z"
              }
            ],
            "details": [
              {
                "name": "name",
                "value": "Ana Silva"
              },
              {
                "name": "email",
                "value": "ana.silva@petshop.com"
              },
              {
                "name": "phone",
                "value": "+55 11 98888-1001"
              },
              {
                "name": "active",
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
            "key": "op_carlos",
            "columns": [
              {
                "name": "operator_id",
                "value": "op_carlos"
              },
              {
                "name": "created_at",
                "value": "2026-07-01T08:00:00.000Z"
              }
            ],
            "details": [
              {
                "name": "name",
                "value": "Carlos Souza"
              },
              {
                "name": "email",
                "value": "carlos.souza@petshop.com"
              },
              {
                "name": "phone",
                "value": "+55 11 98888-1002"
              },
              {
                "name": "active",
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
            "key": "op_marina",
            "columns": [
              {
                "name": "operator_id",
                "value": "op_marina"
              },
              {
                "name": "created_at",
                "value": "2026-07-01T08:00:00.000Z"
              }
            ],
            "details": [
              {
                "name": "name",
                "value": "Marina Lima"
              },
              {
                "name": "email",
                "value": "marina.lima@petshop.com"
              },
              {
                "name": "phone",
                "value": "+55 11 98888-1003"
              },
              {
                "name": "active",
                "value": false
              },
              {
                "name": "updatedAt",
                "value": "2026-07-05T10:00:00.000Z"
              }
            ],
            "children": []
          }
        ]
      },
      {
        "tableId": "Order",
        "rows": [
          {
            "key": "ord_001",
            "columns": [
              {
                "name": "order_id",
                "value": "ord_001"
              },
              {
                "name": "status",
                "value": "registered"
              },
              {
                "name": "created_at",
                "value": "2026-07-05T10:00:00.000Z"
              }
            ],
            "details": [
              {
                "name": "customerName",
                "value": "João Pereira"
              },
              {
                "name": "customerPhone",
                "value": "+55 11 97777-2001"
              },
              {
                "name": "updatedAt",
                "value": "2026-07-05T10:00:00.000Z"
              },
              {
                "name": "completedAt",
                "value": null
              },
              {
                "name": "cancelledAt",
                "value": null
              },
              {
                "name": "cancellationReason",
                "value": null
              }
            ],
            "children": []
          },
          {
            "key": "ord_002",
            "columns": [
              {
                "name": "order_id",
                "value": "ord_002"
              },
              {
                "name": "status",
                "value": "completed"
              },
              {
                "name": "created_at",
                "value": "2026-07-03T11:00:00.000Z"
              }
            ],
            "details": [
              {
                "name": "customerName",
                "value": "Maria Santos"
              },
              {
                "name": "customerPhone",
                "value": "+55 11 97777-2002"
              },
              {
                "name": "updatedAt",
                "value": "2026-07-03T15:30:00.000Z"
              },
              {
                "name": "completedAt",
                "value": "2026-07-03T15:30:00.000Z"
              },
              {
                "name": "cancelledAt",
                "value": null
              },
              {
                "name": "cancellationReason",
                "value": null
              }
            ],
            "children": []
          },
          {
            "key": "ord_003",
            "columns": [
              {
                "name": "order_id",
                "value": "ord_003"
              },
              {
                "name": "status",
                "value": "cancelled"
              },
              {
                "name": "created_at",
                "value": "2026-07-04T09:00:00.000Z"
              }
            ],
            "details": [
              {
                "name": "customerName",
                "value": "Pedro Costa"
              },
              {
                "name": "customerPhone",
                "value": "+55 11 97777-2003"
              },
              {
                "name": "updatedAt",
                "value": "2026-07-04T16:00:00.000Z"
              },
              {
                "name": "completedAt",
                "value": null
              },
              {
                "name": "cancelledAt",
                "value": "2026-07-04T16:00:00.000Z"
              },
              {
                "name": "cancellationReason",
                "value": "Cliente desistiu da retirada."
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
            "key": "prod_racao",
            "columns": [
              {
                "name": "product_id",
                "value": "prod_racao"
              },
              {
                "name": "product_category_id",
                "value": {
                  "ref": "mdm:ProductCategory.cat_food"
                }
              },
              {
                "name": "status",
                "value": "active"
              },
              {
                "name": "created_at",
                "value": "2026-07-01T09:00:00.000Z"
              }
            ],
            "details": [
              {
                "name": "name",
                "value": "Ração Premium Cães Adulto 15kg"
              },
              {
                "name": "description",
                "value": "Ração super premium para cães adultos, sabor frango e cereais."
              },
              {
                "name": "price",
                "value": 89.9
              },
              {
                "name": "imageUrl",
                "value": "platform://media/petshop/products/racao-premium.jpg"
              },
              {
                "name": "featured",
                "value": true
              },
              {
                "name": "updatedAt",
                "value": "2026-07-01T09:00:00.000Z"
              }
            ],
            "children": []
          },
          {
            "key": "prod_coleira",
            "columns": [
              {
                "name": "product_id",
                "value": "prod_coleira"
              },
              {
                "name": "product_category_id",
                "value": {
                  "ref": "mdm:ProductCategory.cat_accessories"
                }
              },
              {
                "name": "status",
                "value": "active"
              },
              {
                "name": "created_at",
                "value": "2026-07-01T09:30:00.000Z"
              }
            ],
            "details": [
              {
                "name": "name",
                "value": "Coleira Anti-Pulgas Média"
              },
              {
                "name": "description",
                "value": "Coleira antipulgas e carrapatos, proteção por 8 meses, tamanho médio."
              },
              {
                "name": "price",
                "value": 45
              },
              {
                "name": "imageUrl",
                "value": "platform://media/petshop/products/coleira-antipulgas.jpg"
              },
              {
                "name": "featured",
                "value": false
              },
              {
                "name": "updatedAt",
                "value": "2026-07-01T09:30:00.000Z"
              }
            ],
            "children": []
          },
          {
            "key": "prod_shampoo",
            "columns": [
              {
                "name": "product_id",
                "value": "prod_shampoo"
              },
              {
                "name": "product_category_id",
                "value": {
                  "ref": "mdm:ProductCategory.cat_hygiene"
                }
              },
              {
                "name": "status",
                "value": "active"
              },
              {
                "name": "created_at",
                "value": "2026-07-02T10:00:00.000Z"
              }
            ],
            "details": [
              {
                "name": "name",
                "value": "Shampoo Felino Hipoalergênico 300ml"
              },
              {
                "name": "description",
                "value": "Shampoo hipoalergênico para gatos, pH neutro, sem perfume."
              },
              {
                "name": "price",
                "value": 25.5
              },
              {
                "name": "imageUrl",
                "value": "platform://media/petshop/products/shampoo-felino.jpg"
              },
              {
                "name": "featured",
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
            "key": "prod_antiparasitario",
            "columns": [
              {
                "name": "product_id",
                "value": "prod_antiparasitario"
              },
              {
                "name": "product_category_id",
                "value": {
                  "ref": "mdm:ProductCategory.cat_medicine"
                }
              },
              {
                "name": "status",
                "value": "inactive"
              },
              {
                "name": "created_at",
                "value": "2026-07-02T10:30:00.000Z"
              }
            ],
            "details": [
              {
                "name": "name",
                "value": "Antiparasitório Oral Cães 10kg"
              },
              {
                "name": "description",
                "value": "Comprimido antiparasitário de amplo espectro para cães até 10kg."
              },
              {
                "name": "price",
                "value": 38
              },
              {
                "name": "imageUrl",
                "value": "platform://media/petshop/products/antiparasitario.jpg"
              },
              {
                "name": "featured",
                "value": false
              },
              {
                "name": "updatedAt",
                "value": "2026-07-05T12:00:00.000Z"
              }
            ],
            "children": []
          }
        ]
      },
      {
        "tableId": "Service",
        "rows": [
          {
            "key": "svc_banho",
            "columns": [
              {
                "name": "service_id",
                "value": "svc_banho"
              },
              {
                "name": "status",
                "value": "active"
              },
              {
                "name": "created_at",
                "value": "2026-07-01T09:00:00.000Z"
              }
            ],
            "details": [
              {
                "name": "name",
                "value": "Banho e Tosa"
              },
              {
                "name": "description",
                "value": "Banho completo com tosa higiênica para cães e gatos de pequeno e médio porte."
              },
              {
                "name": "estimatedDurationMinutes",
                "value": 60
              },
              {
                "name": "price",
                "value": 70
              },
              {
                "name": "deactivatedAt",
                "value": null
              },
              {
                "name": "updatedAt",
                "value": "2026-07-01T09:00:00.000Z"
              }
            ],
            "children": []
          },
          {
            "key": "svc_consulta",
            "columns": [
              {
                "name": "service_id",
                "value": "svc_consulta"
              },
              {
                "name": "status",
                "value": "active"
              },
              {
                "name": "created_at",
                "value": "2026-07-01T09:30:00.000Z"
              }
            ],
            "details": [
              {
                "name": "name",
                "value": "Consulta Veterinária"
              },
              {
                "name": "description",
                "value": "Consulta clínica geral com veterinário, incluindo avaliação física e orientações."
              },
              {
                "name": "estimatedDurationMinutes",
                "value": 30
              },
              {
                "name": "price",
                "value": 120
              },
              {
                "name": "deactivatedAt",
                "value": null
              },
              {
                "name": "updatedAt",
                "value": "2026-07-01T09:30:00.000Z"
              }
            ],
            "children": []
          },
          {
            "key": "svc_vacinacao",
            "columns": [
              {
                "name": "service_id",
                "value": "svc_vacinacao"
              },
              {
                "name": "status",
                "value": "inactive"
              },
              {
                "name": "created_at",
                "value": "2026-07-02T10:00:00.000Z"
              }
            ],
            "details": [
              {
                "name": "name",
                "value": "Vacinação Domiciliar"
              },
              {
                "name": "description",
                "value": "Aplicação de vacinas no domicílio do cliente, mediante agendamento prévio."
              },
              {
                "name": "estimatedDurationMinutes",
                "value": 20
              },
              {
                "name": "price",
                "value": 50
              },
              {
                "name": "deactivatedAt",
                "value": "2026-07-05T14:00:00.000Z"
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
        "tableId": "ServiceBooking",
        "rows": [
          {
            "key": "sb_01",
            "columns": [
              {
                "name": "service_booking_id",
                "value": "sb_01"
              },
              {
                "name": "service_id",
                "value": {
                  "ref": "local:Service.svc_vacinacao"
                }
              },
              {
                "name": "operator_id",
                "value": {
                  "ref": "local:Operator.op_ana"
                }
              },
              {
                "name": "shift_id",
                "value": {
                  "ref": "mdm:Shift.shift_morning"
                }
              },
              {
                "name": "status",
                "value": "confirmed"
              },
              {
                "name": "created_at",
                "value": "2026-07-01T09:00:00.000Z"
              }
            ],
            "details": [
              {
                "name": "customerName",
                "value": "Lucia Almeida"
              },
              {
                "name": "customerPhone",
                "value": "+55 11 98888-1111"
              },
              {
                "name": "bookingDate",
                "value": "2026-07-03T00:00:00.000Z"
              },
              {
                "name": "bookingTime",
                "value": "10:00"
              },
              {
                "name": "notes",
                "value": "Serviço desativado posteriormente; agendamento permanece válido conforme política. Pagamento presencial na loja."
              },
              {
                "name": "completedAt",
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
                "value": "2026-07-01T09:00:00.000Z"
              }
            ],
            "children": []
          },
          {
            "key": "sb_02",
            "columns": [
              {
                "name": "service_booking_id",
                "value": "sb_02"
              },
              {
                "name": "service_id",
                "value": {
                  "ref": "local:Service.svc_consulta"
                }
              },
              {
                "name": "operator_id",
                "value": {
                  "ref": "local:Operator.op_carlos"
                }
              },
              {
                "name": "shift_id",
                "value": {
                  "ref": "mdm:Shift.shift_afternoon"
                }
              },
              {
                "name": "status",
                "value": "inProgress"
              },
              {
                "name": "created_at",
                "value": "2026-07-02T13:00:00.000Z"
              }
            ],
            "details": [
              {
                "name": "customerName",
                "value": "Ricardo Ferreira"
              },
              {
                "name": "customerPhone",
                "value": "+55 11 97777-2222"
              },
              {
                "name": "bookingDate",
                "value": "2026-07-04T00:00:00.000Z"
              },
              {
                "name": "bookingTime",
                "value": "14:30"
              },
              {
                "name": "notes",
                "value": "Consulta em andamento. Pagamento presencial na loja."
              },
              {
                "name": "completedAt",
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
                "value": "2026-07-04T14:00:00.000Z"
              }
            ],
            "children": []
          },
          {
            "key": "sb_03",
            "columns": [
              {
                "name": "service_booking_id",
                "value": "sb_03"
              },
              {
                "name": "service_id",
                "value": {
                  "ref": "local:Service.svc_banho"
                }
              },
              {
                "name": "operator_id",
                "value": {
                  "ref": "local:Operator.op_ana"
                }
              },
              {
                "name": "shift_id",
                "value": {
                  "ref": "mdm:Shift.shift_morning"
                }
              },
              {
                "name": "status",
                "value": "completed"
              },
              {
                "name": "created_at",
                "value": "2026-07-01T08:30:00.000Z"
              }
            ],
            "details": [
              {
                "name": "customerName",
                "value": "Fernanda Dias"
              },
              {
                "name": "customerPhone",
                "value": "+55 11 96666-3333"
              },
              {
                "name": "bookingDate",
                "value": "2026-07-02T00:00:00.000Z"
              },
              {
                "name": "bookingTime",
                "value": "09:30"
              },
              {
                "name": "notes",
                "value": "Banho e tosa concluídos sem intercorrências. Pagamento realizado presencialmente."
              },
              {
                "name": "completedAt",
                "value": "2026-07-02T11:30:00.000Z"
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
                "value": "2026-07-02T11:30:00.000Z"
              }
            ],
            "children": []
          },
          {
            "key": "sb_04",
            "columns": [
              {
                "name": "service_booking_id",
                "value": "sb_04"
              },
              {
                "name": "service_id",
                "value": {
                  "ref": "local:Service.svc_banho"
                }
              },
              {
                "name": "operator_id",
                "value": {
                  "ref": "local:Operator.op_marina"
                }
              },
              {
                "name": "shift_id",
                "value": {
                  "ref": "mdm:Shift.shift_fullday"
                }
              },
              {
                "name": "status",
                "value": "cancelled"
              },
              {
                "name": "created_at",
                "value": "2026-07-03T10:00:00.000Z"
              }
            ],
            "details": [
              {
                "name": "customerName",
                "value": "Bruno Carvalho"
              },
              {
                "name": "customerPhone",
                "value": "+55 11 95555-4444"
              },
              {
                "name": "bookingDate",
                "value": "2026-07-05T00:00:00.000Z"
              },
              {
                "name": "bookingTime",
                "value": "10:00"
              },
              {
                "name": "notes",
                "value": null
              },
              {
                "name": "completedAt",
                "value": null
              },
              {
                "name": "cancelledAt",
                "value": "2026-07-05T08:00:00.000Z"
              },
              {
                "name": "cancelReason",
                "value": "Cliente cancelou por conflito de agenda pessoal."
              },
              {
                "name": "updatedAt",
                "value": "2026-07-05T08:00:00.000Z"
              }
            ],
            "children": []
          }
        ]
      },
      {
        "tableId": "ShiftAssignment",
        "rows": [
          {
            "key": "sa_01",
            "columns": [
              {
                "name": "shift_assignment_id",
                "value": "sa_01"
              },
              {
                "name": "operator_id",
                "value": {
                  "ref": "local:Operator.op_ana"
                }
              },
              {
                "name": "shift_id",
                "value": {
                  "ref": "mdm:Shift.shift_morning"
                }
              },
              {
                "name": "created_at",
                "value": "2026-07-01T08:00:00.000Z"
              }
            ],
            "details": [
              {
                "name": "updatedAt",
                "value": "2026-07-01T08:00:00.000Z"
              }
            ],
            "children": []
          },
          {
            "key": "sa_02",
            "columns": [
              {
                "name": "shift_assignment_id",
                "value": "sa_02"
              },
              {
                "name": "operator_id",
                "value": {
                  "ref": "local:Operator.op_carlos"
                }
              },
              {
                "name": "shift_id",
                "value": {
                  "ref": "mdm:Shift.shift_afternoon"
                }
              },
              {
                "name": "created_at",
                "value": "2026-07-01T08:00:00.000Z"
              }
            ],
            "details": [
              {
                "name": "updatedAt",
                "value": "2026-07-01T08:00:00.000Z"
              }
            ],
            "children": []
          },
          {
            "key": "sa_03",
            "columns": [
              {
                "name": "shift_assignment_id",
                "value": "sa_03"
              },
              {
                "name": "operator_id",
                "value": {
                  "ref": "local:Operator.op_marina"
                }
              },
              {
                "name": "shift_id",
                "value": {
                  "ref": "mdm:Shift.shift_fullday"
                }
              },
              {
                "name": "created_at",
                "value": "2026-07-01T08:00:00.000Z"
              }
            ],
            "details": [
              {
                "name": "updatedAt",
                "value": "2026-07-01T08:00:00.000Z"
              }
            ],
            "children": []
          },
          {
            "key": "sa_04",
            "columns": [
              {
                "name": "shift_assignment_id",
                "value": "sa_04"
              },
              {
                "name": "operator_id",
                "value": {
                  "ref": "local:Operator.op_ana"
                }
              },
              {
                "name": "shift_id",
                "value": {
                  "ref": "mdm:Shift.shift_fullday"
                }
              },
              {
                "name": "created_at",
                "value": "2026-07-01T08:05:00.000Z"
              }
            ],
            "details": [
              {
                "name": "updatedAt",
                "value": "2026-07-01T08:05:00.000Z"
              }
            ],
            "children": []
          }
        ]
      }
    ],
    "mdmEntities": [
      {
        "entityId": "ProductCategory",
        "rows": [
          {
            "key": "cat_food",
            "fields": [
              {
                "name": "productCategoryId",
                "value": null
              },
              {
                "name": "name",
                "value": "Ração"
              },
              {
                "name": "description",
                "value": "Rações para cães, gatos e outros animais"
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
            "key": "cat_accessories",
            "fields": [
              {
                "name": "productCategoryId",
                "value": null
              },
              {
                "name": "name",
                "value": "Acessórios"
              },
              {
                "name": "description",
                "value": "Coleiras, camas, brinquedos e demais acessórios"
              },
              {
                "name": "active",
                "value": true
              },
              {
                "name": "createdAt",
                "value": "2026-07-01T08:05:00.000Z"
              },
              {
                "name": "updatedAt",
                "value": "2026-07-01T08:05:00.000Z"
              }
            ],
            "relationships": []
          },
          {
            "key": "cat_hygiene",
            "fields": [
              {
                "name": "productCategoryId",
                "value": null
              },
              {
                "name": "name",
                "value": "Higiene e Beleza"
              },
              {
                "name": "description",
                "value": "Shampoos, condicionadores e produtos de higiene"
              },
              {
                "name": "active",
                "value": true
              },
              {
                "name": "createdAt",
                "value": "2026-07-01T08:10:00.000Z"
              },
              {
                "name": "updatedAt",
                "value": "2026-07-01T08:10:00.000Z"
              }
            ],
            "relationships": []
          },
          {
            "key": "cat_medicine",
            "fields": [
              {
                "name": "productCategoryId",
                "value": null
              },
              {
                "name": "name",
                "value": "Medicamentos"
              },
              {
                "name": "description",
                "value": "Medicamentos e suplementos veterinários"
              },
              {
                "name": "active",
                "value": true
              },
              {
                "name": "createdAt",
                "value": "2026-07-01T08:15:00.000Z"
              },
              {
                "name": "updatedAt",
                "value": "2026-07-02T09:00:00.000Z"
              }
            ],
            "relationships": []
          }
        ]
      },
      {
        "entityId": "Shift",
        "rows": [
          {
            "key": "shift_morning",
            "fields": [
              {
                "name": "shiftId",
                "value": null
              },
              {
                "name": "name",
                "value": "Manhã"
              },
              {
                "name": "startTime",
                "value": "09:00"
              },
              {
                "name": "endTime",
                "value": "13:00"
              },
              {
                "name": "monday",
                "value": true
              },
              {
                "name": "tuesday",
                "value": true
              },
              {
                "name": "wednesday",
                "value": true
              },
              {
                "name": "thursday",
                "value": true
              },
              {
                "name": "friday",
                "value": true
              },
              {
                "name": "saturday",
                "value": true
              },
              {
                "name": "sunday",
                "value": false
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
            "key": "shift_afternoon",
            "fields": [
              {
                "name": "shiftId",
                "value": null
              },
              {
                "name": "name",
                "value": "Tarde"
              },
              {
                "name": "startTime",
                "value": "13:00"
              },
              {
                "name": "endTime",
                "value": "18:00"
              },
              {
                "name": "monday",
                "value": true
              },
              {
                "name": "tuesday",
                "value": true
              },
              {
                "name": "wednesday",
                "value": true
              },
              {
                "name": "thursday",
                "value": true
              },
              {
                "name": "friday",
                "value": true
              },
              {
                "name": "saturday",
                "value": true
              },
              {
                "name": "sunday",
                "value": false
              },
              {
                "name": "active",
                "value": true
              },
              {
                "name": "createdAt",
                "value": "2026-07-01T09:05:00.000Z"
              },
              {
                "name": "updatedAt",
                "value": "2026-07-01T09:05:00.000Z"
              }
            ],
            "relationships": []
          },
          {
            "key": "shift_fullday",
            "fields": [
              {
                "name": "shiftId",
                "value": null
              },
              {
                "name": "name",
                "value": "Dia Inteiro"
              },
              {
                "name": "startTime",
                "value": "09:00"
              },
              {
                "name": "endTime",
                "value": "18:00"
              },
              {
                "name": "monday",
                "value": true
              },
              {
                "name": "tuesday",
                "value": true
              },
              {
                "name": "wednesday",
                "value": true
              },
              {
                "name": "thursday",
                "value": true
              },
              {
                "name": "friday",
                "value": true
              },
              {
                "name": "saturday",
                "value": true
              },
              {
                "name": "sunday",
                "value": false
              },
              {
                "name": "active",
                "value": true
              },
              {
                "name": "createdAt",
                "value": "2026-07-01T09:10:00.000Z"
              },
              {
                "name": "updatedAt",
                "value": "2026-07-01T09:10:00.000Z"
              }
            ],
            "relationships": []
          },
          {
            "key": "shift_saturday_extra",
            "fields": [
              {
                "name": "shiftId",
                "value": null
              },
              {
                "name": "name",
                "value": "Sábado Extra"
              },
              {
                "name": "startTime",
                "value": "09:00"
              },
              {
                "name": "endTime",
                "value": "15:00"
              },
              {
                "name": "monday",
                "value": false
              },
              {
                "name": "tuesday",
                "value": false
              },
              {
                "name": "wednesday",
                "value": false
              },
              {
                "name": "thursday",
                "value": false
              },
              {
                "name": "friday",
                "value": false
              },
              {
                "name": "saturday",
                "value": true
              },
              {
                "name": "sunday",
                "value": false
              },
              {
                "name": "active",
                "value": true
              },
              {
                "name": "createdAt",
                "value": "2026-07-02T10:00:00.000Z"
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

import type { TableSeedRows } from '/_102034_/l1/server/layer_1_external/persistence/contracts.js';

export const adoptablePetSeeds: TableSeedRows = {
  "seedFor": "petShopAdoptablePet",
  "rows": [
    {
      "adoptable_pet_id": "626d6d3d-616d-4baa-806d-6a175f6d6884",
      "status": "available",
      "created_at": "2026-07-01T10:00:00.000Z",
      "details": {
        "name": "Rex",
        "age": 3,
        "description": "Cão macho, porte médio, muito brincalhão e sociável. Vacinado e castrado.",
        "photoUrl": "platform://media/petshop/pets/rex.jpg",
        "updatedAt": "2026-07-01T10:00:00.000Z"
      }
    },
    {
      "adoptable_pet_id": "77c8603f-76c8-4eac-89c8-636578c861d2",
      "status": "available",
      "created_at": "2026-07-02T11:30:00.000Z",
      "details": {
        "name": "Mia",
        "age": 1,
        "description": "Gata fêmea, pelagem cinza, carinhosa e tranquila. Primeira vacina em dia.",
        "photoUrl": "platform://media/petshop/pets/mia.jpg",
        "updatedAt": "2026-07-02T11:30:00.000Z"
      }
    },
    {
      "adoptable_pet_id": "6e658605-6d65-4472-8c65-82df6b65814c",
      "status": "unavailable",
      "created_at": "2026-07-03T09:00:00.000Z",
      "details": {
        "name": "Bob",
        "age": 5,
        "description": "Cão macho, porte grande, dócil com crianças. Em processo de adoção.",
        "photoUrl": "platform://media/petshop/pets/bob.jpg",
        "updatedAt": "2026-07-04T14:00:00.000Z"
      }
    }
  ]
};

export const adoptionInterestSeeds: TableSeedRows = {
  "seedFor": "petShopAdoptionInterest",
  "rows": [
    {
      "adoption_interest_id": "63b97871-62b9-46de-81b9-754b60b973b8",
      "adoptable_pet_id": "6e658605-6d65-4472-8c65-82df6b65814c",
      "status": "registered",
      "operator_id": "ffd9fb4b-fed9-49b8-81d9-fe7100d9fcde",
      "created_at": "2026-07-02T10:00:00.000Z",
      "details": {
        "customerName": "João Pereira",
        "customerEmail": "joao.pereira@email.com",
        "customerPhone": "+55 11 98765-4321",
        "verificationNotes": null,
        "completedAt": null,
        "cancelledAt": null,
        "cancellationReason": null,
        "updatedAt": "2026-07-02T10:00:00.000Z"
      }
    },
    {
      "adoption_interest_id": "c250ac3c-c350-4dcf-8450-af62c550b0f5",
      "adoptable_pet_id": "77c8603f-76c8-4eac-89c8-636578c861d2",
      "status": "completed",
      "operator_id": "78399f27-7739-4d94-8a39-a24d7939a0ba",
      "created_at": "2026-07-01T09:30:00.000Z",
      "details": {
        "customerName": "Maria Santos",
        "customerEmail": "maria.santos@email.com",
        "customerPhone": "+55 11 91234-5678",
        "verificationNotes": "Documentação verificada presencialmente na loja. RG e comprovante de residência conferidos. Adoção finalizada.",
        "completedAt": "2026-07-03T14:00:00.000Z",
        "cancelledAt": null,
        "cancellationReason": null,
        "updatedAt": "2026-07-03T14:00:00.000Z"
      }
    },
    {
      "adoption_interest_id": "ba07eebb-b907-4d28-8c07-f1e1bb07f04e",
      "adoptable_pet_id": "626d6d3d-616d-4baa-806d-6a175f6d6884",
      "status": "cancelled",
      "operator_id": "1de09b1d-1ce0-498a-8be0-97f71ae09664",
      "created_at": "2026-07-02T11:00:00.000Z",
      "details": {
        "customerName": "Pedro Costa",
        "customerEmail": "pedro.costa@email.com",
        "customerPhone": "+55 11 99876-5432",
        "verificationNotes": null,
        "completedAt": null,
        "cancelledAt": "2026-07-04T09:00:00.000Z",
        "cancellationReason": "Cliente desistiu da adoção por incompatibilidade de moradia para o porte do pet.",
        "updatedAt": "2026-07-04T09:00:00.000Z"
      }
    }
  ]
};

export const operatorSeeds: TableSeedRows = {
  "seedFor": "petShopOperator",
  "rows": [
    {
      "operator_id": "ffd9fb4b-fed9-49b8-81d9-fe7100d9fcde",
      "created_at": "2026-07-01T08:00:00.000Z",
      "details": {
        "name": "Ana Silva",
        "email": "ana.silva@petshop.com",
        "phone": "+55 11 98888-1001",
        "active": true,
        "updatedAt": "2026-07-01T08:00:00.000Z"
      }
    },
    {
      "operator_id": "78399f27-7739-4d94-8a39-a24d7939a0ba",
      "created_at": "2026-07-01T08:00:00.000Z",
      "details": {
        "name": "Carlos Souza",
        "email": "carlos.souza@petshop.com",
        "phone": "+55 11 98888-1002",
        "active": true,
        "updatedAt": "2026-07-01T08:00:00.000Z"
      }
    },
    {
      "operator_id": "1de09b1d-1ce0-498a-8be0-97f71ae09664",
      "created_at": "2026-07-01T08:00:00.000Z",
      "details": {
        "name": "Marina Lima",
        "email": "marina.lima@petshop.com",
        "phone": "+55 11 98888-1003",
        "active": false,
        "updatedAt": "2026-07-05T10:00:00.000Z"
      }
    }
  ]
};

export const orderSeeds: TableSeedRows = {
  "seedFor": "petShopOrder",
  "rows": [
    {
      "order_id": "9aec8f76-9bec-4109-88ec-8c5099ec8de3",
      "status": "registered",
      "created_at": "2026-07-05T10:00:00.000Z",
      "details": {
        "customerName": "João Pereira",
        "customerPhone": "+55 11 97777-2001",
        "updatedAt": "2026-07-05T10:00:00.000Z",
        "completedAt": null,
        "cancelledAt": null,
        "cancellationReason": null
      }
    },
    {
      "order_id": "77c7eb27-76c7-4994-89c7-ee4d78c7ecba",
      "status": "completed",
      "created_at": "2026-07-03T11:00:00.000Z",
      "details": {
        "customerName": "Maria Santos",
        "customerPhone": "+55 11 97777-2002",
        "updatedAt": "2026-07-03T15:30:00.000Z",
        "completedAt": "2026-07-03T15:30:00.000Z",
        "cancelledAt": null,
        "cancellationReason": null
      }
    },
    {
      "order_id": "7fe99938-80e9-4acb-81e9-9c5e82e99df1",
      "status": "cancelled",
      "created_at": "2026-07-04T09:00:00.000Z",
      "details": {
        "customerName": "Pedro Costa",
        "customerPhone": "+55 11 97777-2003",
        "updatedAt": "2026-07-04T16:00:00.000Z",
        "completedAt": null,
        "cancelledAt": "2026-07-04T16:00:00.000Z",
        "cancellationReason": "Cliente desistiu da retirada."
      }
    }
  ]
};

export const productSeeds: TableSeedRows = {
  "seedFor": "petShopProduct",
  "rows": [
    {
      "product_id": "ac38fd8a-ad38-4f1d-8a38-fa64ab38fbf7",
      "product_category_id": "508c25de-518c-4771-8e8c-22b84f8c244b",
      "status": "active",
      "created_at": "2026-07-01T09:00:00.000Z",
      "details": {
        "name": "Ração Premium Cães Adulto 15kg",
        "description": "Ração super premium para cães adultos, sabor frango e cereais.",
        "price": 89.9,
        "imageUrl": "platform://media/petshop/products/racao-premium.jpg",
        "featured": true,
        "updatedAt": "2026-07-01T09:00:00.000Z"
      }
    },
    {
      "product_id": "eddb8055-ecdb-4ec2-8bdb-7d2feadb7b9c",
      "product_category_id": "4b1f3828-4c1f-49bb-8d1f-3b4e4e1f3ce1",
      "status": "active",
      "created_at": "2026-07-01T09:30:00.000Z",
      "details": {
        "name": "Coleira Anti-Pulgas Média",
        "description": "Coleira antipulgas e carrapatos, proteção por 8 meses, tamanho médio.",
        "price": 45,
        "imageUrl": "platform://media/petshop/products/coleira-antipulgas.jpg",
        "featured": false,
        "updatedAt": "2026-07-01T09:30:00.000Z"
      }
    },
    {
      "product_id": "32ff356d-31ff-43da-80ff-32472fff30b4",
      "product_category_id": "fd5408bd-fc54-472a-8b54-0597fa540404",
      "status": "active",
      "created_at": "2026-07-02T10:00:00.000Z",
      "details": {
        "name": "Shampoo Felino Hipoalergênico 300ml",
        "description": "Shampoo hipoalergênico para gatos, pH neutro, sem perfume.",
        "price": 25.5,
        "imageUrl": "platform://media/petshop/products/shampoo-felino.jpg",
        "featured": false,
        "updatedAt": "2026-07-02T10:00:00.000Z"
      }
    },
    {
      "product_id": "708920b1-6f89-4f1e-8e89-1d8b6d891bf8",
      "product_category_id": "76e1d9da-77e1-4b6d-84e1-d6b475e1d847",
      "status": "inactive",
      "created_at": "2026-07-02T10:30:00.000Z",
      "details": {
        "name": "Antiparasitório Oral Cães 10kg",
        "description": "Comprimido antiparasitário de amplo espectro para cães até 10kg.",
        "price": 38,
        "imageUrl": "platform://media/petshop/products/antiparasitario.jpg",
        "featured": false,
        "updatedAt": "2026-07-05T12:00:00.000Z"
      }
    }
  ]
};

export const serviceSeeds: TableSeedRows = {
  "seedFor": "petShopService",
  "rows": [
    {
      "service_id": "45f7abf7-44f7-4a64-87f7-af1d46f7ad8a",
      "status": "active",
      "created_at": "2026-07-01T09:00:00.000Z",
      "details": {
        "name": "Banho e Tosa",
        "description": "Banho completo com tosa higiênica para cães e gatos de pequeno e médio porte.",
        "estimatedDurationMinutes": 60,
        "price": 70,
        "deactivatedAt": null,
        "updatedAt": "2026-07-01T09:00:00.000Z"
      }
    },
    {
      "service_id": "83b59cea-84b5-4e7d-81b5-99c482b59b57",
      "status": "active",
      "created_at": "2026-07-01T09:30:00.000Z",
      "details": {
        "name": "Consulta Veterinária",
        "description": "Consulta clínica geral com veterinário, incluindo avaliação física e orientações.",
        "estimatedDurationMinutes": 30,
        "price": 120,
        "deactivatedAt": null,
        "updatedAt": "2026-07-01T09:30:00.000Z"
      }
    },
    {
      "service_id": "7ed9b5be-7fd9-4751-8cd9-b2987dd9b42b",
      "status": "inactive",
      "created_at": "2026-07-02T10:00:00.000Z",
      "details": {
        "name": "Vacinação Domiciliar",
        "description": "Aplicação de vacinas no domicílio do cliente, mediante agendamento prévio.",
        "estimatedDurationMinutes": 20,
        "price": 50,
        "deactivatedAt": "2026-07-05T14:00:00.000Z",
        "updatedAt": "2026-07-05T14:00:00.000Z"
      }
    }
  ]
};

export const serviceBookingSeeds: TableSeedRows = {
  "seedFor": "petShopServiceBooking",
  "rows": [
    {
      "service_booking_id": "14398260-1539-43f3-8639-858617398719",
      "service_id": "7ed9b5be-7fd9-4751-8cd9-b2987dd9b42b",
      "operator_id": "ffd9fb4b-fed9-49b8-81d9-fe7100d9fcde",
      "shift_id": "e9c0f731-e8c0-459e-87c0-f40be6c0f278",
      "status": "confirmed",
      "created_at": "2026-07-01T09:00:00.000Z",
      "details": {
        "customerName": "Lucia Almeida",
        "customerPhone": "+55 11 98888-1111",
        "bookingDate": "2026-07-03T00:00:00.000Z",
        "bookingTime": "10:00",
        "notes": "Serviço desativado posteriormente; agendamento permanece válido conforme política. Pagamento presencial na loja.",
        "completedAt": null,
        "cancelledAt": null,
        "cancelReason": null,
        "updatedAt": "2026-07-01T09:00:00.000Z"
      }
    },
    {
      "service_booking_id": "b48c2985-b38c-47f2-828c-265fb18c24cc",
      "service_id": "83b59cea-84b5-4e7d-81b5-99c482b59b57",
      "operator_id": "78399f27-7739-4d94-8a39-a24d7939a0ba",
      "shift_id": "1b996fb9-1a99-4e26-8999-6c9318996b00",
      "status": "inProgress",
      "created_at": "2026-07-02T13:00:00.000Z",
      "details": {
        "customerName": "Ricardo Ferreira",
        "customerPhone": "+55 11 97777-2222",
        "bookingDate": "2026-07-04T00:00:00.000Z",
        "bookingTime": "14:30",
        "notes": "Consulta em andamento. Pagamento presencial na loja.",
        "completedAt": null,
        "cancelledAt": null,
        "cancelReason": null,
        "updatedAt": "2026-07-04T14:00:00.000Z"
      }
    },
    {
      "service_booking_id": "cdfeacfe-cefe-4e91-8bfe-a9d8ccfeab6b",
      "service_id": "45f7abf7-44f7-4a64-87f7-af1d46f7ad8a",
      "operator_id": "ffd9fb4b-fed9-49b8-81d9-fe7100d9fcde",
      "shift_id": "e9c0f731-e8c0-459e-87c0-f40be6c0f278",
      "status": "completed",
      "created_at": "2026-07-01T08:30:00.000Z",
      "details": {
        "customerName": "Fernanda Dias",
        "customerPhone": "+55 11 96666-3333",
        "bookingDate": "2026-07-02T00:00:00.000Z",
        "bookingTime": "09:30",
        "notes": "Banho e tosa concluídos sem intercorrências. Pagamento realizado presencialmente.",
        "completedAt": "2026-07-02T11:30:00.000Z",
        "cancelledAt": null,
        "cancelReason": null,
        "updatedAt": "2026-07-02T11:30:00.000Z"
      }
    },
    {
      "service_booking_id": "4f6746d3-4e67-4540-8167-49f950674866",
      "service_id": "45f7abf7-44f7-4a64-87f7-af1d46f7ad8a",
      "operator_id": "1de09b1d-1ce0-498a-8be0-97f71ae09664",
      "shift_id": "7e240f80-7f24-4113-8024-12a681241439",
      "status": "cancelled",
      "created_at": "2026-07-03T10:00:00.000Z",
      "details": {
        "customerName": "Bruno Carvalho",
        "customerPhone": "+55 11 95555-4444",
        "bookingDate": "2026-07-05T00:00:00.000Z",
        "bookingTime": "10:00",
        "notes": null,
        "completedAt": null,
        "cancelledAt": "2026-07-05T08:00:00.000Z",
        "cancelReason": "Cliente cancelou por conflito de agenda pessoal.",
        "updatedAt": "2026-07-05T08:00:00.000Z"
      }
    }
  ]
};

export const shiftAssignmentSeeds: TableSeedRows = {
  "seedFor": "petShopShiftAssignment",
  "rows": [
    {
      "shift_assignment_id": "1ee48732-1fe4-48c5-8ce4-840c1de4859f",
      "operator_id": "ffd9fb4b-fed9-49b8-81d9-fe7100d9fcde",
      "shift_id": "e9c0f731-e8c0-459e-87c0-f40be6c0f278",
      "created_at": "2026-07-01T08:00:00.000Z",
      "details": {
        "updatedAt": "2026-07-01T08:00:00.000Z"
      }
    },
    {
      "shift_assignment_id": "5bc07a03-5ac0-4870-8dc0-7d295cc07b96",
      "operator_id": "78399f27-7739-4d94-8a39-a24d7939a0ba",
      "shift_id": "1b996fb9-1a99-4e26-8999-6c9318996b00",
      "created_at": "2026-07-01T08:00:00.000Z",
      "details": {
        "updatedAt": "2026-07-01T08:00:00.000Z"
      }
    },
    {
      "shift_assignment_id": "840969e4-8509-4b77-8609-6d0a87096e9d",
      "operator_id": "1de09b1d-1ce0-498a-8be0-97f71ae09664",
      "shift_id": "7e240f80-7f24-4113-8024-12a681241439",
      "created_at": "2026-07-01T08:00:00.000Z",
      "details": {
        "updatedAt": "2026-07-01T08:00:00.000Z"
      }
    },
    {
      "shift_assignment_id": "c0e55cb5-bfe5-4b22-8ee5-598fbde557fc",
      "operator_id": "ffd9fb4b-fed9-49b8-81d9-fe7100d9fcde",
      "shift_id": "7e240f80-7f24-4113-8024-12a681241439",
      "created_at": "2026-07-01T08:05:00.000Z",
      "details": {
        "updatedAt": "2026-07-01T08:05:00.000Z"
      }
    }
  ]
};

export const mdmEntityIndexSeeds: TableSeedRows = {
  "seedFor": "mdmEntityIndex",
  "rows": [
    {
      "mdmId": "508c25de-518c-4771-8e8c-22b84f8c244b",
      "subtype": "Product",
      "name": "Ração",
      "status": "Active",
      "docType": null,
      "docId": null,
      "countryCode": "US",
      "tags": [
        "petShop",
        "ProductCategory"
      ],
      "searchVector": "ração productcategory petshop",
      "mergedInto": null,
      "dynamoPk": "508c25de-518c-4771-8e8c-22b84f8c244b",
      "createdAt": "2026-07-01T08:00:00.000Z",
      "updatedAt": "2026-07-01T08:00:00.000Z"
    },
    {
      "mdmId": "4b1f3828-4c1f-49bb-8d1f-3b4e4e1f3ce1",
      "subtype": "Product",
      "name": "Acessórios",
      "status": "Active",
      "docType": null,
      "docId": null,
      "countryCode": "US",
      "tags": [
        "petShop",
        "ProductCategory"
      ],
      "searchVector": "acessórios productcategory petshop",
      "mergedInto": null,
      "dynamoPk": "4b1f3828-4c1f-49bb-8d1f-3b4e4e1f3ce1",
      "createdAt": "2026-07-01T08:05:00.000Z",
      "updatedAt": "2026-07-01T08:05:00.000Z"
    },
    {
      "mdmId": "fd5408bd-fc54-472a-8b54-0597fa540404",
      "subtype": "Product",
      "name": "Higiene e Beleza",
      "status": "Active",
      "docType": null,
      "docId": null,
      "countryCode": "US",
      "tags": [
        "petShop",
        "ProductCategory"
      ],
      "searchVector": "higiene e beleza productcategory petshop",
      "mergedInto": null,
      "dynamoPk": "fd5408bd-fc54-472a-8b54-0597fa540404",
      "createdAt": "2026-07-01T08:10:00.000Z",
      "updatedAt": "2026-07-01T08:10:00.000Z"
    },
    {
      "mdmId": "76e1d9da-77e1-4b6d-84e1-d6b475e1d847",
      "subtype": "Product",
      "name": "Medicamentos",
      "status": "Active",
      "docType": null,
      "docId": null,
      "countryCode": "US",
      "tags": [
        "petShop",
        "ProductCategory"
      ],
      "searchVector": "medicamentos productcategory petshop",
      "mergedInto": null,
      "dynamoPk": "76e1d9da-77e1-4b6d-84e1-d6b475e1d847",
      "createdAt": "2026-07-01T08:15:00.000Z",
      "updatedAt": "2026-07-02T09:00:00.000Z"
    },
    {
      "mdmId": "e9c0f731-e8c0-459e-87c0-f40be6c0f278",
      "subtype": "Product",
      "name": "Manhã",
      "status": "Active",
      "docType": null,
      "docId": null,
      "countryCode": "US",
      "tags": [
        "petShop",
        "Shift"
      ],
      "searchVector": "manhã shift petshop",
      "mergedInto": null,
      "dynamoPk": "e9c0f731-e8c0-459e-87c0-f40be6c0f278",
      "createdAt": "2026-07-01T09:00:00.000Z",
      "updatedAt": "2026-07-01T09:00:00.000Z"
    },
    {
      "mdmId": "1b996fb9-1a99-4e26-8999-6c9318996b00",
      "subtype": "Product",
      "name": "Tarde",
      "status": "Active",
      "docType": null,
      "docId": null,
      "countryCode": "US",
      "tags": [
        "petShop",
        "Shift"
      ],
      "searchVector": "tarde shift petshop",
      "mergedInto": null,
      "dynamoPk": "1b996fb9-1a99-4e26-8999-6c9318996b00",
      "createdAt": "2026-07-01T09:05:00.000Z",
      "updatedAt": "2026-07-01T09:05:00.000Z"
    },
    {
      "mdmId": "7e240f80-7f24-4113-8024-12a681241439",
      "subtype": "Product",
      "name": "Dia Inteiro",
      "status": "Active",
      "docType": null,
      "docId": null,
      "countryCode": "US",
      "tags": [
        "petShop",
        "Shift"
      ],
      "searchVector": "dia inteiro shift petshop",
      "mergedInto": null,
      "dynamoPk": "7e240f80-7f24-4113-8024-12a681241439",
      "createdAt": "2026-07-01T09:10:00.000Z",
      "updatedAt": "2026-07-01T09:10:00.000Z"
    },
    {
      "mdmId": "3f623d99-3e62-4c06-8d62-3a733c6238e0",
      "subtype": "Product",
      "name": "Sábado Extra",
      "status": "Active",
      "docType": null,
      "docId": null,
      "countryCode": "US",
      "tags": [
        "petShop",
        "Shift"
      ],
      "searchVector": "sábado extra shift petshop",
      "mergedInto": null,
      "dynamoPk": "3f623d99-3e62-4c06-8d62-3a733c6238e0",
      "createdAt": "2026-07-02T10:00:00.000Z",
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
      "mdmId": "2e5fc235-2d5f-40a2-8c5f-bf0f2b5fbd7c",
      "subtype": "Person",
      "name": "Operador 1",
      "status": "Active",
      "docType": null,
      "docId": null,
      "countryCode": "US",
      "tags": [
        "petShop",
        "actor",
        "operador"
      ],
      "searchVector": "operador 1 operador petshop",
      "mergedInto": null,
      "dynamoPk": "2e5fc235-2d5f-40a2-8c5f-bf0f2b5fbd7c",
      "createdAt": "2026-07-01T00:00:00.000Z",
      "updatedAt": "2026-07-01T00:00:00.000Z"
    },
    {
      "mdmId": "8ccfe690-8dcf-4823-8ecf-e9b68fcfeb49",
      "subtype": "Person",
      "name": "Operador 2",
      "status": "Active",
      "docType": null,
      "docId": null,
      "countryCode": "US",
      "tags": [
        "petShop",
        "actor",
        "operador"
      ],
      "searchVector": "operador 2 operador petshop",
      "mergedInto": null,
      "dynamoPk": "8ccfe690-8dcf-4823-8ecf-e9b68fcfeb49",
      "createdAt": "2026-07-01T00:00:00.000Z",
      "updatedAt": "2026-07-01T00:00:00.000Z"
    },
    {
      "mdmId": "84ae387f-83ae-46ec-86ae-3ba585ae3a12",
      "subtype": "Person",
      "name": "Operador 3",
      "status": "Active",
      "docType": null,
      "docId": null,
      "countryCode": "US",
      "tags": [
        "petShop",
        "actor",
        "operador"
      ],
      "searchVector": "operador 3 operador petshop",
      "mergedInto": null,
      "dynamoPk": "84ae387f-83ae-46ec-86ae-3ba585ae3a12",
      "createdAt": "2026-07-01T00:00:00.000Z",
      "updatedAt": "2026-07-01T00:00:00.000Z"
    },
    {
      "mdmId": "431617d2-4416-4965-8116-14ac4216163f",
      "subtype": "Person",
      "name": "Administrador 1",
      "status": "Active",
      "docType": null,
      "docId": null,
      "countryCode": "US",
      "tags": [
        "petShop",
        "actor",
        "admin"
      ],
      "searchVector": "administrador 1 admin petshop",
      "mergedInto": null,
      "dynamoPk": "431617d2-4416-4965-8116-14ac4216163f",
      "createdAt": "2026-07-01T00:00:00.000Z",
      "updatedAt": "2026-07-01T00:00:00.000Z"
    },
    {
      "mdmId": "7ff20aa3-7ef2-4910-81f2-0dc980f20c36",
      "subtype": "Person",
      "name": "Administrador 2",
      "status": "Active",
      "docType": null,
      "docId": null,
      "countryCode": "US",
      "tags": [
        "petShop",
        "actor",
        "admin"
      ],
      "searchVector": "administrador 2 admin petshop",
      "mergedInto": null,
      "dynamoPk": "7ff20aa3-7ef2-4910-81f2-0dc980f20c36",
      "createdAt": "2026-07-01T00:00:00.000Z",
      "updatedAt": "2026-07-01T00:00:00.000Z"
    },
    {
      "mdmId": "a9782f04-aa78-4097-8b78-322aac7833bd",
      "subtype": "Person",
      "name": "Administrador 3",
      "status": "Active",
      "docType": null,
      "docId": null,
      "countryCode": "US",
      "tags": [
        "petShop",
        "actor",
        "admin"
      ],
      "searchVector": "administrador 3 admin petshop",
      "mergedInto": null,
      "dynamoPk": "a9782f04-aa78-4097-8b78-322aac7833bd",
      "createdAt": "2026-07-01T00:00:00.000Z",
      "updatedAt": "2026-07-01T00:00:00.000Z"
    }
  ]
};

export const mdmDocumentSeeds: TableSeedRows = {
  "seedFor": "mdmDocumentCache",
  "rows": [
    {
      "mdmId": "508c25de-518c-4771-8e8c-22b84f8c244b",
      "version": 1,
      "details": {
        "mdmId": "508c25de-518c-4771-8e8c-22b84f8c244b",
        "subtype": "Product",
        "name": "Ração",
        "status": "Active",
        "docType": null,
        "docId": null,
        "countryCode": "US",
        "tags": [
          "petShop",
          "ProductCategory"
        ],
        "aliases": [],
        "contacts": [],
        "relationshipRefs": {},
        "addresses": [],
        "mergedInto": null,
        "createdAt": "2026-07-01T08:00:00.000Z",
        "updatedAt": "2026-07-01T08:00:00.000Z",
        "petShop": {
          "productCategoryId": "508c25de-518c-4771-8e8c-22b84f8c244b",
          "name": "Ração",
          "description": "Rações para cães, gatos e outros animais",
          "active": true,
          "createdAt": "2026-07-01T08:00:00.000Z",
          "updatedAt": "2026-07-01T08:00:00.000Z"
        }
      }
    },
    {
      "mdmId": "4b1f3828-4c1f-49bb-8d1f-3b4e4e1f3ce1",
      "version": 1,
      "details": {
        "mdmId": "4b1f3828-4c1f-49bb-8d1f-3b4e4e1f3ce1",
        "subtype": "Product",
        "name": "Acessórios",
        "status": "Active",
        "docType": null,
        "docId": null,
        "countryCode": "US",
        "tags": [
          "petShop",
          "ProductCategory"
        ],
        "aliases": [],
        "contacts": [],
        "relationshipRefs": {},
        "addresses": [],
        "mergedInto": null,
        "createdAt": "2026-07-01T08:05:00.000Z",
        "updatedAt": "2026-07-01T08:05:00.000Z",
        "petShop": {
          "productCategoryId": "4b1f3828-4c1f-49bb-8d1f-3b4e4e1f3ce1",
          "name": "Acessórios",
          "description": "Coleiras, camas, brinquedos e demais acessórios",
          "active": true,
          "createdAt": "2026-07-01T08:05:00.000Z",
          "updatedAt": "2026-07-01T08:05:00.000Z"
        }
      }
    },
    {
      "mdmId": "fd5408bd-fc54-472a-8b54-0597fa540404",
      "version": 1,
      "details": {
        "mdmId": "fd5408bd-fc54-472a-8b54-0597fa540404",
        "subtype": "Product",
        "name": "Higiene e Beleza",
        "status": "Active",
        "docType": null,
        "docId": null,
        "countryCode": "US",
        "tags": [
          "petShop",
          "ProductCategory"
        ],
        "aliases": [],
        "contacts": [],
        "relationshipRefs": {},
        "addresses": [],
        "mergedInto": null,
        "createdAt": "2026-07-01T08:10:00.000Z",
        "updatedAt": "2026-07-01T08:10:00.000Z",
        "petShop": {
          "productCategoryId": "fd5408bd-fc54-472a-8b54-0597fa540404",
          "name": "Higiene e Beleza",
          "description": "Shampoos, condicionadores e produtos de higiene",
          "active": true,
          "createdAt": "2026-07-01T08:10:00.000Z",
          "updatedAt": "2026-07-01T08:10:00.000Z"
        }
      }
    },
    {
      "mdmId": "76e1d9da-77e1-4b6d-84e1-d6b475e1d847",
      "version": 1,
      "details": {
        "mdmId": "76e1d9da-77e1-4b6d-84e1-d6b475e1d847",
        "subtype": "Product",
        "name": "Medicamentos",
        "status": "Active",
        "docType": null,
        "docId": null,
        "countryCode": "US",
        "tags": [
          "petShop",
          "ProductCategory"
        ],
        "aliases": [],
        "contacts": [],
        "relationshipRefs": {},
        "addresses": [],
        "mergedInto": null,
        "createdAt": "2026-07-01T08:15:00.000Z",
        "updatedAt": "2026-07-02T09:00:00.000Z",
        "petShop": {
          "productCategoryId": "76e1d9da-77e1-4b6d-84e1-d6b475e1d847",
          "name": "Medicamentos",
          "description": "Medicamentos e suplementos veterinários",
          "active": true,
          "createdAt": "2026-07-01T08:15:00.000Z",
          "updatedAt": "2026-07-02T09:00:00.000Z"
        }
      }
    },
    {
      "mdmId": "e9c0f731-e8c0-459e-87c0-f40be6c0f278",
      "version": 1,
      "details": {
        "mdmId": "e9c0f731-e8c0-459e-87c0-f40be6c0f278",
        "subtype": "Product",
        "name": "Manhã",
        "status": "Active",
        "docType": null,
        "docId": null,
        "countryCode": "US",
        "tags": [
          "petShop",
          "Shift"
        ],
        "aliases": [],
        "contacts": [],
        "relationshipRefs": {},
        "addresses": [],
        "mergedInto": null,
        "createdAt": "2026-07-01T09:00:00.000Z",
        "updatedAt": "2026-07-01T09:00:00.000Z",
        "petShop": {
          "shiftId": "e9c0f731-e8c0-459e-87c0-f40be6c0f278",
          "name": "Manhã",
          "startTime": "09:00",
          "endTime": "13:00",
          "monday": true,
          "tuesday": true,
          "wednesday": true,
          "thursday": true,
          "friday": true,
          "saturday": true,
          "sunday": false,
          "active": true,
          "createdAt": "2026-07-01T09:00:00.000Z",
          "updatedAt": "2026-07-01T09:00:00.000Z"
        }
      }
    },
    {
      "mdmId": "1b996fb9-1a99-4e26-8999-6c9318996b00",
      "version": 1,
      "details": {
        "mdmId": "1b996fb9-1a99-4e26-8999-6c9318996b00",
        "subtype": "Product",
        "name": "Tarde",
        "status": "Active",
        "docType": null,
        "docId": null,
        "countryCode": "US",
        "tags": [
          "petShop",
          "Shift"
        ],
        "aliases": [],
        "contacts": [],
        "relationshipRefs": {},
        "addresses": [],
        "mergedInto": null,
        "createdAt": "2026-07-01T09:05:00.000Z",
        "updatedAt": "2026-07-01T09:05:00.000Z",
        "petShop": {
          "shiftId": "1b996fb9-1a99-4e26-8999-6c9318996b00",
          "name": "Tarde",
          "startTime": "13:00",
          "endTime": "18:00",
          "monday": true,
          "tuesday": true,
          "wednesday": true,
          "thursday": true,
          "friday": true,
          "saturday": true,
          "sunday": false,
          "active": true,
          "createdAt": "2026-07-01T09:05:00.000Z",
          "updatedAt": "2026-07-01T09:05:00.000Z"
        }
      }
    },
    {
      "mdmId": "7e240f80-7f24-4113-8024-12a681241439",
      "version": 1,
      "details": {
        "mdmId": "7e240f80-7f24-4113-8024-12a681241439",
        "subtype": "Product",
        "name": "Dia Inteiro",
        "status": "Active",
        "docType": null,
        "docId": null,
        "countryCode": "US",
        "tags": [
          "petShop",
          "Shift"
        ],
        "aliases": [],
        "contacts": [],
        "relationshipRefs": {},
        "addresses": [],
        "mergedInto": null,
        "createdAt": "2026-07-01T09:10:00.000Z",
        "updatedAt": "2026-07-01T09:10:00.000Z",
        "petShop": {
          "shiftId": "7e240f80-7f24-4113-8024-12a681241439",
          "name": "Dia Inteiro",
          "startTime": "09:00",
          "endTime": "18:00",
          "monday": true,
          "tuesday": true,
          "wednesday": true,
          "thursday": true,
          "friday": true,
          "saturday": true,
          "sunday": false,
          "active": true,
          "createdAt": "2026-07-01T09:10:00.000Z",
          "updatedAt": "2026-07-01T09:10:00.000Z"
        }
      }
    },
    {
      "mdmId": "3f623d99-3e62-4c06-8d62-3a733c6238e0",
      "version": 1,
      "details": {
        "mdmId": "3f623d99-3e62-4c06-8d62-3a733c6238e0",
        "subtype": "Product",
        "name": "Sábado Extra",
        "status": "Active",
        "docType": null,
        "docId": null,
        "countryCode": "US",
        "tags": [
          "petShop",
          "Shift"
        ],
        "aliases": [],
        "contacts": [],
        "relationshipRefs": {},
        "addresses": [],
        "mergedInto": null,
        "createdAt": "2026-07-02T10:00:00.000Z",
        "updatedAt": "2026-07-02T10:00:00.000Z",
        "petShop": {
          "shiftId": "3f623d99-3e62-4c06-8d62-3a733c6238e0",
          "name": "Sábado Extra",
          "startTime": "09:00",
          "endTime": "15:00",
          "monday": false,
          "tuesday": false,
          "wednesday": false,
          "thursday": false,
          "friday": false,
          "saturday": true,
          "sunday": false,
          "active": true,
          "createdAt": "2026-07-02T10:00:00.000Z",
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
      "mdmId": "2e5fc235-2d5f-40a2-8c5f-bf0f2b5fbd7c",
      "version": 1,
      "details": {
        "mdmId": "2e5fc235-2d5f-40a2-8c5f-bf0f2b5fbd7c",
        "subtype": "Person",
        "name": "Operador 1",
        "status": "Active",
        "docType": null,
        "docId": null,
        "countryCode": "US",
        "tags": [
          "petShop",
          "actor",
          "operador"
        ],
        "aliases": [],
        "contacts": [],
        "relationshipRefs": {},
        "addresses": [],
        "mergedInto": null,
        "createdAt": "2026-07-01T00:00:00.000Z",
        "updatedAt": "2026-07-01T00:00:00.000Z",
        "actorId": "operador"
      }
    },
    {
      "mdmId": "8ccfe690-8dcf-4823-8ecf-e9b68fcfeb49",
      "version": 1,
      "details": {
        "mdmId": "8ccfe690-8dcf-4823-8ecf-e9b68fcfeb49",
        "subtype": "Person",
        "name": "Operador 2",
        "status": "Active",
        "docType": null,
        "docId": null,
        "countryCode": "US",
        "tags": [
          "petShop",
          "actor",
          "operador"
        ],
        "aliases": [],
        "contacts": [],
        "relationshipRefs": {},
        "addresses": [],
        "mergedInto": null,
        "createdAt": "2026-07-01T00:00:00.000Z",
        "updatedAt": "2026-07-01T00:00:00.000Z",
        "actorId": "operador"
      }
    },
    {
      "mdmId": "84ae387f-83ae-46ec-86ae-3ba585ae3a12",
      "version": 1,
      "details": {
        "mdmId": "84ae387f-83ae-46ec-86ae-3ba585ae3a12",
        "subtype": "Person",
        "name": "Operador 3",
        "status": "Active",
        "docType": null,
        "docId": null,
        "countryCode": "US",
        "tags": [
          "petShop",
          "actor",
          "operador"
        ],
        "aliases": [],
        "contacts": [],
        "relationshipRefs": {},
        "addresses": [],
        "mergedInto": null,
        "createdAt": "2026-07-01T00:00:00.000Z",
        "updatedAt": "2026-07-01T00:00:00.000Z",
        "actorId": "operador"
      }
    },
    {
      "mdmId": "431617d2-4416-4965-8116-14ac4216163f",
      "version": 1,
      "details": {
        "mdmId": "431617d2-4416-4965-8116-14ac4216163f",
        "subtype": "Person",
        "name": "Administrador 1",
        "status": "Active",
        "docType": null,
        "docId": null,
        "countryCode": "US",
        "tags": [
          "petShop",
          "actor",
          "admin"
        ],
        "aliases": [],
        "contacts": [],
        "relationshipRefs": {},
        "addresses": [],
        "mergedInto": null,
        "createdAt": "2026-07-01T00:00:00.000Z",
        "updatedAt": "2026-07-01T00:00:00.000Z",
        "actorId": "admin"
      }
    },
    {
      "mdmId": "7ff20aa3-7ef2-4910-81f2-0dc980f20c36",
      "version": 1,
      "details": {
        "mdmId": "7ff20aa3-7ef2-4910-81f2-0dc980f20c36",
        "subtype": "Person",
        "name": "Administrador 2",
        "status": "Active",
        "docType": null,
        "docId": null,
        "countryCode": "US",
        "tags": [
          "petShop",
          "actor",
          "admin"
        ],
        "aliases": [],
        "contacts": [],
        "relationshipRefs": {},
        "addresses": [],
        "mergedInto": null,
        "createdAt": "2026-07-01T00:00:00.000Z",
        "updatedAt": "2026-07-01T00:00:00.000Z",
        "actorId": "admin"
      }
    },
    {
      "mdmId": "a9782f04-aa78-4097-8b78-322aac7833bd",
      "version": 1,
      "details": {
        "mdmId": "a9782f04-aa78-4097-8b78-322aac7833bd",
        "subtype": "Person",
        "name": "Administrador 3",
        "status": "Active",
        "docType": null,
        "docId": null,
        "countryCode": "US",
        "tags": [
          "petShop",
          "actor",
          "admin"
        ],
        "aliases": [],
        "contacts": [],
        "relationshipRefs": {},
        "addresses": [],
        "mergedInto": null,
        "createdAt": "2026-07-01T00:00:00.000Z",
        "updatedAt": "2026-07-01T00:00:00.000Z",
        "actorId": "admin"
      }
    }
  ]
};
