import { chakra, List, ListItem } from '@chakra-ui/react'
import NextLink from 'next/link'

export const Ul = chakra(List, {
  baseStyle: {
    display: 'flex',
    flexWrap: 'wrap',
  },
})

export const Li = chakra(ListItem, {
  baseStyle: {
    listStyle: 'none',
    whiteSpace: 'nowrap',
  },
})

export const Span = chakra('span', {
  baseStyle: {
    marginLeft: 0.5,
    marginRight: 0.5,
  },
})

export const Link = chakra(NextLink, {
  baseStyle: {
    cursor: 'pointer',
  },
})
