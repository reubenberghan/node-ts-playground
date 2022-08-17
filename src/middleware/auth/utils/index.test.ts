import * as generate from '../../../../test/utils/generate'
import { isPasswordValid } from '.'

test('should validate a password', () => {
  const password = generate.password()
  expect(isPasswordValid(password)).toBe(true)
})

test('should not validate password of incorrect length', () => {
  const password = 'xxxxxxx'
  expect(isPasswordValid(password)).toBe(false)
})

test('should not validate a password without a number', () => {
  const password = 'xxxxxxxxx'
  expect(isPasswordValid(password)).toBe(false)
})

test('should not validate a password without an uppercase letter', () => {
  const password = 'xxxxxxx1'
  expect(isPasswordValid(password)).toBe(false)
})

test('should not validate a password without a lowercase letter', () => {
  const password = 'XXXXXXX1'
  expect(isPasswordValid(password)).toBe(false)
})

test('should not validate a password without a special character', () => {
  const password = 'xxxxxxX1'
  expect(isPasswordValid(password)).toBe(false)
})

test('should not validate a password with a space character', () => {
  const password = 'xxx xX1!'
  expect(isPasswordValid(password)).toBe(false)
})
