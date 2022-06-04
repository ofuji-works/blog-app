import { chakra, Box } from '@chakra-ui/react'

export const TwoColumnWrapper = chakra(Box, {
  baseStyle: {
    margin: '0 auto',
    display: {
      default: 'block',
      sm: 'flex',
    },
    gap: {
      default: 'unset',
      sm: 2.5,
    },
  },
})

export const LeftComponentWrapper = chakra(Box, {
  baseStyle: {
    width: {
      default: '100%',
      sm: '790px',
    },
  },
})

export const RightComponentWrapper = chakra(Box, {
  baseStyle: {
    width: {
      default: '100%',
      sm: '360px',
    },
  },
})
