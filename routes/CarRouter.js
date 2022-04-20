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

Router.post(
    '/:owner_id',
    middleware.stripToken,
    middleware.verifyToken, 
    controller.CreateCar
)

Router.put(
    '/:car_id',
    middleware.stripToken,
    middleware.verifyToken, 
    controller.UpdateCar
)


module.exports = Router