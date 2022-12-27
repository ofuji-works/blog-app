import type { FC } from 'react'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { Text } from '@chakra-ui/react'

import { useBreakPoints } from '@/hooks'

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  code: any
}

const customBaseStyle = {
  backgroundColor: '#1A202C',
  borderRadius: '0.375rem',
  padding: '0.75rem',
  marginBottom: '1rem',
}
const customStyleForPC = {
  padding: '1.25rem',
}

export const Code: FC<Props> = ({ code }) => {
  const { isSP } = useBreakPoints()
  if (!code) return null
  const formattedCode = code.split('\n')
  const language = formattedCode.shift()
  const text = formattedCode.join('\n')
  return (
    <SyntaxHighlighter
      language={language}
      style={vscDarkPlus}
      customStyle={isSP ? customBaseStyle : { ...customBaseStyle, ...customStyleForPC }}
      codeTagProps={{
        style: {},
      }}
      lineNumberStyle={{
        display: 'none',
      }}
      CodeTag={({ style, children }) => {
        return (
          <Text style={style} fontFamily="code" fontSize={{ base: 'sm', sm: 'md' }}>
            {children}
          </Text>
        )
      }}
    >
      {text}
    </SyntaxHighlighter>
  )
}
