import { buildNext, buildReq, buildRes } from '../../../test/utils/generate'
import logger from '.'

beforeEach(() => {
  jest.spyOn(global.console, 'log').mockName('console.log').mockImplementation()
})

afterEach(() => {
  jest.restoreAllMocks()
})

test('logs request method and URL', () => {
  const mockReq = buildReq({ method: 'GET', url: '/api' })
  const mockRes = buildRes()
  const mockNext = buildNext()

  logger(mockReq, mockRes, mockNext)

  expect(console.log).toHaveBeenCalledWith(mockReq.method, mockReq.url)
  expect(console.log).toHaveBeenCalledTimes(1)
  expect(mockNext).toHaveBeenCalledTimes(1)
})
