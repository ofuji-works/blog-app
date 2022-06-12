import { ComponentMeta, ComponentStory } from '@storybook/react'

import { EmbeddedLink } from './EmbeddedLink'

const meta: ComponentMeta<typeof EmbeddedLink> = {
  title: 'blogs/EmbeddedLink',
  component: EmbeddedLink,
}

const Template: ComponentStory<typeof EmbeddedLink> = (args) => <EmbeddedLink {...args} />

export const Default = Template.bind({})

Default.args = {}

export default meta
