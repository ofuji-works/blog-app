import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { TagLink } from './TagLink'

const meta: ComponentMeta<typeof TagLink> = {
  title: 'TagLinks/TagLink',
  component: TagLink,
}

const Template: ComponentStory<typeof TagLink> = (args) => <TagLink {...args} />

export const Default = Template.bind({})

const clickHandlerMock = (tagId: string) => {
  alert(`clicked tag:${tagId}`)
}

Default.args = {
  name: 'React',
  id: 'react',
  onClick: clickHandlerMock,
}

export default meta
