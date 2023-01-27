import React from 'react'
import NextImage from 'next/image'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '@packages/ui'

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
    <>
      <link href="https://fonts.googleapis.com/css2?family=Space+Mono&display=swap" rel="stylesheet" />
      <ChakraProvider theme={theme}>
        <div id="story-wrapper">
          <StoryFn />
        </div>
      </ChakraProvider>
    </>
  )
}

export const decorators = [withChakra]
