import { chakra, Box, List, Image as ChakraImage } from '@chakra-ui/react'
import { motion } from 'framer-motion'

export const framerVariant = {
  hover: {
    boxShadow: '0 0.25rem 0.25rem rgba(0, 0, 0, 0.25)',
  },
}

export const Card = chakra(motion.li, {
  baseStyle: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'gray.150',
    borderRadius: 'base',
    position: 'relative',
    display: 'flex',
    flexDirection: {
      base: 'column',
      sm: 'row',
    },
    alignItems: 'left',
  },
})

export const ContentContainer = chakra(Box, {
  baseStyle: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    paddingX: {
      base: 0.75,
      sm: 1.25,
    },
    paddingY: {
      base: 0.75,
      sm: 1.25,
    },
  },
})

export const Figure = chakra('figure', {
  baseStyle: {
    background: 'radial-gradient(#DDDDDD, #ffffff)',
    borderRadius: 'base',
    minWidth: '20%',
    width: {
      base: '100%',
      sm: '20%',
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: {
      base: 'unset',
      sm: 0.5,
    },
  },
})

export const Image = chakra(ChakraImage, {
  baseStyle: {
    width: '100%',
    aspectRatio: '4 / 3',
    boxShadow: {
      base: 'unset',
      sm: '0 0.15rem 0.075rem rgba(0, 0, 0, 0.25)',
    },
    borderTopRadius: 'base',
    borderBottomRadius: {
      base: 'unset',
      sm: 'base',
    },
  },
})

export const Title = chakra('h2', {
  baseStyle: {
    fontWeight: 600,
    fontSize: 'md',
    textAlign: 'left',
    marginBottom: 1,
    lineHeight: '1.25em',
  },
})

export const Body = chakra('p', {
  baseStyle: {
    display: {
      base: 'none',
      sm: '-webkit-box',
    },
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    fontSize: 'md',
    color: 'gray.200',
    margin: 0,
    marginBottom: 0.75,
    lineHeight: 1.25,
  },
})

export const Tags = chakra(List, {
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
