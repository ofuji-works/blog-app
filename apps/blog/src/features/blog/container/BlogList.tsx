import { FC } from 'react'
import { useQuery } from '@apollo/client'

import { BlogCollection } from '@/graphql/graphql'

import { List } from '../components'
import { GET_BLOGS_QUERY } from '../queries'

type Props = {
  tag?: string
}

export const BlogList: FC<Props> = ({ tag }) => {
  const { data, loading, error } = useQuery<{ blogCollection: BlogCollection }>(GET_BLOGS_QUERY, {
    variables: {
      tags: tag ? [tag] : undefined,
    },
  })

  if (!data || error) {
    return null
  }

  const items = data.blogCollection.items.map((item) => {
    return {
      thumnail: {
        title: item?.thumnail?.title ?? '',
        url: item?.thumnail?.url ?? '',
      },
      title: item?.title ?? '',
      json: item?.body ?? '',
      tags: item?.contentfulMetadata.tags.map((tag) => {
        return {
          id: tag?.id ?? '',
          name: tag?.name ?? '',
        }
      }),
      datetime: item?.sys.publishedAt ?? '',
      href: `/blog/${item?.sys.id}`,
    }
  })

  return <List items={items} />
}
