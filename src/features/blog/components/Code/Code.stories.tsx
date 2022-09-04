import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Code } from './Code'

const meta: ComponentMeta<typeof Code> = {
  title: 'features/Blogs/Code',
  component: Code,
}

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />

export const Default = Template.bind({})

Default.args = {}

export default meta
