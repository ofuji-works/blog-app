import { TagsQuery } from '@/features'

export const tagMock = { id: 'tag', name: 'Tag' }

export const tagsMock = new Array(5).fill(tagMock)

export const tagsQueryMock: TagsQuery = {
  tagCollection: { items: [{ contentfulMetadata: { tags: tagsMock } }] },
}
