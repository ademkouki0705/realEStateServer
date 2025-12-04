const { Router } = require('express')
const { addAgents, getAgents } = require('../controllers/AgentController')


const AgentRouter = Router()


AgentRouter.post('/agent', addAgents)

AgentRouter.get('/agent', getAgents)



module.exports = AgentRouter