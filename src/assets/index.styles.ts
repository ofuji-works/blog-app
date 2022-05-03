import { extendTheme } from '@chakra-ui/react'

import { global } from './globals.styles'
import { colors, typography, breakpoints, spacing, borderRadius } from './theme.styles'

export const theme = extendTheme({ ...global, ...colors, ...typography, ...breakpoints, ...spacing, ...borderRadius })
