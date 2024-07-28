const { Router } = require("express");
const admin = Router();
const {
  createAdmin,
  getAdmin,
  getAdminById,
  updateAdmin,
} = require("./Admin.cintroller");


admin.post("/create", createAdmin);
admin.get("/getAdmin", getAdmin);
admin.get("/getAdmin/:id", getAdminById);
admin.put("/updateAdmin/:id", updateAdmin);

module.exports = { admin };