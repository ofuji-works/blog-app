import { FC } from 'react'

import { ArticleTextAsset } from '../../queries'

import { Card, Description, Domain, DomainArea, Favicon, framerVariant, Link, Title } from './EmbeddedLink.styles'

type Props = {
  id: string
  assets: ArticleTextAsset[]
}

const faviconBaseURL = 'https://www.google.com/s2/favicons?sz=14&domain_url='

export const EmbeddedLink: FC<Props> = ({ id, assets }) => {
  const asset = assets.find((asset) => asset.sys.id === id)
  return (
    <Card variants={framerVariant} whileHover="hover">
      <Title as="h2">{asset?.title}</Title>
      {asset?.description && <Description>{asset?.description}</Description>}
      {asset?.url && (
        <>
          <DomainArea>
            <Favicon src={`${faviconBaseURL}${new URL(asset.url).origin}`} alt={asset.url} />
            <Domain>{new URL(asset.url).origin}</Domain>
          </DomainArea>
          <Link href={asset.url} target="_blank" />
        </>
      )}
    </Card>
  )
}
