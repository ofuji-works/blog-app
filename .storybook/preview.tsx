import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../src/assets/index.styles'

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
