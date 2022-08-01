import express from 'express'
import getRouter from './routes'
import type { Server } from 'node:http'

export async function startServer({
  port = process.env.PORT || 3000,
} = {}): Promise<Server> {
  const app = express()
  const router = getRouter()

  app.use(router)

  return new Promise((resolve) => {
    const server = app.listen(port, () => {
      console.log(`Server started 🚀 Listening on port ${port}`)
      resolve(server)
    })
  })
}
