import { FC } from 'react'
import { useQuery } from '@apollo/client'

import { List } from '../components'
import { GET_BLOGS_QUERY, BlogsQuery } from '../queries'

type Props = {
  tag?: string
}

export const BlogList: FC<Props> = ({ tag }) => {
  const { data, loading, error } = useQuery<BlogsQuery>(GET_BLOGS_QUERY, {
    variables: {
      tags: tag ? [tag] : undefined,
    },
  })

  if (!data || error) {
    return <p>no data</p>
  }

  const items = data.blogCollection.items.map((item) => {
    return {
      thumnail: item.thumnail,
      title: item.title,
      json: item.body.json,
      tags: item.contentfulMetadata.tags,
      datetime: item.sys.publishedAt,
      href: `/blog/${item.sys.id}`,
    }
  })

  return <List items={items} />
}
