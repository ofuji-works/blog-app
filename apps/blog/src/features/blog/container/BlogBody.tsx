import Link from 'next/link'
import React from 'react'
import { useQuery } from '@apollo/client'
import { Box } from '@chakra-ui/react'

import { Body, GET_BLOG_QUERY, TitleBlock } from '@/features/blog'
import { Blog } from '@/graphql/graphql'

import { Breadcrumb } from '@packages/ui'

type Props = {
  id: string
}
export const BlogBody: React.FC<Props> = ({ id }) => {
  const [nodes, setNodes] = React.useState([])
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

  React.useEffect(() => {
    import('@packages/markdown-parser').then(({ md_string_to_token }) => {
      setNodes(md_string_to_token(data.blog.body ?? ''))
    })
  }, [data.blog.body])

  return (
    <Box
      minH="100vh"
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
      <Breadcrumb.Separator marginY="16px">
        <Breadcrumb.Item flexShrink={0}>
          <Breadcrumb.Link href="/blog" as={Link}>
            ブログ一覧
          </Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item isCurrentPage>
          <Breadcrumb.Link>{data.blog.title}</Breadcrumb.Link>
        </Breadcrumb.Item>
      </Breadcrumb.Separator>
      <Body nodes={nodes} />
    </Box>
  )
}
