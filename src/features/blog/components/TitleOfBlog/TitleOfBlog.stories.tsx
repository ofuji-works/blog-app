import { TitleOfBlog } from './TitleOfBlog'

import type { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { blogMock } from '@/mock/blog'

const meta: ComponentMeta<typeof TitleOfBlog> = {
  title: 'features/blogs/TitleOfBlog',
  component: TitleOfBlog,
}
export default meta

type Story = ComponentStoryObj<typeof TitleOfBlog>
export const Default: Story = {
  name: '',
  args: {
    thumnail: blogMock.thumnail,
    title: blogMock.title,
    date: blogMock.sys.publishedAt,
  },
}
