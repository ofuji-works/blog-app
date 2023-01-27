import type { FC } from 'react'

import { Container as ChakraContainer, ContainerProps } from '@chakra-ui/react'

export const Container: FC<ContainerProps> = (props) => <ChakraContainer {...props} />
