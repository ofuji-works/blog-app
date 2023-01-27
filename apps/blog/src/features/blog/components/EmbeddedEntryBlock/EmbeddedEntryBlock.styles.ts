import { Box, chakra, Heading, Text, Image as ChakraImage } from '@chakra-ui/react'
import { motion } from 'framer-motion'

export const framerVariant = {
  hover: {
    boxShadow: '0 0.25rem 0.25rem rgba(0, 0, 0, 0.25)',
  },
}

export const Card = chakra(motion.div, {
  baseStyle: {
    borderWidth: 1,
    borderColor: 'gray.150',
    marginTop: 1,
    marginBottom: 1,
    borderRadius: 'base',
    position: 'relative',
    display: 'flex',
    flexDirection: {
      base: 'column',
      sm: 'row',
    },
  },
})

export const Figure = chakra('figure', {
  baseStyle: {
    background: 'thumnail',
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
      base: 1,
      sm: 0.5,
    },
  },
})

export const Image = chakra(ChakraImage, {
  baseStyle: {
    width: '100%',
    aspectRatio: '4 / 3',
    boxShadow: {
      base: '0 0.05rem 0.075rem rgba(0, 0, 0, 0.25)',
      sm: '0 0.15rem 0.075rem rgba(0, 0, 0, 0.25)',
    },
    borderTopRadius: 'base',
    borderBottomRadius: 'base',
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

export const Title = chakra(Heading, {
  baseStyle: {
    fontSize: 'md',
    fontWeight: 700,
  },
})

export const Description = chakra(Text, {
  baseStyle: {
    fontSize: 'xs',
    color: 'gray.200',
    marginTop: 0.75,
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
  },
})

export const Domain = chakra(Text, {
  baseStyle: {
    fontSize: 'xs',
    color: 'black',
    marginTop: 0.75,
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
