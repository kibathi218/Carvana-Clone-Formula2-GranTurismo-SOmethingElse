const { Car } = require('../models')

const GetCars = async (req, res) => {
    try{
        const cars = await Car.findAll()
        res.send(cars)

    } catch (error) {
        throw error
    }
}

const GetCarDetails = async (req, res) => {
    try{
        let carId = parseInt(req.params.car_id)
        const carDetails = await Car.findOne({where: {id: carId}})
        res.send(carDetails)

    } catch (error) {
        throw error
    }
}


module.exports = {
    GetCars,
    GetCarDetails
}