const Router = require('express').Router()
const ReviewRouter = require('./ReviewRouter')

Router.use('/reviews', ReviewRouter)

module.exports = Router