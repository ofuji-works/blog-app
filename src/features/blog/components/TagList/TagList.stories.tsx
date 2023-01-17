import { TagList } from './TagList'

import type { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { tagsMock } from '@/mock/tag'

const meta: ComponentMeta<typeof TagList> = {
  title: 'features/blog/TagList',
  component: TagList,
}

export default meta

type Story = ComponentStoryObj<typeof TagList>

export const Default: Story = {
  name: 'tag list',
  args: {
    items: tagsMock,
  },
}
