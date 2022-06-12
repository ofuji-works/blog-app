import { ChakraProvider } from '@chakra-ui/react'
import { FC, ReactNode } from 'react'
import { RecoilRoot } from 'recoil'

import { ApolloProvider } from './ApolloProvider'

import { theme } from '@/assets/index.styles'

type Props = {
  children: ReactNode
  pageProps: any
}

export const RootProvider: FC<Props> = ({ children, pageProps }) => {
  return (
    <RecoilRoot>
      <ApolloProvider pageProps={pageProps}>
        <ChakraProvider resetCSS theme={theme}>
          {children}
        </ChakraProvider>
      </ApolloProvider>
    </RecoilRoot>
  )
}
