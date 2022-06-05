import { FC, ReactNode } from 'react'

import { ContainerComponent } from './Container.styles'

type Props = {
  children: ReactNode
}

export const Container: FC<Props> = ({ children }) => {
  return <ContainerComponent>{children}</ContainerComponent>
}
