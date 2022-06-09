import type { FC } from 'react'

import NextImage from 'next/image'

export const KeyVisual: FC = () => {
  return <NextImage src="/main-visual.png" alt="ofuji-works" layout="fixed" width="100%" height={200} priority />
}
