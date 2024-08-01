  const { Schema, model } = require("mongoose");

const event_typeSchema = new Schema({
  name: { type: String, required: true },
  start_age: { type: Number, required: true },
  finish_age: { type: Number, required: true },
  gender: { type: Number, required: true }
});

const event_typeChik = model("HumanCategory", event_typeSchema);

module.exports = { event_typeChik };
