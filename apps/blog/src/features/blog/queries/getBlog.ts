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
      body {
        json
        links {
          assets {
            block {
              sys {
                id
              }
              title
              description
              url
            }
          }
          entries {
            block {
              sys {
                id
              }
              ... on Blog {
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
            inline {
              sys {
                id
              }
              ... on Blog {
                title
              }
            }
          }
        }
      }
    }
  }
`
