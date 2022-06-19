import { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import { useQuery } from '@apollo/client'

import { initializeApollo, addApolloState } from '@/libs'
import { GET_BLOG_QUERY, GET_BLOGS_QUERY, BlogQuery, BlogsQuery, BlogTitleBlock, Blog } from 'features'
import { Breadcrumb, Container, Layout } from '@/components'

type Props = {
  id: string
}

const Page: NextPage<Props> = ({ id }) => {
  const { data, loading, error } = useQuery<BlogQuery>(GET_BLOG_QUERY, {
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

  const og = {
    imgUrl: data.blog.thumnail.url,
    imgWidth: 800,
    imgHeight: 600,
  }

  return (
    <Layout title={data.blog.title} og={og} mainMargin="-4.5rem 0 0 0">
      <BlogTitleBlock title={data.blog.title} date={data.blog.sys.publishedAt} thumnail={data.blog.thumnail} />
      <Container>
        <Breadcrumb />
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
  await client.query({
    query: GET_BLOG_QUERY,
    variables: {
      id: params.id,
      preview: false,
    },
  })
  return addApolloState(client, {
    props: {
      id: params.id,
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
