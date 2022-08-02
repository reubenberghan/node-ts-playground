import type { Request, Response } from 'express'

export default function indexMiddleware(_: Request, res: Response) {
  res.json({ data: 'Hello world' })
}
