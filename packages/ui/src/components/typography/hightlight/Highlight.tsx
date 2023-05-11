import React from 'react'
import { Highlight as ChakraHighlight } from '@chakra-ui/react'

type Props = { children: string; query: string[] }
export const Highlight: React.FC<Props> = ({ children, query }) => {
  return (
    <ChakraHighlight query={query} styles={{ px: '1', py: '1', bg: 'cyan.200' }}>
      {children}
    </ChakraHighlight>
  )
}
