import React from 'react'
import { Box } from '@chakra-ui/react'

import { Text } from '@packages/ui'

type Props = {
  children: React.ReactNode
}
export const Quotation: React.FC<Props> = ({ children }) => {
  return (
    <Box paddingLeft="16px" paddingY="8px" borderLeft="4px" borderLeftColor="gray.400">
      <Text opacity={0.6}>{children}</Text>
    </Box>
  )
}
