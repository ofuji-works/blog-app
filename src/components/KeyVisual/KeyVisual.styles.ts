import { chakra, Image } from '@chakra-ui/react'

export const PCImage = chakra(Image, {
  baseStyle: {
    display: {
      base: 'none',
      sm: 'block',
    },
    width: '100%',
  },
})

export const SPImage = chakra(Image, {
  baseStyle: {
    display: {
      base: 'block',
      sm: 'none',
    },
    width: '100%',
  },
})
