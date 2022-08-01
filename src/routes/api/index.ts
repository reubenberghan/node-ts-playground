import express from 'express'

export default function getApiRouter() {
  const router = express.Router()

  router.use('*', (_, res) => {
    res.json({ data: 'The API routes...' })
  })

  return router
}
