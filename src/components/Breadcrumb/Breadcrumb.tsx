import { FC } from 'react'
import { useRouter } from 'next/router'

import { Ul, Li, Link, Span } from './Breadcrumb.styles'

type Props = {
  currentPageTitle?: string
}

const mapToPageTitle = (path: string) => {
  switch (path) {
    case '':
      return 'Home'
    case 'blog':
      return 'ブログ一覧'
    default:
      return null
  }
}

export const Breadcrumb: FC<Props> = ({ currentPageTitle }) => {
  const { pathname } = useRouter()
  const pagePaths = pathname.split('/')
  return (
    <Ul>
      {pagePaths.map((path, index) => {
        if (pagePaths.length === index + 1 && currentPageTitle) {
          return (
            <Li key={path}>
              <Span>/</Span>
              {currentPageTitle}
            </Li>
          )
        }
        return (
          <Li key={path}>
            <Link href={`/${path}`} passHref>
              <a href={`/${path}`}>
                {index != 0 && <Span>/</Span>}
                {mapToPageTitle(path)}
              </a>
            </Link>
          </Li>
        )
      })}
    </Ul>
  )
}
