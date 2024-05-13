const Router = require('express')
const router = new Router();

const reviewController = require('../controllers/reviewController')


router.post('/review',reviewController.postReview)
router.get('/reviews',reviewController.getReview)

module.exports = router