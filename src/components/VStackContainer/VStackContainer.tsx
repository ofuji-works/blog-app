import type { FC, ReactNode } from 'react'

import { VStack } from './VStackContainer.styles'

import type { StackProps } from '@chakra-ui/react'

type Props = {
  children: ReactNode
} & StackProps

export const VStackContainer: FC<Props> = ({ children, ...rest }) => <VStack {...rest}>{children}</VStack>
