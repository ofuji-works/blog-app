import React from 'react'
import { UnorderedList as ChakraUnorderedList } from '@chakra-ui/react'

type Props = {
  children: React.ReactNode
}
export const UnorderedList: React.FC<Props> = ({ children }) => {
  return <ChakraUnorderedList>{children}</ChakraUnorderedList>
}
