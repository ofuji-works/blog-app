import { Box, chakra } from '@chakra-ui/react'

export const ContainerComponent = chakra(Box, {
  baseStyle: {
    display: 'flex',
    flexDirection: 'column',
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
