import { ComponentStoryObj, ComponentMeta } from '@storybook/react'

import { Tab } from './Tab'

const TabTemplate = () => {
  return (
    <Tab.Provider>
      <Tab.Lists>
        <Tab.List>タブ1</Tab.List>
        <Tab.List>タブ2</Tab.List>
        <Tab.List>タブ3</Tab.List>
      </Tab.Lists>
      <Tab.Indicator height="2px" bg="blue.500" />
      <Tab.Panels>
        <Tab.Panel></Tab.Panel>
      </Tab.Panels>
    </Tab.Provider>
  )
}

const meta: ComponentMeta<typeof TabTemplate> = {
  title: 'disclosure/Tab',
  component: TabTemplate,
}

export const Primary: ComponentStoryObj<typeof TabTemplate> = {
  name: 'Tab',
}

export default meta
