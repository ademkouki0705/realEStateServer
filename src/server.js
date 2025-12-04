const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()
const app = express()
const connectDb=require('./config/ConnectDb')

// db connect
connectDb()


const CityRouter=require('./routes/CityRoute')
const AgentRouter=require('./routes/AgentRoute')
const FeatureRouter=require('./routes/FeatureRoute')
const PropertyTypeRouter=require('./routes/PropertyTypeRoute')
const PropertyRouter=require('./routes/PropertyRoute')
const FilterRouter=require('./routes/FilterRoute')

// middlewares
app.use(cors())
app.use(express.json())

// routes
app.use('/api',CityRouter)
app.use('/api',AgentRouter)
app.use('/api',FeatureRouter)
app.use('/api',PropertyTypeRouter)
app.use('/api',PropertyRouter)
app.use('/api',FilterRouter)





app.listen(process.env.PORT || 5000, () => console.log('server is running...'+process.env.PORT))

