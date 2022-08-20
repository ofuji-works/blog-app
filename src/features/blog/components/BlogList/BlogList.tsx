import { FC } from 'react'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'

import { BlogListItem, BlogListItemProps } from '../BlogListItem'
import { GET_BLOGS_QUERY, BlogsQuery } from '../../queries/getBlogs'

import { Pager } from '@/components'

type Props = {
  tag?: string
}

export const BlogList: FC<Props> = (props) => {
  const { query } = useRouter()
  const { data, loading, error } = useQuery<BlogsQuery>(GET_BLOGS_QUERY, {
    variables: {
      tags: query.tag ? [query.tag] : [],
    },
  })

  if (loading) {
    return <p>...loading</p>
  }

  if (!data || error) {
    return <p>no data</p>
  }

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

  return <Pager<BlogListItemProps> items={items} component={BlogListItem} />
}
