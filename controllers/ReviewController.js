const { Review, User } = require('../models')

const GetReview = async (req, res) => {
    try {
        const reviews = await Review.findAll({include: User})
        res.send(reviews)
    } catch (error) {
        throw error
    }
}

const  GetReviewById = async (req, res) => {
    try{
        let reviewId = parseInt(req.params.review_id)
        const review = await Review.findOne({where: {id: reviewId}, include: User})
        res.send(review)

    } catch (error) {
        throw error
    }
}

const CreateReview = async (req, res) => {
    try {
        let ownerId = parseInt(req.params.owner_id)
        let partId = parseInt(req.params.part_id)

        let reviewBody = {
            ownerId,
            partId,
            ...req.body
        }

        const review = await Review.create(reviewBody)
        res.send(review)
    } catch (error) {
        throw error
    }
}

const UpdateReview = async (req, res) => {
    try {

        let reviewId = parseInt(req.params.review_id)

        const updatedReview = await Review.update(req.body,
            { where: { id: reviewId } })
        res.send(updatedReview)
    } catch (error) {
        throw error
    }
}

const DeleteReview = async (req, res) => {
    try {

        let reviewId = parseInt(req.params.review_id)

        await Review.destroy({ where: { id: reviewId } })
        res.send({ message: `You have deleted a review with an id of ${reviewId}` })
    } catch (error) {
        throw error
    }
}


module.exports = {
    CreateReview,
    GetReview,
    GetReviewById,
    UpdateReview,
    DeleteReview
}