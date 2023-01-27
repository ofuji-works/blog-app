import type { FC } from 'react'

import { Heading as ChakraHeading, HeadingProps } from '@chakra-ui/react'

export const Heading: FC<HeadingProps> = (props) => <ChakraHeading {...props} />
