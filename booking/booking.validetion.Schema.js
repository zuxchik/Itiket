const Joi = require("joi");

const BookingValidation = new Joi.object({
    cart_id: Joi.string(),
    createdAt: Joi.date(),
    finished: Joi.date(),
    payment_method_id: Joi.string(),
    delivery_method_id: Joi.string(),
    discount_coupon_id: Joi.string(),
    status_id: Joi.string()
});

module.exports = { BookingValidation };