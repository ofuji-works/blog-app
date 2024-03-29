import { ChakraProvider } from '@chakra-ui/react'
import { StoryFn } from '@storybook/react'
import React from 'react'

import { theme } from '../src/theme'

export const parameters = {
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: '#FAFAFA',
      },
    ],
  },
}

const withChakra = (StoryFn: StoryFn) => {
  return (
    <ChakraProvider theme={theme}>
      <link href="https://fonts.googleapis.com/css2?family=Space+Mono&display=swap" rel="stylesheet" />
      <StoryFn />
    </ChakraProvider>
  )
}

export const decorators = [withChakra]
