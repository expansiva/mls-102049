{
  "savedAt": "2026-07-14T01:02:03.730Z",
  "agentName": "agentCbUsecase",
  "stepId": 31,
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
                  "description": "Status do agendamento"
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
                "1. Resolver operatorId a partir de ctx.sessionContext.actorId (actorSession) — não é input público",
                "2. Carregar todos os ServiceBooking via ServiceBooking port filtrando por operatorId = operatorId resolvido da sessão (regra operatorSeesOnlyAssignedShiftBookings)",
                "3. Filtrar apenas agendamentos com status === 'confirmed' (regra operatorScheduleShowsConfirmedOnly)",
                "4. Ordenar resultado por bookingDate asc e bookingTime asc",
                "5. Projetar campos: serviceBookingId, serviceId, customerName, customerPhone, bookingDate, bookingTime, status, notes",
                "6. Retornar a lista projetada"
              ]
            }
          ],
          "mdmRefs": []
        },
        "questions": [],
        "trace": [
          "Parsed owner: viewOperatorSchedule, opKind=query, accessPattern=list",
          "operatorId source is actorSession -> context only, NOT public input",
          "No userInput/selectedEntity/routeParam inputs -> function input[] is empty",
          "Rules: operatorSeesOnlyAssignedShiftBookings (filter by session operatorId), operatorScheduleShowsConfirmedOnly (filter status=confirmed)",
          "Output projected from accessPattern.output fields",
          "Read-only query: transactional=false, no eventWrites",
          "Ports: ServiceBooking (primary), Service (available for enrichment if needed)"
        ]
      }
    },
    "status": "completed",
    "stepId": 14,
    "interaction": null,
    "nextSteps": null
  }
}
