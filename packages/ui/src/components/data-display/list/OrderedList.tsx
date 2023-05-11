import React from 'react'
import { OrderedList as ChakraOrderedList } from '@chakra-ui/react'

type Props = {
  children: React.ReactNode
}
export const OrderedList: React.FC<Props> = ({ children }) => {
  return <ChakraOrderedList>{children}</ChakraOrderedList>
}
