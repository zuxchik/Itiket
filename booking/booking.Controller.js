const { Booking } = require("./booking.Schema");

const createBooking = async (req, res) => {
  try {
    const {
      cart_id,
      payment_method_id,
      delivery_method_id,
      discount_coupon_id,
      status_id,
      createdAt,
      finished,
    } = req.body;

    const newBooking = new Booking({
      cart_id,
      payment_method_id,
      delivery_method_id,
      discount_coupon_id,
      status_id,
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
    const bookings = await Booking.find().populate("cart_id delivery_method_id payment_method_id discount_coupon_id status_id");
    res.send(bookings);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getBookingById = async (req, res) => {
  try {
    const  BookingId  = req.params.id;
    const booking = await Booking.findById(BookingId).populate("cart_id delivery_method_id payment_method_id discount_coupon_id status_id");
    if (booking) {
       res.json({message: "booking topildi", booking})
    }
  } catch (error) {
    console.error("Xato", error)
    res.json({message: "Xatolik yuz berdi"})
  }
};

const updateBooking = async (req, res) => {
  try {
    const bookingId = req.params.id;
    const updatedData = req.body;

    const updatedBooking = await Booking.findByIdAndUpdate(bookingId, updatedData, {
      new: true,
    }).populate("cart_id delivery_method_id payment_method_id discount_coupon_id status_id");

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
