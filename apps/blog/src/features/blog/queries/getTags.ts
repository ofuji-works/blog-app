import { gql } from '@apollo/client'

export const GET_TAGS_QUERY = gql`
  query GetTags($preview: Boolean) {
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
