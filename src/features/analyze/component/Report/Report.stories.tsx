import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Report } from './Report'

const meta: ComponentMeta<typeof Report> = {
  title: 'analyze/Report',
  component: Report,
}

const Template: ComponentStory<typeof Report> = (args) => <Report {...args} />

export const Default = Template.bind({})

Default.args = {
  name: 'FCP',
  value: 0.8,
}

export default meta
