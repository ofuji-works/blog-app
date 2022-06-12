import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { BlogTitle } from './BlogTitle'

const meta: ComponentMeta<typeof BlogTitle> = {
  title: 'Blogs/BlogTitle',
  component: BlogTitle,
}

const Template: ComponentStory<typeof BlogTitle> = (args) => <BlogTitle {...args} />

export const Default = Template.bind({})

Default.args = {}

export default meta
