const express = require('express')
const {registration, login, logout} = require('../../../controllers/auth')
// const {contactSchema } = require('../../models/contact')
const {wrapper: wrapperError } = require ('../../../middlewares/error-handler')
const router = express.Router()

router.post('/registration', wrapperError(registration))
router.post('/login', wrapperError(login))
router.post('/logout', wrapperError(logout))

module.exports = router