import { FC } from 'react'

import { BlogListItem, BlogListItemProps } from '../BlogListItem'

import { Pager } from '@/components'

type Props = {
  items: BlogListItemProps[]
  loading?: boolean
}

export const BlogList: FC<Props> = ({ items, loading }) => {
  if (loading) {
    return <p>...loading</p>
  }
  return <Pager<BlogListItemProps> items={items} component={BlogListItem} />
}
