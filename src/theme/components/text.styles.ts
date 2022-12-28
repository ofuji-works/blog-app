import type { ComponentStyleConfig } from '@chakra-ui/react'

const componentStyleConfig: ComponentStyleConfig = {
  baseStyle: {
    color: 'gray.600',
  },
  variants: {
    p: {
      fontSize: { base: 'sm', sm: 'md' },
      lineHeight: { base: '7', sm: '8' },
      letterSpacing: { base: 'wider', sm: 'widest' },
      mb: { base: '3', sm: '5' },
    },
  },
}

export default componentStyleConfig
