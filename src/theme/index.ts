import { extendTheme } from '@chakra-ui/react'

import styles from './styles'
import colors from './foundations/colors.styles'
import breakpoints from './foundations/breakpoints.styles'
import borderRadius from './foundations/borderRadius.styles'
import spacing from './foundations/spacing.styles'
import typography from './foundations/typography.styles'
import Button from './components/button.styles'

const overrides = {
  styles,
  colors,
  breakpoints,
  radii: borderRadius,
  spacing,
  ...typography,
  components: {
    Button,
  },
}

const theme = extendTheme(overrides)

export default theme
