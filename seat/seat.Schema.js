const { Schema, model } = require("mongoose");
const { ZeatTypoF } = require("../seat_type/seat_type.Schema")
const { VenueBek } = require("../venue/venue.Schema")

const seatSchema = new Schema({
    sector: { type: Number, required: true },
    row_number: { type: Number, required: true },
    number: { type: String, required: true },
    venue_id: { type: Schema.Types.ObjectId, ref: VenueBek },
    seat_type_id: { type: Schema.Types.ObjectId, ref: ZeatTypoF }
});

const SeatBek = model("Seat", seatSchema);

module.exports = { SeatBek };
