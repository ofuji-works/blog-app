import type { FC } from 'react'

import { HStack as ChakraHStack, StackProps } from '@chakra-ui/react'

export const HStack: FC<StackProps> = (props) => <ChakraHStack {...props} />
