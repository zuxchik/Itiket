const { Schema, model } = require("mongoose");

const venue_TypeSchema = new Schema({
  name: { type: String, required: true },
});

const venue_TypeChik = model("Admin", venue_TypeSchema);

module.exports = { venue_TypeChik };