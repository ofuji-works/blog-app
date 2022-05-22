import { Pager } from './Pager'

import type { ComponentStory, ComponentMeta } from '@storybook/react'

const meta: ComponentMeta<typeof Pager> = {
  title: 'Components/Pager',
  component: Pager,
}

const Template: ComponentStory<typeof Pager> = ({ ...args }) => <Pager {...args} />

export const Empty = Template.bind({})

Empty.args = {
  items: [],
  component: () => <></>,
}

export const SampleLists = Template.bind({})
const List = ({ index }: { index: number }) => <p>{`・${index}-list`}</p>
SampleLists.args = {
  items: [...Array(99)].map((_, index) => {
    return {
      index: index + 1,
    }
  }),
  component: (_) => {
    return <List index={_.index} />
  },
}

export default meta
