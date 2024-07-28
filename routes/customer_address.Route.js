const { Router } = require("express");
const customerAddress = Router();
const {
  createCustomerAddress,
  getCustomerAddresses,
  getCustomerAddressById,
  updateCustomerAddress,
} = require("../customer_address/customer_address.Controller");

customerAddress.post("/create", createCustomerAddress);
customerAddress.get("/getCustomerAddresses", getCustomerAddresses);
customerAddress.get("/getCustomerAddress/:id", getCustomerAddressById);
customerAddress.put("/updateCustomerAddress/:id", updateCustomerAddress);

module.exports = customerAddress;
