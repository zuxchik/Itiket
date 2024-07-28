const { Router } = require("express");
const customerCard = Router();
const {
  createCustomerCard,
  getCustomerCards,
  getCustomerCardById,
  updateCustomerCard,
} = require("./customerCardController");

customerCard.post("/create", createCustomerCard);
customerCard.get("/getCustomerCards", getCustomerCards);
customerCard.get("/getCustomerCard/:id", getCustomerCardById);
customerCard.put("/updateCustomerCard/:id", updateCustomerCard);

module.exports = customerCard;
