import type { FC, ReactNode } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../theme'

type Props = {
  children: ReactNode
}
export const UIProvider: FC<Props> = ({ children }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}
