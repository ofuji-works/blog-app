import React from 'react'
import { Heading as ChakraHeading } from '@chakra-ui/react'

export const HEADING_VARIANTS = {
  H1: 'h1',
  H2: 'h2',
  H3: 'h3',
  H4: 'h4',
  H5: 'h5',
} as const

type HeadingVariant = (typeof HEADING_VARIANTS)[keyof typeof HEADING_VARIANTS]
type Props = {
  variant: HeadingVariant
  children: React.ReactNode
}

export const Heading: React.FC<Props> = ({ children, variant }) => {
  return (
    <ChakraHeading as={variant} variant={variant}>
      {children}
    </ChakraHeading>
  )
}
