import type { NextPage } from 'next'

import { initializeApollo, addApolloState } from '@/libs'
import { BlogList, SearchTagLinks, BlogListItemProps, GET_BLOGS_QUERY, BlogsQuery } from '@/features'
import { Container, Layout } from '@/components'

const categories = ['React']
const tags = ['React']

type Props = {
  items: BlogListItemProps[]
}

const Page: NextPage<Props> = ({ items }) => {
  return (
    <Layout title="blog" mainMargin={'4rem 0 0 0'}>
      <Container>
        <BlogList items={items} />
      </Container>
      <SearchTagLinks categories={categories} tags={tags} />
    </Layout>
  )
}

export const getStaticProps = async () => {
  const client = initializeApollo()
  const { data } = await client.query<BlogsQuery>({
    query: GET_BLOGS_QUERY,
    variables: {
      preview: false,
    },
  })
  const items: BlogListItemProps[] = data.blogCollection.items.map((item) => {
    return {
      thumnail: item.thumnail,
      title: item.title,
      json: item.body.json,
      tags: item.contentfulMetadata.tags,
      datetime: item.sys.publishedAt,
      href: `/blog/${item.sys.id}`,
    }
  })
  return addApolloState(client, {
    props: {
      items,
    },
  })
}

export default Page
