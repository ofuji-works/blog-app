import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { userEvent, screen } from '@storybook/testing-library'
import { expect, jest } from '@storybook/jest'

import { TagLink } from './TagLink'

const meta: ComponentMeta<typeof TagLink> = {
  title: 'features/tag_links/TagLink',
  component: TagLink,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    onClick: {
      action: 'clicked',
    },
  },
}
const Template: ComponentStory<typeof TagLink> = (args) => <TagLink {...args} />

/**
 * @summary デフォルト
 */
export const Default = Template.bind({})
Default.args = {
  name: 'React',
  id: 'react',
}

/**
 * @summary Clickインタラクション
 */
export const Clicked = Template.bind({})
const clickHandlerMock = jest.fn((tagId: string) => {
  console.log(`clicked tag:${tagId}`)
})
Clicked.args = {
  name: 'React',
  id: 'react',
  onClick: clickHandlerMock,
}

Clicked.play = async () => {
  const tagLink = screen.getByRole('button')
  await userEvent.click(tagLink)
  await expect(clickHandlerMock.call.length).toBe(1)
}

export default meta
