import { graphql } from 'msw'

export const handlers = [
  graphql.query('GetBlog', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.data({
        blog: {
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
            nodeType: 'document',
            data: {},
            content: [
              {
                nodeType: 'heading-1',
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
                nodeType: 'heading-2',
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
                nodeType: 'paragraph',
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
              { nodeType: 'embedded-entry-block', data: [{}], content: [] },
              {
                nodeType: 'unordered-list',
                data: {},
                content: [
                  {
                    nodeType: 'list-item',
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
                        nodeType: 'paragraph',
                      },
                    ],
                  },
                  {
                    nodeType: 'list-item',
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
                        nodeType: 'paragraph',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        },
      }),
    )
  }),

  graphql.query('GetBlogs', (req, res, ctx) => {
    return res(
      ctx.data({
        blogCollection: {
          items: [
            {
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
                json: {
                  nodeType: 'document',
                  data: {},
                  content: [
                    {
                      nodeType: 'heading-1',
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
                      nodeType: 'heading-2',
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
                      nodeType: 'paragraph',
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
                    { nodeType: 'embedded-entry-block', data: [{}], content: [] },
                    {
                      nodeType: 'unordered-list',
                      data: {},
                      content: [
                        {
                          nodeType: 'list-item',
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
                              nodeType: 'paragraph',
                            },
                          ],
                        },
                        {
                          nodeType: 'list-item',
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
                              nodeType: 'paragraph',
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              },
            },
          ],
        },
      }),
    )
  }),

  graphql.query('GetTags', (req, res, ctx) => {
    console.log(req.body)
    return res(
      ctx.data({
        tagCollection: { items: [{ contentfulMetadata: { tags: [{ id: 'react', name: 'React' }] } }] },
      }),
    )
  }),
]
