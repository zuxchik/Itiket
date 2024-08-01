const { Schema, model } = require("mongoose");
const { VenueType } = require("../venue_type/venue_type.Schema")


const venueSchema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  location: { type: String, required: true },
  site: { type: String, required: false },
  phone: { type: String, required: false },
  venue_type_id: { type: Schema.Types.ObjectId, ref: VenueType },
  schema: { type: String, required: false }
});

const VenueBek = model("Venue", venueSchema);

module.exports = { VenueBek };
