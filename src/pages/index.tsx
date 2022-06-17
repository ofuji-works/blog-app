import type { NextPage } from 'next'

import { initializeApollo, addApolloState } from '@/libs'
import { BlogList, SearchTagLinks, Profile, BlogListItemProps, GET_BLOGS_QUERY, BlogsQuery } from '@/features'
import { Container, TwoColumnContainer, KeyVisual, Layout } from '@/components'
import { APP_URL } from '@/config'

const categories = ['React']
const tags = ['React']

type Props = {
  items: BlogListItemProps[]
}

const Home: NextPage<Props> = ({ items }) => {
  return (
    <Layout title="top">
      <KeyVisual />
      <Container>
        <TwoColumnContainer LeftComponent={() => <BlogList items={items} />} RightComponent={() => <Profile />} />
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
      href: `${APP_URL}/blog/${item.sys.id}`,
    }
  })
  return addApolloState(client, {
    props: {
      items,
    },
  })
}

export default Home
