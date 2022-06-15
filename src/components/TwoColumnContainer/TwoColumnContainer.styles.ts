import { chakra, Box } from '@chakra-ui/react'

export const TwoColumnWrapper = chakra(Box, {
  baseStyle: {
    display: 'flex',
    flexDirection: {
      base: 'column',
      sm: 'row',
    },
    justifyContent: 'center',
    gap: {
      base: 4,
      sm: 2.5,
    },
  },
})

export const LeftComponentWrapper = chakra(Box, {
  baseStyle: {
    width: {
      base: '100%',
      sm: 'calc(100% - 360px)',
    },
  },
})

export const RightComponentWrapper = chakra(Box, {
  baseStyle: {
    width: {
      base: '100%',
      sm: '360px',
    },
  },
})
