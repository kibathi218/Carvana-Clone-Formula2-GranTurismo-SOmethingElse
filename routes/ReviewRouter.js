const Router = require('express').Router()
const controller = require('../controllers/ReviewController')

Router.get('/view/:part_id', controller.GetReview)
Router.post('/:owner_id/:part_id', controller.CreateReview)
Router.put('/:review_id', controller.UpdateReview)
Router.delete('/:review_id', controller.DeleteReview)

///

module.exports = Router