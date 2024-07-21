const { Schema, model } = require("mongoose");

const adminSchema = new Schema({
  name: { type: String, required: true, minlength: 3, maxlength: 50 },
  login: { type: String, required: true, minlength: 3, maxlength: 50 },
  hashed_password: { type: String, required: true, minlength: 8 },
  is_active: { type: Boolean, default: true },
  is_creator: { type: Boolean, default: false },
  hashed_refresh_token: { type: String, minlength: 10 },
});

const Admin = model("Admin", adminSchema);

module.exports = { Admin };