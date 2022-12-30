import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Body } from '.'

import { documentMock, articleTextLinksMock } from '@/mock/blog'

const meta: ComponentMeta<typeof Body> = {
  title: 'features/blog/Body',
  component: Body,
}

const Template: ComponentStory<typeof Body> = (args) => <Body {...args} />

export const Default = Template.bind({})

Default.args = {
  document: documentMock,
  links: articleTextLinksMock,
}

export default meta
