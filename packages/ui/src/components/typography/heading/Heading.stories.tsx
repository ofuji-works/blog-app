import { ComponentProps } from 'react'
import { Meta, StoryObj } from '@storybook/react'

import { Heading, HEADING_VARIANTS } from './Heading'

const meta: Meta<ComponentProps<typeof Heading>> = {
  title: 'typography/Heading',
  component: Heading,
  render: (args) => {
    return <Heading {...args}>ここにタイトルが入ります</Heading>
  },
}
export default meta

type Story = StoryObj<ComponentProps<typeof Heading>>

export const H1: Story = {
  args: {
    variant: HEADING_VARIANTS.H1,
  },
}

export const H2: Story = {
  args: {
    variant: HEADING_VARIANTS.H2,
  },
}

export const H3: Story = {
  args: {
    variant: HEADING_VARIANTS.H3,
  },
}

export const H4: Story = {
  args: {
    variant: HEADING_VARIANTS.H4,
  },
}

export const H5: Story = {
  args: {
    variant: HEADING_VARIANTS.H5,
  },
}
