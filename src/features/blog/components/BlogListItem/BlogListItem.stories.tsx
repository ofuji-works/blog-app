import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { BlogListItem } from '.'

import { blogListItemMock } from '@/mock/blog'

const meta: ComponentMeta<typeof BlogListItem> = {
  title: 'Blogs/BlogListItem',
  component: BlogListItem,
}

const Template: ComponentStory<typeof BlogListItem> = (args) => <BlogListItem {...args} />

export const Default = Template.bind({})

Default.args = blogListItemMock

export default meta
