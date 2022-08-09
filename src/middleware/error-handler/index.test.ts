import { buildNext, buildReq, buildRes } from '../../../test/utils/generate'
import errorHandler from '.'

test('should delegate to default handler when headers have been sent', () => {
  const err = new Error('oh noes')
  const mockReq = buildReq()
  const mockRes = buildRes({ headersSent: true })
  const mockNext = buildNext()

  errorHandler(err, mockReq, mockRes, mockNext)

  expect(mockNext).toHaveBeenCalledWith(err)
  expect(mockNext).toHaveBeenCalledTimes(1)
})

test('should respond with a 500 status and the error if headers not sent', () => {
  const err = new Error('oh noes')
  const mockReq = buildReq()
  const mockRes = buildRes({ headersSent: false })
  const mockNext = buildNext()

  errorHandler(err, mockReq, mockRes, mockNext)

  expect(mockRes.status).toHaveBeenCalledWith(500)
  expect(mockRes.status).toHaveBeenCalledTimes(1)

  expect(mockRes.json).toHaveBeenCalledWith({
    error: {
      message: err.message,
      stack: err.stack,
    },
  })
  expect(mockRes.json).toHaveBeenCalledTimes(1)
})

test('should handle a string passed as an error', () => {
  const err = 'oh noes'
  const mockReq = buildReq()
  const mockRes = buildRes({ headersSent: false })
  const mockNext = buildNext()

  errorHandler(err, mockReq, mockRes, mockNext)

  expect(mockRes.status).toHaveBeenCalledWith(500)
  expect(mockRes.status).toHaveBeenCalledTimes(1)

  expect(mockRes.json).toHaveBeenCalledWith({
    error: {
      message: err,
    },
  })
  expect(mockRes.json).toHaveBeenCalledTimes(1)
})

test('should respond with a generic message if error is not an expected type', () => {
  const err = {}
  const mockReq = buildReq()
  const mockRes = buildRes({ headersSent: false })
  const mockNext = jest.fn().mockName('next')

  errorHandler(err, mockReq, mockRes, mockNext)

  expect(mockRes.status).toHaveBeenCalledWith(500)
  expect(mockRes.status).toHaveBeenCalledTimes(1)

  expect(mockRes.json).toHaveBeenCalledWith({
    error: {
      message: 'Something went wrong.',
    },
  })
  expect(mockRes.json).toHaveBeenCalledTimes(1)
})
