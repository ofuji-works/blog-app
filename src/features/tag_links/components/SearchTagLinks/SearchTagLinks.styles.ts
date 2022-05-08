import { chakra, Container, Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'

export const framerVariant = {
  hover: {
    scale: 1.1,
  },
  tap: {
    scale: 0.95,
  },
}

export const Bg = chakra(Container, {
  baseStyle: {
    bgColor: 'gray.50',
    minWidth: '100%',
    minHeight: '60vh',
    paddingX: 0,
    paddingY: 2,
  },
})

export const FilterBox = chakra(Box, {
  baseStyle: {
    display: 'flex',
    maxWidth: '100%',
    paddingX: 1.5,
    alignItems: {
      default: 'center',
      sm: 'start',
      md: 'start',
    },
    justifyContent: {
      default: 'center',
      sm: 'start',
      md: 'start',
    },
    gap: 1.5,
    overflowX: 'scroll',
  },
})

export const FilterButton = chakra(motion.button, {
  baseStyle: {
    bgColor: 'gray.50',
    borderRadius: 'base',
    paddingX: 0.75,
    paddingY: 0.5,
  },
})

export const TagBox = chakra(Box, {
  baseStyle: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 1,
    scrollbarWidth: 'none',
  },
})
