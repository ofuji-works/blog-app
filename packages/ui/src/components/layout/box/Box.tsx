import type { FC } from 'react'

import { Box as ChakraBox, BoxProps } from '@chakra-ui/react'

export const Box: FC<BoxProps> = (props) => <ChakraBox {...props} />
