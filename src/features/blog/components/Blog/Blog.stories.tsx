import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Blog } from './Blog'

const meta: ComponentMeta<typeof Blog> = {
  title: 'blogs/Blog',
  component: Blog,
}

const Template: ComponentStory<typeof Blog> = (args) => <Blog {...args} />

export const Default = Template.bind({})

Default.args = {}

export default meta
