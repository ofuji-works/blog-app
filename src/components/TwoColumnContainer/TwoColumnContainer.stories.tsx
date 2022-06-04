import { ComponentMeta, ComponentStory } from '@storybook/react'

import { TwoColumnContainer } from './TwoColumnContainer'

const meta: ComponentMeta<typeof TwoColumnContainer> = {
  title: 'component/TwoColumnContainer',
  component: TwoColumnContainer,
}

const Template: ComponentStory<typeof TwoColumnContainer> = (args) => <TwoColumnContainer {...args} />

export const Default = Template.bind({})

Default.args = {}

export default meta
