import { ComponentMeta, ComponentStory } from '@storybook/react'

import { EmbeddedLink } from './EmbeddedLink'

import { articleTextAssetMock } from '@/mock/blog'

const meta: ComponentMeta<typeof EmbeddedLink> = {
  title: 'features/blogs/EmbeddedLink',
  component: EmbeddedLink,
}

const Template: ComponentStory<typeof EmbeddedLink> = (args) => <EmbeddedLink {...args} />

export const Default = Template.bind({})

Default.args = {
  id: 'mock',
  assets: articleTextAssetMock,
}

export default meta
