import { generateUuid } from './utils'

type User = {
  id: string
  username: string
  hash: string
  salt: string
  createdAt: Date
  updatedAt: Date | null
  token?: string
}

let users: User[] = []

async function readById(id: string) {
  return users.find((user) => user.id === id)
}

async function insert(user: Omit<User, 'id' | 'createdAt' | 'updatedAt'>) {
  const newUser: User = {
    ...user,
    id: generateUuid(),
    createdAt: new Date(),
    updatedAt: null,
  }
  users = [...users, newUser]
}

async function removeById(id: string) {
  users = users.filter((user) => user.id !== id)
}

async function drop() {
  users = []
}

export default { drop, insert, readById, removeById }
export type { User }
