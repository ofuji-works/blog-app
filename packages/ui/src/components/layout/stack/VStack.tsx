import type { FC } from 'react'

import { VStack as ChakraVStack, StackProps } from '@chakra-ui/react'

export const VStack: FC<StackProps> = (props) => <ChakraVStack {...props} />
