import { ChakraProvider } from '@chakra-ui/react'
import { FC } from 'react'
import { RecoilRoot } from 'recoil'

import type { AppProps } from 'next/app'

import { theme } from '@/assets/index.styles'

const RootProvider: FC = ({ children }) => {
  return (
    <RecoilRoot>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </RecoilRoot>
  )
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RootProvider>
      <Component {...pageProps} />
    </RootProvider>
  )
}

export default MyApp
