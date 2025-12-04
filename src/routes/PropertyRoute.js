const {Router} =require('express')
const {addProperty,getProperty}=require('../controllers/PropertyController')


const PropertyRouter=Router()


PropertyRouter.post('/property',addProperty)

PropertyRouter.post('/getProperty',getProperty)



module.exports=PropertyRouter