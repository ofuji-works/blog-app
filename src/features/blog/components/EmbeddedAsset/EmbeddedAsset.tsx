import { FC } from 'react'

import { ArticleTextAsset } from '../../queries'

import { Card, Image } from './EmbeddedAsset.styles'

type Props = {
  id: string
  assets: ArticleTextAsset[]
}

export const EmbeddedAsset: FC<Props> = ({ id, assets }) => {
  const asset = assets.find((asset) => asset.sys.id === id)
  return <Card>{asset?.url && <Image src={asset?.url} alt={asset.title} />}</Card>
}
