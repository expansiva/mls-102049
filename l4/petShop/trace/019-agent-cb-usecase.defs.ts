{
  "savedAt": "2026-07-14T01:00:42.685Z",
  "agentName": "agentCbUsecase",
  "stepId": 19,
  "planning": null,
  "status": "waiting_after_prompt",
  "payload": {
    "type": "flexible",
    "result": {
      "toolName": "submitUsecase",
      "arguments": {
        "status": "ok",
        "result": {
          "usecaseId": "viewOperatorSchedule",
          "ports": [
            "ServiceBooking",
            "Service"
          ],
          "functions": [
            {
              "functionName": "viewOperatorSchedule",
              "inputTypeName": "ViewOperatorScheduleInput",
              "outputTypeName": "ViewOperatorScheduleOutput",
              "input": [],
              "output": [
                {
                  "name": "serviceBookingId",
                  "type": "string",
                  "required": true,
                  "ofEntity": "ServiceBooking",
                  "description": "Identificador único do agendamento"
                },
                {
                  "name": "serviceId",
                  "type": "string",
                  "required": true,
                  "ofEntity": "ServiceBooking",
                  "description": "Identificador do serviço agendado"
                },
                {
                  "name": "serviceName",
                  "type": "string",
                  "required": true,
                  "ofEntity": "Service",
                  "description": "Nome do serviço, hidratado a partir da porta Service"
                },
                {
                  "name": "customerName",
                  "type": "string",
                  "required": true,
                  "ofEntity": "ServiceBooking",
                  "description": "Nome do cliente"
                },
                {
                  "name": "customerPhone",
                  "type": "string",
                  "required": true,
                  "ofEntity": "ServiceBooking",
                  "description": "Telefone do cliente"
                },
                {
                  "name": "bookingDate",
                  "type": "string",
                  "required": true,
                  "ofEntity": "ServiceBooking",
                  "description": "Data do agendamento"
                },
                {
                  "name": "bookingTime",
                  "type": "string",
                  "required": true,
                  "ofEntity": "ServiceBooking",
                  "description": "Horário do agendamento"
                },
                {
                  "name": "status",
                  "type": "string",
                  "required": true,
                  "ofEntity": "ServiceBooking",
                  "description": "Status do agendamento (sempre 'confirmed' na lista retornada)"
                },
                {
                  "name": "notes",
                  "type": "string",
                  "required": false,
                  "ofEntity": "ServiceBooking",
                  "description": "Observações do agendamento"
                }
              ],
              "ports": [
                "ServiceBooking",
                "Service"
              ],
              "rulesApplied": [
                "operatorSeesOnlyAssignedShiftBookings",
                "operatorScheduleShowsConfirmedOnly"
              ],
              "transactional": false,
              "steps": [
                "1. Resolver operatorId a partir de ctx.sessionContext.actorId (contexto da sessão autenticada do operador). Se ausente, retornar lista vazia.",
                "2. Aplicar regra operatorSeesOnlyAssignedShiftBookings: listar ServiceBookings via porta ServiceBooking filtrando por operatorId igual ao actorId resolvido da sessão.",
                "3. Aplicar regra operatorScheduleShowsConfirmedOnly: filtrar apenas agendamentos cujo status seja 'confirmed', descartando quaisquer outros status (inProgress, completed, cancelled).",
                "4. Ordenar a lista resultante por bookingDate e bookingTime em ordem ascendente.",
                "5. Coletar todos os serviceIds distintos dos agendamentos retornados e hidratar os dados de Service em lote via porta Service (plural-first: uma única chamada para todos os serviceIds).",
                "6. Projetar cada item com os campos serviceBookingId, serviceId, serviceName (hidratado de Service), customerName, customerPhone, bookingDate, bookingTime, status, notes.",
                "7. Retornar a lista projetada ordenada."
              ]
            }
          ]
        },
        "questions": [],
        "trace": [
          "Resolved operatorId from actorSession.actorId (context) — NOT exposed as public input per L4 source rules.",
          "Applied operatorSeesOnlyAssignedShiftBookings: filter ServiceBooking by operatorId = session actorId.",
          "Applied operatorScheduleShowsConfirmedOnly: filter ServiceBooking by status = 'confirmed' only.",
          "Service port used for plural-first batch hydration of serviceName by serviceId collection.",
          "No event writes — query-only usecase, transactional=false.",
          "Output projected exactly per accessPattern.output fields plus serviceName enrichment from Service port."
        ]
      }
    },
    "status": "completed",
    "stepId": 6,
    "interaction": null,
    "nextSteps": null
  }
}
