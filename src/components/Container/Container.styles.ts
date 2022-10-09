import { Box, chakra } from '@chakra-ui/react'

export const ContainerComponent = chakra(Box, {
  baseStyle: {
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: {
      base: '100%',
      sm: '960px',
    },
    gap: {
      base: 4,
      sm: 7.5,
    },
    padding: '2.5%',
  },
})
