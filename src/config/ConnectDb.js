const mongoose=require('mongoose')


const connectDb=async()=>{
    try{
        await mongoose.connect(process.env.CONNECT_URI).then(()=>console.log('connected to DB'))
    }catch(error){
        console.log({error:error})
    }
}

module.exports=connectDb