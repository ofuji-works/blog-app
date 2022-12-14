import type { ComponentStyleConfig } from '@chakra-ui/react'

const componentStyleConfig: ComponentStyleConfig = {
  baseStyle: {
    margin: 0,
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
