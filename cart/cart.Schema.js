const { Schema, model } = require("mongoose");

const cartSchema = new Schema({
  id: { type: Schema.Types.BigInt, required: true },
  ticket_id: { type: Schema.Types.BigInt, required: true },
  customer_id: { type: Schema.Types.BigInt, required: true },
  createdAt: { type: Schema.Types.Timestamp, required: true },
  finishedAt: { type: Schema.Types.Timestamp, required: false },
  status_id: { type: Schema.Types.SmallInt, required: true }
});

const Cart = model("Cart", cartSchema);

module.exports = { Cart };
