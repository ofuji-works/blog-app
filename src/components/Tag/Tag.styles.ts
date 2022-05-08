import { chakra, Icon as ChakraIcon } from '@chakra-ui/react'

export const Bg = chakra('div', {
  baseStyle: {
    width: 'fit-content',
    bgColor: 'black',
    margin: 0,
    paddingX: 0.5,
    paddingY: 0.375,
    borderRadius: 'base',
    display: 'flex',
    alignItems: 'center',
  },
})

export const IconBg = chakra('div', {
  baseStyle: {
    bgColor: 'white',
    width: '0.75rem',
    height: '0.75rem',
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
    fontSize: 'xs',
  },
})
