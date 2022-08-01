import { Server } from 'node:http'
import { startServer } from './server'
import axios from 'axios'

let server: Server

const api = axios.create({
  baseURL: `http://localhost:${process.env.PORT}`,
})

beforeEach(async () => {
  const mockedConsoleLog = jest.spyOn(global.console, 'log')
  mockedConsoleLog.mockImplementation(() => {})
  server = await startServer()
})

afterEach((done) => {
  jest.restoreAllMocks()
  server.close(done)
})

test('should return a server', () => {
  expect(server).toBeInstanceOf(Server)
})

test('should log the port to the console', () => {
  expect(console.log).toHaveBeenCalledTimes(1)
  expect(console.log).toHaveBeenCalledWith(
    expect.stringMatching(`Listening on port ${process.env.PORT}`)
  )
})

test('should get the expected default response', async () => {
  const response = await api.get('/')

  expect(response.statusText).toBe('OK')
  expect(response.data).toEqual({ data: 'Hello world' })
})

test('should get the expected API route response', async () => {
  const response = await api.get('/api')

  expect(response.statusText).toBe('OK')
  expect(response.data).toEqual({ data: 'The API routes...' })
})
