import React from 'react'
import { Container as ChakraContainer } from '@chakra-ui/react'

type Props = {
  children: React.ReactNode
}
export const Container: React.FC<Props> = ({ children }) => <ChakraContainer maxWidth={900}>{children}</ChakraContainer>
