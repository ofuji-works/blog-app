import { gql } from '@apollo/client'

export type TagsQuery = {
  tagCollection: {
    items: {
      contentfulMetadata: {
        tags: {
          id: string
          name: string
        }[]
      }
    }[]
  }
}

export const GET_TAGS_QUERY = gql`
  query ($preview: Boolean) {
    tagCollection(preview: $preview) {
      items {
        contentfulMetadata {
          tags {
            id
            name
          }
        }
      }
    }
  }
`
