import { chakra, Flex, Heading, Image, Text } from '@chakra-ui/react'
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
    padding: 1,
    borderRadius: 'base',
    position: 'relative',
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
  },
})

export const DomainArea = chakra(Flex, {
  baseStyle: {
    alignItems: 'center',
    justifyContent: 'start',
    marginTop: 0.75,
  },
})

export const Favicon = chakra(Image, {
  baseStyle: {},
})

export const Domain = chakra(Text, {
  baseStyle: {
    fontSize: 'xs',
    color: 'black',
    marginLeft: 0.5,
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
