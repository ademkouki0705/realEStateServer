
const Agent=require('../models/Agent')


const addAgents=async (req,res)=>{
    const paylaod=req.body
    try{
         const agents=Array.isArray(paylaod)?paylaod:[paylaod]
         const result=await Agent.insertMany(agents)
         res.status(200).json({
            message:'agents added successfully',
            length:result.length,
            data:result
         })
    }catch(error){
        res.status(500).json({error:error.message})
    }
}

const getAgents=async (req,res)=>{
    try{ 
         const agents=await Agent.find()
         res.status(200).json(agents)
    }catch(error){
        res.status(500).json({error:error.message})
    }
}


module.exports={addAgents,getAgents}
