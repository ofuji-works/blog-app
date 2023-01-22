import { ComponentMeta, ComponentStory } from '@storybook/react'

import { EmbeddedEntryBlock } from './EmbeddedEntryBlock'

import { blogMock } from '@/mock/blog'

const meta: ComponentMeta<typeof EmbeddedEntryBlock> = {
  title: 'features/blogs/EmbeddedEntryBlock',
  component: EmbeddedEntryBlock,
}

const Template: ComponentStory<typeof EmbeddedEntryBlock> = (args) => <EmbeddedEntryBlock {...args} />

export const Default = Template.bind({})

Default.args = {
  id: blogMock.sys.id,
  entries: new Array(1).fill(blogMock),
}

export default meta
