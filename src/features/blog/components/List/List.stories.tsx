import { List } from './List'

import type { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { blogListItemMock } from '@/mock/blog'

const meta: ComponentMeta<typeof List> = {
  title: 'features/blog/List',
  component: List,
}

export default meta

type Story = ComponentStoryObj<typeof List>

export const Default: Story = {
  name: 'blog list',
  args: blogListItemMock,
}
