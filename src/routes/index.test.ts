import { buildReq, buildRes } from '../../test/utils/generate'
import indexMiddleware from './index.middleware'

test('sends the expected response', () => {
  const mockReq = buildReq()
  const mockRes = buildRes()

  indexMiddleware(mockReq, mockRes)

  expect(mockRes.json).toHaveBeenCalledWith({ data: 'Hello world' })
  expect(mockRes.json).toHaveBeenCalledTimes(1)
})
