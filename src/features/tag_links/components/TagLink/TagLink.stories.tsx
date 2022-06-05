import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { TagLink } from './TagLink'

const meta: ComponentMeta<typeof TagLink> = {
  title: 'TagLinks/TagLink',
  component: TagLink,
}

const Template: ComponentStory<typeof TagLink> = (args) => <TagLink {...args} />

export const Default = Template.bind({})

Default.args = {
  label: 'React',
}

export default meta
