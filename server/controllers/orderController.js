const ApiError = require('../error/ApiError');
const {Orders} = require('../models/models')

class orderController {
    async postOrder(req, res, next) {
        try {
            const {name, phone, text} = req.body
            const order = await Orders.create({name, phone, text})

            if (name === '' || text === '' || phone === '') {
                return next(ApiError.badRequest('поля не могут быть пустыми'))
            }

            return res.json(order)
        } catch (error) {
            return ApiError.internal(error)
        }
    }

    async getOrder(req, res) {
        const order = await Orders.findAll()
        return res.json(order)
    }
}

module.exports = new orderController()
