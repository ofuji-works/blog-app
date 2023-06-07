import React from 'react'
import { Text as ChakraText, TextProps } from '@chakra-ui/react'

export const Text: React.FC<TextProps> = (props) => {
  return <ChakraText variant="p" {...props} />
}
