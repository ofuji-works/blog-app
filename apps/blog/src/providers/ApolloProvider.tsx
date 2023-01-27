import { FC, ReactNode } from 'react'
import { ApolloProvider as Provider } from '@apollo/client'

import { useApollo } from '@/libs'

type Props = {
  children: ReactNode
  pageProps: any
}

export const ApolloProvider: FC<Props> = ({ children, pageProps }) => {
  const client = useApollo(pageProps)
  return <Provider client={client}>{children}</Provider>
}
