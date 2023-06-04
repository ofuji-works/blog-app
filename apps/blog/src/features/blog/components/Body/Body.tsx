import React, { FC } from 'react'

import { Heading, Text, ListItem, OrderedList, UnorderedList } from '@packages/ui'
import { Box } from '@chakra-ui/react'

import { Code } from 'features/blog/components/Code'

const options = {
  Heading1: (children: React.ReactNode) => {
    return () => {
      return <Heading variant="h1">{children}</Heading>
    }
  },
  Heading2: (children: React.ReactNode) => {
    return () => {
      return <Heading variant="h2">{children}</Heading>
    }
  },
  Heading3: (children: React.ReactNode) => {
    return () => {
      return <Heading variant="h3">{children}</Heading>
    }
  },
  Heading4: (children: React.ReactNode) => {
    return () => {
      return <Heading variant="h4">{children}</Heading>
    }
  },
  Heading5: (children: React.ReactNode) => {
    return () => {
      return <Heading variant="h5">{children}</Heading>
    }
  },
  Code: (children: React.ReactNode) => {
    return () => {
      return <Code code={typeof children === 'string' ? children : ''} />
    }
  },
  Text: (children: React.ReactNode) => {
    return () => <Text>{children}</Text>
  },
  UnorderList: (children: React.ReactNode) => {
    return () => <UnorderedList>{children}</UnorderedList>
  },
  ol: (children: React.ReactNode) => {
    return () => <OrderedList>{children}</OrderedList>
  },
  List: (children: React.ReactNode) => {
    return () => <ListItem>{children}</ListItem>
  },
}

type Token = {
  contents?: Token[]
  elm_type: keyof typeof options
  id: number
  text?: string
}

const renderNodes = (tokens: Token[]) => {
  return tokens.map((token) => {
    if (token.elm_type === 'UnorderList') {
      const listComponent = options[token.elm_type]
      if (!token.contents) return listComponent('')
      const children = token.contents?.map((content) => {
        return options.List(content.text)
      })

      return listComponent(children.map((Child) => <Child />))
    }

    return options[token.elm_type](token.text)
  })
}

type Props = {
  nodes: Token[]
}
export const Body: FC<Props> = ({ nodes }) => {
  return (
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
      {renderNodes(nodes).map((Node, index) => (
        <Node key={index.toString()} />
      ))}
    </Box>
  )
}
