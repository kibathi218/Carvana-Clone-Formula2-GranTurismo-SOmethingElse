const Router = require('express').Router()
const controller = require('../controllers/PartController')
const middleware = require('../middleware')

Router.get(
    '/view', 
    controller.GetParts
)
Router.get(
    '/view/:part_id',
    controller.GetPartDetails
)

Router.post(
    '/:owner_id',
    middleware.stripToken,
    middleware.verifyToken, 
    controller.CreatePart
)

Router.put(
    '/:part_id',
    middleware.stripToken,
    middleware.verifyToken, 
    controller.UpdatePart
)


module.exports = Router