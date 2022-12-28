import { FC } from 'react'
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types'
import { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer'
import { Box, Divider, Heading, ListItem, OrderedList, Text, UnorderedList } from '@chakra-ui/react'

import { ArticleTextLinks } from '../../queries'
import { Code } from '../Code'

import type { Document } from '@contentful/rich-text-types'

type Props = {
  document: Document
  links: ArticleTextLinks
}

const options: Options = {
  renderMark: {
    // [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
    // [MARKS.ITALIC]: (text) => <Italic>{text}</Italic>,
    // [MARKS.UNDERLINE]: (text) => <Underline>{text}</Underline>,
    // [MARKS.CODE]: (text) => <Code code={text} />,
  },
  renderNode: {
    [BLOCKS.HEADING_1]: (_, children) => {
      return (
        <Box mb={{ base: '8', sm: '12' }}>
          <Heading as="h1" size={{ base: 'md', sm: 'lg' }}>
            {children}
          </Heading>
          <Divider color="gray.300" />
        </Box>
      )
    },
    [BLOCKS.HEADING_2]: (_, children) => (
      <Heading as="h2" variant="h2" size={{ base: 'md', sm: 'lg' }}>
        {children}
      </Heading>
    ),
    [BLOCKS.HEADING_3]: (_, children) => (
      <Heading as="h3" variant="h3" size={{ base: 'sm', sm: 'md' }}>
        {children}
      </Heading>
    ),
    [BLOCKS.HEADING_4]: (_, children) => (
      <Heading as="h4" variant="h4" size={{ base: 'xs', sm: 'sm' }}>
        {children}
      </Heading>
    ),
    [BLOCKS.HEADING_5]: (_, children) => (
      <Heading as="h5" variant="h5" size={{ base: 'xs', sm: 'sm' }}>
        {children}
      </Heading>
    ),
    [BLOCKS.PARAGRAPH]: (node, children) => {
      if (
        node.content.length > 0 &&
        (node.content[0] as { marks: { type: string }[] }).marks.find((x) => x.type === 'code')
      ) {
        return <div>{children}</div>
      }
      return <Text variant="p">{children}</Text>
    },
    [BLOCKS.UL_LIST]: (_, children) => <UnorderedList>{children}</UnorderedList>,
    [BLOCKS.OL_LIST]: (_, children) => <OrderedList>{children}</OrderedList>,
    [BLOCKS.LIST_ITEM]: (_, children) => <ListItem>{children}</ListItem>,
    // [BLOCKS.QUOTE]: (_, children) => <BlockQuote>{children}</BlockQuote>,
    // [BLOCKS.HR]: () => <Hr />,
    // /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
    // [BLOCKS.EMBEDDED_ASSET]: (node, _) => {
    //   return <EmbeddedAsset id={node.data.target.sys.id} assets={assets} />
    // },
    // /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
    // [BLOCKS.EMBEDDED_ENTRY]: (node, _) => {
    //   return <EmbeddedEntryBlock id={node.data.target.sys.id} entries={embeddedEntryBlock} />
    // },
    // /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
    // [INLINES.EMBEDDED_ENTRY]: (node, _) => {
    //   return <EmbeddedEntryInline id={node.data.target.sys.id} entries={embeddedEntryInline} />
    // },
  },
}

export const TextOfBlog: FC<Props> = ({ document, links }) => {
  const assets = links.assets.block
  const embeddedEntryBlock = links.entries.block
  const embeddedEntryInline = links.entries.inline

  return (
    <Box
      backgroundColor="white"
      paddingX={{
        base: '5',
        sm: '8',
      }}
      paddingY={{
        base: '16',
        sm: '12',
      }}
      borderRadius="base"
    >
      {documentToReactComponents(document, options)}
    </Box>
  )
}
