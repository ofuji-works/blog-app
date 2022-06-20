import { FC } from 'react'
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer'
import NextLink from 'next/link'

import { EmbeddedEntryBlock as Entries } from '../../queries'

import {
  Card,
  ContentContainer,
  Description,
  Figure,
  framerVariant,
  Image,
  Link,
  Title,
} from './EmbeddedEntryBlock.styles'

type Props = {
  id: string
  entries: Entries[]
}

export const EmbeddedEntryBlock: FC<Props> = ({ id, entries }) => {
  const entry = entries.find((entry) => entry.sys.id === id)
  return (
    <Card variants={framerVariant} whileHover="hover">
      <Figure>
        <Image src={entry?.thumnail.url} alt={entry?.thumnail.url} />
      </Figure>
      <ContentContainer>
        <Title as="h2">{entry?.title}</Title>
        {entry?.body.json && <Description>{documentToPlainTextString(entry?.body.json)}</Description>}
      </ContentContainer>
      <NextLink href={`/blog/${id}`} passHref>
        <Link />
      </NextLink>
    </Card>
  )
}
