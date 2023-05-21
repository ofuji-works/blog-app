import type { CodegenConfig } from '@graphql-codegen/cli'

let contentSchema = {}
// @ts-ignore
contentSchema[
  `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_API_SPACE_ID}/environments/master/`
] = {
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
  },
}

const config: CodegenConfig = {
  schema: [contentSchema],
  generates: {
    'src/graphql/': {
      preset: 'client',
      plugins: ['typescript', 'typescript-react-apollo'],
    },
  },
}

export default config
