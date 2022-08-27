import React from 'react'
import NextImage from 'next/image'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../src/assets/index.styles'

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <img {...props} />,
})

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
