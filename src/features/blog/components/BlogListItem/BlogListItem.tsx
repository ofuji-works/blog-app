import { FC } from 'react'
import NextLink from 'next/link'
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer'

import { Card, Title, Body, Tags, Datetime, Link, framerVariant } from './BlogListItem.styles'

import type { Document } from '@contentful/rich-text-types'

import { Tag } from '@/components'
import { getDayjs } from 'libs'

export interface BlogListItemProps {
  title: string
  json: Document
  tags?: string[]
  datetime: string
  href: string
}

export const BlogListItem: FC<BlogListItemProps> = ({ title, json, tags, datetime, href }) => {
  const dayjs = getDayjs()
  return (
    <Card variants={framerVariant} whileHover="hover">
      <Title>{title}</Title>
      <Body>{documentToPlainTextString(json)}</Body>
      <Tags gap={'4px'}>{tags && tags.map((tag) => <Tag key={`tag-${tag}`} label={tag} />)}</Tags>
      <Datetime>{dayjs(datetime).format('YYYY.MM.DD')}</Datetime>
      <NextLink href={href} passHref>
        <Link />
      </NextLink>
    </Card>
  )
}
