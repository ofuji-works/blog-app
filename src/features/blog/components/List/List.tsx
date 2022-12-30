import type { FC } from 'react'

import Link from 'next/link'
import { HStack, Heading, Stack, VStack } from '@chakra-ui/react'
import { MdCode } from 'react-icons/md'

import { useBreakPoints } from '@/hooks'
import { Image, Tag } from '@/components'

type Props = {
  thumnail: {
    title: string
    url: string
  }
  title: string
  tags: {
    id: string
    name: string
  }[]
  href: string
}

export const List: FC<Props> = ({ thumnail, title, tags }) => {
  const { isSP } = useBreakPoints()
  return (
    <Stack
      maxW={{
        sm: '900px',
      }}
      direction={{
        base: 'column',
        sm: 'row',
      }}
      flexWrap={{
        base: 'unset',
        sm: 'wrap',
      }}
    >
      <VStack width={{ base: '100%', sm: 'calc(100% / 3)' }}>
        <Stack
          width="100%"
          direction={{
            base: 'row',
            sm: 'column',
          }}
        >
          <Image
            style={{
              aspectRatio: '4 / 3',
            }}
            width={{
              base: '25%',
              sm: '100%',
            }}
            src={thumnail.url}
            alt={thumnail.title}
            blurDataURL={`${thumnail.url}?q=1`}
          />
          <Link as="a" href="/">
            <Heading size="xs">{title}</Heading>
          </Link>
        </Stack>
        <HStack width="100%" justify="flex-start" flexWrap="wrap">
          {tags.map((tag) => (
            <Tag key={tag.id} variant="forBlog" LeftIcon={MdCode} size="sm">
              {tag.name}
            </Tag>
          ))}
        </HStack>
      </VStack>
    </Stack>
  )
}
