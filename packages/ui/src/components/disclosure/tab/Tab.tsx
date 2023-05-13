import React from 'react'
import {
  Tab as ChakraTab,
  Tabs as ChakraTabs,
  TabList as ChakraTabList,
  TabPanel as ChakraTabPanel,
  TabPanels as ChakraTabPanels,
} from '@chakra-ui/react'

type Props = {
  children: React.ReactNode
}
export const Tabs: React.FC<Props> = (props) => <ChakraTabs variant="unstyled" {...props} />

export const TabList: React.FC<Props> = (props) => <ChakraTabList justifyContent="center" gap="8px" {...props} />

export const Tab: React.FC<Props> = (props) => (
  <ChakraTab
    borderRadius="full"
    fontWeight="semibold"
    fontSize={{
      base: 'sm',
      sm: 'md',
    }}
    paddingY={1}
    _selected={{
      bg: 'black',
      color: 'white',
    }}
    {...props}
  />
)

export const TabPanel: React.FC<Props> = (props) => <ChakraTabPanel {...props} />

export const TabPanels: React.FC<Props> = (props) => <ChakraTabPanels {...props} />
