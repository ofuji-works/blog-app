import { FC } from 'react'

import { Blog } from '../Blog'

import { Pager } from '@/components'

type Props = {
  items: any[]
}

export const BlogList: FC<Props> = ({ items }) => {
  return <Pager items={items} component={Blog} />
}
