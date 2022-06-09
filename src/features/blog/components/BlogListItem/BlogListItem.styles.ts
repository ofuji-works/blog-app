import { chakra, Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'

export const framerVariant = {
  hover: {
    boxShadow: '0 0.25rem 0.25rem rgba(0, 0, 0, 0.25)',
  },
}

export const Card = chakra(motion.div, {
  baseStyle: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'gray.150',
    borderRadius: 'base',
    paddingX: {
      base: 0.75,
      sm: 2.5,
    },
    paddingY: {
      base: 0.75,
      sm: 1.25,
    },
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
  },
})

export const Title = chakra('h2', {
  baseStyle: {
    fontWeight: 'bold',
    fontSize: {
      base: 'md',
      sm: 'lg',
    },
    textAlign: 'left',
    marginBottom: 1,
    lineHeight: '1.25em',
  },
})

export const Body = chakra('p', {
  baseStyle: {
    fontSize: 'md',
    color: 'gray.200',
    margin: 0,
    marginBottom: 0.75,
    lineHeight: 1.25,
  },
})

export const Tags = chakra(Box, {
  baseStyle: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 0.25,
    marginBottom: 0.75,
  },
})

export const Datetime = chakra('time', {
  baseStyle: {
    fontSize: 'sm',
    color: 'gray.200',
    textAlign: 'right',
  },
})

export const Link = chakra('a', {
  baseStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    cursor: 'pointer',
  },
})
