
const City=require('../models/City')


const addCities=async (req,res)=>{
    const paylaod=req.body
    try{
         const cities=Array.isArray(paylaod)?paylaod:[paylaod]
         const result=await City.insertMany(cities)
         res.status(200).json({
            message:'cities added successfully',
            length:result.length,
            data:result
         })
    }catch(error){
        res.status(500).json({error:error.message})
    }
}

const getCities=async (req,res)=>{
    try{ 
         const cities=await City.find()
         res.status(200).json(cities)
    }catch(error){
        res.status(500).json({error:error.message})
    }
}


module.exports={addCities,getCities}
