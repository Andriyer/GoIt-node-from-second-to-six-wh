const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi)

const schemaCreateContact = Joi.object({
    name: Joi.string()
        .min(3)
        .max(30)
        .required(),

    phone: Joi.string()
        .pattern(new RegExp('[0-9]')),
        
    email: Joi.string(),

    favorite: Joi.boolean()
})


const schemaMongoId = Joi.object({
    contactId: Joi.objectId().required()
})

module.exports = {schemaCreateContact, schemaMongoId}
