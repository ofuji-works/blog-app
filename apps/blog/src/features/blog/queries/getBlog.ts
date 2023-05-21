import { gql } from '@apollo/client'

export const GET_BLOG_QUERY = gql`
  query GetBlog($id: String!, $preview: Boolean = false) {
    blog(id: $id, preview: $preview) {
      sys {
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
      body
    }
  }
`
