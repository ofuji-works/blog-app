import { chakra, List, ListItem } from '@chakra-ui/react'

export const Ul = chakra(List, {
  baseStyle: {
    display: 'flex',
  },
})

export const Li = chakra(ListItem, {
  baseStyle: {
    listStyle: 'none',
  },
})

export const Span = chakra('span', {
  baseStyle: {
    marginLeft: 0.5,
    marginRight: 0.5,
  },
})
