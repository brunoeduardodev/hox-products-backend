import Express from 'express'
import cors from 'cors'
import '@infra/mongoose/connection'
import routes from './routes'

const server = Express()

server.use(Express.json())
server.use(cors({}))
server.use(routes)
const port = process.env.PORT || 3333

server.listen(port)
console.log(`Server running at ${port}`)
