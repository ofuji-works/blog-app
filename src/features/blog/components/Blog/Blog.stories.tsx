import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Blog } from '.'

import { documentMock, articleTextLinksMock } from '@/mock/blog'

const meta: ComponentMeta<typeof Blog> = {
  title: 'features/Blogs/Blog',
  component: Blog,
}

const Template: ComponentStory<typeof Blog> = (args) => <Blog {...args} />

export const Default = Template.bind({})

Default.args = {
  document: documentMock,
  links: articleTextLinksMock,
}

export default meta
