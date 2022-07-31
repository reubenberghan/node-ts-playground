import appMiddleware from './app'
import type { Request } from 'express'

test('sends the expected response', () => {
  const req = <Request>{}
  const res = { json: jest.fn(() => res) }
  appMiddleware(req, res)
  expect(res.json).toHaveBeenCalledWith({ data: 'Hello world' })
  expect(res.json).toHaveBeenCalledTimes(1)
})
