import { faker } from '@faker-js/faker'

export function generateUuid() {
  return faker.datatype.uuid()
}
