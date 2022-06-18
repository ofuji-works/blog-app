import { chakra, Heading, VStack, Image as ChakraImage } from '@chakra-ui/react'

export const Stack = chakra(VStack, {
  baseStyle: {
    background: 'thumnail',
    padding: {
      base: 1,
      sm: 2,
    },
    paddingTop: {
      base: 5.5,
      sm: 6.5,
    },
    gap: 1,
    width: '100%',
  },
})

export const Figure = chakra('figure', {
  baseStyle: {
    width: {
      base: '80%',
      sm: '20%',
    },
    aspectRatio: '4 / 3',
  },
})

export const Image = chakra(ChakraImage, {
  baseStyle: {
    width: '100%',
    height: '100%',
    boxShadow: {
      base: '0 0.05rem 0.075rem rgba(0, 0, 0, 0.25)',
      sm: '0 0.15rem 0.075rem rgba(0, 0, 0, 0.25)',
    },
    borderRadius: 'base',
  },
})

export const Title = chakra(Heading, {
  baseStyle: {
    fontSize: 'xl',
    fontWeight: 700,
    color: 'black',
  },
})

export const Date = chakra('time', {
  baseStyle: {
    fontSize: 'md',
  },
})
