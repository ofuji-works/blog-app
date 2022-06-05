import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Tag } from './Tag'

const meta: ComponentMeta<typeof Tag> = {
  title: 'Components/Tag',
  component: Tag,
}

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />

export const Default = Template.bind({})

Default.args = {
  label: 'React',
}

export default meta
