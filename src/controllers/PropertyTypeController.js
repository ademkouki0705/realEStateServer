
const PropertyType=require('../models/PropertyType')


const addPropertyTypes=async (req,res)=>{
    const paylaod=req.body
    try{
         const PropertyTypes=Array.isArray(paylaod)?paylaod:[paylaod]
         const result=await PropertyType.insertMany(PropertyTypes)
         res.status(200).json({
            message:'Property Types added successfully',
            length:result.length,
            data:result
         })
    }catch(error){
        res.status(500).json({error:error.message})
    }
}

const getPropertyTypes=async (req,res)=>{
    try{ 
         const propertyTypes=await PropertyType.find()
         res.status(200).json(propertyTypes)
    }catch(error){
        res.status(500).json({error:error.message})
    }
}


module.exports={addPropertyTypes,getPropertyTypes}
