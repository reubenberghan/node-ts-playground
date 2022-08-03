import type { ErrorRequestHandler } from 'express'

const errorHandler: ErrorRequestHandler = function errorHandler(
  err,
  _,
  res,
  next
) {
  if (res.headersSent) {
    return next(err)
  }

  res.status(500)
  res.json({
    error: {
      message: err.message,
      ...(process.env.NODE_ENV === 'production' ? {} : { stack: err.stack }),
    },
  })
}

export default errorHandler
