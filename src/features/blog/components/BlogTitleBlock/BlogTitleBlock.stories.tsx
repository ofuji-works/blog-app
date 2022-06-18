import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { BlogTitleBlock } from './BlogTitleBlock'

const meta: ComponentMeta<typeof BlogTitleBlock> = {
  title: 'Blogs/BlogTitleBlock',
  component: BlogTitleBlock,
}

const Template: ComponentStory<typeof BlogTitleBlock> = (args) => <BlogTitleBlock {...args} />

export const Default = Template.bind({})

Default.args = {}

export default meta
