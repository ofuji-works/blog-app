import type { ComponentStyleConfig } from '@chakra-ui/react'

const componentStyleConfig: ComponentStyleConfig = {
  baseStyle: {
    color: 'gray.700',
  },
  variants: {
    h1: {
      borderBottom: 'solid 1px',
      borderColor: 'gray.300',
      pb: { base: '0.5', sm: '1' },
      mb: { base: '8', sm: '12' },
      fontSize: 'xl' ,
    },
    h2: {
      mb: { base: '5', sm: '7' },
      fontSize: "lg"
    },
    h3: {
      mb: { base: '4', sm: '5' },
      fontSize: 'md' 
    },
    h4: {
      mb: { base: '3', sm: '5' },
      fontSize: 'sm' 
    },
    h5: {
      fontWeight: 'semibold',
      fontSize: 'sm' 
    },
  },
}

export default componentStyleConfig
