import { Box, chakra, Text } from '@chakra-ui/react'

export const Card = chakra(Box, {
  baseStyle: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 1.25,
    borderWidth: 1,
    borderColor: 'gray.150',
    borderRadius: 'base',
  },
})

export const LabelBox = chakra(Box, {
  baseStyle: {},
})

export const Label = chakra(Text, {
  baseStyle: {
    fontSize: {
      base: 'md',
      sm: 'xl',
    },
    fontWeight: 700,
    marginBottom: {
      base: 0.75,
      sm: 1,
    },
  },
})

export const SignText = chakra(Box, {
  baseStyle: {
    fontSize: {
      base: 'xs',
      sm: 'md',
    },
  },
})

export const RangeBox = chakra(Box, {
  baseStyle: {
    display: 'flex',
    flexDirection: 'column',
    gap: {
      base: 0,
      sm: 0.5,
    },
  },
})

export const Range = chakra(Text, {
  baseStyle: {
    fontSize: {
      base: 'xs',
      sm: 'md',
    },
    fontWeight: 700,
  },
})

export const ValueBox = chakra(Box, {
  baseStyle: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
})

export const Value = chakra(Text, {
  baseStyle: {
    fontSize: '4xl',
    fontWeight: 700,
  },
})

export const Sign = chakra(Text, {
  baseStyle: {
    fontSize: '2xl',
    fontWeight: 700,
    marginBottom: -0.5,
  },
})
