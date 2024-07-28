const { Schema, model } = require("mongoose");

const customerCardSchema = new Schema({
  id: { type: Number, required: true },
  customer_id: { type: Number, required: true },
  name: { type: String, required: true },
  phone: { type: String, required: true },
  number: { type: String, required: true },
  year: { type: String, required: true },
  month: { type: String, required: true },
  is_active: { type: Boolean, default: true },
  is_main: { type: Boolean, default: false }
});

const CustomerCard = model("CustomerCard", customerCardSchema);

module.exports = { CustomerCard };
