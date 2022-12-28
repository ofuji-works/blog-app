import { extendTheme } from '@chakra-ui/react'

import global from './global.styles'
import colors from './foundations/colors.styles'
import breakpoints from './foundations/breakpoints.styles'
import borderRadius from './foundations/borderRadius.styles'
import spacing from './foundations/spacing.styles'
import typography from './foundations/typography.styles'
import Button from './components/button.styles'
import Text from './components/text.styles'

const overrides = {
  global,
  colors,
  breakpoints,
  radii: borderRadius,
  spacing,
  ...typography,
  components: {
    Button,
    Text,
  },
}

const theme = extendTheme(overrides)

export default theme
