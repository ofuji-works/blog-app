import type { ComponentStyleConfig } from '@chakra-ui/react'

const componentStyleConfig: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: 'base',
    WebkitTapHighlightColor: 'transparent',
  },
  variants: {
    primary: {
      bgColor: 'black',
      color: 'white',
    },
  },
  defaultProps: {
    variant: 'primary',
    type: 'button',
  },
}

export default componentStyleConfig
