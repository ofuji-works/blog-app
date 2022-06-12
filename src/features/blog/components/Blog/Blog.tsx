import { FC } from 'react'
import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer'

import { BlogArea, Bold, BlockQuote, Code, Hr, H1, H2, Italic, P, Pre, Ul, Underline, Ol } from './Blog.styles'

import type { Document } from '@contentful/rich-text-types'

type Props = {
  document: Document
}

const options: Options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
    [MARKS.ITALIC]: (text) => <Italic>{text}</Italic>,
    [MARKS.UNDERLINE]: (text) => <Underline>{text}</Underline>,
    [MARKS.CODE]: (text) => <Code>{text}</Code>,
  },
  renderNode: {
    [BLOCKS.HEADING_1]: (_, children) => <H1 as="h1">{children}</H1>,
    [BLOCKS.HEADING_2]: (_, children) => <H2 as="h2">{children}</H2>,
    [BLOCKS.PARAGRAPH]: (node, children) => {
      if (
        node.content.length === 1 &&
        (node.content[0] as { marks: { type: string }[] }).marks.find((x) => x.type === 'code')
      ) {
        return (
          <div>
            <Pre>{children}</Pre>
          </div>
        )
      }
      return <P>{children}</P>
    },
    [BLOCKS.UL_LIST]: (_, children) => <Ul>{children}</Ul>,
    [BLOCKS.OL_LIST]: (_, children) => <Ol>{children}</Ol>,
    [BLOCKS.QUOTE]: (_, children) => <BlockQuote>{children}</BlockQuote>,
    [BLOCKS.HR]: () => <Hr />,
    [BLOCKS.EMBEDDED_ENTRY]: (node, _) => {
      return <>{node.data.target.sys.id}</>
    },
    ['embedded-entry-inline']: (node, _) => {
      return <>{node.data.target.sys.id}</>
    },
    [BLOCKS.EMBEDDED_ASSET]: (node, _) => {
      return <>{node.data.target.sys.id}</>
    },
  },
}

export const Blog: FC<Props> = ({ document }) => {
  return <BlogArea>{documentToReactComponents(document, options)}</BlogArea>
}
