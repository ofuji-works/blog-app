import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { MdCode } from 'react-icons/md'

import { Button } from './Button'

const meta: ComponentMeta<typeof Button> = {
  title: 'form/Button',
  component: Button,
}

export const Primary: ComponentStoryObj<typeof Button> = {
  name: 'primary button',
  args: {
    children: 'primary',
  },
}

export const PrimaryWithLeftIcon: ComponentStoryObj<typeof Button> = {
  name: 'primary button with left icon',
  args: {
    children: 'primary',
    leftIcon: <MdCode />,
  },
}

export const Loading: ComponentStoryObj<typeof Button> = {
  name: 'state is loading',
  args: {
    children: 'loading',
    isLoading: true,
  },
}

export default meta
