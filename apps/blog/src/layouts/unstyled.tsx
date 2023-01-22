import type { FC, ReactNode } from 'react'

import { Box, Container } from '@chakra-ui/react'

type Props = {
  children: ReactNode
}

export const UnstyledLayout: FC<Props> = ({ children }) => {
  return (
    <Box backgroundColor="gray.50">
      <Container maxW="900px">{children}</Container>
    </Box>
  )
}
