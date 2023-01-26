import React from 'react'
import { UIProvider } from '../src'

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
      <UIProvider>
        <div id="story-wrapper">
          <StoryFn />
        </div>
      </UIProvider>
    </>
  )
}

export const decorators = [withChakra]
