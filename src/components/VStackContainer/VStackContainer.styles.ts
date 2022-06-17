import { chakra, VStack as ChakraVStack } from '@chakra-ui/react'

export const VStack = chakra(ChakraVStack, {
  baseStyle: {
    display: 'flex',
    flexDirection: 'column',
    gap: {
      base: 4,
      sm: 7.5,
    },
  },
})
