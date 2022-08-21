import { FC } from 'react'
import NextLink from 'next/link'
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer'

import {
  Card,
  ContentContainer,
  Figure,
  Title,
  Body,
  Tags,
  Datetime,
  Link,
  framerVariant,
  Image,
  ImageWrapper,
} from './styles'

import type { Document } from '@contentful/rich-text-types'

import { Tag } from '@/components'
import { getDayjs } from '@/libs'

export interface BlogListItemProps {
  thumnail: {
    title: string
    url: string
  }
  title: string
  json: Document
  tags?: { id: string; name: string }[]
  datetime: string
  href: string
}

export const BlogListItem: FC<BlogListItemProps> = ({ title, json, datetime, href, thumnail, tags }) => {
  const dayjs = getDayjs()
  return (
    <Card variants={framerVariant} whileHover="hover" role="link">
      <ImageWrapper>
        <Figure>
          <Image
            src={thumnail.url}
            alt={thumnail.title}
            placeholder="blur"
            blurDataURL={`${thumnail.url}?q=1`}
            layout="fill"
            objectFit="contain"
          />
        </Figure>
      </ImageWrapper>
      <ContentContainer>
        <Title>{title}</Title>
        <Body>{documentToPlainTextString(json)}</Body>
        <Tags gap={'4px'}>{tags && tags.map((tag) => <Tag key={`tag-${tag.id}`} label={tag.name} />)}</Tags>
        <Datetime>{dayjs(datetime).format('YYYY.MM.DD')}</Datetime>
      </ContentContainer>
      <NextLink href={href} passHref>
        <Link />
      </NextLink>
    </Card>
  )
}
