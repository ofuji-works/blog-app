import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { BlogTitleBlock } from './BlogTitleBlock'

import { blogMock } from '@/mock/blog'

const meta: ComponentMeta<typeof BlogTitleBlock> = {
  title: 'features/Blogs/BlogTitleBlock',
  component: BlogTitleBlock,
}

const Template: ComponentStory<typeof BlogTitleBlock> = (args) => <BlogTitleBlock {...args} />

export const Default = Template.bind({})

Default.args = {
  thumnail: blogMock.thumnail,
  title: blogMock.title,
  date: blogMock.sys.publishedAt,
}

export default meta
