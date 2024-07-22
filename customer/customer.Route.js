const { Router } = require("express");
const customer = Router();
const {
  createCustomer,
  getCustomers,
  getCustomerById,
  updateCustomer,
} = require("./customer.Controller");

customer.post("/create", createCustomer);
customer.get("/getCustomers", getCustomers);
customer.get("/getCustomer/:id", getCustomerById);
customer.put("/updateCustomer/:id", updateCustomer);

module.exports = customer;
