import { Box, chakra } from '@chakra-ui/react'

export const ContainerComponent = chakra(Box, {
  baseStyle: {
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: {
      base: 'unset',
      sm: '960px',
    },
    gap: {
      base: 4,
      sm: 7.5,
    },
    padding: {
      base: '2.5%',
      sm: 'unset',
    },
  },
})
