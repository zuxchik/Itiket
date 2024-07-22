const { Schema, model } = require("mongoose");

const customerAddressSchema = new Schema({
  id: { type: Schema.Types.BigInt, required: true },
  customer_id: { type: Schema.Types.BigInt, required: true },
  name: { type: String, required: true },
  country_id: { type: Schema.Types.SmallInt, required: true },
  region_id: { type: Schema.Types.SmallInt, required: true },
  district_id: { type: Schema.Types.SmallInt, required: true },
  street: { type: String, required: true },
  house: { type: String, required: true },
  flat: { type: Schema.Types.SmallInt, required: false },
  location: { type: String, required: true },
  post_index: { type: String, required: true },
  info: { type: String, required: false }
});

const CustomerAddress = model("CustomerAddress", customerAddressSchema);

module.exports = { CustomerAddress };
