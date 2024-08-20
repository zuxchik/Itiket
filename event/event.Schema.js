const { Schema, model } = require("mongoose");
const { event_typeChik } = require("../event_type/event_type.Schema");
const { HumanCategory } = require("../human_category/human_category.Schema");
const { VenueBek } = require("../venue/venue.Schema")

const eventSchema = new Schema({
  name: { type: String, required: true },
  photo: { type: String, required: true },
  start_date: { type: Date, required: true },
  start_time: { type: String, required: true },
  finish_date: { type: Date, required: true },
  finish_time: { type: String, required: true },
  info: { type: String, required: true },
  event_type_id: { type: Schema.Types.ObjectId, ref: event_typeChik },
  human_category_id: { type: Schema.Types.ObjectId, ref: HumanCategory },
  venue_id: { type: Schema.Types.ObjectId, ref: VenueBek },
  lang_id: { type: Number, required: true },
  release_date: { type: Date, required: true }
});

const Event = model("Event", eventSchema);

module.exports = { Event };
