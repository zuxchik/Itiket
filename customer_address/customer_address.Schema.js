const { Schema, model } = require("mongoose");
const { Customer } = require("../customer/customer.Schema")

const customerAddressSchema = new Schema({
  customer_id: { type: Schema.Types.ObjectId, ref: Customer },
  name: { type: String, required: true },
  country_id: { type: Number, required: true },
  region_id: { type: Number, required: true },
  district_id: { type: Number, required: true },
  street: { type: String, required: true },
  house: { type: String, required: true },
  flat: { type: String, required: true },
  location: { type: String, required: true },
  post_index: { type: String, required: true },
  info: { type: String, required: false }
});

const CustomerAddress = model("CustomerAddress", customerAddressSchema);
module.exports = { CustomerAddress };
