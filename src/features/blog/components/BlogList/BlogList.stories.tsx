import { ComponentMeta, ComponentStory } from '@storybook/react'

import { BlogList } from './index'

const meta: ComponentMeta<typeof BlogList> = {
  title: 'blogs/BlogList',
  component: BlogList,
}

const Template: ComponentStory<typeof BlogList> = (args) => <BlogList {...args} />

export const Default = Template.bind({})

Default.args = {}

export default meta
