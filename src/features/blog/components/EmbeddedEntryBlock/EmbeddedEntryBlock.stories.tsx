import { ComponentMeta, ComponentStory } from '@storybook/react'

import { EmbeddedEntryBlock } from './EmbeddedEntryBlock'

const meta: ComponentMeta<typeof EmbeddedEntryBlock> = {
  title: 'blogs/EmbeddedEntryBlock',
  component: EmbeddedEntryBlock,
}

const Template: ComponentStory<typeof EmbeddedEntryBlock> = (args) => <EmbeddedEntryBlock {...args} />

export const Default = Template.bind({})

Default.args = {}

export default meta
