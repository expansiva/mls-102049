{
  "savedAt": "2026-07-14T01:00:42.733Z",
  "agentName": "agentCbUsecase",
  "stepId": 14,
  "planning": null,
  "status": "waiting_after_prompt",
  "payload": {
    "type": "flexible",
    "result": {
      "toolName": "submitUsecase",
      "arguments": {
        "status": "ok",
        "result": {
          "usecaseId": "viewServiceBookingDetails",
          "ports": [
            "ServiceBooking",
            "Service"
          ],
          "functions": [
            {
              "functionName": "viewServiceBookingDetails",
              "inputTypeName": "ViewServiceBookingDetailsInput",
              "outputTypeName": "ViewServiceBookingDetailsOutput",
              "input": [
                {
                  "name": "serviceBookingId",
                  "type": "string",
                  "required": true,
                  "ofEntity": "ServiceBooking",
                  "description": "Identificador do agendamento selecionado pelo operador na agenda de turno."
                }
              ],
              "output": [
                {
                  "name": "serviceBookingId",
                  "type": "string",
                  "required": true,
                  "ofEntity": "ServiceBooking"
                },
                {
                  "name": "serviceId",
                  "type": "string",
                  "required": true,
                  "ofEntity": "ServiceBooking"
                },
                {
                  "name": "serviceName",
                  "type": "string",
                  "required": true,
                  "ofEntity": "Service",
                  "description": "Nome do serviço obtido via porta Service."
                },
                {
                  "name": "serviceDescription",
                  "type": "string",
                  "required": true,
                  "ofEntity": "Service",
                  "description": "Descrição do serviço obtido via porta Service."
                },
                {
                  "name": "estimatedDurationMinutes",
                  "type": "number",
                  "required": true,
                  "ofEntity": "Service",
                  "description": "Duração estimada do serviço em minutos."
                },
                {
                  "name": "price",
                  "type": "number",
                  "required": true,
                  "ofEntity": "Service",
                  "description": "Preço do serviço."
                },
                {
                  "name": "operatorId",
                  "type": "string",
                  "required": true,
                  "ofEntity": "ServiceBooking"
                },
                {
                  "name": "shiftId",
                  "type": "string",
                  "required": true,
                  "ofEntity": "ServiceBooking"
                },
                {
                  "name": "customerName",
                  "type": "string",
                  "required": true,
                  "ofEntity": "ServiceBooking"
                },
                {
                  "name": "customerPhone",
                  "type": "string",
                  "required": true,
                  "ofEntity": "ServiceBooking"
                },
                {
                  "name": "bookingDate",
                  "type": "string",
                  "required": true,
                  "ofEntity": "ServiceBooking"
                },
                {
                  "name": "bookingTime",
                  "type": "string",
                  "required": true,
                  "ofEntity": "ServiceBooking"
                },
                {
                  "name": "status",
                  "type": "string",
                  "required": true,
                  "ofEntity": "ServiceBooking",
                  "description": "Status atual do agendamento: confirmed, inProgress, completed ou cancelled."
                },
                {
                  "name": "notes",
                  "type": "string",
                  "required": false,
                  "ofEntity": "ServiceBooking"
                },
                {
                  "name": "completedAt",
                  "type": "string",
                  "required": false,
                  "ofEntity": "ServiceBooking"
                },
                {
                  "name": "cancelledAt",
                  "type": "string",
                  "required": false,
                  "ofEntity": "ServiceBooking"
                },
                {
                  "name": "cancelReason",
                  "type": "string",
                  "required": false,
                  "ofEntity": "ServiceBooking"
                },
                {
                  "name": "paymentInStore",
                  "type": "boolean",
                  "required": true,
                  "description": "Indicação de que o pagamento é realizado presencialmente na loja, sem opção de pagamento online."
                },
                {
                  "name": "createdAt",
                  "type": "string",
                  "required": true,
                  "ofEntity": "ServiceBooking"
                },
                {
                  "name": "updatedAt",
                  "type": "string",
                  "required": true,
                  "ofEntity": "ServiceBooking"
                }
              ],
              "ports": [
                "ServiceBooking",
                "Service"
              ],
              "rulesApplied": [
                "operatorSeesOnlyAssignedShiftBookings",
                "paymentInStoreOnly"
              ],
              "transactional": false,
              "steps": [
                "1. Resolver operatorId a partir de ctx.sessionContext.actorId (contexto de sessão, não input público).",
                "2. Carregar o ServiceBooking pelo serviceBookingId informado via porta ServiceBooking (getById).",
                "3. Se o agendamento não existir, retornar erro 404 not-found.",
                "4. Aplicar regra operatorSeesOnlyAssignedShiftBookings: comparar booking.operatorId com o operatorId resolvido da sessão. Se divergentes, retornar erro 403 forbidden (o operador só visualiza agendamentos do seu próprio turno).",
                "5. Carregar o Service pelo booking.serviceId via porta Service (getById) para obter nome, descrição, duração estimada e preço.",
                "6. Se o Service não existir, retornar erro 404 service-not-found.",
                "7. Aplicar regra paymentInStoreOnly: definir paymentInStore = true no resultado, indicando que o pagamento é exclusivamente presencial na loja.",
                "8. Montar e retornar o objeto de saída com todos os campos do agendamento enriquecidos com os dados do serviço e a flag paymentInStore."
              ]
            }
          ]
        },
        "questions": [],
        "trace": [
          "Parsed owner: viewServiceBookingDetails, opKind=view, accessPattern=getById on ServiceBooking.",
          "Identified public input: serviceBookingId (routeParam, required). operatorId resolved from actorSession context — excluded from public input[].",
          "Ports: ServiceBooking (root aggregate) and Service (read-only enrichment). No MDM refs.",
          "Rules: operatorSeesOnlyAssignedShiftBookings (compare booking.operatorId vs session actorId), paymentInStoreOnly (emit paymentInStore=true flag).",
          "Output includes all accessPattern.output fields plus Service enrichment (name, description, estimatedDurationMinutes, price) and paymentInStore boolean.",
          "No eventWrites (read-only view operation). Transactional=false."
        ]
      }
    },
    "status": "completed",
    "stepId": 23,
    "interaction": null,
    "nextSteps": null
  }
}
