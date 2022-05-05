const express = require('express')
const {listContacts, getContactById, addContact, removeContact, updateContact, updateFavorite} = require('../../../controllers/contacts')
const {schemaCreateContact, schemaMongoId} = require('./validation-schem')
const {validateBody, validateParams} = require('../../../middlewares/validation');
const quard = require('../../../middlewares/guard')
const {wrapper: wrapperError } = require ('../../../middlewares/error-handler')
// const {contactSchema } = require('../../models/contact')

const router = express.Router()

router.get('/', quard, wrapperError(listContacts))

router.get('/:contactId', quard, validateParams(schemaMongoId), wrapperError(getContactById))

router.post('/', quard,
 validateBody(schemaCreateContact),
 addContact)

router.delete('/:contactId', quard, validateParams(schemaMongoId), wrapperError(removeContact))

router.put('/:contactId', quard, [validateParams(schemaMongoId), validateBody(schemaCreateContact)], wrapperError(updateContact))

router.patch('/:contactId/favorite', quard, [validateParams(schemaMongoId), validateBody(schemaCreateContact)], wrapperError(updateFavorite))


module.exports = router
