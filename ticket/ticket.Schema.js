const { Schema, model } = require("mongoose");
const { Event } = require("../event/event.Schema");

const ticketSchema = new Schema({
  event_id: { type: Schema.Types.ObjectId, ref: Event },
  seat_id: { type: Number, required: true },
  price: { type: Number, required: true }
});

const TicketBek = model("Ticket", ticketSchema);

module.exports = { TicketBek };
