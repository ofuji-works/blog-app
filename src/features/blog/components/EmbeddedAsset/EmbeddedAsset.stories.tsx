import { ComponentMeta, ComponentStory } from '@storybook/react'

import { EmbeddedAsset } from './EmbeddedAsset'

const meta: ComponentMeta<typeof EmbeddedAsset> = {
  title: 'blogs/EmbeddedAsset',
  component: EmbeddedAsset,
}

const Template: ComponentStory<typeof EmbeddedAsset> = (args) => <EmbeddedAsset {...args} />

export const Default = Template.bind({})

Default.args = {}

export default meta
