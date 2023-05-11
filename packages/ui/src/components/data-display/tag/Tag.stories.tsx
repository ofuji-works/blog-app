import { Meta, StoryObj } from '@storybook/react'
import { MdCode } from 'react-icons/md'

import { Tag } from './Tag'

const meta: Meta = {
  title: 'data-display/Tag',
  render: (args) => {
    return (
      <Tag.TagProvider variant="forBlog" {...args}>
        <Tag.TagLabel>Icon</Tag.TagLabel>
      </Tag.TagProvider>
    )
  },
}

export default meta

type Story = StoryObj

export const WithLeftIcon: Story = {
  name: 'with left Icon',
  render: (args) => {
    return (
      <Tag.TagProvider variant="forBlog" {...args}>
        <Tag.LeftIcon as={MdCode} />
        <Tag.TagLabel>with left Icon</Tag.TagLabel>
      </Tag.TagProvider>
    )
  },
}

export const WithRightIcon: Story = {
  name: 'with right Icon',
  render: (args) => {
    return (
      <Tag.TagProvider variant="forBlog" {...args}>
        <Tag.TagLabel>with right Icon</Tag.TagLabel>
        <Tag.RightIcon as={MdCode} />
      </Tag.TagProvider>
    )
  },
}
