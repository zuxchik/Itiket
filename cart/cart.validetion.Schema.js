const Joi = require('joi');

const cartValidation = Joi.object({
  ticket_id: Joi.string().required(),
  customer_id: Joi.string().required(),
  createdAt: Joi.date(),
  finishedAt: Joi.date(),
  status_id: Joi.string().required()
});

module.exports = { cartValidation };