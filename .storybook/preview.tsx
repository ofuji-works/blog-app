import React from 'react'
import NextImage from 'next/image'
import { ChakraProvider, Container } from '@chakra-ui/react'
import theme from '../src/theme'

import { Parameters } from '@storybook/react'

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <img {...props} />,
})

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

const withChakra = (StoryFn: Function) => {
  return (
    <ChakraProvider theme={theme}>
      <div id="story-wrapper">
        <StoryFn />
      </div>
    </ChakraProvider>
  )
}

export const decorators = [withChakra]
