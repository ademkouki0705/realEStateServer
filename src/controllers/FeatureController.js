const Feature = require('../models/Feature')


const addFeatures = async (req, res) => {
    const payload = req.body
    try {
        const features = Array.isArray(payload) ? payload : [payload]
        const result = await Feature.insertMany(features)
        res.status(200).json({
            message: 'Features Added sussefully',
            length: result.length,
            data: result,
        })
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

const getFeatures = async (req, res) => {
    try {
        const features = await Feature.find()
        res.status(200).send(features)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = { addFeatures, getFeatures }




