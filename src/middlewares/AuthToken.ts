import { Request, Response, NextFunction } from 'express'
import secrets from '@config/secrets'
export default async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authorization = req.headers.authorization

  if (!authorization || authorization !== secrets.authentication.fakeToken) {
    return res.sendStatus(403)
  }

  return next()
}
