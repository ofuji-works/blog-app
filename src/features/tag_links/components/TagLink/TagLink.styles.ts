import { chakra, Icon as ChakraIcon } from '@chakra-ui/react'

export const Button = chakra('button', {
  baseStyle: {
    bg: 'black',
    padding: {
      base: 0.75,
      sm: 0.75,
      md: 1,
    },
    borderRadius: 'base',
    display: 'flex',
    alignItems: 'center',
  },
})

export const IconBg = chakra('div', {
  baseStyle: {
    bg: 'white',
    width: '1.5rem',
    height: '1.5rem',
    borderRadius: 'half',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export const Icon = chakra(ChakraIcon, {
  baseStyle: {
    color: 'black',
  },
})

export const Span = chakra('span', {
  baseStyle: {
    marginLeft: 0.5,
    color: 'white',
    fontSize: 'md',
  },
})
