import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SearchTagLinks } from './SearchTagLinks'

import { tagsQueryMock } from '@/mock/tag'

const meta: ComponentMeta<typeof SearchTagLinks> = {
  title: 'features/tag_links/SearchTagLinks',
  component: SearchTagLinks,
}

const Template: ComponentStory<typeof SearchTagLinks> = (args) => <SearchTagLinks {...args} />

export const Default = Template.bind({})

const categories: string[] = ['ALL', 'React', 'TypeScript', 'ReactNative', 'WebGL', 'Angular']

const clickHandlerMock = (tagId: string) => {
  alert(`clicked tag:${tagId}`)
}

Default.args = {
  categories,
  tags: tagsQueryMock,
  loading: false,
  onClick: clickHandlerMock,
}

export default meta
