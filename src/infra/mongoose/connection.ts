import mongoose from 'mongoose'
import mongoConfig from '@config/mongo'

mongoose.connect(
  `mongodb+srv://${mongoConfig.username}:${mongoConfig.password}@${mongoConfig.host}/${mongoConfig.database}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
)

console.log('Connecting to mongoose')

mongoose.connection.on('error', (error) => {
  console.log(`Mongoose connection error: ${error}`)
})

mongoose.connection.on('open', () => {
  console.info('Mongoose connected')
})
