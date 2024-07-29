const { Schema, model } = require("mongoose");

const seatTypeSchema = new Schema({
  name: { type: String, required: true }
});

const ZeatTypoF = model("SeatType", seatTypeSchema);

module.exports = { ZeatTypoF };
