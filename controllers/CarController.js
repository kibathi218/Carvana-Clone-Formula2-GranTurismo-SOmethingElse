const { Car, User } = require('../models')

const GetCars = async (req, res) => {
    try{

        const cars = await Car.findAll({ include: User})
        res.send(cars)

    } catch (error) {
        throw error
    }
}

const GetCarDetails = async (req, res) => {
    try{
        let carId = parseInt(req.params.car_id)
        const carDetails = await Car.findOne({where: {id: carId}, include: User})
        res.send(carDetails)

    } catch (error) {
        throw error
    }
}

const CreateCar = async (req, res) => {
    try {
        let ownerId = parseInt(req.params.owner_id)
        

        let carBody = {
            ownerId,
            ...req.body
        }

        const car = await Car.create(carBody)
        res.send(car)
    } catch (error) {
        throw error
    }
}


const UpdateCar = async (req, res) => {
    try {

        let carId = parseInt(req.params.car_id)

        const updatedCar = await Car.update(req.body,
            { where: { id: carId } })
        res.send(updatedCar)
    } catch (error) {
        throw error
    }
}

const DeleteCar = async (req, res) => {
    try {

        let carId = parseInt(req.params.car_id)

        await Car.destroy({ where: { id: carId } })
        res.send({ message: `You have deleted a car with an id of ${carId}` })
    } catch (error) {
        throw error
    }
}

module.exports = {
    GetCars,
    GetCarDetails,
    CreateCar,
    UpdateCar,
    DeleteCar
}