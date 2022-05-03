import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { FC } from 'react'
import { RecoilRoot } from 'recoil'

// テーマカラー設定
const colors = {}
const theme = extendTheme({ colors })

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
