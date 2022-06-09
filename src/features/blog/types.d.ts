declare namespace Blog {
  interface BlogsQuery {
    blogCollection: {
      items: {
        sys: {
          id: string
        }
        title: string
        body: {
          json: Document
        }
      }[]
    }
  }

  interface BlogQuery {
    blog: {
      title: string
      body: {
        json: Document
      }
    }
  }

  interface BlogListItem {
    title: string
    body: unknown
    tags?: string[]
    datetime: string
    href: string
  }
}
