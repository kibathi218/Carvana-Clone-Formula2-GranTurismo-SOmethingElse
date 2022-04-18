const Router = require('express').Router()
const controller = require('../controllers/CarController')
const middleware = require('../middleware')

Router.get(
    '/view',
    controller.GetCars
)

Router.get(
    '/view/:car_id', 
    controller.GetCarDetails
)


module.exports = Router