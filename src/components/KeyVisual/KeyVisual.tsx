import type { FC } from 'react'

import NextImage, { ImageLoader } from 'next/image'

const loader: ImageLoader = ({ src, width, quality }) => {
  return `https://placehold.jp/${src}?w=${width}&q=${quality || 75}`
}

export const KeyVisual: FC = () => {
  return <NextImage loader={loader} src="1440x600.png" alt="main image" width="100%" height="300px" />
}
