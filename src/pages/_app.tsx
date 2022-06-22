import type { AppProps } from 'next/app'

import { RootProvider } from '@/providers'

function MyApp({ Component, pageProps }: AppProps) {
  if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
    const mockStart = () => import('../../.mock')
    mockStart()
  }

  return (
    <RootProvider pageProps={pageProps}>
      <Component {...pageProps} />
    </RootProvider>
  )
}

export default MyApp
