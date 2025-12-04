const { Router } = require('express')
const { addPropertyTypes, getPropertyTypes } = require('../controllers/PropertyTypeController')

const PropertyTypeRouter = Router()


PropertyTypeRouter.post('/propertyType', addPropertyTypes)

PropertyTypeRouter.get('/propertyType', getPropertyTypes)



module.exports = PropertyTypeRouter