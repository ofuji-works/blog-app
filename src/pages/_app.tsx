import type { AppProps } from 'next/app'

import { Container } from '@/components'
import { RootProvider } from '@/providers'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RootProvider pageProps={pageProps}>
      <Container>
        <Component {...pageProps} />
      </Container>
    </RootProvider>
  )
}

export default MyApp
