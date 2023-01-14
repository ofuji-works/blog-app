import type { ComponentProps, FC } from 'react'

import { Container, VStack } from '@chakra-ui/react'

import { Body, TitleBlock } from '@/features/blog'

type Props = ComponentProps<typeof Body> & ComponentProps<typeof TitleBlock>

const Template: FC<Props> = ({ title, date, thumnail, ...rest }) => {
  return (
    <Container>
      <VStack>
        <TitleBlock title={title} date={date} thumnail={thumnail} />
        <Body {...rest} />
      </VStack>
    </Container>
  )
}

export default Template
