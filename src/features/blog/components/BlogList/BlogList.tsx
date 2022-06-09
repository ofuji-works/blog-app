import { FC } from 'react'

import { BlogListItem, Props as BlogListItemProps } from '../BlogListItem'

import { Pager } from '@/components'

type Props = {
  items: BlogListItemProps[]
}

export const BlogList: FC<Props> = ({ items }) => {
  return <Pager<BlogListItemProps> items={items} component={BlogListItem} />
}
