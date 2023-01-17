import { TitleBlock } from './TitleBlock'

import type { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { blogMock } from '@/mock/blog'

const meta: ComponentMeta<typeof TitleBlock> = {
  title: 'features/blog/TitleBlock',
  component: TitleBlock,
}
export default meta

type Story = ComponentStoryObj<typeof TitleBlock>
export const Default: Story = {
  name: '',
  args: {
    thumnail: blogMock.thumnail,
    title: blogMock.title,
    date: blogMock.sys.publishedAt,
  },
}
