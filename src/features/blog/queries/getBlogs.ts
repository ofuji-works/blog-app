import { gql } from '@apollo/client'

import type { Document } from '@contentful/rich-text-types'

export interface BlogsQuery {
  blogCollection: {
    items: {
      sys: {
        id: string
        publishedAt: string
      }
      contentfulMetadata: {
        tags: {
          id: string
        }[]
      }
      thumnail: {
        title: string
        url: string
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
          publishedAt
        }
        contentfulMetadata {
          tags {
            id
          }
        }
        thumnail {
          title
          url
        }
        title
        body {
          json
        }
      }
    }
  }
`
