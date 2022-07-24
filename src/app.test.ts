import { getIndexHandler } from './app'
import type { Request } from 'express'

test('the app sends the expected response', () => {
  const req = <Request>{}
  const res = { send: jest.fn(() => res) }
  getIndexHandler(req, res)
  expect(res.send).toHaveBeenCalledWith('Hello world')
  expect(res.send).toHaveBeenCalledTimes(1)
})
