import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { Box, Text } from '@chakra-ui/react'

import { Container } from './Container'

const meta: ComponentMeta<typeof Container> = {
  title: 'layout/Container',
  component: Container,
  render: () => {
    return (
      <Container>
        <Box width="100%" backgroundColor="white" height="16" padding="16" borderRadius={4}>
          <Text fontWeight={700}>max-width: 900px</Text>
        </Box>
      </Container>
    )
  },
}

export default meta

type Story = ComponentStoryObj<typeof Container>

export const Base: Story = {}
