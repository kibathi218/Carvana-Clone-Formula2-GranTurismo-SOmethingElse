const Router = require('express').Router()
const ReviewRouter = require('./ReviewRouter')
const CarRouter = require('./CarRouter')
const PartRouter = require('./PartRouter')
const AuthRouter = require('./AuthRouter')
const UserRouter = require('./UserRouter')

Router.use('/reviews', ReviewRouter)
Router.use('/cars', CarRouter)
Router.use('/parts', PartRouter)
Router.use('/auth', AuthRouter)
Router.use('/users', UserRouter)

module.exports = Router