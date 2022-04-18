const Router = require('express').Router()
const ReviewRouter = require('./ReviewRouter')
const CarRouter = require('./CarRouter')
const PartRouter = require('./PartRouter')

Router.use('/reviews', ReviewRouter)
Router.use('/cars', CarRouter)
Router.use('/parts', PartRouter)

module.exports = Router