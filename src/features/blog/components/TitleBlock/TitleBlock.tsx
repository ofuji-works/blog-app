import { FC } from 'react'
import { chakra, Heading, VStack, Text } from '@chakra-ui/react'

import { getDayjs } from '@/libs'
import { Image } from '@/components'

type Props = {
  title: string
  date: string
  thumnail: {
    title: string
    url: string
  }
}

const dayjs = getDayjs()

export const TitleBlock: FC<Props> = ({ title, date, thumnail }) => {
  return (
    <VStack
      width="100%"
      paddingTop={{
        base: '8',
        sm: '12',
      }}
      paddingBottom={{
        base: '8',
        sm: '6',
      }}
      paddingX={{
        base: '6',
        sm: '8',
      }}
      gap={{
        base: '3',
        sm: '4',
      }}
    >
      <Image
        style={{
          aspectRatio: '4 / 3',
        }}
        width={{
          base: '50%',
          sm: '30%',
        }}
        boxShadow={{
          base: '0 0.05rem 0.075rem rgba(0, 0, 0, 0.25)',
          sm: '0 0.15rem 0.075rem rgba(0, 0, 0, 0.25)',
        }}
        src={thumnail.url}
        alt={thumnail.title}
        blurDataURL={`${thumnail.url}?q=1`}
      />
      <Heading as="h1" size={{ base: 'sm', sm: 'lg' }} fontSize={{ base: 'sm', sm: 'lg' }} mt={0}>
        {title}
      </Heading>
      <Text fontSize={{ base: 'xs', sm: 'md' }}>
        <Date dateTime={date}>{dayjs(date).format('YYYY.MM.DD')}</Date> 公開
      </Text>
    </VStack>
  )
}

const Date = chakra('time', {
  baseStyle: {
    color: 'gray.600',
  },
  shouldForwardProp: () => true,
})
