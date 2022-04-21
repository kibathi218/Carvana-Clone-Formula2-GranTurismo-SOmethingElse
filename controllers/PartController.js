const { Part, User } = require('../models')

const GetParts = async (req, res) => {
    try{
        const parts = await Part.findAll({include: User})
        res.send(parts)

    } catch (error) {
        throw error
    }
}

const GetPartDetails = async (req, res) => {
    try{
        let partId = parseInt(req.params.part_id)
        const partDetails = await Part.findOne({where: {id: partId}, include: User})
        res.send(partDetails)

    } catch (error) {
        throw error
    }
}

const CreatePart = async (req, res) => {
    try {
        let ownerId = parseInt(req.params.owner_id)
        

        let partBody = {
            ownerId,
            ...req.body
        }

        const part = await Part.create(partBody)
        res.send(part)
    } catch (error) {
        throw error
    }
}

const UpdatePart = async (req, res) => {
    try {

        let partId = parseInt(req.params.part_id)

        const updatedPart = await Part.update(req.body,
            { where: { id: partId } })
        res.send(updatedPart)
    } catch (error) {
        throw error
    }
}

const DeletePart = async (req, res) => {
    try {

        let partId = parseInt(req.params.part_id)

        await Part.destroy({ where: { id: partId } })
        res.send({ message: `You have deleted a part with an id of ${partId}` })
    } catch (error) {
        throw error
    }
}

module.exports = {
    GetParts,
    GetPartDetails,
    CreatePart,
    UpdatePart,
    DeletePart
}