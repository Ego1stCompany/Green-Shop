const sequelize = require('../db/db')
const {DataTypes} = require('sequelize')

const Admin = sequelize.define('admin', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true,},
    firstname:{type: DataTypes.STRING},
    lastname:{type: DataTypes.STRING},
    password: {type: DataTypes.STRING},
})

const Orders = sequelize.define('orders', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name:{type: DataTypes.STRING},
    phone: {type: DataTypes.STRING},
    text:{type: DataTypes.STRING},
})

const Reviews = sequelize.define('reviews', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name:{type: DataTypes.STRING},
    text:{type: DataTypes.STRING},
})

module.exports = {
    Admin,
    Orders,
    Reviews
}


