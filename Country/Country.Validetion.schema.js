const Joi = require('joi');

const countryValidation = Joi.object({
    country: Joi.string()
});

module.exports = { countryValidation };