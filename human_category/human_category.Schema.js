const { Schema, model } = require("mongoose");

const humanCategorySchema = new Schema({
  name: { type: String, required: true },
  start_age: { type: Number, required: true },
  finish_age: { type: Number, required: true },
  gender: { type: Number, required: true }
});

const HumanChik = model("HumanCategory", humanCategorySchema);

module.exports = { HumanChik };
