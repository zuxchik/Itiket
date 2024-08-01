  const { Schema, model } = require("mongoose");
const { event_typeChik } = require("../event_type/event_type.Schema");
const { HumanChik } = require("../human_category/human_category.Schema");
const { ref } = require("joi");

  const eventSchema = new Schema({
    name: { type: String, required: true },
    photo: { type: String, required: true },
    start_date: { type: Date, required: true },
    start_time: { type: String, required: true },
    finish_date: { type: Date, required: true },
    finish_time: { type: String, required: true },
    info: { type: String, required: false },
    event_type_id: { type: Schema.Types.ObjectId, ref: event_typeChik },
    human_category_id: { type: Schema.Types.ObjectId, ref: HumanChik },
    venue_id: { type: Schema.Types.ObjectId, ref: VenueBek },
    lang_id: { type: Number, required: true },
    release_date: { type: Date, required: true }
  });

  const Event = model("Event", eventSchema);
    
  module.exports = { Event };
