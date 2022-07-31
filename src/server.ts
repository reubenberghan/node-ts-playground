import appMiddleware from './app'
import express from 'express'
import getApiRouter from './routes/api'
import type { Server } from 'node:http'

export async function startServer({
  port = process.env.PORT || 3000,
} = {}): Promise<Server> {
  const app = express()

  app.use('/api', getApiRouter())
  app.use('*', appMiddleware)

  return new Promise((resolve) => {
    const server = app.listen(port, () => {
      console.log(`Server started 🚀 Listening on port ${port}`)
      resolve(server)
    })
  })
}
