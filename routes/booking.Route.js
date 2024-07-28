const { Router } = require("express");
const booking = Router();
const {
  createBooking,
  getBookings,
  getBookingById,
  updateBooking,
} = require("./booking.Controller");

booking.post("/create", createBooking);
booking.get("/getBookings", getBookings);
booking.get("/getBooking/:id", getBookingById);
booking.put("/updateBooking/:id", updateBooking);

module.exports = { booking };
