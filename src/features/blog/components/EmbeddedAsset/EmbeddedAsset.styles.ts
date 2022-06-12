import { chakra, Box, Image as ChakraImage } from '@chakra-ui/react'

export const Card = chakra(Box, {
  baseStyle: {
    marginTop: 1,
    marginBottom: 1,
    padding: 1,
    borderRadius: 'base',
    position: 'relative',
    boxShadow: '0 0.1rem 0.1rem rgba(0, 0, 0, 0.25)',
  },
})

export const Image = chakra(ChakraImage, {
  baseStyle: {
    width: '100%',
    height: 'auto',
  },
})
