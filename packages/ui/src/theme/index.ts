import { extendTheme } from '@chakra-ui/react'

import global from './global.styles'
import colors from './foundations/colors.styles'
import breakpoints from './foundations/breakpoints.styles'
import borderRadius from './foundations/borderRadius.styles'
import spacing from './foundations/spacing.styles'
import typography from './foundations/typography.styles'
import Button from './components/button.styles'
import Heading from './components/heading.styles'
import Tag from './components/tag.styles'
import Text from './components/text.styles'

const overrides = {
  styles: {
    global,
  },
  colors,
  breakpoints,
  radii: borderRadius,
  spacing,
  ...typography,
  components: {
    Button,
    Heading,
    Tag,
    Text,
  },
}

export const theme = extendTheme(overrides)
