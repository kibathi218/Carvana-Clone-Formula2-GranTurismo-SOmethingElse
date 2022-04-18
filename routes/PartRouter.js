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



module.exports = Router