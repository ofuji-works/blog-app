import { chakra, Heading, VStack } from '@chakra-ui/react'

export const Stack = chakra(VStack, {
  baseStyle: {
    gap: 1.5,
  },
})

export const Title = chakra(Heading, {
  baseStyle: {
    fontSize: '2xl',
    fontWeight: 700,
    color: 'black',
  },
})

export const Date = chakra('time', {
  baseStyle: {
    fontSize: 'md',
  },
})
