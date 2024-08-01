const { Schema, model } = require("mongoose");
const { Customer } = require("../customer/customer.Schema");

const cartSchema = new Schema({
  ticket_id: { type: Schema.Types.BigInt, required: true },
  customer_id: { type: Schema.Types.ObjectId, ref: Customer },
  createdAt: { type: Schema.Types.Timestamp, required: true },
  finishedAt: { type: Schema.Types.Timestamp, required: false },
  status_id: { type: Schema.Types.SmallInt, required: true }
});

const Cart = model("Cart", cartSchema);

module.exports = { Cart };
