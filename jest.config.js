/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFilesAfterEnv: [require.resolve('./test/setup-env.ts')],
  roots: ['<rootDir>/src/'],
}
