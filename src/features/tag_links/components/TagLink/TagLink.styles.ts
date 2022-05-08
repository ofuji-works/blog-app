import { chakra, Icon as ChakraIcon } from '@chakra-ui/react'
import { motion } from 'framer-motion'

export const framerVariant = {
  hover: {
    boxShadow: '0 0.25rem 0.25rem rgba(0, 0, 0, 0.25)',
  },
  tap: {
    scale: 0.95,
  },
}

export const Button = chakra(motion.button, {
  baseStyle: {
    bgColor: 'black',
    margin: 0,
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
    bgColor: 'white',
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
