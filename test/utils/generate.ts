import { faker } from '@faker-js/faker'
import type { User } from '../../src/db/user'

const getId = faker.datatype.uuid
const getEmail = faker.internet.email
const getPassword = (...args: Parameters<typeof faker.internet.password>) =>
  `!0_oP${faker.internet.password(...args)}`

function buildUser({
  password = getPassword(),
  ...overrides
}: Partial<Omit<User, 'hash' | 'salt'> & { password: string }>): User {
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

function buildRes() {}

function buildReq() {}

function buildNext() {}

export { buildNext, buildReq, buildRes, buildUser }
