import dynamic from 'next/dynamic'
import { Suspense } from 'react'

import type { NextPage } from 'next'

import { initializeApollo, addApolloState } from '@/libs'
import { GET_BLOGS_QUERY, GET_TAGS_QUERY } from '@/features'
import { Container, Layout } from '@/components'

const BlogList = dynamic(() => import('@/features/blog/BlogList'))
const TagLinks = dynamic(() => import('@/features/tag_links/TagLinks'))

const Page: NextPage = () => {
  return (
    <Layout title="home" mainMargin={'4rem 0 0 0'}>
      <Container>
        <Suspense fallback={<div>...loading</div>}>
          <BlogList />
        </Suspense>
      </Container>
      <TagLinks />
    </Layout>
  )
}

export const getStaticProps = async () => {
  const client = initializeApollo()
  await client.query({
    query: GET_TAGS_QUERY,
  })
  await client.query({
    query: GET_BLOGS_QUERY,
    variables: {
      preview: false,
    },
  })
  return addApolloState(client, {
    props: {},
  })
}

export default Page
