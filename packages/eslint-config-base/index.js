import { FlatCompat } from '@eslint/eslintrc'

import typescriptPlugin from '@typescript-eslint/eslint-plugin'
import importPlugin from 'eslint-plugin-import'
import a11yPlugin from 'eslint-plugin-jsx-a11y'
import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'

import tsParser from '@typescript-eslint/parser'

const compat = new FlatCompat()

export default [
  {
    ignores: ['eslint.config.js'],
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
        // project: './tsconfig.json',
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
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react/display-name': 'off',
      'import/order': [2, { alphabetize: { order: 'asc' } }],
      'sort-imports': 'off',
      'import/no-duplicates': 'error',
      'import/namespace': 'off',
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
