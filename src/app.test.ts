import appHandler from './app'
import type { Request } from 'express'

test('sends the expected response', () => {
  const req = <Request>{}
  const res = { send: jest.fn(() => res) }
  appHandler(req, res)
  expect(res.send).toHaveBeenCalledWith('Hello world')
  expect(res.send).toHaveBeenCalledTimes(1)
})
