import { ComponentMeta, ComponentStory } from '@storybook/react'

import { EmbeddedEntryInline } from './EmbeddedEntryInline'

import { blogMock } from '@/mock/blog'

const meta: ComponentMeta<typeof EmbeddedEntryInline> = {
  title: 'features/blogs/EmbeddedEntryInline',
  component: EmbeddedEntryInline,
}

const Template: ComponentStory<typeof EmbeddedEntryInline> = (args) => <EmbeddedEntryInline {...args} />

export const Default = Template.bind({})

Default.args = {
  id: blogMock.sys.id,
  entries: new Array(1).fill(blogMock),
}

export default meta
