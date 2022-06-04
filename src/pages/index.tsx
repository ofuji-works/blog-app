import type { NextPage } from 'next'

import { BlogList, SearchTagLinks, Profile } from '@/features'
import { TwoColumnContainer } from '@/components'

const categories = ['React']
const tags = ['React']
const items = ['React']

const Home: NextPage = () => {
  return (
    <>
      <TwoColumnContainer LeftComponent={() => <BlogList items={items} />} RightComponent={() => <Profile />} />
      <SearchTagLinks categories={categories} tags={tags} />
    </>
  )
}

export default Home
