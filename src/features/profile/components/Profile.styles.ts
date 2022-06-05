import { Avatar as ChakraAvatar, chakra, Box, Heading, Text, IconButton } from '@chakra-ui/react'

export const Card = chakra(Box, {
  baseStyle: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'gray.150',
    borderRadius: 'base',
    padding: {
      base: 1,
      sm: 2.5,
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export const Avatar = chakra(ChakraAvatar, {
  baseStyle: {
    marginBottom: 1,
  },
})

export const Name = chakra(Heading, {
  baseStyle: {
    marginBottom: 0.5,
    fontSize: 'xl',
    lineHeight: '1rem',
  },
})

export const Role = chakra(Text, {
  baseStyle: {
    marginBottom: 1,
    color: 'gray.200',
  },
})

export const Description = chakra(Text, {
  baseStyle: {
    textAlign: 'center',
  },
})

export const SNSArea = chakra(Box, {
  baseStyle: {
    marginTop: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 0.5,
  },
})

export const SNS = chakra(IconButton, {
  baseStyle: {
    width: '1.5rem',
    height: '1.5rem',
  },
})
