import indexMiddleware from './index.middleware'
import type { Request, Response, Send } from 'express'

test('sends the expected response', () => {
  const req = <Request>{}
  const res = <Response>{ json: <Send>jest.fn(() => res) }

  indexMiddleware(req, res)

  expect(res.json).toHaveBeenCalledWith({ data: 'Hello world' })
  expect(res.json).toHaveBeenCalledTimes(1)
})
