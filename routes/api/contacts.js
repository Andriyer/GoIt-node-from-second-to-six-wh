const express = require('express')
const {listContacts, getContactById, addContact, removeContact, updateContact, updateFavorite} = require('../../controllers/contacts')
const {schemaCreateContact, schemaMongoId} = require('./validation-schem')
const {validateBody, validateParams} = require('../../middlewares/validation')

const router = express.Router()

router.get('/', listContacts)

router.get('/:contactId', validateParams(schemaMongoId), getContactById)

router.post('/', validateBody(schemaCreateContact), addContact)

router.delete('/:contactId', validateParams(schemaMongoId), removeContact)

router.put('/:contactId', [validateParams(schemaMongoId), validateBody(schemaCreateContact)], updateContact)

router.patch('/:contactId/favorite', [validateParams(schemaMongoId), validateBody(schemaCreateContact)], updateFavorite)


module.exports = router
