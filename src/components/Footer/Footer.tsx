import type { FC } from 'react'

import { Copyright } from './Footer.styles'

import { SNSArea } from '@/components'

export const Footer: FC = () => {
  return (
    <>
      <SNSArea />
      <Copyright>©ofuji-works.com</Copyright>
    </>
  )
}
