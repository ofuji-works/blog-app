import { BLOCKS } from '@contentful/rich-text-types'

import type { Document } from '@contentful/rich-text-types'
import type { BlogType, BlogQuery, ArticleTextAsset, ArticleTextLinks } from '@/features'

export const documentMock: Document = {
  nodeType: BLOCKS.DOCUMENT,
  data: {},
  content: [
    {
      nodeType: BLOCKS.HEADING_1,
      data: {},
      content: [
        {
          nodeType: 'text',
          value: 'H1タイトル',
          marks: [],
          data: {},
        },
      ],
    },
    {
      nodeType: BLOCKS.HEADING_2,
      data: {},
      content: [
        {
          nodeType: 'text',
          value: 'H2タイトル',
          marks: [],
          data: {},
        },
      ],
    },
    {
      nodeType: BLOCKS.PARAGRAPH,
      data: {},
      content: [
        {
          nodeType: 'text',
          value: 'こちらはモックのテキストになります。',
          marks: [],
          data: {},
        },
      ],
    },
    {
      nodeType: BLOCKS.EMBEDDED_ENTRY,
      data: { target: { sys: { id: '6ThQWAH7g829u0zgEHfJRT', type: 'Link', linkType: 'Entry' } } },
      content: [],
    },
    {
      nodeType: BLOCKS.UL_LIST,
      data: {},
      content: [
        {
          nodeType: BLOCKS.LIST_ITEM,
          data: {},
          content: [
            {
              content: [
                {
                  nodeType: 'text',
                  value: 'list1',
                  marks: [],
                  data: {},
                },
              ],
              data: {},
              nodeType: BLOCKS.PARAGRAPH,
            },
          ],
        },
        {
          nodeType: BLOCKS.LIST_ITEM,
          data: {},
          content: [
            {
              content: [
                {
                  nodeType: 'text',
                  value: 'list2',
                  marks: [],
                  data: {},
                },
              ],
              data: {},
              nodeType: BLOCKS.PARAGRAPH,
            },
          ],
        },
      ],
    },
  ],
}

export const articleTextAssetMock: ArticleTextAsset[] = [
  {
    sys: {
      id: 'mock',
      publishedAt: 'string',
    },
    title: 'mock',
    description: '',
    url: '',
  },
]

export const articleTextLinksMock: ArticleTextLinks = {
  assets: {
    block: articleTextAssetMock,
  },
  entries: { block: [], inline: [] },
}

export const blogMock: BlogType = {
  sys: {
    id: '5PItSJtgrjzwTtXwE8PtDU',
    publishedAt: '2022-06-20T17:04:03.500Z',
  },
  contentfulMetadata: {
    tags: [
      {
        id: 'react',
        name: 'React',
      },
    ],
  },
  thumnail: {
    title: 'mock',
    url: '/mock.png',
  },
  title: 'モック記事',
  body: {
    json: documentMock,
    links: articleTextLinksMock,
  },
}

export const blogQueryMock: BlogQuery = {
  blog: blogMock,
}

export const blogListItemMock = {
  thumnail: {
    title: 'Sample URL',
    url: '/mock.jpg',
  },
  title: '',
  json: documentMock,
  tags: [{ id: 'mock', name: 'Mock' }],
  datetime: '2022.08.22',
  href: '',
}
