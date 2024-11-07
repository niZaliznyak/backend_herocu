import { Request, Response, NextFunction } from 'express'
import { validationResult } from 'express-validator'

export const validatorErrorsMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  const result = validationResult(req)

  if (result.array().length) {
    res.status(400).json({ errors: result.array() })
    return
  }

  next()
}
