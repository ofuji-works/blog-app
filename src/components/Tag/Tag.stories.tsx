import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Tag } from './Tag'

const meta: ComponentMeta<typeof Tag> = {
  title: 'Tag',
  component: Tag,
}

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />

export const Primary = Template.bind({})

Primary.args = {
  label: 'React',
}

export default meta
