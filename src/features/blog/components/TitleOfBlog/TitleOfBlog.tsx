import { FC } from 'react'
import NextImage from 'next/image'
import { chakra, Heading, VStack, Text } from '@chakra-ui/react'

import { getDayjs } from '@/libs'

type Props = {
  title: string
  date: string
  thumnail: {
    title: string
    url: string
  }
}

const dayjs = getDayjs()

export const TitleOfBlog: FC<Props> = ({ title, date, thumnail }) => {
  return (
    <VStack
      gap={{
        base: '3',
        sm: '4',
      }}
    >
      <Figure
        as="figure"
        width={{
          base: '50%',
          sm: '30%',
        }}
      >
        <Image
          src={thumnail.url}
          alt={thumnail.title}
          layout="fill"
          objectFit="contain"
          placeholder="blur"
          blurDataURL={`${thumnail.url}?q=1`}
        />
      </Figure>
      <Heading as="h1" size={{ base: 'sm', sm: 'lg' }} fontSize={{ base: 'sm', sm: 'lg' }} mt={0}>
        {title}
      </Heading>
      <Text fontSize={{ base: 'xs', sm: 'md' }}>
        <Date dateTime={date}>{dayjs(date).format('YYYY.MM.DD')}</Date> 公開
      </Text>
    </VStack>
  )
}

const Figure = chakra('figure', {
  baseStyle: {
    position: 'relative',
    width: {
      base: '80%',
      sm: '20%',
    },
    aspectRatio: '4 / 3',
    boxShadow: {
      base: '0 0.05rem 0.075rem rgba(0, 0, 0, 0.25)',
      sm: '0 0.15rem 0.075rem rgba(0, 0, 0, 0.25)',
    },
    borderRadius: 'base',
  },
})
const Image = chakra(NextImage, {
  baseStyle: {
    borderRadius: 'base',
  },
  shouldForwardProp: () => true,
})
const Date = chakra('time', {
  baseStyle: {
    color: 'gray.600',
  },
  shouldForwardProp: () => true,
})
