import { ChakraProvider as Provider } from '@chakra-ui/react'
import { FC, ReactNode } from 'react'

import { theme } from '@packages/ui'

export const ChakraProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Provider resetCSS theme={theme}>
      {children}
    </Provider>
  )
}
