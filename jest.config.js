// jest.config.js
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  transform: {
    '^.+\\.mdx$': '@storybook/addon-docs/jest-transform-mdx',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    // Handle module aliases (this will be automatically configured for you soon)
    '^@/components$': '<rootDir>/src/components',
    '^@/pages/(.*)$': '<rootDir>/src/pages/$1',
    '^@/features$': '<rootDir>/src/features',
    '^@/layouts$': '<rootDir>/src/layouts',
    '^@/theme$': '<rootDir>/src/theme',
    '^@/config$': '<rootDir>/src/config',
    '^@/hooks$': '<rootDir>/src/hooks',
    '^@/providers$': '<rootDir>/src/providers',
    '^@/libs$': '<rootDir>/src/libs',
  },
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['<rootDir>/src/**/*.spec.ts', '<rootDir>/src/**/*.spec.tsx'],
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)
