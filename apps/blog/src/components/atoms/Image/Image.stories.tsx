import { Image } from './Image'

import type { ComponentMeta, ComponentStoryObj } from '@storybook/react'

const meta: ComponentMeta<typeof Image> = {
  title: 'components/ui/Image',
  component: Image,
}

export default meta

type Story = ComponentStoryObj<typeof Image>

export const Default: Story = {
  name: 'image',
  args: {},
}
