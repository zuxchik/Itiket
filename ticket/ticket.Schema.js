const { Schema, model } = require("mongoose");

const ticketSchema = new Schema({
  event_id: { type: Number, required: true },
  seat_id: { type: Number, required: true },
  price: { type: Number, required: true }
});

const TicketBek = model("Ticket", ticketSchema);

module.exports = { TicketBek };
