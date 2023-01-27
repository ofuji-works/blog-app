import type { FC } from 'react'

import { Wrap as ChakraWrap, WrapProps, WrapItem as ChakraWrapItem, WrapItemProps } from '@chakra-ui/react'

export const Wrap: FC<WrapProps> = (props) => <ChakraWrap {...props} />
export const WrapItem: FC<WrapItemProps> = (props) => <ChakraWrapItem {...props} />
