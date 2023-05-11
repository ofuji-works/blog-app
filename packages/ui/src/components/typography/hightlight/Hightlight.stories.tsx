import { ComponentProps } from 'react'
import { Meta, StoryObj } from '@storybook/react'

import { Highlight } from './Highlight'

const meta: Meta<ComponentProps<typeof Highlight>> = {
  title: 'typography/Highlight',
  component: Highlight,
  render: (args) => {
    return <Highlight {...args}>ここにテキストが入ります</Highlight>
  },
}
export default meta

type Story = StoryObj<ComponentProps<typeof Highlight>>

export const Default: Story = {
  args: {
    query: ['テキスト'],
  },
}
