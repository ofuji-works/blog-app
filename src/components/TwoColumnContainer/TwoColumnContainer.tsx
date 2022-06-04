import { FC } from 'react'

import { TwoColumnWrapper, LeftComponentWrapper, RightComponentWrapper } from './TwoColumnContainer.styles'

type Props = {
  LeftComponent: FC
  RightComponent: FC
}

export const TwoColumnContainer: FC<Props> = ({ LeftComponent, RightComponent }) => {
  return (
    <TwoColumnWrapper>
      <LeftComponentWrapper>
        <LeftComponent />
      </LeftComponentWrapper>
      <RightComponentWrapper>
        <RightComponent />
      </RightComponentWrapper>
    </TwoColumnWrapper>
  )
}
