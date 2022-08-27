import dynamic from 'next/dynamic'
import { Suspense } from 'react'

import type { NextPage } from 'next'

import { initializeApollo, addApolloState } from '@/libs'
import { GET_BLOGS_QUERY, GET_TAGS_QUERY } from '@/features'
import { Breadcrumb, Container, Layout } from '@/components'

const BlogList = dynamic(() => import('@/features/blog/BlogList'))
const TagLinks = dynamic(() => import('@/features/tag_links/TagLinks'))

const Page: NextPage<{ tag: string }> = ({ tag }) => {
  return (
    <Layout title="blog" mainMargin={'4rem 0 0 0'}>
      <Container>
        <Breadcrumb />
        <Suspense fallback={<div>...loading</div>}>
          <BlogList tag={tag} />
        </Suspense>
      </Container>
      <TagLinks />
    </Layout>
  )
}

export const getServerSideProps = async ({ query }: { query: { tag: string } }) => {
  const client = initializeApollo()
  await client.query({
    query: GET_TAGS_QUERY,
  })
  await client.query({
    query: GET_BLOGS_QUERY,
    variables: {
      tags: [query.tag],
    },
  })
  return addApolloState(client, {
    props: {
      tag: query.tag,
    },
  })
}

export default Page
