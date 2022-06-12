import type { NextPage } from 'next'

import { initializeApollo, addApolloState } from '@/libs'
import { BlogList, SearchTagLinks, Profile, BlogListItemProps, GET_BLOGS_QUERY, BlogsQuery } from '@/features'
import { TwoColumnContainer, KeyVisual } from '@/components'
import { APP_URL } from '@/config'

const categories = ['React']
const tags = ['React']

type Props = {
  items: BlogListItemProps[]
}

const Home: NextPage<Props> = ({ items }) => {
  return (
    <>
      <KeyVisual />
      <TwoColumnContainer LeftComponent={() => <BlogList items={items} />} RightComponent={() => <Profile />} />
      <SearchTagLinks categories={categories} tags={tags} />
    </>
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
      title: item.title,
      json: item.body.json,
      tags: [],
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
