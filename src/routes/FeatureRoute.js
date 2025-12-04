const {Router} =require('express')
const {addFeatures,getFeatures} =require('../controllers/FeatureController')

const FeatureRouter=Router()


FeatureRouter.post('/feature',addFeatures)

FeatureRouter.get('/feature',getFeatures)



module.exports=FeatureRouter