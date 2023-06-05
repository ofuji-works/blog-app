import type { FC } from 'react'

import Link from 'next/link'
import { Box, Heading, Stack, VStack, Wrap, WrapItem } from '@chakra-ui/react'
import { MdCode } from 'react-icons/md'

import { Image } from '@/components'
import { Tag } from '@packages/ui'

type Props = {
  items: {
    thumnail: {
      title?: string
      url?: string
    }
    title?: string
    tags?: {
      id: string
      name: string
    }[]
    href: string
  }[]
}

export const List: FC<Props> = ({ items }) => {
  return (
    <Wrap
      maxW={{
        sm: '900px',
      }}
      justifyContent="space-between"
      spacing={{
        base: '4',
        sm: '6',
      }}
    >
      {items.map(({ thumnail, title, tags, href }) => (
        <WrapItem key={title} width={{ base: '100%', sm: 'calc(100% / 3 - 24px)' }}>
          <VStack alignItems="flex-start" width="100%">
            <Stack
              width="100%"
              direction={{
                base: 'row',
                sm: 'column',
              }}
            >
              <Image
                boxShadow={{
                  base: '0 0.05rem 0.075rem rgba(0, 0, 0, 0.25)',
                  sm: '0 0.15rem 0.075rem rgba(0, 0, 0, 0.25)',
                }}
                style={{
                  aspectRatio: '4 / 3',
                }}
                minWidth={{
                  base: '40%',
                  sm: '100%',
                }}
                src={thumnail.url ?? ''}
                alt={thumnail.title}
                blurDataURL={`${thumnail.url}?q=1`}
              />
              <Link href={href}>
                <Heading size="sm">{title}</Heading>
              </Link>
            </Stack>
            <Wrap justify="flex-start" spacing="1">
              {tags &&
                tags.map((tag) => (
                  <WrapItem key={tag.id}>
                    <Tag.TagProvider variant="forBlog">
                      <Box bg="white" borderRadius="full" mr="2">
                        <MdCode color="black" />
                      </Box>
                      <Tag.TagLabel>{tag.name}</Tag.TagLabel>
                    </Tag.TagProvider>
                  </WrapItem>
                ))}
            </Wrap>
          </VStack>
        </WrapItem>
      ))}
    </Wrap>
  )
}
