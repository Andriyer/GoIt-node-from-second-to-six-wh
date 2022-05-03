const jwt = require('jsonwebtoken')
const Users = require ('../../repository/users')
const {HTTP_STATUS_CODE} = require('../../libs/constants')
const{ CustomError } = require('../../middlewares/error-handler')

const SECRET_KEY = process.env.JWT_SECRET_KEY

class authService {
    async create (body) {
        const user = await Users.findByEmail(body.email)
        if (user) {
            throw new CustomError (HTTP_STATUS_CODE.CONFLICT, 'User already exists')
        }
        const newUser = Users.create(body)
        
        return {
            id: newUser.id,
            name: newUser.name,
            email: newUser.email,
            role: newUser.role
        }
    }
    async login ({ email, password }) {}
    async logout (id) {}
}

module.exports = new authService()