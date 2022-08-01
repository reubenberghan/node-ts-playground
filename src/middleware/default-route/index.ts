import type { Request, Response } from 'express'

export default function defaultRouteMiddleware(_: Request, res: Response) {
  res.json({ data: 'Hello world' })
}
