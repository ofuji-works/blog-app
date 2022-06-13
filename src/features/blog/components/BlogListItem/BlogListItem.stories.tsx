import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { BlogListItem } from './BlogListItem'

const meta: ComponentMeta<typeof BlogListItem> = {
  title: 'Blogs/Blog',
  component: BlogListItem,
}

const Template: ComponentStory<typeof BlogListItem> = (args) => <BlogListItem {...args} />

export const Default = Template.bind({})

Default.args = {}

export default meta
