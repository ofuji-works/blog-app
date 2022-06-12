import { ComponentMeta, ComponentStory } from '@storybook/react'

import { EmbeddedEntryInline } from './EmbeddedEntryInline'

const meta: ComponentMeta<typeof EmbeddedEntryInline> = {
  title: 'blogs/EmbeddedEntryInline',
  component: EmbeddedEntryInline,
}

const Template: ComponentStory<typeof EmbeddedEntryInline> = (args) => <EmbeddedEntryInline {...args} />

export const Default = Template.bind({})

Default.args = {}

export default meta
