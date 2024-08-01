const { Schema, model } = require("mongoose");
const { Cart } = require("../cart/cart.Schema");

const bookingSchema = new Schema({
  cart_id: { type: Schema.Types.ObjectId, ref: Cart },
  createdAt: { type: String, required: true },
  finished: { type: String, required: false },
});

const Booking = model("Booking", bookingSchema);

module.exports = { Booking };
