import React from 'react'
import { useQuery } from '@apollo/client'
import { VStack } from '@chakra-ui/react'

import { Body, GET_BLOG_QUERY, TitleBlock } from '@/features/blog'
import { Blog } from '@/graphql/graphql'

type Props = {
  id: string
}
export const BlogBody: React.FC<Props> = ({ id }) => {
  const { data, loading, error } = useQuery<{ blog: Blog }>(GET_BLOG_QUERY, {
    variables: {
      id,
    },
  })

  if (loading) {
    return <p>...loading</p>
  }

  if (!data || error) {
    throw new Error()
  }

  return (
    <VStack
      paddingBottom={{
        base: '8',
        sm: '12',
      }}
    >
      <TitleBlock
        title={data.blog.title ?? ''}
        date={data.blog.sys?.publishedAt}
        thumnail={{
          title: data.blog.thumnail?.title ?? '',
          url: data.blog.thumnail?.url ?? '',
        }}
      />
      <Body nodes={[]} />
    </VStack>
  )
}
