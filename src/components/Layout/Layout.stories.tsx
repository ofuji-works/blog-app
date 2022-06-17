import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Layout } from './Layout'

const meta: ComponentMeta<typeof Layout> = {
  title: 'Components/Layout',
  component: Layout,
}

const Template: ComponentStory<typeof Layout> = (args) => <Layout {...args} />

export const Default = Template.bind({})

Default.args = {}

export default meta
