const { Router } = require("express");
const bookingRouter = Router();
const {
  createBooking,
  getBookings,
  getBookingById,
  updateBooking,
} = require("../booking/booking.Controller");

/**
 * @swagger
 * tags:
 *   name: Booking
 *   description: API endpoints for managing bookings
 */

/**
 * @swagger
 * /booking/create:
 *   post:
 *     summary: Create a new booking
 *     tags: [Booking]
 *     description: Create a new booking with the provided details
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               userId:
 *                 type: string
 *               venueId:
 *                 type: string
 *               date:
 *                 type: string
 *                 format: date
 *               time:
 *                 type: string
 *               details:
 *                 type: string
 *     responses:
 *       "201":
 *         description: Booking created successfully
 *       "500":
 *         description: Internal server error
 */
bookingRouter.post("/create", createBooking);

/**
 * @swagger
 * /booking/getBookings:
 *   get:
 *     summary: Get all bookings
 *     tags: [Booking]
 *     description: Retrieve a list of all bookings
 *     responses:
 *       "200":
 *         description: A successful response with a list of bookings
 *       "500":
 *         description: Internal server error
 */
bookingRouter.get("/getBookings", getBookings);

/**
 * @swagger
 * /booking/getBooking/{id}:
 *   get:
 *     summary: Get a booking by ID
 *     tags: [Booking]
 *     description: Retrieve a booking by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the booking to retrieve
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: A successful response with the booking details
 *       "404":
 *         description: Booking not found
 *       "500":
 *         description: Internal server error
 */
bookingRouter.get("/getBooking/:id", getBookingById);

/**
 * @swagger
 * /booking/updateBooking/{id}:
 *   put:
 *     summary: Update a booking by ID
 *     tags: [Booking]
 *     description: Update a booking with the provided ID and details
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the booking to update
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *               venueId:
 *                 type: string
 *               date:
 *                 type: string
 *                 format: date
 *               time:
 *                 type: string
 *               details:
 *                 type: string
 *     responses:
 *       "200":
 *         description: Booking updated successfully
 *       "404":
 *         description: Booking not found
 *       "500":
 *         description: Internal server error
 */
bookingRouter.put("/updateBooking/:id", updateBooking);

module.exports = { bookingRouter };
