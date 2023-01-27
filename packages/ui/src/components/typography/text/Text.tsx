import type { FC, ComponentProps } from 'react'

import { Text as ChakraText } from '@chakra-ui/react'

export const Text: FC<ComponentProps<typeof ChakraText>> = (props) => <ChakraText {...props} />
