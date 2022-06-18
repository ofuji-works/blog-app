import { chakra, Box, IconButton } from '@chakra-ui/react'

export const Stack = chakra(Box, {
  baseStyle: {
    marginTop: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 1,
  },
})

export const SNS = chakra(IconButton, {
  baseStyle: {
    width: '1.5rem',
    height: '1.5rem',
  },
})

export const ExternalLink = chakra('a', {
  baseStyle: {
    cursor: 'pointer',
  },
})
