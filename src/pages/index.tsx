import type { NextPage } from 'next'

import {} from '@/features/blogs'
import { Profile } from '@/features/profile'
import { SearchTagLinks } from '@/features/tag_links'

const categories = ['React']
const tags = ['React']

const Home: NextPage = () => {
  return <SearchTagLinks categories={categories} tags={tags} />
}

export default Home
