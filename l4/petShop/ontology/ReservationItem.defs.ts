/// <mls fileReference="_102049_/l4/petShop/ontology/ReservationItem.defs.ts" enhancement="_blank"/>

export const petShopEntityReservationItem = {
  "entityId": "ReservationItem",
  "title": "Item da Reserva",
  "description": "Linha de detalhe da reserva que vincula um produto a uma quantidade reservada pelo cliente.",
  "kind": "supporting",
  "ownership": "moduleOwned",
  "fields": [
    {
      "fieldId": "reservationItemId",
      "type": "uuid",
      "required": true,
      "description": "Identificador único do item da reserva."
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
      "description": "Referência ao produto do catálogo que está sendo reservado."
    },
    {
      "fieldId": "quantity",
      "type": "number",
      "required": true,
      "description": "Quantidade do produto reservada pelo cliente neste item."
    },
    {
      "fieldId": "createdAt",
      "type": "datetime",
      "required": true,
      "description": "Data e hora em que o item da reserva foi criado."
    },
    {
      "fieldId": "updatedAt",
      "type": "datetime",
      "required": true,
      "description": "Data e hora da última atualização do item da reserva."
    }
  ]
} as const;

export default petShopEntityReservationItem;
