import { FC, ReactNode } from 'react'
import Head from 'next/head'

import { Footer, Header, VStackContainer } from '@/components'
import { TWITTER_ID } from '@/config'

type Props = {
  children: ReactNode
  title: string
  mainMargin?: string | number
  og?: {
    imgUrl: string
    imgWidth: number
    imgHeight: number
  }
}

export const Layout: FC<Props> = ({ children, title, mainMargin, og }) => {
  return (
    <>
      <Head>
        <title>ofuji portfolio - {title}</title>
        <meta property="og:title" content={title} />
        <meta property="og:site_name" content="ofuji portfolio" />
        <meta property="og:type" content="website" />
        {og && (
          <>
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content={TWITTER_ID} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content="" />
            <meta name="twitter:image" content={og.imgUrl} />
            <meta property="og:image" content={og.imgUrl} />
            <meta property="og:image:width" content={String(og.imgWidth)} />
            <meta property="og:image:height" content={String(og.imgHeight)} />
          </>
        )}
      </Head>
      <Header />
      <VStackContainer as="main" margin={mainMargin}>
        {children}
      </VStackContainer>
      <Footer />
    </>
  )
}
