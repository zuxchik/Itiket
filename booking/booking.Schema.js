const { number } = require("joi");
const { Schema, model } = require("mongoose");

const bookingSchema = new Schema({
  cart_id: { type: String, required: true },
  createdAt: { type: String, required: true },
  finished: { type: String, required: false },
});

const Booking = model("Booking", bookingSchema);

module.exports = { Booking };
