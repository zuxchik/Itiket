const mongoose = require("mongoose");
const { Schema } = mongoose;

const humanCategorySchema = new Schema({
  name: { type: String, required: true },
  start_age: { type: Number, required: true },
  finish_age: { type: Number, required: true },
  gender: { type: Number, required: true }
});

const HumanCategory = mongoose.model('HumanCategory', humanCategorySchema);
module.exports = { HumanCategory };




// Define your schema here
// Your schema fields

// Create and export your model