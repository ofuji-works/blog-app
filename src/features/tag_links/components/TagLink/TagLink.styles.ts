import { chakra, Icon as ChakraIcon } from '@chakra-ui/react'
import { motion } from 'framer-motion'

export const framerVariant = {
  hover: {
    boxShadow: '0 0.25rem 0.25rem rgba(0, 0, 0, 0.25)',
  },
  tap: {
    scale: 0.95,
    ease: 'in-out',
  },
}

export const Button = chakra(motion.button, {
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
