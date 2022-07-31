import type { Request, Response } from 'express'

export default function appMiddleware(_: Request, res: Response) {
  res.json({ data: 'Hello world' })
}
