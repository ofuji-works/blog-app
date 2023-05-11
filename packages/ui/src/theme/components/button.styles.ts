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
      _hover: {
        _disabled: {
          background: 'black',
        },
      },
    },
  },
  defaultProps: {
    variant: 'primary',
    type: 'button',
  },
}

export default componentStyleConfig
