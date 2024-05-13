const ApiError = require('../error/ApiError');
const {Reviews} = require('../models/models')

class reviewController {
    async postReview(req, res, next) {
        try {
            const {name, text} = req.body
            const review = await Reviews.create({name, text})

            if (name === '' || text === '') {
                return next(ApiError.badRequest('поля не могут быть пустыми'))
            }

            return res.json(review)
        } catch (error) {
            return ApiError.internal(error)
        }
    }

    async getReview(req, res) {
        const review = await Reviews.findAll()
        return res.json(review)
    }
}

module.exports = new reviewController()
