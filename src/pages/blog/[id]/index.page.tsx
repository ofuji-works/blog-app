import { ReactElement } from 'react'
import dynamic from 'next/dynamic'
import { GetStaticProps, GetStaticPaths } from 'next'
import { useQuery } from '@apollo/client'

import type { NextPageWithLayout } from '../../_app.page'

import { GET_BLOG_QUERY, GET_BLOGS_QUERY, BlogQuery, BlogsQuery } from '@/features/blog'
import { UnstyledLayout } from '@/layouts'
import { initializeApollo, addApolloState } from '@/libs'

const Template = dynamic(() => import('./template'), {
  loading: () => <>...Loading</>,
})

type Props = {
  id: string
}
const Page: NextPageWithLayout<Props> = ({ id }) => {
  const { data, loading, error } = useQuery<BlogQuery>(GET_BLOG_QUERY, {
    variables: {
      id,
    },
  })

  if (loading) {
    return <p>...loading</p>
  }

  if (!data || error) {
    throw new Error()
  }

  const og = {
    imgUrl: data.blog.thumnail.url,
    imgWidth: 800,
    imgHeight: 600,
  }

  return (
    <Template
      title={data.blog.title}
      thumnail={data.blog.thumnail}
      date={data.blog.sys.publishedAt}
      document={data.blog.body.json}
      links={data.blog.body.links}
    />
  )
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
