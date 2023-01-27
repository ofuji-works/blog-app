const configs = [
  {
    extends: ['next', 'next/core-web-vitals', '@packages/base'],
    parserOptions: {
      tsconfigRootDir: __dirname,
      project: './tsconfig.json',
    },
  },
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

export default configs
