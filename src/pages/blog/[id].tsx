import { NextPage, GetStaticProps, GetStaticPaths } from 'next'

import { initializeApollo, addApolloState } from '@/libs'
import { GET_BLOG_QUERY, GET_BLOGS_QUERY, BlogQuery, BlogsQuery, BlogTitle, Blog } from 'features'
import { Container, Layout } from '@/components'

type Props = {
  data: BlogQuery
}

const Page: NextPage<Props> = ({ data }) => {
  return (
    <Layout title={data.blog.title}>
      <Container>
        <BlogTitle title={data.blog.title} date={data.blog.sys.publishedAt} />
        <Blog document={data.blog.body.json} links={data.blog.body.links} />
      </Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<Props, { id: string }> = async ({ params }) => {
  if (!params) {
    return {
      notFound: true,
    }
  }
  const client = initializeApollo()
  const { data } = await client.query<BlogQuery>({
    query: GET_BLOG_QUERY,
    variables: {
      id: params.id,
      preview: false,
    },
  })
  if (!data) {
    return {
      notFound: true,
    }
  }
  return addApolloState(client, {
    props: {
      data,
    },
  })
}

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  const client = initializeApollo()
  const { data } = await client.query<BlogsQuery>({
    query: GET_BLOGS_QUERY,
    variables: {
      preview: false,
    },
  })
  return {
    paths: data.blogCollection.items.map((item) => {
      return {
        params: {
          id: item.sys.id,
        },
      }
    }),
    fallback: false,
  }
}

export default Page
