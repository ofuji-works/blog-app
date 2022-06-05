import { ChakraProvider } from '@chakra-ui/react'
import { FC, ReactNode } from 'react'
import { RecoilRoot } from 'recoil'

import type { AppProps } from 'next/app'

import { theme } from '@/assets/index.styles'
import { Container } from '@/components'

type Props = {
  children: ReactNode
}

const RootProvider: FC<Props> = ({ children }) => {
  return (
    <RecoilRoot>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </RecoilRoot>
  )
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RootProvider>
      <Container>
        <Component {...pageProps} />
      </Container>
    </RootProvider>
  )
}

export default MyApp
