import { ReactElement } from 'react'

import type { NextPageWithLayout } from '../_app.page'

import { initializeApollo, addApolloState } from '@/libs'
import { GET_BLOGS_QUERY, GET_TAGS_QUERY, BlogList } from '@/features/blog'
import { MainLayout } from '@/layouts'

const Page: NextPageWithLayout<{ tag: string }> = () => {
  return <BlogList />
}

Page.getLayout = (page: ReactElement) => {
  return <MainLayout>{page}</MainLayout>
}

export const getServerSideProps = async (ctx: { query: { tag: string } }) => {
  const client = initializeApollo()
  await client.query({
    query: GET_TAGS_QUERY,
  })
  await client.query({
    query: GET_BLOGS_QUERY,
    variables: {
      tags: ctx.query.tag ? [ctx.query.tag] : undefined,
      tags_exists: !!ctx.query.tag,
    },
  })
  return addApolloState(client, {
    props: {
      tag: ctx.query.tag ?? '',
    },
  })
}

export default Page
