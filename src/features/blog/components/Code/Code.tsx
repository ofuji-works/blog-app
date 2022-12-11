import type { FC } from 'react'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'

import { customStyle, customCodeStyle } from './Code.styles'

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  code: any
}

export const Code: FC<Props> = ({ code }) => {
  if (!code) return null
  const formattedCode = code.split('\n')
  const language = formattedCode.shift()
  const text = formattedCode.join('\n')
  return (
    <SyntaxHighlighter
      language={language}
      style={vscDarkPlus}
      customStyle={customStyle}
      codeTagProps={{
        style: customCodeStyle,
      }}
    >
      {text}
    </SyntaxHighlighter>
  )
}
