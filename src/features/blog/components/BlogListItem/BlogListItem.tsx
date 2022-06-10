import { FC } from 'react'
import NextLink from 'next/link'
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer'

import { Card, Title, Body, Tags, Datetime, Link, framerVariant } from './BlogListItem.styles'

import type { Document } from '@contentful/rich-text-types'

import { useBreakPoints } from '@/hooks'
import { Tag } from '@/components'

export interface BlogListItemProps extends Blog.BlogListItem {
  body: Document
}

export const BlogListItem: FC<BlogListItemProps> = ({ title, body, tags, datetime, href }) => {
  const { isSP } = useBreakPoints()
  return (
    <Card variants={framerVariant} whileHover="hover">
      <Title>{title}</Title>
      {!isSP && <Body>{documentToPlainTextString(body)}</Body>}
      <Tags gap={'4px'}>{tags && tags.map((tag) => <Tag key={`tag-${tag}`} label={tag} />)}</Tags>
      <Datetime>{datetime}</Datetime>
      <NextLink href={href} passHref>
        <Link />
      </NextLink>
    </Card>
  )
}
