import { ComponentProps } from 'react'
import { Meta, StoryObj } from '@storybook/react'

import { Divider } from './Divider'

const meta: Meta<ComponentProps<typeof Divider>> = {
  title: 'data-display/Divider',
  component: Divider,
  decorators: [
    (Story) => {
      return <Story />
    },
  ],
}
export default meta

type Story = StoryObj<ComponentProps<typeof Divider>>

export const Default: Story = {
  args: {},
}
