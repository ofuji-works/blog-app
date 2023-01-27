import type { FC } from 'react'

import {
  ListItem as ChakraListItem,
  ListItemProps,
  ListProps,
  OrderedList as ChakraOrderedList,
  UnorderedList as ChakraUnorderedList,
} from '@chakra-ui/react'

export const OrderedList: FC<ListProps> = (props) => <ChakraOrderedList {...props} />
export const UnorderedList: FC<ListProps> = (props) => <ChakraUnorderedList {...props} />
export const ListItem: FC<ListItemProps> = (props) => <ChakraListItem {...props} />
