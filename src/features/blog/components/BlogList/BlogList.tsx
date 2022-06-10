import { FC } from 'react'

import { BlogListItem, BlogListItemProps } from '../BlogListItem'

import { Pager } from '@/components'

export type BlogListProps = {
  items: BlogListItemProps[]
}

export const BlogList: FC<BlogListProps> = ({ items }) => {
  return <Pager<BlogListItemProps> items={items} component={BlogListItem} />
}
