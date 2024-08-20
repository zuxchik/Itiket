const { Schema, model } = require("mongoose");
const { Customer } = require("../customer/customer.Schema");

const cartSchema = new Schema({
  ticket_id: { type: Number, required: true }, // Use Number instead of BigInt
  customer_id: { type: Schema.Types.ObjectId, ref: 'Customer' }, // Use the model name as a string
  createdAt: { type: Date, required: true }, // Use Date instead of Timestamp
  finishedAt: { type: Date, required: false }, // Use Date instead of Timestamp
  status_id: { type: Number, required: true } // Use Number instead of SmallInt
});

const Cart = model("Cart", cartSchema);

module.exports = { Cart };
