const mongoose=require('mongoose')

const CONNECT_URI="mongodb+srv://kouki0507:DYvX5zLFFT9l8yRg@cluster0.rfsn8kg.mongodb.net/?appName=Cluster0"


const connectDb=async()=>{
    try{
        await mongoose.connect(CONNECT_URI).then(()=>console.log('connected to DB'))
    }catch(error){
        console.log({error:error})
    }
}

module.exports=connectDb