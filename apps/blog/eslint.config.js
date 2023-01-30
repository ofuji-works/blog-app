const { FlatCompat } = require('@eslint/eslintrc')
const baseConfig = require('@packages/eslint-config-base')

const compat = new FlatCompat()

module.exports = [
  ...baseConfig,
  ...compat.extends('next'),
  ...compat.extends('next/core-web-vitals'),
  {
    files: [
      '__tests__/*',
      '__tests__/**/*',
      'src/pages/*.stories.*',
      'src/pages/*/*.stories.*',
      'src/pages/*.tsx',
      'src/pages/*/*.tsx',
    ],
    rules: {
      'no-restricted-imports': [
        'off',
        {
          patterns: ['@/features/*/*'],
        },
      ],
    },
  },
]
