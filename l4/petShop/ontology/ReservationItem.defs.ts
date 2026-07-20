/// <mls fileReference="_102049_/l4/petShop/ontology/ReservationItem.defs.ts" enhancement="_blank"/>

export const petShopEntityReservationItem = {
  "entityId": "ReservationItem",
  "title": "Item de Reserva",
  "description": "Item de linha de uma reserva, contendo a referência ao produto e a quantidade reservada pelo cliente.",
  "kind": "supporting",
  "ownership": "moduleOwned",
  "fields": [
    {
      "fieldId": "reservationItemId",
      "type": "uuid",
      "required": true,
      "description": "Identificador único do item de reserva."
    },
    {
      "fieldId": "reservationId",
      "type": "uuid",
      "required": true,
      "description": "Referência à reserva à qual este item pertence."
    },
    {
      "fieldId": "productId",
      "type": "uuid",
      "required": true,
      "description": "Referência ao produto do catálogo que foi reservado."
    },
    {
      "fieldId": "quantity",
      "type": "number",
      "required": true,
      "description": "Quantidade do produto reservada pelo cliente."
    },
    {
      "fieldId": "createdAt",
      "type": "datetime",
      "required": true,
      "description": "Data e hora de criação do item de reserva."
    },
    {
      "fieldId": "updatedAt",
      "type": "datetime",
      "required": true,
      "description": "Data e hora da última atualização do item de reserva."
    }
  ]
} as const;

export default petShopEntityReservationItem;
