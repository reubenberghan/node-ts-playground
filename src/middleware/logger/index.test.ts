import logger from '.'
import type { Request, Response } from 'express'

beforeEach(() => {
  jest.spyOn(global.console, 'log').mockName('console.log').mockImplementation()
})

afterEach(() => {
  jest.restoreAllMocks()
})

test('logs request method and URL', () => {
  const mockRequest = <Request>{ method: 'GET', url: '/api' }
  const mockResponse = <Response>{}
  const mockNext = jest.fn().mockName('next')

  logger(mockRequest, mockResponse, mockNext)

  expect(console.log).toHaveBeenCalledWith(mockRequest.method, mockRequest.url)
  expect(console.log).toHaveBeenCalledTimes(1)
  expect(mockNext).toHaveBeenCalledTimes(1)
})
