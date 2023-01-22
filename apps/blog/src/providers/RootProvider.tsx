import { FC, ReactNode } from 'react'
import { RecoilRoot } from 'recoil'

import { ChakraProvider } from './ChakraProvider'
import { ApolloProvider } from './ApolloProvider'

type Props = {
  children: ReactNode
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pageProps: any
}

export const RootProvider: FC<Props> = ({ children, pageProps }) => {
  return (
    <RecoilRoot>
      <ApolloProvider pageProps={pageProps}>
        <ChakraProvider>{children}</ChakraProvider>
      </ApolloProvider>
    </RecoilRoot>
  )
}
