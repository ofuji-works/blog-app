import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { Breadcrumb } from '.'

const meta: ComponentMeta<typeof Breadcrumb.Separator> = {
  title: 'disclosure/breadcrumb',
  render({ separator }) {
    return (
      <Breadcrumb.Separator separator={separator}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Blog</Breadcrumb.Item>
        <Breadcrumb.Item isCurrentPage>技術記事タイトル</Breadcrumb.Item>
      </Breadcrumb.Separator>
    )
  },
}

export default meta

type Story = ComponentStoryObj<typeof Breadcrumb.Separator>

export const Default: Story = {}
