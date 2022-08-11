import { buildUser } from '../../test/utils/generate'
import users from './user'

afterEach(() => {
  users.drop()
})

test('insert() should return new user', async () => {
  const { createdAt, id, ...user } = buildUser()

  const result = await users.insert(user)

  expect(result).toMatchObject(user)
})

test('insert() should add the user to the store', async () => {
  const newUser = await users.insert(buildUser())

  expect(await users.readById(newUser.id)).toEqual(newUser)
})

test('readById() should retrieve the user from the store', async () => {
  const newUser = await users.insert(buildUser())

  expect(await users.readById(newUser.id)).toEqual(newUser)
})

test('readByEmail() should retrieve the user from the store', async () => {
  const newUser = await users.insert(buildUser())

  expect(await users.readByEmail(newUser.email)).toEqual(newUser)
})

test('removeById() should remove a user from the store', async () => {
  const newUser = await users.insert(buildUser())

  expect(await users.readById(newUser.id)).toEqual(newUser)

  await users.removeById(newUser.id)

  expect(await users.readById(newUser.id)).toBeUndefined()
})

test('drop() should empty the store', async () => {
  const userOne = await users.insert(buildUser())
  const userTwo = await users.insert(buildUser())

  expect(await users.readById(userOne.id)).toEqual(userOne)
  expect(await users.readById(userTwo.id)).toEqual(userTwo)

  await users.drop()

  expect(await users.readById(userOne.id)).toBeUndefined()
  expect(await users.readById(userTwo.id)).toBeUndefined()
})
