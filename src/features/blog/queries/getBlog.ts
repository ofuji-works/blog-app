import { gql } from '@apollo/client'

import type { Document } from '@contentful/rich-text-types'

export interface BlogQuery {
  blog: {
    title: string
    body: {
      json: Document
    }
  }
}

export const GET_BLOG_QUERY = gql`
  query ($id: String!, $preview: Boolean = false) {
    blog(id: $id, preview: $preview) {
      title
      body {
        json
      }
    }
  }
`
