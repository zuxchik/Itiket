const { Router } = require("express");
const event = Router();
const {
  createEvent,
  getEvents,
  getEventById,
  updateEvent,
} = require("./eventController");

event.post("/create", createEvent);
event.get("/getEvents", getEvents);
event.get("/getEvent/:id", getEventById);
event.put("/updateEvent/:id", updateEvent);

module.exports = event;
