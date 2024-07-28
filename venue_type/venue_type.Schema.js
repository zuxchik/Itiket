const { Schema, model } = require("mongoose");

const venueTypeSchema = new Schema({
  name: { type: String, required: true },
});

const VenueType = model("VenueType", venueTypeSchema);

module.exports = { VenueType };
