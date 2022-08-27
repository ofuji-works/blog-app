import { FC } from 'react'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'

import { SearchTagLinks } from '../components'
import { GET_TAGS_QUERY, TagsQuery } from '../queries'

export const EnhancedSearchTagLinks: FC = () => {
  const categories: string[] = []
  const { push } = useRouter()
  const { data, loading } = useQuery<TagsQuery>(GET_TAGS_QUERY, {
    variables: {
      preview: false,
    },
  })

  if (loading) {
    return <p>...loading</p>
  }

  const clickHandler = (tagId: string) => {
    push(`/blog?tag=${tagId}`)
  }

  return <SearchTagLinks tags={data} loading={loading} categories={categories} onClick={clickHandler} />
}
