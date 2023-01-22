import type { ComponentProps, FC } from 'react'

import { VStack } from '@chakra-ui/react'

import { Body, TitleBlock } from '@/features/blog'

type Props = ComponentProps<typeof Body> & ComponentProps<typeof TitleBlock>

const Template: FC<Props> = ({ title, date, thumnail, ...rest }) => {
  return (
    <VStack
      paddingBottom={{
        base: '8',
        sm: '12',
      }}
    >
      <TitleBlock title={title} date={date} thumnail={thumnail} />
      <Body {...rest} />
    </VStack>
  )
}

export default Template
