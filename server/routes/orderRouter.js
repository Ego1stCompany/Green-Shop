const Router = require('express')
const router = new Router();

const orderController = require('../controllers/orderController')


router.post('/order',orderController.postOrder)
router.get('/orders',orderController.getOrder)

module.exports = router