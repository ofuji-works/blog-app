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
          name: string
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
  query GetBlogs($tags: [String!], $tags_exists: Boolean) {
    blogCollection(where: { contentfulMetadata: { tags_exists: $tags_exists, tags: { id_contains_some: $tags } } }) {
      items {
        sys {
          id
          publishedAt
        }
        contentfulMetadata {
          tags {
            id
            name
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
