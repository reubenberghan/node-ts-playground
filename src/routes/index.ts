import defaultRouteMiddleware from '../middleware/default-route'
import express from 'express'
import getApiRouter from './api'

export default function getRouter() {
  const router = express.Router()

  router.use('/api', getApiRouter())
  router.use('*', defaultRouteMiddleware)

  return router
}
