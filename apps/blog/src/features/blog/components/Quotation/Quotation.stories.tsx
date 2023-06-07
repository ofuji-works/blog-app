import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { Quotation } from '.'

const meta: ComponentMeta<typeof Quotation> = {
  title: 'features/blog/Quotation',
  component: Quotation,
}

export default meta

type Story = ComponentStoryObj<typeof Quotation>

export const Default: Story = {
  args: {
    children: 'ここに引用文章が入ります\nここに引用文章が入ります',
  },
}
