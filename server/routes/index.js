const Router = require('express')
const router = new Router()
const adminRouter = require('./adminRouter')
const reviewRouter = require('./reviewRouter')
const orderRouter = require('./orderRouter')

router.use('/admin', adminRouter)
router.use('/user', reviewRouter)
router.use('/user', orderRouter)

module.exports = router
