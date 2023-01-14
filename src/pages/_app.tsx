import type { ReactNode, ReactElement } from 'react'

import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

import { RootProvider } from '@/providers'

// eslint-disable-next-line @typescript-eslint/ban-types
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  return <RootProvider pageProps={pageProps}>{getLayout(<Component {...pageProps} />)}</RootProvider>
}

export default MyApp
