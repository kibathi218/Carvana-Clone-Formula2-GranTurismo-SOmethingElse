const Router = require('express').Router()
const controller = require('../controllers/PartController')

Router.get('/view', controller.GetParts)
Router.get('/view/:part_id', controller.GetPartDetails)



module.exports = Router