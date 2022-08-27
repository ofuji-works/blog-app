import { ComponentMeta, ComponentStory } from '@storybook/react'

import { BlogList } from '.'

import { blogListItem } from '@/mock/blog'

const meta: ComponentMeta<typeof BlogList> = {
  title: 'Blogs/BlogList',
  component: BlogList,
}

const Template: ComponentStory<typeof BlogList> = (args) => <BlogList {...args} />

export const Default = Template.bind({})

Default.args = {
  items: [blogListItem],
  loading: false,
}

export default meta
