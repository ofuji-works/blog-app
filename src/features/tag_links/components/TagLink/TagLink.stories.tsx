import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { TagLink } from './TagLink'

const meta: ComponentMeta<typeof TagLink> = {
  title: 'TagLink',
  component: TagLink,
}

const Template: ComponentStory<typeof TagLink> = (args) => <TagLink {...args} />

export const Primary = Template.bind({})

Primary.args = {
  label: 'React',
}

export default meta
