const { Part } = require('../models')

const GetParts = async (req, res) => {
    try{
        const parts = await Part.findAll()
        res.send(parts)

    } catch (error) {
        throw error
    }
}

const GetPartDetails = async (req, res) => {
    try{
        let partId = parseInt(req.params.part_id)
        const partDetails = await Part.findOne({where: {id: partId}})
        res.send(partDetails)

    } catch (error) {
        throw error
    }
}


module.exports = {
    GetParts,
    GetPartDetails
}