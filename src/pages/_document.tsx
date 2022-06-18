import { ColorModeScript } from '@chakra-ui/react'
import { Head, Html, Main, NextScript } from 'next/document'

import { theme } from '@/assets/index.styles'

const Document = () => (
  <Html lang="en">
    <Head></Head>
    <body>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Main />
      <NextScript />
    </body>
  </Html>
)

export default Document
