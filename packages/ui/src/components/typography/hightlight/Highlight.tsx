import type { FC } from 'react'

import { Highlight as ChakraHighlight, HighlightProps } from '@chakra-ui/react'

export const Highlight: FC<HighlightProps> = (props) => <ChakraHighlight {...props} />
