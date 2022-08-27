import { ComponentMeta, ComponentStory } from '@storybook/react'

import { EmbeddedAsset } from './EmbeddedAsset'

import { articleTextAssetMock } from '@/mock/blog'

const meta: ComponentMeta<typeof EmbeddedAsset> = {
  title: 'blogs/EmbeddedAsset',
  component: EmbeddedAsset,
}

const Template: ComponentStory<typeof EmbeddedAsset> = (args) => <EmbeddedAsset {...args} />

export const Default = Template.bind({})

Default.args = {
  id: 'mock',
  assets: articleTextAssetMock,
}

export default meta
