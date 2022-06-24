import type { NextPage } from 'next'

import { initializeApollo, addApolloState } from '@/libs'
import { BlogList, SearchTagLinks, GET_BLOGS_QUERY, GET_TAGS_QUERY } from '@/features'
import { Breadcrumb, Container, Layout } from '@/components'

const Page: NextPage = () => {
  return (
    <Layout title="blog" mainMargin={'4rem 0 0 0'}>
      <Container>
        <Breadcrumb />
        <BlogList />
      </Container>
      <SearchTagLinks />
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
