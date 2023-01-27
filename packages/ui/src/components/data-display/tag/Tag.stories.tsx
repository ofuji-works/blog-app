import { MdCode } from 'react-icons/md'

import { Tag } from './Tag'

import type { ComponentMeta, ComponentStoryObj } from '@storybook/react'
const meta: ComponentMeta<typeof Tag> = {
  title: 'Tag',
  component: Tag,
}

export default meta

type Story = ComponentStoryObj<typeof Tag>

export const WithIcon: Story = {
  name: 'with left Icon',
  args: {
    variant: 'forBlog',
    children: 'tag with left icon',
    LeftIcon: MdCode,
  },
}
