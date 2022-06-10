import type { NextPage } from 'next'

import { BlogList, SearchTagLinks, Profile, BlogListItemProps } from '@/features'
import { TwoColumnContainer, KeyVisual } from '@/components'

const categories = ['React']
const tags = ['React']
const items: BlogListItemProps[] = []

const Home: NextPage = () => {
  return (
    <>
      <KeyVisual />
      <TwoColumnContainer LeftComponent={() => <BlogList items={items} />} RightComponent={() => <Profile />} />
      <SearchTagLinks categories={categories} tags={tags} />
    </>
  )
}

export default Home
