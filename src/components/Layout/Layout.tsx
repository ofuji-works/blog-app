import { FC, ReactNode } from 'react'
import Head from 'next/head'

import { Header, VStackContainer } from '@/components'

type Props = {
  children: ReactNode
  title: string
}

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <VStackContainer>
      <Head>
        <title>ofuji portfolio - {title}</title>
        <meta property="og:title" content="ofuji portfolio" key="title" />
      </Head>
      <Header />
      {children}
    </VStackContainer>
  )
}
