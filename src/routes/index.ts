import express from 'express'
import getApiRouter from './api'
import indexMiddleware from './index.middleware'

export default function getRouter() {
  const router = express.Router()

  router.use('/api', getApiRouter())
  router.use('*', indexMiddleware)

  return router
}
