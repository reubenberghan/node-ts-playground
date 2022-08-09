import { faker } from '@faker-js/faker'
import type { NextFunction, Request, Response } from 'express'
import type { User } from '../../src/db/user'

const getId = faker.datatype.uuid
const getEmail = faker.internet.email
const getPassword = (...args: Parameters<typeof faker.internet.password>) =>
  `!0_oP${faker.internet.password(...args)}`

function buildUser({
  password = getPassword(),
  ...overrides
}: Partial<Omit<User, 'hash' | 'salt'> & { password: string }> = {}): User {
  return {
    id: getId(),
    email: getEmail(),

    /* TODO: use auth util to generate hash and salt */
    hash: password,
    salt: faker.datatype.string(),

    createdAt: faker.date.recent(21),
    updatedAt: null,
    ...overrides,
  }
}

function buildRes(overrides: Partial<Response> = {}): Response {
  const res = <Response>{
    json: jest
      .fn<Response, Parameters<Response['json']>>(() => res)
      .mockName('res.json'),
    status: jest
      .fn<Response, Parameters<Response['status']>>(() => res)
      .mockName('res.status'),
    ...overrides,
  }

  return res
}

function buildReq(overrides: Partial<Request> = {}): Request {
  return <Request>{ ...overrides }
}

function buildNext(): NextFunction {
  return jest.fn().mockName('next')
}

export { buildNext, buildReq, buildRes, buildUser }
