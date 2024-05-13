const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {Admin, Reviews} = require('../models/models')
const {where} = require("sequelize");

const generateJwt = (id, email, firstname, lastname) => {
    return jwt.sign(
        {id, email, firstname, lastname},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class UserController {
    async registration(req, res, next) {
        const {email, password, firstname, lastname} = req.body
        if (!email || !password || !firstname || !lastname) {
            return next(ApiError.badRequest('Поля не могут быть пустыми'))
        }
        const candidate = await Admin.findOne({where: {email}})
        if (candidate) {
            return next(ApiError.badRequest('Пользователь с таким email уже существует'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await Admin.create({email, password: hashPassword, lastname, firstname})
        const token = generateJwt(user.id, user.email, user.lastname, user.firstname)
        return res.json({token})
    }

    async login(req, res, next) {
        const {email, password} = req.body
        const user = await Admin.findOne({where: {email}})
        if (!user) {
            return next(ApiError.badRequest('Пользователь не найден'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)

        if (!comparePassword) {
            return next(ApiError.badRequest('Указан неверный пароль'))
        }

        const token = generateJwt(user.id, user.email, user.firstname, user.lastname)
        return res.json({token})
    }

    async check(req, res) {
        const token = generateJwt(req.user.id, req.user.email, res.user.firstname, res.user.lastname)
        return res.json({token})
    }
}

module.exports = new UserController()
