const { Car } = require('../models')

const GetCars = async (req, res) => {
    try{
        const cars = await Car.findAll()
        console.log(cars)
        res.send(cars)

    } catch (error) {
        throw error
    }
}

const GetCarDetails = async (req, res) => {
    try{
        let carId = parseInt(req.params.car_id)
        console.log(carId)
        const carDetails = await Car.findOne({where: {id: carId}})
        console.log(carDetails)
        res.send(carDetails)

    } catch (error) {
        throw error
    }
}


module.exports = {
    GetCars,
    GetCarDetails
}