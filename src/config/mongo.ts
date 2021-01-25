import secrets from '@config/secrets'

interface MongoConfig {
  host: string
  username: string
  password: string
  database: string
}

export default {
  host: secrets.mongo.host,
  username: secrets.mongo.username,
  password: secrets.mongo.password,
  database: secrets.mongo.database
} as MongoConfig
