import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Header } from './Header'

const meta: ComponentMeta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
}

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />

export const Default = Template.bind({})

Default.args = {}

export default meta
