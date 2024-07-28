  const { Schema, model } = require("mongoose");

  const eventSchema = new Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    photo: { type: String, required: true },
    start_date: { type: Date, required: true },
    start_time: { type: String, required: true },
    finish_date: { type: Date, required: true },
    finish_time: { type: String, required: true },
    info: { type: String, required: false },
    event_type_id: { type: Number, required: true },
    human_category_id: { type: Number, required: true },
    venue_id: { type: Number, required: true },
    lang_id: { type: Number, required: true },
    release_date: { type: Date, required: true }
  });

  const Event = model("Event", eventSchema);
    
  module.exports = { Event };
