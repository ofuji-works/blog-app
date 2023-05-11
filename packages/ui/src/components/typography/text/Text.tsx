import React from 'react'
import { Text as ChakraText } from '@chakra-ui/react'

type Props = {
  children: React.ReactNode
}
export const Text: React.FC<Props> = ({ children }) => {
  return <ChakraText variant="p">{children}</ChakraText>
}
