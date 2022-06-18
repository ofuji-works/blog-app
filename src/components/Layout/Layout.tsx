import { FC, ReactNode } from 'react'
import Head from 'next/head'

import { Header, VStackContainer } from '@/components'

type Props = {
  children: ReactNode
  title: string
  mainMargin?: string | number
}

export const Layout: FC<Props> = ({ children, title, mainMargin }) => {
  return (
    <>
      <Head>
        <title>ofuji portfolio - {title}</title>
        <meta property="og:title" content="ofuji portfolio" key="title" />
      </Head>
      <Header />
      <VStackContainer as="main" margin={mainMargin}>
        {children}
      </VStackContainer>
    </>
  )
}
