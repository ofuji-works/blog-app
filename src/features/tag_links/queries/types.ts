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
