import { gql } from '@apollo/client'

import type { Document } from '@contentful/rich-text-types'

export interface BlogsQuery {
  blogCollection: {
    items: {
      sys: {
        id: string
      }
      title: string
      body: {
        json: Document
      }
    }[]
  }
}

export const GET_BLOGS_QUERY = gql`
  query ($preview: Boolean) {
    blogCollection(preview: $preview) {
      items {
        sys {
          id
        }
        title
        body {
          json
        }
      }
    }
  }
`
