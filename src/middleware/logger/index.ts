import type { Handler } from 'express'

const logger: Handler = function logger(req, _, next) {
  console.log(req.method, req.url)
  next()
}

export default logger
