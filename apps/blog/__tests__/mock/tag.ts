import { TagsQuery } from '@/features'

export const tagsMock = [
  { id: 'tag1', name: 'Tag1' },
  { id: 'tag10', name: 'Tag10' },
  { id: 'tag100', name: 'Tag100' },
  { id: 'tag1000', name: 'Tag1000' },
  { id: 'tag10000', name: 'Tag10000' },
  { id: 'tag100000', name: 'Tag100000' },
]

export const tagsQueryMock: TagsQuery = {
  tagCollection: { items: [{ contentfulMetadata: { tags: tagsMock } }] },
}
