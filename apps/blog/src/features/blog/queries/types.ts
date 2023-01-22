import type { Document } from '@contentful/rich-text-types'

export type Sys = {
  id: string
  publishedAt: string
}

export type ContentfulMetadata = {
  tags: {
    id: string
    name: string
  }[]
}

export interface ArticleTextLinks {
  assets: {
    block: ArticleTextAsset[]
  }
  entries: {
    block: BlogType[]
    inline: BlogType[]
  }
}

export interface ArticleTextAsset {
  sys: Sys
  title: string
  description: string
  url: string
}

export type BlogType = {
  sys: Sys
  contentfulMetadata: ContentfulMetadata
  thumnail: {
    title: string
    url: string
  }
  title: string
  body: {
    json: Document
    links: ArticleTextLinks
  }
}

export type BlogQuery = {
  blog: BlogType
}
