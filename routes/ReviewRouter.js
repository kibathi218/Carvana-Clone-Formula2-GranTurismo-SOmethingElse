const Router = require('express').Router()
const controller = require('../controllers/ReviewController')
const middleware = require('../middleware')

Router.get(
    '/view/:part_id', 
    controller.GetReview
)
Router.get(
    '/review/:review_id',
    controller.GetReviewById
)
Router.post(
    '/:owner_id/:part_id',
    middleware.stripToken,
    middleware.verifyToken, 
    controller.CreateReview
)
Router.put(
    '/:review_id',
    middleware.stripToken,
    middleware.verifyToken, 
    controller.UpdateReview
)
Router.delete(
    '/:review_id',
    middleware.stripToken,
    middleware.verifyToken, 
    controller.DeleteReview
)

///

module.exports = Router