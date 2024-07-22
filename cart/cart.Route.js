const { Router } = require("express");
const cart = Router();
const {
  createCart,
  getCarts,
  getCartById,
  updateCart,
} = require("./cart.controller");

cart.post("/create", createCart);
cart.get("/getCarts", getCarts);
cart.get("/getCart/:id", getCartById);
cart.put("/updateCart/:id", updateCart);

module.exports = cart;
