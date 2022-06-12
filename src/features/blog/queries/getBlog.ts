import { gql } from '@apollo/client'

import type { Document } from '@contentful/rich-text-types'

export interface ArticleTextLinks {
  assets: {
    block: ArticleTextAsset[]
  }
  entries: {
    block: EmbeddedEntryBlock[]
    inline: EmbeddedEntryInline[]
  }
}
export interface ArticleTextAsset {
  sys: {
    id: string
  }
  title: string
  description: string
  url: string
}

export interface EmbeddedEntryBlock {
  sys: {
    id: string
  }
  title: string
  body: {
    json: Document
  }
}

export interface EmbeddedEntryInline {
  sys: {
    id: string
  }
  title: string
}

export interface BlogQuery {
  blog: {
    sys: {
      publishedAt: string
    }
    title: string
    body: {
      json: Document
      links: ArticleTextLinks
    }
  }
}

export const GET_BLOG_QUERY = gql`
  query ($id: String!, $preview: Boolean = false) {
    blog(id: $id, preview: $preview) {
      sys {
        publishedAt
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
