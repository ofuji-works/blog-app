import { graphql } from 'msw'

import { blogQueryMock, blogMock } from './blog'
import { tagsQueryMock } from './tag'

export const handlers = [
  graphql.query('GetBlog', (req, res, ctx) => {
    return res(ctx.status(200), ctx.data(blogQueryMock))
  }),

  graphql.query('GetBlogs', (req, res, ctx) => {
    return res(
      ctx.data({
        blogCollection: {
          items: [blogMock],
        },
      }),
    )
  }),

  graphql.query('GetTags', (req, res, ctx) => {
    return res(ctx.data(tagsQueryMock))
  }),
]
