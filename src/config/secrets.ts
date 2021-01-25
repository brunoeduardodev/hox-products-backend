interface Secrets {
  mongo: {
    host: string
    username: string
    password: string
    database: string
  }
  authentication: {
    email: string
    password: string
    fakeToken: string
  }
}

export default {
  mongo: {
    host: 'cluster0.ijrjg.mongodb.net',
    username: 'root',
    password: '123',
    database: 'hox-backend'
  },
  authentication: {
    email: 'secret@gmail.com',
    password: '123',
    fakeToken: '1232@@3qwasdfajo@J(j32103j9)@#J@!#'
  }
} as Secrets
