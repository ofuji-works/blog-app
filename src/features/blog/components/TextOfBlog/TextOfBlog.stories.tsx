import { ComponentMeta, ComponentStory } from '@storybook/react'

import { TextOfBlog } from '.'

import { documentMock, articleTextLinksMock } from '@/mock/blog'

const meta: ComponentMeta<typeof TextOfBlog> = {
  title: 'features/blogs/TextOfBlog',
  component: TextOfBlog,
}

const Template: ComponentStory<typeof TextOfBlog> = (args) => <TextOfBlog {...args} />

export const Default = Template.bind({})

Default.args = {
  document: documentMock,
  links: articleTextLinksMock,
}

export default meta
