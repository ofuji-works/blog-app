import type { FC } from 'react'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'

import { customStyle } from './Code.styles'

type Props = {
  code: any
}

export const Code: FC<Props> = ({ code }) => {
  return (
    <SyntaxHighlighter language="typescript" style={vscDarkPlus} customStyle={customStyle}>
      {code}
    </SyntaxHighlighter>
  )
}
