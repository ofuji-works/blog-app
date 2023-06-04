import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { Breadcrumb } from '.'

const meta: ComponentMeta<typeof Breadcrumb.Separator> = {
  title: 'disclosure/breadcrumb',
  render({ separator }) {
    return (
      <Breadcrumb.Separator separator={separator}>
        <Breadcrumb.Item>
          <Breadcrumb.Link>Home</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Breadcrumb.Link>Blog</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item isCurrentPage>
          <Breadcrumb.Link>技術記事タイトル</Breadcrumb.Link>
        </Breadcrumb.Item>
      </Breadcrumb.Separator>
    )
  },
}

export default meta

type Story = ComponentStoryObj<typeof Breadcrumb.Separator>

export const Default: Story = {}
