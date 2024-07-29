const { Schema, model } = require("mongoose");

const seatSchema = new Schema({
    sector: { type: Number, required: true },
    row_number: { type: Number, required: true },
    number: { type: String, required: true },
    seat_type_id: { type: Number }
});

const SeatBek = model("Seat", seatSchema);

module.exports = { SeatBek };
