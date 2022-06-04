import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SearchTagLinks } from './SearchTagLinks'

const meta: ComponentMeta<typeof SearchTagLinks> = {
  title: 'TagLinks/SearchTagLinks',
  component: SearchTagLinks,
}

const Template: ComponentStory<typeof SearchTagLinks> = (args) => <SearchTagLinks {...args} />

export const Default = Template.bind({})

const categories: string[] = ['ALL', 'React', 'TypeScript', 'ReactNative', 'WebGL', 'Angular']
const tags: string[] = ['React', 'TypeScript', 'ReactNative', 'WebGL', 'Angular']

Default.args = {
  categories,
  tags,
}

export default meta
