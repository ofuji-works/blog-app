import React, { FC } from 'react'

import { Container, Heading, Text, ListItem, OrderedList, UnorderedList } from '@packages/ui'
import { Box } from '@chakra-ui/react'

import { Code } from 'features/blog/components/Code'

const options = {
  heading1: (children: React.ReactNode) => {
    return () => {
      return <Heading variant="h1">{children}</Heading>
    }
  },
  heading2: (children: React.ReactNode) => {
    return () => {
      return <Heading variant="h2">{children}</Heading>
    }
  },
  heading3: (children: React.ReactNode) => {
    return () => {
      return <Heading variant="h3">{children}</Heading>
    }
  },
  heading4: (children: React.ReactNode) => {
    return () => {
      return <Heading variant="h4">{children}</Heading>
    }
  },
  heading5: (children: React.ReactNode) => {
    return () => {
      return <Heading variant="h5">{children}</Heading>
    }
  },
  code: (children: React.ReactNode) => {
    return () => {
      return <Code code={children === 'string' ? children : ''} />
    }
  },
  paragraph: (children: React.ReactNode) => {
    return () => <Text>{children}</Text>
  },
  ul: (children: React.ReactNode) => {
    return () => <UnorderedList>{children}</UnorderedList>
  },
  ol: (children: React.ReactNode) => {
    return () => <OrderedList>{children}</OrderedList>
  },
  li: (children: React.ReactNode) => {
    return () => <ListItem>{children}</ListItem>
  },
}

type Node = {
  nodeType: keyof typeof options
  contents?: Node[]
  text?: string
}

const renderNodes = (nodes: Node[]) => {
  return nodes.map((node) => {
    if (node.nodeType === 'ul' || node.nodeType === 'ol') {
      const listComponent = options[node.nodeType]
      if (!node.contents) return listComponent('')
      const children = node.contents.map((content, index) => {
        return options.li(content.text)
      })

      return listComponent(children.map((Child) => <Child />))
    }

    return options[node.nodeType](node.text)
  })
}

type Props = {
  nodes: Node[]
}
export const Body: FC<Props> = ({ nodes }) => {
  return (
    <Container>
      <Box
        width="100%"
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
        {renderNodes(nodes).map((Node) => (
          <Node />
        ))}
      </Box>
    </Container>
  )
}
