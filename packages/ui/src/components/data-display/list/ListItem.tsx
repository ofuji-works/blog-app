import React from 'react'
import { ListItem as ChakraListItem } from '@chakra-ui/react'

type Props = {
  children: React.ReactNode
}
export const ListItem: React.FC<Props> = ({ children }) => {
  return <ChakraListItem>{children}</ChakraListItem>
}
