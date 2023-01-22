import type { ComponentStyleConfig } from '@chakra-ui/react'

const componentStyleConfig: ComponentStyleConfig = {
  baseStyle: {
    color: 'gray.700',
  },
  variants: {
    h2: {
      mb: { base: '5', sm: '7' },
    },
    h3: {
      mb: { base: '4', sm: '5' },
    },
    h4: {
      mb: { base: '3', sm: '5' },
    },
    h5: {
      fontWeight: 'semibold',
      mb: { base: '3', sm: '5' },
    },
  },
}

export default componentStyleConfig
