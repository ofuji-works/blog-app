import { FC } from 'react'
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer'
import NextLink from 'next/link'

import { EmbeddedEntryBlock as Entries } from '../../queries'

import { Card, Description, Domain, framerVariant, Link, Title } from './EmbeddedEntryBlock.styles'

import { APP_URL } from '@/config'

type Props = {
  id: string
  entries: Entries[]
}

export const EmbeddedEntryBlock: FC<Props> = ({ id, entries }) => {
  const entry = entries.find((entry) => entry.sys.id === id)
  return (
    <Card variants={framerVariant} whileHover="hover">
      <Title as="h2">{entry?.title}</Title>
      {entry?.body.json && <Description>{documentToPlainTextString(entry?.body.json)}</Description>}
      <Domain>{APP_URL}</Domain>
      <NextLink href={`${APP_URL}/blog/${id}`} passHref>
        <Link />
      </NextLink>
    </Card>
  )
}
