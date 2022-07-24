import express from 'express'
import type { Request, Response } from 'express'

if (process.env.NODE_ENV !== 'test') {
  const app = express()
  const port = 3000

  app.get('/', getIndexHandler)

  app.listen(port, () => {
    console.log(`Express server listening on port: ${port}`)
  })
}

export function getIndexHandler(_: Request, res: Response) {
  res.send('Hello world')
}
