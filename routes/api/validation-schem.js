const Joi = require('joi');

const schemaCreateContact = Joi.object({
    name: Joi.string()
        .min(3)
        .max(30)
        .required(),

    phone: Joi.string()
        .pattern(new RegExp('[0-9]')),
        
    email: Joi.string()
})

module.exports = {schemaCreateContact}
