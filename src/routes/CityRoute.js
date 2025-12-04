const {Router} =require('express')
const {addCities,getCities}=require('../controllers/CityController')

const CityRouter=Router()


CityRouter.post('/city',addCities)

CityRouter.get('/city',getCities)



module.exports=CityRouter