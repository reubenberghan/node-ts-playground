import 'express-async-errors'
import errorHandler from './middleware/error-handler'
import express from 'express'
import getRouter from './routes'
import logger from './middleware/logger'
import type { Server } from 'node:http'

export async function startServer({
  port = process.env.PORT || 3000,
} = {}): Promise<Server> {
  const app = express()
  const router = getRouter()

  app.use(logger)
  app.use(router)
  app.use(errorHandler)

  return new Promise((resolve) => {
    const server = app.listen(port, () => {
      console.log(`Server started 🚀 Listening on port ${port}`)
      resolve(server)
    })
  })
}
