import type { Request, Response } from 'express'

export default function appHandler(_: Request, res: Response) {
  res.send('Hello world')
}
