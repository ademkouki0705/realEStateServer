const {Router}=require('express')
const {getFilters}=require('../controllers/FilterController')


const FilterRouter=Router()
 

FilterRouter.get('/filters',getFilters)








module.exports=FilterRouter