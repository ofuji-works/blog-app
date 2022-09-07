import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { userEvent, screen } from '@storybook/testing-library'
import { expect, jest } from '@storybook/jest'

import { SearchTagLinks } from './SearchTagLinks'

import { tagsQueryMock, tagsMock } from '@/mock/tag'

const meta: ComponentMeta<typeof SearchTagLinks> = {
  title: 'features/tag_links/SearchTagLinks',
  component: SearchTagLinks,
  argTypes: {
    onClick: {
      action: 'clicked',
    },
  },
}
const Template: ComponentStory<typeof SearchTagLinks> = (args) => <SearchTagLinks {...args} />
const categories: string[] = ['ALL', 'React', 'TypeScript', 'ReactNative', 'WebGL', 'Angular']

/**
 * @summary Default
 */
export const Default = Template.bind({})
Default.args = {
  categories,
  tags: tagsQueryMock,
  loading: false,
}

/**
 * @summary タグのクリック
 */
export const ClickedTag = Template.bind({})
const clickHandlerMock = jest.fn((tagId: string) => {
  console.log(`clicked tag:${tagId}`)
})
ClickedTag.args = {
  categories,
  tags: tagsQueryMock,
  loading: false,
  onClick: clickHandlerMock,
}
ClickedTag.play = async () => {
  const target = screen.getByRole('button', { name: tagsMock[0].name })
  await userEvent.click(target)
  await expect(clickHandlerMock.call.length).toBe(1)
}

/**
 * @summary カテゴリーの選択
 */

export default meta
