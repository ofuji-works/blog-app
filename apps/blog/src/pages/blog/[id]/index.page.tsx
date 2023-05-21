import { ReactElement } from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'

import type { NextPageWithLayout } from '@/pages/_app.page'

import { GET_BLOG_QUERY, GET_BLOGS_QUERY, BlogsQuery, BlogBody } from '@/features/blog'
import { UnstyledLayout } from '@/layouts'
import { initializeApollo, addApolloState } from '@/libs'

type Props = {
  id: string
}
const Page: NextPageWithLayout<Props> = ({ id }) => {
  return <BlogBody id={id} />
}

Page.getLayout = (page: ReactElement) => {
  return <UnstyledLayout>{page}</UnstyledLayout>
}

export const getStaticProps: GetStaticProps<Props, { id: string }> = async ({ params }) => {
  if (!params) {
    return {
      notFound: true,
    }
  }
  const client = initializeApollo()
  await client.query({
    query: GET_BLOG_QUERY,
    variables: {
      id: params.id,
      preview: false,
    },
  })
  return addApolloState(client, {
    props: {
      id: params.id,
    },
  })
}

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  const client = initializeApollo()
  const { data } = await client.query<BlogsQuery>({
    query: GET_BLOGS_QUERY,
    variables: {
      preview: false,
    },
  })
  return {
    paths: data.blogCollection.items.map((item) => {
      return {
        params: {
          id: item.sys.id,
        },
      }
    }),
    fallback: false,
  }
}

export default Page
