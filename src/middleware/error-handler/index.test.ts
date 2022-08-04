import errorHandler from '.'
import type { Request, Response } from 'express'

test('should delegate to default handler when headers have been sent', () => {
  const err = new Error('oh noes')
  const req = <Request>{}
  const res = <Response>{ headersSent: true }
  const mockNext = jest.fn().mockName('next')

  errorHandler(err, req, res, mockNext)

  expect(mockNext).toHaveBeenCalledWith(err)
  expect(mockNext).toHaveBeenCalledTimes(1)
})

test('should respond with a 500 status and the error if headers not sent', () => {
  const err = new Error('oh noes')
  const req = <Request>{}
  const res = <
    Omit<Response, 'json' | 'status'> & { json: jest.Mock; status: jest.Mock }
  >{
    headersSent: false,
    json: jest.fn(() => res).mockName('res.json'),
    status: jest.fn(() => res).mockName('res.status'),
  }
  const mockNext = jest.fn().mockName('next')

  errorHandler(err, req, res, mockNext)

  expect(res.status).toHaveBeenCalledWith(500)
  expect(res.status).toHaveBeenCalledTimes(1)

  expect(res.json).toHaveBeenCalledWith({
    error: {
      message: err.message,
      stack: err.stack,
    },
  })
  expect(res.json).toHaveBeenCalledTimes(1)
})

test('should handle a string passed as an error', () => {
  const err = 'oh noes'
  const req = <Request>{}
  const res = <
    Omit<Response, 'json' | 'status'> & { json: jest.Mock; status: jest.Mock }
  >{
    headersSent: false,
    json: jest.fn(() => res).mockName('res.json'),
    status: jest.fn(() => res).mockName('res.status'),
  }
  const mockNext = jest.fn().mockName('next')

  errorHandler(err, req, res, mockNext)

  expect(res.status).toHaveBeenCalledWith(500)
  expect(res.status).toHaveBeenCalledTimes(1)

  expect(res.json).toHaveBeenCalledWith({
    error: {
      message: err,
    },
  })
  expect(res.json).toHaveBeenCalledTimes(1)
})

test('should respond with a generic message if error is not an expected type', () => {
  const err = {}
  const req = <Request>{}
  const res = <
    Omit<Response, 'json' | 'status'> & { json: jest.Mock; status: jest.Mock }
  >{
    headersSent: false,
    json: jest.fn(() => res).mockName('res.json'),
    status: jest.fn(() => res).mockName('res.status'),
  }
  const mockNext = jest.fn().mockName('next')

  errorHandler(err, req, res, mockNext)

  expect(res.status).toHaveBeenCalledWith(500)
  expect(res.status).toHaveBeenCalledTimes(1)

  expect(res.json).toHaveBeenCalledWith({
    error: {
      message: 'Something went wrong.',
    },
  })
  expect(res.json).toHaveBeenCalledTimes(1)
})
