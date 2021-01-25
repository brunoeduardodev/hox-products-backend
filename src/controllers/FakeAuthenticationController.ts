import { Request, Response } from 'express'
import secrets from '@config/secrets'

export default class FakeAuthenticationController {
  authenticate = (req: Request, res: Response) => {
    const { email, password } = req.body

    if (
      email === secrets.authentication.email &&
      password === secrets.authentication.password
    ) {
      const fakeJwtToken = secrets.authentication.fakeToken

      return res.json({
        token: fakeJwtToken
      })
    }

    return res.status(401).json({
      error: 'Email ou senha inválidos'
    })
  }
}
