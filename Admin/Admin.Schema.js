const { Schema, model } = require("mongoose");

const AdminChikSchema = new Schema({
  name: { type: String, required: true },
  login: { type: String, required: true },
  hashed_password: { type: String, required: true },
});

const AdminChik = model("Admin", AdminChikSchema);

module.exports = { AdminChik };