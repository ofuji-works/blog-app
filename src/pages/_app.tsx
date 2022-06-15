import type { AppProps } from 'next/app'

import { RootProvider } from '@/providers'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RootProvider pageProps={pageProps}>
      <Component {...pageProps} />
    </RootProvider>
  )
}

export default MyApp
