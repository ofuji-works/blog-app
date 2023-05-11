import { ComponentProps } from 'react'
import { Meta, StoryObj } from '@storybook/react'

import { Text } from './Text'

const meta: Meta<ComponentProps<typeof Text>> = {
  title: 'typography/Text',
  component: Text,
  render: (args) => {
    return <Text {...args}>ここにテキストが入ります</Text>
  },
}
export default meta

type Story = StoryObj<ComponentProps<typeof Text>>

export const Default: Story = {
  args: {},
}
