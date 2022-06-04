import { FC } from 'react'
import NextLink from 'next/link'

import { Card, Title, Body, Tags, Datetime, Link } from './Blog.styles'

import { useBreakPoints } from '@/hooks'
import { Tag } from '@/components'

type Props = {
  title: string
  body: string
  tags?: string[]
  datetime: string
  href: string
}

export const Blog: FC<Props> = ({ title, body, tags, datetime, href }) => {
  const { isSP } = useBreakPoints()
  return (
    <Card align="left">
      <Title>{title}</Title>
      {!isSP && <Body>{body}</Body>}
      <Tags gap={'4px'}>{tags && tags.map((tag) => <Tag key={`tag-${tag}`} label={tag} />)}</Tags>
      <Datetime>{datetime}</Datetime>
      <NextLink href={href}>
        <Link />
      </NextLink>
    </Card>
  )
}
