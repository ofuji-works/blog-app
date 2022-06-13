import type { FC } from 'react'

import { PCImage, SPImage } from './KeyVisual.styles'
export const KeyVisual: FC = () => {
  return (
    <>
      <PCImage src="/main-visual.png" alt="ofuji-works" />
      <SPImage src="/main-visual-sp.png" alt="ofuji-works" />
    </>
  )
}
