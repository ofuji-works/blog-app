import type { FC, ReactNode } from 'react'

import { VStack } from './VStackContainer.styles'

type Props = {
  children: ReactNode
}

export const VStackContainer: FC<Props> = ({ children }) => <VStack>{children}</VStack>
