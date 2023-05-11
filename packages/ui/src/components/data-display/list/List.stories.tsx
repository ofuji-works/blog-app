import { Meta, StoryObj } from '@storybook/react'

import { ListItem } from './ListItem'
import { OrderedList } from './OrderedList'
import { UnorderedList } from './UnorderedList'

const meta: Meta = {
  title: 'data-display/List',
}
export default meta

type Story = StoryObj

export const ol: Story = {
  render: () => {
    return (
      <OrderedList>
        <ListItem>リスト1</ListItem>
        <ListItem>リスト2</ListItem>
        <ListItem>リスト3</ListItem>
      </OrderedList>
    )
  },
}

export const ul: Story = {
  render: () => {
    return (
      <UnorderedList>
        <ListItem>リスト1</ListItem>
        <ListItem>リスト2</ListItem>
        <ListItem>リスト3</ListItem>
      </UnorderedList>
    )
  },
}
