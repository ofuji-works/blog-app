import { FC } from 'react'

import { BlogListItem } from '../BlogListItem'

import { Pager } from '@/components'

type Props = {
  items: any[]
}

export const BlogList: FC<Props> = ({ items }) => {
  return <Pager items={items} component={BlogListItem} />
}
