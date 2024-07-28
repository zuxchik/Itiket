const { Booking } = require("./booking.Schema");

const createBooking = async (req, res) => {
  try {
    const {
      id,
      cart_id,
      createdAt,
      finished,
    } = req.body;

    const newBooking = new Booking({
      id,
      cart_id,
      createdAt,
      finished,
    });

    await newBooking.save();
    res.status(201).send(newBooking);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.send(bookings);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getBookingById = async (req, res) => {
  try {
    const { id } = req.params;
    const booking = await Booking.findById(id);
    if (!booking) {
      return res.status(404).send("Booking not found");
    }
    res.send(booking);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateBooking = async (req, res) => {
  try {
    const bookingId = req.params.id;
    const updatedData = req.body;

    const updatedBooking = await Booking.findByIdAndUpdate(bookingId, updatedData, {
      new: true,
    });

    if (!updatedBooking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found.",
      });
    }

    res.json({
      success: true,
      message: "Booking updated successfully.",
      booking: updatedBooking,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({
      success: false,
      message: "Server error: Error updating booking.",
    });
  }
};

module.exports = {
  createBooking,
  getBookings,
  getBookingById,
  updateBooking,
};
