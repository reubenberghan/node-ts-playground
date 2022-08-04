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

  if (err instanceof Error) {
    res.json({
      error: {
        message: err.message,
        ...(process.env.NODE_ENV === 'production' ? {} : { stack: err.stack }),
      },
    })
    return
  }

  if (typeof err === 'string') {
    res.json({
      error: {
        message: err,
      },
    })
    return
  }

  res.json({
    error: {
      message: 'Something went wrong.',
    },
  })
}

export default errorHandler
