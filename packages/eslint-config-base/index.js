const { FlatCompat } = require('@eslint/eslintrc')

const typescriptPlugin = require('@typescript-eslint/eslint-plugin')
const importPlugin = require('eslint-plugin-import')
const a11yPlugin = require('eslint-plugin-jsx-a11y')
const reactPlugin = require('eslint-plugin-react')
const reactHooksPlugin = require('eslint-plugin-react-hooks')

const tsParser = require('@typescript-eslint/parser')

const compat = new FlatCompat()

module.exports = [
  {
    plugins: {
      typescriptPlugin,
      importPlugin,
      a11yPlugin,
      reactPlugin,
      reactHooksPlugin,
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: 2021,
        sourceType: 'module',
      },
    },
    settings: {
      'import/resolver': {
        typescript: {},
      },
    },
  },
  ...compat.extends('plugin:react/recommended'),
  ...compat.extends('plugin:jsx-a11y/recommended'),
  ...compat.extends('plugin:@typescript-eslint/recommended'),
  ...compat.extends('plugin:import/errors'),
  ...compat.extends('eslint-config-prettier'),
  ...compat.env({
    browser: true,
    es2021: true,
  }),
  {
    ignores: ['eslint.config.js'],
  },
  {
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react/display-name': 'off',
      'import/order': [2, { alphabetize: { order: 'asc' } }],
      'sort-imports': 'off',
      'import/no-duplicates': 'error',
      'import/namespace': 'off',
      'import/named': 'off',
      'import/default': 'off',
    },
  },
  {
    files: ['src/**/*.{js,jsx,ts,tsx}'],
    rules: {
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'parent', 'sibling', 'index', 'object', 'type'],
          pathGroups: [
            {
              pattern: 'react',
              group: 'external',
              position: 'before',
            },
            {
              pattern: 'src',
              group: 'external',
              position: 'after',
            },
          ],
          'newlines-between': 'always',
        },
      ],
    },
  },
]
