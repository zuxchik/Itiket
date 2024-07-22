const { Schema, model } = require("mongoose");

const bookingSchema = new Schema({
  id: { type: Schema.Types.BigInt, required: true },
  cart_id: { type: Schema.Types.BigInt, required: true },
  createdAt: { type: Schema.Types.Timestamp, required: true },
  finished: { type: Schema.Types.Timestamp, required: false },
//   payment_method_id: { type: Schema.Types.BigInt, required: true },
//   delivery_method_id: { type: Schema.Types.BigInt, required: true },
//   discount_coupon_id: { type: Schema.Types.BigInt, required: false },
  status_id: { type: Schema.Types.BigInt, required: true }
});

const Booking = model("Booking", bookingSchema);

module.exports = { Booking };
